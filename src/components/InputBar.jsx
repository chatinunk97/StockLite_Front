export default function InputBar({
  placeHolder,
  type = "text",
  value,
  onChange,
  isError,
  isDisabled = false,
}) {
  return (
    <div className="relative w-full">
      <input
        disabled={isDisabled}
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
        type={type}
        className={` w-full block rounded-md px-4 py-3 outline max-w-7xl 
         ${isDisabled ? "bg-gray-300" : ""}
        ${
          isError
            ? `outline-waterred focus:outline-waterred :`
            : ` outline-gray-200 focus:outline-blue-500 `
        }`}
      ></input>
      {isError && (
        <span className="relative left-3 text-waterred">{isError}</span>
      )}
    </div>
  );
}
