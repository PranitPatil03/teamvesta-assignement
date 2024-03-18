import "./App.css";
import { ChartPage } from "./page/ChartPage";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen gap-2">
        <h1 className="font-mono font-bold text-2xl">Requests per Hotel</h1>
        <ChartPage></ChartPage>
      </div>
    </>
  );
}

export default App;
