import {
  Navbar,
  Footer,
  Offers_Discounts,
  Products,
  Extra_Discounts,
  Display_Slider,
} from "../components";
import Homepage from "./Homepage";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Display_Slider />
      {/* <Products /> */}

      <Footer />
    </div>
  );
};
export default Home;
