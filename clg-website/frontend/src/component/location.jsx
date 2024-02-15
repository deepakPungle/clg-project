import "bootstrap/dist/css/bootstrap.min.css";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
const Location = () => {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  return (
    <>
      <div className="d-flex">
        <div className="card-text">
          <a href="#" className="text-dark text-decoration-none">
            {" "}
            <p style={{ fontSize: "13px", fontWeight: "bold" }}>
              Nagewadi, Jalna - Chhatrapati Sambhaji Nagar, <br />
              Near Toll Plaza Jalna - 431203
            </p>
          </a>
        </div>
        <div>
          <a
            href="#"
            className="text-dark"
            data-bs-title="Government Polytechnic Jalna" // Tooltip title
          >
            <AddLocationAltIcon style={{ fontSize: 35 }} />{" "}
            {/* Use style prop */}
          </a>
        </div>
      </div>
    </>
  );
};
export default Location;
