import React from "react";
import HomeNavigate from "./HomeNavigate";
import posIcon from "../../assets/posIcon.png";
import wmsIcon from "../../assets/wmsIcon.png";
import adminIcon from "../../assets/adminIcon.png";

const navigatorList = [
  { id: 1, label: "pos", src: posIcon, text: "POS" },
  { id: 2, label: "wms", src: wmsIcon, text: "WMS" },
  { id: 3, label: "admin", src: adminIcon, text: "ADMIN" },
];

export default function HomeBody({LoginUser}) {
  const { userRole } = LoginUser;
  return (
    <div className="h-full bg-gray-50 flex justify-center py-10">
      <div className="flex gap-10 justify-center">
        {navigatorList.map((el) => {
          switch (el.label) {
            case "pos":
              return <HomeNavigate key={el.id} src={el.src} text={el.text} />;
            case "wms":
              if (userRole === "admin" || userRole === "supervisor") {
                return <HomeNavigate key={el.id} src={el.src} text={el.text} />;
              }
              break;
            case "admin":
              if (userRole === "admin") {
                return <HomeNavigate key={el.id} src={el.src} text={el.text} />;
              }
          }
        })}
      </div>
    </div>
  );
}
