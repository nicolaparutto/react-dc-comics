const Header = (props) =>{

   const menuItems = props.menu;

   return(
      <header className="container">
         <figure>
            <a href=""><img src="img/dc-logo.png" alt="Logo" /></a>
         </figure>
         <nav>
            <ul>
               {menuItems.map(item =>(
                  <li key={item.id}>
                     <a href={item.url}>{item.text}</a>
                  </li>
               ))}
            </ul>
         </nav>
      </header>
   )
}

export default Header;








