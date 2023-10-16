import { WMSContext } from "../context/wms-context"
import { useContext } from "react"

export default function useWMSContext() {
    return useContext(WMSContext);
  }
  