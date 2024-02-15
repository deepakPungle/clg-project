import Card from "./card";
import P1 from "../../images/P1.jpg";

import "bootstrap/dist/js/bootstrap.min.js";
const CardGroup = () => {
  const GallaryInfo = {
    title: "Gallary",
    desc: "A vibrant collage gallery showcasing diverse artwork, uniting creativity in a dynamic display of colors, styles, and unique perspectives.",
  };

  const Campus = {
    title: "Campus",
    desc: "A bustling campus with modern facilities, green spaces, and diverse architecture. Fosters academic growth, community engagement, and a vibrant student life for holistic learning experiences.",
  };

  const principal = {
    title: "Principal",
    desc: "this is the very own prinipal of the GPJ",
  };
  return (
    <>
      <div className="row border justify-content-around ">
        <Card info={GallaryInfo} link={P1} />
        <Card info={Campus} link={P1} />
        <Card info={principal} link={P1} />
      </div>
    </>
  );
};
export default CardGroup;
