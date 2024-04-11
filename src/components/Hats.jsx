import { useParams } from "react-router-dom";
function Hats() {
  const { category } = useParams();
  return (
    <div>
      <h1>This is {category} component</h1>
    </div>
  );
}

export default Hats;
