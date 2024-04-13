import "./Button.scss";
function Button({ type, children, className }) {
  return (
    <button type={type} className={`button-container ${className || ""}`}>
      {children}
    </button>
  );
}

export default Button;
