import { NavLink } from "react-router";

function Home(params) {
  return (<>
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
              <NavLink to={'/todo'} className="nav-link active" >
                Todo
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <header>
      <section className="my-5">
        <aside className="container rounded d-flex flex-column align-items-center py-5 bg-light">
          <h1 className="h1">React Class</h1>
          <p className="w-75 py-3 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe quasi molestias, sunt illo necessitatibus inventore ex consectetur deserunt blanditiis expedita assumenda eligendi suscipit asperiores, possimus dignissimos, veritatis iste ullam corporis nam delectus minima alias. Quibusdam eaque dignissimos corrupti officia aut, omnis provident quisquam, minus reiciendis officiis cupiditate unde adipisci sapiente.</p>
          <div className="">
            <button className="btn btn-primary block me-sm-4 ">Sign Up</button>
            <button className="btn btn-secondary block">Love it</button>
          </div>
        </aside>
      </section>
    </header>
  </>)
}

export default Home;