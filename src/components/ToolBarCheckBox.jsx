export default function ToolBarCheckBox({ children , data,onChange ,value }) {
  return (
    <div className="flex items-center mb-4">
      <input
        onChange={onChange}
        id={data}
        type="checkbox"
         checked={value}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor={data}
        className="ml-2 text-2xl font-semibold text-gray-900"
      >
        {children}
      </label>
    </div>
  );
}
