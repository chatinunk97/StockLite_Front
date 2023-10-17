import { useEffect } from "react";
import { useRef } from "react";

export default function Modal({ title, children, open, onClose, setIsOpen }) {
  const modalEl = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!modalEl.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      <>
        {" "}
        <div className=" fixed inset-0 bg-white opacity-70 z-20"></div>
        <div className="fixed inset-0 z-30">
          <div className="flex justify-center items-center min-h-full">
            <div
              ref={modalEl}
              className="bg-white rounded-lg w-9/12 border shadow-2xl "
            >
              <div className="flex justify-between p-4 text-xl border-b">
                <div className="invisible">X</div>
                <div className="font-bold">{title}</div>
                <div className="text-gray-500 cursor-pointer" onClick={onClose}>
                  X
                </div>
              </div>
              <div className="p-4">{children}</div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
