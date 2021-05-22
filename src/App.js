import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Head/header";
import Gellary from "./Components/Container/gellary";

function App() {
  return (
    <>
        <div className="relative py-2 px-4 sm:px-6 lg:px-8">
            <Navbar/>
            <Header/>
            <Gellary/>
        </div>
    </>
  );
}

export default App;
