import { useGlobalContext } from '../context'

export const Products = () => {
  const { products } = useGlobalContext();

  return (
    <section className='section-center'>
      {products.map((singleProduct) => {
        const { id, title, images, price } = singleProduct
        return (
          <article key={id} className='single-product'>
            <img src={images[0]} alt={title} className='img'/>
            <footer className='text-area'>
              <div className='title-text'><h5>{title}</h5></div>
              <div className='mrp-text'><h5>MRP :</h5><h4>$ {price}</h4></div>
              <div className='cart-buy-btn'><button className='cart-btn btn'>Add to Cart</button>
                <button className='buy-btn btn'>Buy Now</button>
              </div>
            </footer>
          </article>
        )
      })}

    </section>
  )
}
