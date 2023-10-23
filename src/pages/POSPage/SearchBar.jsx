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
    <div className="flex flex-col gap-4 bg-white p-5 rounded-md shadow-md">
      <span className="rounded-md  font-bold text-2xl">
        Input Product Code
      </span>
      <InputBar
      placeHolder={"product code"}
        value={searchShelfInput}
        onChange={(event) => {
          handleChange(event);
        }}
      />
    </div>
  );
}
