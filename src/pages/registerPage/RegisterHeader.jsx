import logo from "../../assets/stocklite_logo.png";
export default function RegisterHeader() {
  return (
    <div className="bg-white flex flex-col items-center shadow-md rounded-md pt-5 w-full">
      <img src={logo} alt="stocklite_logo" className="w-72" />
      <div className="flex flex-col py-5 px-2.5 gap-1 w-full">
        <h1 className="font-bold text-2xl">Register</h1>
        <span className="font-semibold">
          Manage all your inventory efficiently
        </span>
        <span className="font-thin">
          Let’s get you all set up so you can verify your personal account and
          begin setting up your work profile
        </span>
      </div>
    </div>
  );
}
