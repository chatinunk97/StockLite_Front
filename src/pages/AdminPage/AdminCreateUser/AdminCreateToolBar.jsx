import SubmitButton from "../../../components/SubmitButton";
import { useAdminContext } from "../../../hooks/admin-hook";
import AdminCreateToolBarList from "./AdminCreateToolBarList";
import { useAuthContext } from "../../../hooks/auth-hook";
import axios from "axios";
import date from "date-and-time";
import { AlertNotiSuc } from "../../../utils/sweetAlert";

export default function ToolBar() {
  // const { toolBarList, setToolBar } = useAdminContext();
  const { createUserInput, setCreateUserInput, setSearchUserResult } =
    useAdminContext();
  const { LoginUser } = useAuthContext();
  const handleCreateUser = async () => {
    try {
      const inputWithCompanyID = {
        ...createUserInput,
        companyId: LoginUser.companyId,
      };
      const result = await axios.post("manage/user", inputWithCompanyID);
      console.log(result)
      const newUser = result.data.createUserresult;
      newUser.createdAt = date.transform(
        newUser.createdAt.split("T")[0],
        "YYYY-MM-DD",
        "DD MMM YYYY"
      );

      setSearchUserResult((prev) => [newUser, ...prev]);
      setCreateUserInput({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        repeat_password: "",
        email: "",
        companyId: "",
        userRole: "employee",
      });
      AlertNotiSuc("success", "New User Created!", "User Created successfully");
    } catch (error) {
      AlertNotiSuc(
        "error",
        "Something Went wrong",
        `${error.response.data.message}`
      );
    }
  };
  return (
    <div className=" bg-smoothgray flex flex-col relative  rounded-md">
      <div className="flex justify-center items-center gap-20">
        {/* Filter Box */}
      </div>
      <AdminCreateToolBarList
        data={createUserInput}
        setData={setCreateUserInput}
      ></AdminCreateToolBarList>
      <div className=" text-center">
        <SubmitButton width="w-full" onClick={handleCreateUser}>
          Create User
        </SubmitButton>
      </div>
    </div>
  );
}
