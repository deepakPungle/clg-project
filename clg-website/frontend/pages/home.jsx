import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Carousel from "../src/component/carousel";
import CardGroup from "../src/component/cardgroup";
import BigCard from "../src/component/big-info-index";
import NewsBlock from "../src/component/NewsBlock";
const Home = () => {
  return (
    <>
      <Carousel />
      <div className="container marketing">
        <CardGroup />
        <hr />
        <BigCard />

        <NewsBlock />
      </div>
    </>
  );
};

export default Home;
