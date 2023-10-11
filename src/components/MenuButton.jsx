export default function MenuButton({ children }) {
  return (
    <button className=" font-semibold hover:bg-blue-400 hover:text-white w-full h-full border border-gray-500 border-b-0 border-l-2 border-r-0 text-2xl border-t-0">
      {children}
    </button>
  );
}
