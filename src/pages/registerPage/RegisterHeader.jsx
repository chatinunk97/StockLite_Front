import logo from "../../assets/stocklite_logo.png";
export default function RegisterHeader() {
  return (
    <div className="bg-white flex flex-col items-center shadow-md rounded-md w-full lg:h-full justify-center">
      <img src={logo} alt="stocklite_logo" className="w-72" />
    </div>
  );
}