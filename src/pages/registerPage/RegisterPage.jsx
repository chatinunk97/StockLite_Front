import RegisterForm from "./RegisterForm";
import RegisterHeader from "./RegisterHeader";

export default function RegisterPage() {
  return (
    <div
      className="flex flex-col  gap-5 items-center bg-gray-50 w-full h-auto m-auto 
    tablet:flex-row
  md:max-w-1/8"
    >
      <RegisterHeader />
      <div className="w-full flex flex-col justify-center items-center gap-2 h-full py-3">
        <RegisterForm />
  
      </div>
    </div>
  );
}
