import React, { useContext, useState } from "react";
import { addDoc } from "firebase/firestore";
import { categoryCollection } from "../../firebase";
import { AppContext } from "../../App";

export default function AddCategory() {
  const { user } = useContext(AppContext);
  const [category, setCategory] = useState("");
  if (!user || !user.isAdmin) {
    return null;
  }

  function onChangeCategory(event) {
    setCategory(event.target.value);
  }

  function onAddCategory() {
    const name = category.trim();
    if (name.length <= 5) {
      alert(
        "Plase provide a category name with minimum length of 5 characters"
      );
      return;
    }
    addDoc(categoryCollection, {
      name: name,
      slug: category.trim().replaceAll(" ", "-").toLocaleLowerCase(),
    }).then(() => {
      setCategory("");
    });
  }
  return (
    <div className="AddCategory">
      <input
        size="15"
        type="text"
        value={category}
        placeholder="Category Name"
        onChange={onChangeCategory}
      />
      <button onClick={onAddCategory}>+</button>
    </div>
  );
}
