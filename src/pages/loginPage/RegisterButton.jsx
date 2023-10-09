export default function RegisterButton({ children , color, width }) {
  return (
    <button className="bg-waterred text-white font-semibold text-xl w-50 rounded-md py-3 px-6
    hover:bg-waterredHover">
      {children}
    </button>
  );
}
