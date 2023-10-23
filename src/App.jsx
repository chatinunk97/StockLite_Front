import Route from "./routes/Route";
import { useAuthContext } from "./hooks/auth-hook";
import loadingKanon from './assets/loadingTruck.gif'

function App() {
  const { isLoading } = useAuthContext();
  if (isLoading) {
    return (
      <div className=" flex justify-center items-center h-screen flex-col gap-0 object-fill">
        <img src={loadingKanon} alt="loadingGif" className="rounded-full"></img>
        <div className=" flex  gap-2">
          <span className="text-semantic-textPrimary font-extrabold">Loading ...</span>
          <span className="loading loading-dots loading-xs text-secondary-main"></span>
        </div>
      </div>
    );
  } else {
    return <Route></Route>;
  }
}

export default App;
