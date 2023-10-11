import Route from "./routes/Route";
import { useAuthContext } from "./hooks/auth-hook";
function App() {
  const { isLoading } = useAuthContext();
  if(isLoading){
    return <h1>LOADING DAAAAAAA</h1>
  }
  else{
    return <Route></Route>
  }
}

export default App;
