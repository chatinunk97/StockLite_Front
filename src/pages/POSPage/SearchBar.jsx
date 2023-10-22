import { useEffect } from "react";
import InputBar from "../../components/InputBar";
import usePOSContext from "../../hooks/pos-hook";
export default function SearchBar() {
  const { getShelfItemFunction, searchShelfInput, setSearchShelfInput } =
    usePOSContext();
  const handleChange = (event) => {
    setSearchShelfInput(event.target.value);
  };
  useEffect(() => {
    if (searchShelfInput.length >= 4) {
      getShelfItemFunction();
    }
  }, [searchShelfInput]);
  return (
    <div>
      <InputBar
        value={searchShelfInput}
        onChange={(event) => {
          handleChange(event);
        }}
      />
      <button
        className="bg-blue-500 p-5 rounded-md"
        onClick={getShelfItemFunction}
      >
        CLICKKKK
      </button>
    </div>
  );
}
