import { useMatch } from "react-router-dom";
import NotFound from "./NotFound";

export default function Category() {
  const { params } = useMatch("/categories/:slug");

  const categories = [
    { id: 1, name: "hats", slug: "hats" },
    { id: 2, name: "backpack", slug: "backpack" },
    { id: 3, name: "tracksuits", slug: "tracksuits" },
    { id: 4, name: "sneakers", slug: "sneakers" },
  ];

  const category = categories.find(
    (category) => category.slug === params.slug
  );

  if (!category) {
    return <NotFound />
  }

  return (
    <div className="Category">
      <h1>{category.name}</h1>
    </div>
  );
}