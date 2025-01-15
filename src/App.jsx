//Import principali:
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
//Import menu principale del progetto:
import mainMenu from "./data/menu.js";
//Import dei link del footer:
import {footerShop, footerDc, footerSites} from "./data/footerLinks.js";


const App = () => {
  return(
    <>
      <Header menu={mainMenu} />
      <Main/>
      <Footer footerDcComics={mainMenu} footerShop={footerShop} footerDc={footerDc} footerSites={footerSites}/>
    </>
  )
}

export default App;