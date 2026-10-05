import PropTypes from "prop-types";
import "./Input.css";

function Input({
  label = "Name",
  placeholder = "Enter your name",
  value = "",
  state = "default",
  errorMessage = "",
  disabled = false,
  onChange,
}) {
  const inputId = `snapbook-input-${label.toLowerCase().replace(/\s+/g, "-")}`;

  const isError = state === "error" || Boolean(errorMessage);

  return (
    <div className="sb-input-group">
      <label className="sb-input-label" htmlFor={inputId}>
        {label}
      </label>

      <input
        id={inputId}
        className={`sb-input sb-input--${state}`}
        type="text"
        placeholder={placeholder}
        value={value}
        disabled={disabled || state === "disabled"}
        onChange={onChange}
        aria-invalid={isError}
        aria-describedby={isError ? `${inputId}-error` : undefined}
      />

      {isError && errorMessage && (
        <span id={`${inputId}-error`} className="sb-input-error">
          {errorMessage}
        </span>
      )}
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  state: PropTypes.oneOf([
    "default",
    "focus",
    "filled",
    "error",
    "disabled",
  ]),
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Input;