import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthorizationContext";
import { useEffect } from "react";
import AuthenticationForm from "../components/AuthenticationForm";
import useReducers from "../hooks/reducers/useReducers";
import FileInput from "../components/FileInput";
import Button from "../components/Button";
// import "../components/AuthenticationForm.scss";

function Signin() {
  const {
    signInWithGoogle,
    userAuthObject,
    setUserAuthObject,
    setUserData,
    signUserOut,
    auth,
    addUser,
    getUserData,
    getRedirectAuthResult,
    emailSignup,
    emailSignIn,
  } = useAuth();
  const navigate = useNavigate();
  const {
    signInFormFields,
    signUpFormFields,
    handleChange,
    signupFormReset,
    signinFormReset,
  } = useReducers();

  useEffect(() => {
    if (!userAuthObject) {
      const fetchResult = async () => {
        const userAuth = await getRedirectAuthResult();
        if (!userAuth) return;
        setUserAuthObject(userAuth);
        const userInfo = await getUserData(userAuth);
        setUserData(userInfo);
        console.log(userAuthObject);
      };
      fetchResult();
    }
  }, [
    auth,
    getRedirectAuthResult,
    userAuthObject,
    setUserAuthObject,
    getUserData,
    setUserData,
  ]);

  const logGoogleUser = async function () {
    await signInWithGoogle();
  };

  const handleSignupFormSubmit = async function (e) {
    e.preventDefault();
    const { displayName, email, password, retypedPassword } = signUpFormFields;
    if (!displayName || !email || !password || !retypedPassword) return;
    if (!email.endsWith(".com") || !email.includes("@")) return;
    if (password.length < 4) return;
    if (password !== retypedPassword) return;
    try {
      const userAuth = await emailSignup(email, password, { displayName });
      await addUser(userAuth, { displayName });
    } catch (err) {
      if (err.code === "auth/email-already-in-use")
        alert("Email already exists, Try to sign-in with right credentials");
      else {
        console.log(err.message);
      }
    }
    signupFormReset();
  };

  // TODO: Make a Email and Password Signin Component and implement that functionality in the app
  const handleSigninFormSubmit = async function (e) {
    e.preventDefault();
    const { email, password } = signInFormFields;
    if (!email || !password) return;
    if (!email.endsWith(".com") || !email.includes("@")) return;
    if (password.length < 4) return;
    try {
      const userAuth = await emailSignIn(email, password);
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
    if (useAuth) {
      signinFormReset();
      navigate("/");
    }
  };

  return (
    <div>
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
          <Button onClick={logGoogleUser} className="google-sign-in">
            Sign In With Google
          </Button>
        </div>

        {/* <button onClick={!userAuthObject ? logGoogleUser : signUserOut}>
          {!userAuthObject ? "Sign in with Google" : "Sign Out"}
        </button> */}
      </AuthenticationForm>
      <AuthenticationForm
        message="I do not have a account"
        instruction="Sign up with your email and password"
        handleSubmit={handleSignupFormSubmit}
      >
        <FileInput
          label="Display Name"
          labelFor="display-name"
          type="text"
          value={signUpFormFields.displayName}
          handleChange={handleChange}
        />
        <FileInput
          label="Email"
          labelFor="signupEmail"
          type="email"
          value={signUpFormFields.email}
          handleChange={handleChange}
        />
        <FileInput
          label="Password"
          labelFor="signupPassword"
          type="password"
          value={signUpFormFields.password}
          handleChange={handleChange}
        />
        <FileInput
          label="Retype Password"
          labelFor="retypedPassword"
          type="password"
          value={signUpFormFields.retypedPassword}
          handleChange={handleChange}
        />
        <Button type="submit">Sign up</Button>
      </AuthenticationForm>
    </div>
  );
}

export default Signin;
