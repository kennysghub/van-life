import {NavLink} from 'react-router-dom'
export default function Header() {
   /**
     * Challenge - part 1:
     * Make the main navbar indicate the currently-active route. (You can
     * leave the home link alone, since it's doubling as our logo. Only
     * make changes to the /host, /about, and /vans links)
     * 
     * Use the following CSS rules:
     *      font-weight: bold;
     *      text-decoration: underline;
     *      color: #161616;
     * 
     * You can use either inline styles or a className.
     */
  return (
    <div>
        <header>
        <NavLink className="site-logo" to="/">#VanLife</NavLink>
        <nav>
          <NavLink className={({isActive})=> isActive ? "active-link":null}to="/host">Host</NavLink>
          <NavLink className={({isActive})=> isActive ? "active-link":null}to="/about">About</NavLink>
          <NavLink className={({isActive})=> isActive ? "active-link":null}to="/vans">Vans</NavLink>
        </nav>
      </header>
    </div>
  )
}
