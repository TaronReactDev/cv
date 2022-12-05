import Header from "./components/cv/header/header";
import MainInfo from "./components/cv/mainInfo/mainInfo";
import Footer from "./components/cv/footer/footer";

function App() {
    return (
        <>
            <main className="gridContainer">
                <Header className="gridItem1"/>
                <MainInfo className="gridItem2"/>
                <Footer className="gridItem3"/>
            </main>
        </>
    );
}

export default App;
