export default function InputBar({placeHolder,  type = "text",  value,  onChange,  isError}) 
{
  return (
    <div className="relative w-full">
      <input
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
        type={type}
        className={`w-full block rounded-md px-4 py-3 outline max-w-7xl  ${
          isError
            ? `outline-waterred focus:outline-waterred :`
            : ` outline-gray-200 focus:outline-blue-500 `
        }`}
      ></input>
      {isError && <span className="relative left-3 text-waterred">{isError}</span>}
    </div>
  );
}
