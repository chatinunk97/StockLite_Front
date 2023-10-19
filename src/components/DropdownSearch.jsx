import Select from "react-select";

const DropdownSearch = ({ data, onChange, filterName }) => {
  return (
    <div className="h=full w-full ">
      <Select
        options={data} // Pass the value prop
        onChange={(event) => {
          onChange(event, filterName);
        }}
      />
    </div>
  );
};

export default DropdownSearch;
