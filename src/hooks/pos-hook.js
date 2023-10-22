import { POSContext } from "../context/pos-context"
import { useContext } from "react"

function usePOSContext(){
    return useContext(POSContext)
}
export default usePOSContext