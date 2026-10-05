import PropTypes from "prop-types";
import "./Card.css";

function Card({
  name = "Rahul & Chandini",
  category = "Wedding",
  date = "30 Aug 2026",
  location = "Hyderabad",
  price = "₹1,75,000",
  selected = false,
}) {
  return (
    <article
      className={`sb-card ${selected ? "sb-card--selected" : ""}`}
    >
      <div className="sb-card-content">
        <span className="sb-card-category">{category}</span>

        <h3 className="sb-card-title">{name}</h3>

        <div className="sb-card-details">
          <p>
            <strong>Date:</strong> {date}
          </p>

          <p>
            <strong>Location:</strong> {location}
          </p>

          <p>
            <strong>Package:</strong> {price}
          </p>
        </div>
      </div>
    </article>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.string,
  price: PropTypes.string,
  selected: PropTypes.bool,
};

export default Card;