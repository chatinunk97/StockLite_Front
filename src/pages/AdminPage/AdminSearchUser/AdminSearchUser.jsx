import React from "react";
import AdminSearchToolBar from "./AdminSearchToolBar";
import { useState } from "react";
import AdminSearchDisplayBox from "./AdminSearchDisplayBox";
import { useAdminContext } from "../../../hooks/admin-hook";

export default function AdminSearchUser() {
  const {searchInput, setSearchInput} = useAdminContext()
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
