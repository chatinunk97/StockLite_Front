import ShelfSearchToolBar from "./ShelfSearchToolBar";

export default function ShelfSearh() {
  return (
    <div className="flex flex-col">
      <div className=" bg-smoothgray flex flex-col relative pt-5 lg:p-2 rounded-md">
        <ShelfSearchToolBar/>
      </div>
    </div>
  );
}
