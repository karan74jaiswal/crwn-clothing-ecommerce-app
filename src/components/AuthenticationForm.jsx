import "../components/AuthenticationForm.scss";

function AuthenticationForm({ message, instruction, handleSubmit, children }) {
  return (
    <div>
      <h2>{message}</h2>
      <p>{instruction}</p>
      <form onSubmit={handleSubmit}>{children}</form>
    </div>
  );
}

export default AuthenticationForm;
