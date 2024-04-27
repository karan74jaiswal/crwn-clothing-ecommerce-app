import AuthenticationForm from "./AuthenticationForm";
import Button from "./Button";
import useSigninReducer from "../reducers/signinReducer";
import FormInput from "./FormInput";
import { ButtonsContainer } from "./authenticationForm.styles";
import { signInWithGoogle, emailSignIn } from "../utils/firebase";
function SigninForm() {
  const { signInFormFields, handleChange, signinFormReset } =
    useSigninReducer();
  const handleSigninFormSubmit = async function (e) {
    e.preventDefault();
    const { email, password } = signInFormFields;
    if (!email || !password) return;
    if (!email.endsWith(".com") || !email.includes("@")) return;
    if (password.length < 4) return;
    try {
      await emailSignIn(email, password);
      signinFormReset();
    } catch (err) {
      if (err.code === "auth/invalid-credential")
        alert("Invalid Credentials, Try Again");
      if (err.code === "auth/user-not-found")
        alert("User with this email Not Found");
      if (err.code === "auth/wrong-password")
        alert("Invalid Password, Try Again");
      else {
        console.log(err.message);
      }
      console.log(err);
    }
  };

  const handleGoogleSignin = async (e) => {
    e.preventDefault();
    await signInWithGoogle();
  };

  return (
    <AuthenticationForm
      message="I already have an account"
      instruction="Sign in with your email and password"
      handleSubmit={handleSigninFormSubmit}
    >
      <FormInput
        label="Email"
        labelFor="signinEmail"
        type="email"
        value={signInFormFields.email}
        handleChange={handleChange}
      />
      <FormInput
        label="Password"
        labelFor="signinPassword"
        type="password"
        value={signInFormFields.password}
        handleChange={handleChange}
      />
      <ButtonsContainer>
        <Button type="submit">Sign In</Button>
        <Button
          type="button"
          onClick={handleGoogleSignin}
          className="google-sign-in"
        >
          Sign In With Google
        </Button>
      </ButtonsContainer>
    </AuthenticationForm>
  );
}

export default SigninForm;
