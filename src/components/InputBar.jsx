export default function InputBar({
  placeHolder,
  type = "text",
  value,
  onChange,
  isError,
}) {
  return (
    <div className="relative w-full">
      <input
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
        type={type}
        className={`w-full block rounded-md px-4 py-3 border-2  ${
          isError
            ? `border-waterred focus:outline-none :`
            : ` border-gray-200 focus:border-none `
        }`}
      ></input>
      {isError && <span className="relative left-3 ">{isError}</span>}
    </div>
  );
}
