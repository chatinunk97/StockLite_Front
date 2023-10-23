import POSContextProvider from "../../context/pos-context";
import SaleList from "./SaleList";
import SearchBar from "./SearchBar";
import SumDisplay from "./SumDisplay";
export default function PosMainPage() {
  return (
    <POSContextProvider>
      <div className="bg-smoothgray h-auto">
        <div className="h-full mx-auto p-10 flex flex-col items-stretch gap-10 bg-blue-50 rounded-md  min-w-[809px] max-w-[809px]">
          <SearchBar />
          <SumDisplay />
          <SaleList />
        </div>
      </div>
    </POSContextProvider>
  );
}
