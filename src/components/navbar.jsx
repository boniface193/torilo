import { NavLink } from "react-router";
import Button from "./buttons";
import Modal from "./modal";

function Navbar(params) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('submit');
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid collapse navbar-collapse">
        <NavLink className="navbar-brand">
          <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
          Bootstrap
        </NavLink>
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

        <Button showModal={'modal'} triggerModal={'#exampleModal'} title={'Login'} colors={'btn-outline-primary'} />
        <Modal title={'Login'}>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 row">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value="email@example.com" />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword" />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary" >Save changes</button>
            </div>
          </form>
        </Modal>
      </div>
    </nav>
  )
}

export default Navbar;