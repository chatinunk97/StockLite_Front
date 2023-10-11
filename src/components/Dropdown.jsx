export default function Dropdown({ header, isOpen, content }) {
  return (
    <>
      {isOpen && (
        <div
          className="gap-3 flex flex-col w-80 absolute bg-white 
        top-14 right-3 border rounded-xl shadow-xl p-4
        md:top-[110px] md:right-10 lg:top-[80px]
        "
        >
          <div>
            <span className="font-semibold">{header}</span>
          </div>
          <hr className="border"></hr>
          <div className="flex flex-col gap-3 font-normal">{content}</div>
        </div>
      )}
    </>
  );
}
