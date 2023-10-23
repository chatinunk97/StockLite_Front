import { useState } from "react";
import BarChart from "../../../components/BarChart";
import { useAdminContext } from "../../../hooks/admin-hook";
export default function AdminSales() {
const {rawData} = useAdminContext()


  const [userData, setUserData] = useState({
    labels: rawData.map((data) => data.username),
    datasets: [
      {
        label: "Sales",
        data: rawData.map((data) => data.sales),
        backgroundColor: "#2a71d0",
        borderColor: "black",
        borderWidth: 2,
      },
    ]
  });
  return (
    <div>
      <BarChart chartData={userData} />
    </div>
  );
}
