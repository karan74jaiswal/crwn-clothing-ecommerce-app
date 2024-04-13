import AuthenticationForm from "./AuthenticationForm";
import Button from "./Button";
import useReducers from "../hooks/reducers/useReducers";
import FileInput from "./FileInput";
import { useAuth } from "../contexts/AuthorizationContext";
function SigninForm() {
  const {
    signInWithGoogle,
    setUserAuthObject,
    setUserData,
    getUserData,
    emailSignIn,
  } = useAuth();
  const { signInFormFields, handleChange, signinFormReset } = useReducers();
  const handleSigninFormSubmit = async function (e) {
    e.preventDefault();
    const { email, password } = signInFormFields;
    if (!email || !password) return;
    if (!email.endsWith(".com") || !email.includes("@")) return;
    if (password.length < 4) return;
    try {
      const userAuth = await emailSignIn(email, password);
      if (userAuth) signinFormReset();
      setUserAuthObject(userAuth);
      const data = await getUserData(userAuth);
      setUserData(data);
    } catch (err) {
      if (err.code === "auth/invalid-credential")
        alert("Invalid Credentials, Try Again");
      else {
        console.log(err.message);
      }
      console.log(err);
    }
  };

  const handleGoogleSignin = (e) => {
    e.preventDefault();
    signInWithGoogle();
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
      <div>
        <Button type="submit">Sign In</Button>
        <Button onClick={handleGoogleSignin} className="google-sign-in">
          Sign In With Google
        </Button>
      </div>
    </AuthenticationForm>
  );
}

export default SigninForm;
