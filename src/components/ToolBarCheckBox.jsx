export default function ToolBarCheckBox({ children, data, onChange, value }) {
  return (
    <div
      className={` w-full lg:w-auto flex items-center mb-4 bg-white px-4 py-2 lg:rounded-md ${
        value ? "border-b-8 border-blue-200" : ""
      }`}
    >
      <input
        onChange={onChange}
        id={data}
        type="checkbox"
        checked={value}
        className="hidden md:block w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor={data}
        className="w-full ml-2 lg:text-2xl font-semibold text-gray-900"
      >
        {children}
      </label>
    </div>
  );
}
