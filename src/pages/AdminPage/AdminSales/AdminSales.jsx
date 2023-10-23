import { useState } from "react";
import BarChart from "../../../components/BarChart";
import { useAdminContext } from "../../../hooks/admin-hook";
export default function AdminSales() {
  const { rawData } = useAdminContext();

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
    ],
  });
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-white text-center p-5 rounded-md text-2xl font-bold shadow-lg">
        {" "}
        User Sales Report{" "}
      </div>
      <div className="bg-white p-5 rounded-md shadow-lg">
        <BarChart chartData={userData} />
      </div>
    </div>
  );
}
