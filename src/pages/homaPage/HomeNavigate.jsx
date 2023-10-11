export default function HomeNavigate({ src , text }) {
  return (
    <div className="w-72 h-auto bg-blue-50 shadow-lg p-6 rounded-xl flex flex-col gap-5 justify-center items-center hover:bg-blue-100 ">
      <div className="">
        <img src={src} alt="" className="object-cover" />
      </div>
      <div>
        <span>{text}</span>
      </div>
    </div>
  );
}
