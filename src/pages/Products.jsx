import { Link } from 'react-router-dom'

const PRODUCTS = [
  { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
  { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
  { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
  { id: 'p4', title: 'Half-dried plant', price: 2.99 },
]

function Products() {
  return (
    <>
      <h2>The products page</h2>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              {' '}
              {product.title} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
export default Products
