import { useContext } from "react";
import { logIn, logOut } from "../../firebase";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function Auth() {
  const { user } = useContext(AppContext);
  return (
    <div className="Auth">
      {user ? (
        <span>
          {user.photoURL ? (
            <img className="photoURL" src={user.photoURL} alt={user.displayName} />
          ) : null}
          <button className="Sign" onClick={logOut}>
            Sign out
          </button>
        </span>
      ) : (
        <span>
          <button className="Sign" onClick={logIn}>
            Sign in
          </button>
        </span>
      )}
    </div>
  );
}
