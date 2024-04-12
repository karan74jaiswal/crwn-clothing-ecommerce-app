import { useState } from "react";
import { useAuth } from "../contexts/AuthorizationContext";
import { getUserData } from "../utils/firebase";

function SignupForm() {
  const { emailSignup, addUser } = useAuth();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");

  const resetFormFields = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setRetypedPassword("");
  };

  const handleFormSubmit = async function (e) {
    e.preventDefault();
    if (!displayName || !email || !passWord || !retypedPassword) return;
    if (!email.endsWith(".com") || !email.includes("@")) return;
    if (passWord.length < 4) return;
    if (passWord !== retypedPassword) return;
    try {
      const userAuth = await emailSignup(email, passWord, { displayName });
      await addUser(userAuth, { displayName });
    } catch (err) {
      if (err.code === "auth/email-already-in-use")
        alert("Email already exists, Try to sign-in with right credentials");
      else {
        console.log(err.message);
      }
    }
    resetFormFields();
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="display-name">Display Name</label>
      <input
        type="text"
        required
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        id="display-name"
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="yourmail@examplemail.com"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="email"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        required
        value={passWord}
        onChange={(e) => setPassword(e.target.value)}
        id="password"
      />
      <label htmlFor="confirm-password">Retype Password</label>
      <input
        type="password"
        required
        id="confirm-password"
        value={retypedPassword}
        onChange={(e) => setRetypedPassword(e.target.value)}
      />
      <button type="submit">Sign up</button>
    </form>
  );
}

export default SignupForm;
