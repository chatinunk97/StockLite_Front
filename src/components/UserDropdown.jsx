import { useAuthContext } from "../hooks/auth-hook";
export default function UserDropdown({ header, isOpen }) {
  const { logOutFunction } = useAuthContext();
  console.log(logOutFunction)
  return (
    <>
      {isOpen && (
        <div className="gap-3 flex flex-col w-96 absolute bg-white right-2 -top-12  translate-y-32 border rounded-xl shadow-xl p-4">
          <div>
            <span>{header}</span>
          </div>
          <hr className="border"></hr>
          <div className="flex flex-col gap-3 font-normal">
            {/* <span>View Profile</span> */}
            <div
              onClick={logOutFunction}
              className="hover:bg-gray-200 px-3 py-3 rounded-lg"
            >
              Logout
            </div>
          </div>
        </div>
      )}
    </>
  );
}
