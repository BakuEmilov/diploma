import { useContext } from "react";
import { signIn, signOff } from "../../firebase";
import { AppContext } from "../../App";

export default function Auth() {
  const { user } = useContext(AppContext);

  return (
    <div className="Auth">
      {!user ? <button onClick={signIn}>Sign in</button> : null}
      {user ? <span>{user.displayName}</span> : null}
      {user ? <button onClick={signOff}>Sign out</button> : null}
    </div>
  );
}