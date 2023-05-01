import { useContext } from "react";
import { AppContext } from "../../App";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

export default function DeleteCategory({ category }) {
  const { user, products } = useContext(AppContext);

  if (!user || !user.isAdmin) {
    return null;
  }

  function onDeleteClick() {
    const count = Object.values(products).filter(
      (product) => product.category === category.id
    ).length;

    if (count > 0) {
      alert(
        "This category has existing products. Please delete them before deleting a category."
      );

      return;
    }

    if (!window.confirm("Are you sure you want to delete this category?")) {
      return;
    }

    deleteDoc(doc(db, "categories", category.id));
  }

  return (
    <button className="DeleteCategory" onClick={onDeleteClick}>
      <span className="DeleteIcon">-</span>
    </button>
  );
}
