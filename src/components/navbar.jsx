import { NavLink } from "react-router";

function Navbar(params) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid collapse navbar-collapse">
        <a className="navbar-brand" href="/">
          <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
          Bootstrap
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to={'/'} className="nav-link active" >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/aboutus'} className="nav-link active" >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/services'} className="nav-link active" >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/todo'} className="nav-link active" >
                Todo
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;