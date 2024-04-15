import AuthenticationForm from "./AuthenticationForm";
import Button from "./Button";
import useReducers from "../hooks/reducers/useReducers";
import FileInput from "./FileInput";
import { useAuth } from "../contexts/AuthorizationContext";
function SignupForm() {
  const { emailSignup, addUser } = useAuth();
  const { signUpFormFields, handleChange, signupFormReset } = useReducers();
  const handleSignupFormSubmit = async function (e) {
    e.preventDefault();
    const { displayName, email, password, retypedPassword } = signUpFormFields;
    if (!displayName || !email || !password || !retypedPassword) return;
    if (!email.endsWith(".com") || !email.includes("@")) return;
    if (password.length < 4) return;
    if (password !== retypedPassword) return;
    try {
      const { user } = await emailSignup(email, password);
      await addUser(user, { displayName });
    } catch (err) {
      if (err.code === "auth/email-already-in-use")
        alert("Email already exists, Try to sign-in with right credentials");
      else {
        console.log(err.message);
      }
    }
    signupFormReset();
  };
  return (
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
      <div className="buttons-container">
        <Button type="submit">Sign up</Button>
      </div>
    </AuthenticationForm>
  );
}

export default SignupForm;
