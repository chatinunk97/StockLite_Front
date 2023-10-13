import React from "react";
import AdminSearchToolBar from "./AdminSearchToolBar";
import { useState } from "react";
import AdminSearchDisplayBox from "./AdminSearchDisplayBox";

export default function AdminSearchUser() {
  const [searchInput, setSearchInput] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    username: ""
  });
  return (
    <div className="flex flex-col gap-5">
      <AdminSearchToolBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <AdminSearchDisplayBox/>
    </div>
  );
}
