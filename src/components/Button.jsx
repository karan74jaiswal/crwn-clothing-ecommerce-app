import {
  ButtonContainer,
  GoogleSigninButton,
  InvertedButton,
} from "./button.styles";

const getButton = (className) =>
  className === "google-sign-in"
    ? GoogleSigninButton
    : className === "inverted"
    ? InvertedButton
    : ButtonContainer;

function Button({ type, children, className, onClick }) {
  const CustomButton = getButton(className);
  return (
    <CustomButton type={type} onClick={onClick}>
      {children}
    </CustomButton>
  );
}

export default Button;
