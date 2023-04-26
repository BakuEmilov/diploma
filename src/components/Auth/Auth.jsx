import { useContext } from "react";
import { logIn, logOut } from "../../firebase";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export default function Auth() {
  const { user } = useContext(AppContext);

  return (
    <div className="Auth">
      {user ? (
        <span>
          Hello <Link to="/orders">{user.displayName}</Link>!
          <button onClick={logOut}>Sign out</button>
        </span>
      ) : (
        <span>
          Hello guest!
          <button onClick={logIn}>Sign in</button>
        </span>
      )}
    </div>
  );
}