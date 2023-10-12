export default function SubmitButton({ children, onClick , width = "w-full" }) {
  return (
    <button
    type="submit"
      onClick={onClick}
      className={`bg-blue-900 text-white font-semibold text-xl ${width} rounded-md py-3 px-1.5
    hover:bg-blue-700`}
    >
      {children}
    </button>
  );
}
