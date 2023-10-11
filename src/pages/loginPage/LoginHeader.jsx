import logo from "../../assets/stocklite_logo.png";
export default function LoginHeader() {
  return (
    <div className="bg-white flex flex-col justify-center items-center shadow-md rounded-md px-5 gap-3 w-full
    md:h-full">
      <img src={logo} alt="stocklite_logo" className="w-72 md:w-[1000px]" />
    </div>
  );
}
