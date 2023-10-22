import POSContextProvider from "../../context/pos-context"
import SaleList from "./SaleList"
import SearchBar from "./SearchBar"
import SumDisplay from "./SumDisplay"
export default function PosMainPage() {
  return (
    <POSContextProvider>
    <div className="py-5 flex flex-col gap-10 bg-blue-50 rounded-md px-4 min-w-[768px]">
        <SearchBar/>
        <SumDisplay/>
        <SaleList/>
    </div>
    </POSContextProvider>
  )
}
