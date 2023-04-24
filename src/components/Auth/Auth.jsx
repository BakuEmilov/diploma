import { useContext } from "react";
import { logIn, logOut } from "../../firebase";
import { AppContext } from "../../App";
import "./Auth.css"

export default function Auth() {
  const { user } = useContext(AppContext);

  return (
    <div className="Auth">
      {!user ? <button onClick={logIn}>Sign in</button> : null}
      {user ? <span>{user.displayName}</span> : null}
      {user ? <button onClick={logOut}>Sign out</button> : null}
    </div>
  );
}