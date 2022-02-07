import "./styles.css";
import Login from "./login";

var login = true;

export default function App() {
  return <div className="App">{login && <Login />}</div>;
}
