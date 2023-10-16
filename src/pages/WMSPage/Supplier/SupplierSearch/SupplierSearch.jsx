import SupplierSearchToolBar from "./SupplierSearchToolBar";
import SubmitButton from "../../../../components/SubmitButton";
import useWMSContext from "../../../../hooks/wms-hook";
export default function SupplierSearch() {
  const { searchSupplier, searchInput } = useWMSContext();
  return (
    <div className="flex flex-col">
      <div className=" bg-smoothgray flex flex-col relative pt-5 lg:p-2 rounded-md">
        <SupplierSearchToolBar></SupplierSearchToolBar>
      </div>
      <SubmitButton width="w-full" onClick={() => searchSupplier(searchInput)}>
        Search
      </SubmitButton>
    </div>
  );
}
