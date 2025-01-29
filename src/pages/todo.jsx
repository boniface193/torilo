import Navbar from "../components/navbar";
import Button from "../components/buttons";
import { useState } from "react";

function Todo(params) {
  const [items, setItems] = useState('');
  const [stores, setStores] = useState([]);

  function handleChange(e) {
    setItems(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStores([...stores, { id: crypto.randomUUID(), title: items }]);
    e.target.reset();
  }

  return (<>
    <Navbar />

    <header>
      <section className="my-5">
        <aside className="container rounded d-flex flex-column py-5 bg-light">
          <form onSubmit={handleSubmit} className="col-sm-6 mx-auto">
            <div className="mb-3 d-flex align-items-center">
              <input type="text" onChange={handleChange} className="form-control me-2" placeholder="Add to your list..." id="list" />
              <Button type={'submit'} colors={'btn-primary me-sm-4'} title={'+'} />
            </div>
          </form>

          {stores.length > 0 && <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Items</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {stores.map((item, index) => (
                <tr key={index}>
                  <th scope="row pe-2">{index + 1}</th>
                  <td className="w-75 pl-s">{item.title}</td>
                  <td className="d-flex">
                    <div className="me-2"><Button colors={'btn-danger'} title={'Delete'} /></div>
                    <div>
                      <Button colors={'btn-warning'} title={'Update'} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          }
        </aside>
      </section>
    </header>
  </>)
}

export default Todo;