import RegisterForm from "./RegisterForm";
import RegisterFormHeader from "./RegisterFormHeader";
import RegisterHeader from "./RegisterHeader";

export default function RegisterPage() {
  return (
    <div className="p-5 flex flex-col gap-5 justify-center items-stretch
    md:flex-row md:h-full
    ">
      <RegisterHeader />
      <div className="flex flex-col h-full justify-center w-full gap-10 md:order-first">
      <RegisterFormHeader />
        <RegisterForm />
 
      </div>
    </div>
  );
}
