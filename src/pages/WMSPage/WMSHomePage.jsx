import { useContext } from "react"
import { AuthContext } from "../../context/auth-context"

export default function WMSHomePage() {
    console.log(useContext(AuthContext))
  return (
    <div>WMSHomePage</div>
  )
}
