export default function LoginInput({ placeHolder, type = "text" }) {
  return (
    <input
      placeholder={placeHolder}
      type={type}
      className="w-full block rounded-md px-4 py-3"
    ></input>
  );
}
