import { useContext } from "react";
import { AppContext } from "../../App";

export default function AddProduct() {
  const { user } = useContext(AppContext);

  if (!user || !user.isAdmin) {
    return null;
  }

  function onFormSubmit(event) {
    const data = new FormData(event.target);

    event.preventDefault();
    console.log(data.get("picture"));
  }

  return (
    <div className="AddProduct">
      <form onSubmit={onFormSubmit}>
        <h3>Create a new product</h3>
        <label>
          Name: <input type="text" name="name" required />
        </label>
        <label>
          Price: <input type="number" name="price" min={0} required />
        </label>
        <label>
          Picture: <input type="file" name="picture" required />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
