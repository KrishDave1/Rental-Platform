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
        const { id, Title, Product_Image, Price,Price_was,Percentage_off } = item;
        
        if (wishItems[item.id] !== 0) {
         
          
          return (
            <article key={id} className="single-product m-4 ">
              <img src={Product_Image} alt={Title} className="img" />
              <footer className="text-area">
                <div className="title-text">
                  <h5>{Title}</h5>
                </div>
                <div>
                {Percentage_off==="undefined" || Price_was==="undefined"? "M.R.P: "+"$"+Number(Price)*wishItems[id].toFixed(2)+" (0% off)": "M.R.P: $"+Number(Price_was)*wishItems[id].toFixed(2)+` (${Percentage_off}% off)`}
                </div>
                <div className="mrp-text">
                  <h5>Our Price:</h5>
                  <h4>$ {Number(Price).toFixed(2)}</h4>
                </div>
                <div>

                </div>
                <div className="cart-buy-btn">
                  <button
                    className="cart-btn btn"
                    onClick={() => handleAdd(item.id)}
                  >
                    Add To Cart
                    {/* {wishItems[item.id] === 0 ? "" : `(${wishItems[item.id]})`} */}
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
