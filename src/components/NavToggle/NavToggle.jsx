import "./NavToggle.css";

function NavToggle({ callback }) {
  return (
    <button onClick={callback} className="NavToggle">
      <div className="line">Home</div>
      <div className="line">About</div>
      <div className="line">Contact</div>
      <div className="line">Deliver</div>
    </button>
  );
}

export default NavToggle;