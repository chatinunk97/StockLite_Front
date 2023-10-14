import AdminSearchDisplayBox from "../AdminSearchUser/AdminSearchDisplayBox";
import ToolBar from "../../../components/ToolBar";
import { useAdminContext } from "../../../hooks/admin-hook";
import InputBar from "../../../components/InputBar";
import { useEffect } from "react";
import OptionComponent from "../../../components/OptionComponent";
import SubmitButton from "../../../components/SubmitButton";
import { AlertNotiSuc } from "../../../utils/sweetAlert";
export default function AdminEditUser() {
  const {
    selectedRow,
    editUserInput,
    setEditUserInput,
    searchUserResult,
    deleteUserFunction,
    editUserFunction
  } = useAdminContext();
  const editUserBar = [
    { id: 1, data: "userId", filterName: "User ID", isDisabled: true },
    { id: 2, data: "firstName", filterName: "First name", isDisabled: false },
    { id: 3, data: "lastName", filterName: "Last name", isDisabled: false },
    { id: 4, data: "username", filterName: "Username", isDisabled: true },
    { id: 5, data: "userRole", filterName: "User Role", isDisabled: false },
  ];
  const handleInputChange = (event, field) => {
    setEditUserInput({ ...editUserInput, [field]: event.target.value });
  };
  useEffect(() => {
    const selectedUserIndex = searchUserResult.findIndex(
      (el) => el.userId === selectedRow
    );
    if (selectedUserIndex !== -1) {
      const selectedUser = searchUserResult[selectedUserIndex];
      setEditUserInput(selectedUser);
    }
  }, [selectedRow]);
  return (
    <div className=" bg-smoothgray flex flex-col relative pt-5 lg:p-2 rounded-md">
      <ToolBar
        onSubmit={() => (editUserFunction(editUserInput))}
        buttonText="Save Change"
        content={editUserBar.map((el) => {
          return (
            <div className="flex" key={el.id}>
              <div className="font-semibold w-72 flex justify-center items-center bg-white rounded-md">
                {el.filterName}
              </div>
              {el.data === "userRole" ? (
                <OptionComponent
                  isDisabled={editUserInput[el.data] === "admin" ? true : false}
                  value={editUserInput[el.data]}
                  onChange={(event) => {
                    handleInputChange(event, el.data);
                  }}
                  option={[
                    { id: 1, option: "employee" },
                    { id: 2, option: "supervisor" },
                    { id: 3, option: "admin" },
                  ]}
                />
              ) : (
                <InputBar
                  isDisabled={el.isDisabled}
                  value={editUserInput[el.data]}
                  onChange={(e) => {
                    handleInputChange(e, el.data);
                  }}
                />
              )}
            </div>
          );
        })}
      />
      {selectedRow && editUserInput?.userRole !== "admin" && (
        <SubmitButton
          onClick={() => {
            deleteUserFunction(editUserInput.userId);
          }}
          color="bg-waterredHover"
          hover="hover:bg-waterred"
        >
          Delete User
        </SubmitButton>
      )}
      <AdminSearchDisplayBox />
    </div>
  );
}
