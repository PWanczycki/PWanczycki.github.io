import { Link, NavLink } from "react-router-dom";

interface NavbarProps {
  items: { route: string; name: string }[];
  heading: string;
  homeLink?: string;
}

function Navbar(props: NavbarProps) {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="md-margin">
          {props.homeLink && (
            <Link to={props.homeLink}>
              <button>Home</button>
            </Link>
          )}
        </div>
        <h1>{props.heading}</h1>
      </div>
      {/* <div className="full-width">
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search projects"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
        </div> */}
      <nav className="">
        <div className="navbar full-width">
          {props.items.length ? (
            <ul className="navbar-nav">
              {props.items.map((item) => (
                <NavLink
                  to={`${item.route}`}
                  className={({ isActive, isPending }) =>
                    "nav-link" +
                    (isActive ? " active" : isPending ? " pending" : "")
                  }
                >
                  <li key={item.route} className="nav-item">
                    {item.name}
                  </li>
                </NavLink>
              ))}
            </ul>
          ) : (
            <p>
              <i>No Navbar Items</i>
            </p>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
