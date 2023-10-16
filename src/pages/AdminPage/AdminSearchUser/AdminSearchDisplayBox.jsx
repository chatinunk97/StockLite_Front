import { useAdminContext } from "../../../hooks/admin-hook";
import DisplayTable from "../../../components/DisplayTable";

export default function AdminSearchDisplayBox() {
  const { searchUserResult, setSelectedRow } = useAdminContext();
  const adGridColumnFormat = [
    { field: "userId", headerName: "ID" , width : 100},
    { field: "username", headerName: "Username" },
    { field: "createdAt", headerName: "Created Date" },
    { field: "firstName", headerName: "Firstname" },
    { field: "lastName", headerName: "Lastname" },
    { field: "userRole", headerName: "User Role" },
    {
      field: "actionButton",
      headerName: "Action Menu",
      cellRenderer: (params) => (
        <div className="flex gap-2">
          <button
            onClick={() => {
              alert(`User ID : ${params.data.userId} CLICKED!`);
              console.log(params.data);
            }}
            className="bg-green-400 rounded-lg flex justify-center items-center px-2"
          >
            Edit
          </button>
          <button
            onClick={() => {
              alert(`User ID : ${params.data.userId} CLICKED!`);
              console.log(params.data);
            }}
            className="bg-red-500 rounded-lg flex justify-center items-center px-2"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];
  return (
    <div>
      <DisplayTable
        data={searchUserResult}
        columnFormat={adGridColumnFormat}
        format={"userId"}
        setSelectedRow={setSelectedRow}
      />
    </div>
  );
}
