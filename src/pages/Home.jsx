import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1>My home Page</h1>
      <p>
        Go to <Link to='/products'>the products page</Link>
      </p>
    </>
  )
}
export default Home
