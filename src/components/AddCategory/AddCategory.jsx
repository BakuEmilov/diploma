import { addDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { categoryCollection } from "../../firebase";
import { AppContext } from "../../App";

const AddCategory = () => {
   const { user } = useContext(AppContext);
   const [category, setCategory] = useState("");
   const [isSubmitting, setIsSubmitting] = useState(false);

   if (!user || !user.isAdmin) {
     return null;
   }

   function onChangeCategory(event) {
     setCategory(event.target.value);
   }

   function onAddCategory() {
     const name = category.trim();

     if (name.length < 5) {
       alert(
         "Please provide a category name with minimum length of 5 characters."
       );
      
       return;
     }

     setIsSubmitting(true);

     addDoc(categoryCollection, {
       name:name,
       slug: name.replaceAll(" ", "-").toLocaleLowerCase(),
     }).then(() => {
       setCategory("");
     }).finally(() => {
       setIsSubmitting(false);
     });
   }

   return (
     <div className="AddCategory">
       <input
         size="15"
         type="text"
         value={category}
         placeholder="Category name"
         onChange={onChangeCategory}
       />
       <button onClick={onAddCategory} disabled={isSubmitting}>
         +
       </button>
     </div>
   );
};

export default AddCategory;