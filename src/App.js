import logo from './logo.svg';
import './App.css';
import Inventorizacija from "./components/Inventorizacija";
import ItemsContext, {ItemsContextProvider} from "./context/ItemsContext";

function App() {
  return (
   <div className="container">

        <ItemsContextProvider>
            <Inventorizacija></Inventorizacija>
        </ItemsContextProvider>
   </div>
  );
}

export default App;
