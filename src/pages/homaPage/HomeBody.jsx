import React from "react";
import HomeNavigate from "./HomeNavigate";
import posIcon from "../../assets/posIcon.png";
import wmsIcon from "../../assets/wmsIcon.png";
import adminIcon from "../../assets/adminIcon.png";
import { useAuthContext } from "../../hooks/auth-hook";

const navigatorList = [
  { id: 1, link: "pos", src: posIcon, text: "POS" },
  { id: 2, link: "wms", src: wmsIcon, text: "WMS" },
  { id: 3, link: "admin", src: adminIcon, text: "ADMIN" },
];

export default function HomeBody() {
  const {
    LoginUser: { userRole },
  } = useAuthContext();
  return (
    <div className="h-full bg-gray-50 flex justify-center py-10 px-5">
      <div className="flex flex-col md:flex-row gap-10 flex-grow  items-center md:items-stretch">
        {navigatorList.map((el) => {
          switch (el.link) {
            case "pos":
              return (
                <HomeNavigate
                  key={el.id}
                  src={el.src}
                  text={el.text}
                  link={el.link}
                />
              );
              break;
            case "wms":
              if (userRole === "admin" || userRole === "supervisor") {
                return (
                  <HomeNavigate
                    key={el.id}
                    src={el.src}
                    text={el.text}
                    link={el.link}
                  />
                );
              }
              break;
            case "admin":
              if (userRole === "admin") {
                return (
                  <HomeNavigate
                    key={el.id}
                    src={el.src}
                    text={el.text}
                    link={el.link}
                  />
                );
                break;
              }
          }
        })}
      </div>
    </div>
  );
}
