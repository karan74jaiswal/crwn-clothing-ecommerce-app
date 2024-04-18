import { Form } from "./authenticationForm.styles.jsx";

function AuthenticationForm({ message, instruction, handleSubmit, children }) {
  return (
    <Form>
      <h2>{message}</h2>
      <p>{instruction}</p>
      <form onSubmit={handleSubmit}>{children}</form>
    </Form>
  );
}

export default AuthenticationForm;
