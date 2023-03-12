import {NavLink,Outlet} from 'react-router-dom';
export default function HostLayout() {
  /**
 * Challenge - part 2:
 * Make the host navbar indicate the currently-active route.
 * 
 * Use the following CSS rules:
 *      font-weight: bold;
 *      text-decoration: underline;
 *      color: #161616;
 * 
 * I'd recommend using an inline style this time.
 * 
 * NOTE: There will be a small bug that we'll fix 
 * after you do the challenge.
 */
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
}
  return (
    <div>
        <nav className="host-nav">
            <NavLink 
              to='.'
              style={({isActive})=> isActive? activeStyles : null}
              end>
                Dashboard
            </NavLink>
            <NavLink 
              to='income'
              style={({isActive})=> isActive? activeStyles : null}>
                Income
            </NavLink>
            <NavLink 
              to='vans'
              style={({isActive})=> isActive? activeStyles : null}>
                Vans
            </NavLink>
            <NavLink 
              to='reviews'
              style={({isActive})=> isActive? activeStyles : null}>
                Reviews
            </NavLink>
        </nav>
        <Outlet />
    </div>
  )
}
