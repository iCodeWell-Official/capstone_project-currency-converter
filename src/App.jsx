import "./App.css";
import CurrencyConverter from "./components/CurrencyConverter";
import Logo from "./components/Logo";


function App() {
  return (
    <div className="bg-[url('./src/assets/img/bg.jpg')] min-h-screen bg-bg-100 flex flex-col items-center justify-center">
      <div className="container">
        <Logo className="flex items-center space-x-4 p-4" />
        <CurrencyConverter />
      </div>
    </div>
  );
}

export default App;
