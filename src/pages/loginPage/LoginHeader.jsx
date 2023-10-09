import logo from "../../assets/stocklite_logo.png";
export default function LoginHeader() {
  return (
    <div className="bg-white flex flex-col items-center shadow-md rounded-md py-5 gap-3 w-full">
      <img src={logo} alt="stocklite_logo" className="w-72" />
      {/* <span className="font-bold text-xl">w</span> */}
    </div>
  );
}
