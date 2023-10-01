import { useGlobalContext } from "../context";

const Wishlist = () => {
  const { products, wishItems, handleAdd, handleDeleteWish,count } =
    useGlobalContext();

    const c=count();

  return (
    <>    
    <h1>Your Wishlist {}</h1>
    <ul className="flex">
      {products?.map((item) => {
        const { id, title, images, price } = item;
        
        if (wishItems[item.id] !== 0) {
         
          
          return (
            <article key={id} className="single-product m-4 ">
              <img src={images[0]} alt={title} className="img" />
              <footer className="text-area">
                <div className="title-text">
                  <h5>{title}</h5>
                </div>
                <div className="mrp-text">
                  <h5>MRP :</h5>
                  <h4>$ {price}</h4>
                </div>
                <div className="cart-buy-btn">
                  <button
                    className="cart-btn btn"
                    onClick={() => handleAdd(item.id)}
                  >
                    Add To Cart
                    {wishItems[item.id] === 0 ? "" : `(${wishItems[item.id]})`}
                  </button>
                  <button
                    onClick={() => handleDeleteWish(item.id)}
                    className="buy-btn btn"
                  >
                    Delete
                  </button>
                </div>
              </footer>
            </article>
          );
        }
      })}
    </ul>
    </>
  );
};

export default Wishlist;
