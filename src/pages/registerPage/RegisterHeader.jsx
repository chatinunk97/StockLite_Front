import logo from "../../assets/stocklite_logo.png";
export default function RegisterHeader() {
  return (
    <div
      className="bg-gray-50 flex flex-col items-center shadow-md rounded-md w-full 
     justify-center"
    >
      <img src={logo} alt="stocklite_logo" className="w-72 md:w-96" />
    </div>
  );
}
