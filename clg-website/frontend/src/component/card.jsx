import "bootstrap/dist/css/bootstrap.min.css";
const Card = ({ info, link }) => {
  return (
    <>
      <div className=" text-center border rounded  col-lg-4 ">
        <svg
          className="bd-placeholder-img rounded-circle"
          width="140"
          height="140"
          xmlns=""
          role="img"
          aria-label="Placeholder"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          {" "}
          <image href={link} x="0" y="0" width="400" height="200" />
          <rect
            width="100%"
            height="100%"
            fill="var(--bs-secondary-color)"
          ></rect>
        </svg>
        <h2 className="fw-normal">{info.title}</h2>
        <p className="card-text">{info.desc}</p>
        <p>
          <a className="btn btn-secondary" href="#">
            View details »
          </a>
        </p>
      </div>
    </>
  );
};
export default Card;
