export default function SubmitButton({
  children,
  onClick,
  width = "w-full",
  color = "bg-blue-900",
  hover = "hover:bg-blue-700"
}) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`${color} text-white font-semibold text-xl ${width} rounded-md py-3 px-1.5
    ${hover}`}
    >
      {children}
    </button>
  );
}
