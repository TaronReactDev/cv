import './App.css';
import Header from "./components/header";
import MainInfo from "./components/mainInfo";
import Footer from "./components/footer";

function App() {
    return (
        <main className="gridContainer">

            <Header className="gridItem1"/>
           <MainInfo className="gridItem2"/>

            <Footer className="gridItem3"/>

        </main>
    );
}

export default App;
