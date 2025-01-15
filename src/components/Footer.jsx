const Footer = (props) =>{
   
   const {footerDcComics, footerShop, footerDc, footerSites} = props;
   
   return(
      <footer>
         <section className="footer_section">
            <div className="footer_container container">
               <div className="footer_list">
                  <div>
                     <div>
                        <span>DC COMICS</span>
                        <ul>
                           {footerDcComics.map(item =>(
                              <li key={item.id}>
                                 <a href={item.url}>{item.text}</a>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="second_list_footer">
                        <span>SHOP</span>
                        <ul>
                           {footerShop.map(item =>(
                              <li key={item.id}>
                                 <a href={item.url}>{item.text}</a>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
                  <div>
                     <span>DC</span>
                     <ul>
                     {footerDc.map(item =>(
                        <li key={item.id}>
                           <a href={item.url}>{item.text}</a>
                        </li>
                     ))}
                     </ul>
                  </div>
                  <div>
                     <span>SITES</span>
                     <ul>
                        {footerSites.map(item =>(
                           <li key={item.id}>
                              <a href={item.url}>{item.text}</a>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
               <div className="footer_bgimg">
                  <img src="img/dc-logo-bg.png" alt="" />
               </div>
            </div>
         </section>
         <section className="footer_contacts">
            <div className="contacts container">
               <div>
                  <button className="btn-transp">SIGN-UP NOW!</button>
               </div>
               <div className="follow_info">
                  <span>FOLLOW US</span>
                  <ul>
                     <li><a href="#"><img src="img/footer-facebook.png" alt="" /></a></li>
                     <li><a href="#"><img src="img/footer-twitter.png" alt="" /></a></li>
                     <li><a href="#"><img src="img/footer-youtube.png" alt="" /></a></li>
                     <li><a href="#"><img src="img/footer-pinterest.png" alt="" /></a></li>
                     <li><a href="#"><img src="img/footer-periscope.png" alt="" /></a></li>
                  </ul>
               </div>
            </div>
         </section>
      </footer>
   )
}

export default Footer;