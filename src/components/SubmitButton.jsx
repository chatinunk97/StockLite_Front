export default function SubmitButton({
  isLoading = false,
  children,
  onClick,
  width = "w-full",
  color = "bg-blue-900",
  hover = "hover:bg-blue-700",
}) {
  return (
    <button
      type="submit"
      onClick={isLoading ? undefined : onClick} // Prevent clicks when loading
      disabled={isLoading}
      className={`${
        isLoading ? "bg-gray-600 cursor-not-allowed" : `${hover} ${color}`
      } text-white font-semibold text-xl ${width} rounded-md py-3 px-1.5
   `}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}
