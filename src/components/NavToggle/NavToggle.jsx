import "./NavToggle.css";

function NavToggle({ callback }) {
  return (
    <button onClick={callback} className="NavToggle">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>                
    </button>
  );
}

export default NavToggle;