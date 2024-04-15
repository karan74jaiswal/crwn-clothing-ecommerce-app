import AuthenticationForm from "./AuthenticationForm";
import Button from "./Button";
import useReducers from "../hooks/reducers/useReducers";
import FileInput from "./FileInput";
import { useAuth } from "../contexts/AuthorizationContext";
function SigninForm() {
  const { signInWithGoogle, emailSignIn } = useAuth();
  const { signInFormFields, handleChange, signinFormReset } = useReducers();
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
      <FileInput
        label="Email"
        labelFor="signinEmail"
        type="email"
        value={signInFormFields.email}
        handleChange={handleChange}
      />
      <FileInput
        label="Password"
        labelFor="signinPassword"
        type="password"
        value={signInFormFields.password}
        handleChange={handleChange}
      />
      <div className="buttons-container">
        <Button type="submit">Sign In</Button>
        <Button
          type="button"
          onClick={handleGoogleSignin}
          className="google-sign-in"
        >
          Sign In With Google
        </Button>
      </div>
    </AuthenticationForm>
  );
}

export default SigninForm;
