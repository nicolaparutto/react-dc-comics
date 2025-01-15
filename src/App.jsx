import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import mainMenu from "./data/menu.js";
import {footerShop, footerDc, footerSites} from "./data/footerLinks.js"
import comicsCardsContent from "./data/comicsCardsContent.js" 

const App = () => {
  return(
    <>
      <Header menu={mainMenu} />
      <Main comicsCards={comicsCardsContent}/>
      <Footer footerDcComics={mainMenu} footerShop={footerShop} footerDc={footerDc} footerSites={footerSites}/>
    </>
  )
}

export default App;