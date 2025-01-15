const Main = (props) =>{
   const comicsCardsContent = props.comicsCards

   return(
      <main>
         <section className="jumbotron">
            <img src="/img/jumbotron.jpg" alt="" />
         </section>
         <section className="content">
            <div className="container content_container">
               <div className="content_title">
                  <h3>CURRENT SERIES</h3>
               </div>
               <div className="cards_container">
                  <div className="cards_col">
                        {comicsCardsContent.map(card => (
                           <div className="card" key={card.id}>
                              <div className="card_img">
                                 <img src={card.thumb} alt="" />
                              </div>
                              <div className="card_title">
                                 <h4>{card.series}</h4>
                              </div>
                           </div>
                        ))}
                  </div>
               </div>
               <button className="btn-blue">LOAD MORE</button>
            </div>
         </section>
         <section className="dc_info">
            <div className="row container">
               <div className="col">
                  <img src="/img/buy-comics-digital-comics.png" alt="" />
                  <p>DIGITAL COMICS</p>
               </div>
               <div className="col">
                  <img src="/img/buy-comics-merchandise.png" alt="" />
                  <p>DC MERCHANDISE</p>
               </div>
               <div className="col">
                  <img src="/img/buy-comics-subscriptions.png" alt="" />
                  <p>SUBSCRIPTION</p>
               </div>
               <div className="col">
                  <img src="/img/buy-comics-shop-locator.png" alt="" />
                  <p>COMIC SHOP LOCATOR</p>
               </div>
               <div className="col">
                  <img src="/img/buy-dc-power-visa.svg" alt="" />
                  <p>DC POWER VISA</p>
               </div>
            </div>
         </section>
      </main>
   )
}

export default Main;