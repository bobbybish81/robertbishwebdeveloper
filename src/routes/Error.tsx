import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import '../styles/Error.css';

const Error = () => {

  return (
    <section className='error-section'>
      <Nav/>
      <article className='error-article'>
        <h1>Sorry! Page Not found</h1>
        <Link
          className='error-link' to={'/'}>
          <p>Return to Homepage</p>
        </Link>
      </article>
    </section>
  )
}

export default Error