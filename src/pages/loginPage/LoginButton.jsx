export default function LoginButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-900 text-white font-semibold text-xl w-full rounded-md py-3 px-1.5
    hover:bg-blue-700"
    >
      {children}
    </button>
  );
}
