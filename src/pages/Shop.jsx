import { useAuth } from "../contexts/AuthorizationContext";
function Shop() {
  const { userData } = useAuth();
  console.log(userData);
  return (
    <h1>
      Hello, My name is {userData?.email} and this is my This is Shop page
    </h1>
  );
}

export default Shop;
