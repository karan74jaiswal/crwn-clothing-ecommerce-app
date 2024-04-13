import "./Button.scss";
function Button({ type, children, className, onClick }) {
  return (
    <button
      type={type}
      className={`button-container ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
