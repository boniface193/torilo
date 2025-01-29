import Button from "../components/buttons";
import Modal from "../components/modal";
import Navbar from "../components/navbar";

function Home(params) {
  return (<>
    <Navbar />
    <Modal />
    <header>
      <section className="my-5">
        <aside className="container rounded d-flex flex-column align-items-center py-5 bg-light">
          <h1 className="h1">React Class</h1>
          <p className="w-75 py-3 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe quasi molestias, sunt illo necessitatibus inventore ex consectetur deserunt blanditiis expedita assumenda eligendi suscipit asperiores, possimus dignissimos, veritatis iste ullam corporis nam delectus minima alias. Quibusdam eaque dignissimos corrupti officia aut, omnis provident quisquam, minus reiciendis officiis cupiditate unde adipisci sapiente.</p>
          <div className="">
            <Button colors={'btn-primary me-sm-4'} title={'Sign Up'} />
            <Button colors={'btn-secondary'} title={'Love it'} />
          </div>
        </aside>
      </section>
    </header>
  </>)
}

export default Home;