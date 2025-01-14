import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import mainMenu from "./data/menu.js";


const App = () => {
  return(
    <>
      <Header menu={mainMenu} />
      <Main/>
      <Footer/>
    </>
  )
}

export default App