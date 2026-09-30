import PropTypes from "prop-types";
import "./Button.css";

function Button({
  label = "Book Now",
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  onClick,
}) {
  return (
    <button
      className={`sb-button sb-button--${variant} sb-button--${size}`}
      disabled={disabled || loading}
      onClick={onClick}
      type="button"
    >
      {loading ? "Booking..." : label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "ghost",
    "disabled",
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;