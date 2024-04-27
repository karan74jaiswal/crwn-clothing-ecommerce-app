import AuthenticationForm from "./AuthenticationForm";
import Button from "./Button";
import useSignupReducer from "../reducers/signupReducer";
import FormInput from "./FormInput";
import { emailSignup, addUser } from "../utils/firebase";
function SignupForm() {
  const { signUpFormFields, handleChange, signupFormReset } =
    useSignupReducer();
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
      <FormInput
        label="Display Name"
        labelFor="display-name"
        type="text"
        value={signUpFormFields.displayName}
        handleChange={handleChange}
      />
      <FormInput
        label="Email"
        labelFor="signupEmail"
        type="email"
        value={signUpFormFields.email}
        handleChange={handleChange}
      />
      <FormInput
        label="Password"
        labelFor="signupPassword"
        type="password"
        value={signUpFormFields.password}
        handleChange={handleChange}
      />
      <FormInput
        label="Retype Password"
        labelFor="retypedPassword"
        type="password"
        value={signUpFormFields.retypedPassword}
        handleChange={handleChange}
      />
      {/* <div className="buttons-container"> */}
      <Button type="submit">Sign up</Button>
      {/* </div> */}
    </AuthenticationForm>
  );
}

export default SignupForm;
