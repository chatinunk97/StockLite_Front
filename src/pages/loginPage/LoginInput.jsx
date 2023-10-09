export default function LoginInput({ placeHolder, type = "text", value,onChange }) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeHolder}
      type={type}
      className="w-full block rounded-md px-4 py-3 border border-gray-200"
    ></input>
  );
}
