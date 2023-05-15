import CategoryList from "../components/CategoryList/CategoryList";

export default function Home() {
  return (
    <div className="Home">
      <aside>
        <CategoryList />
      </aside>
      <h1>Home</h1>
      <p>This is my home page</p>
    </div>
  );
}