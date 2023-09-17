import { useParams } from 'react-router-dom'

function ProductDetail() {
  const params = useParams()

  return (
    <>
      <h1>Product Details</h1>
      <p>{params.id}</p>
    </>
  )
}
export default ProductDetail
