import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1 className="Header">  
        <Link  className="Budget" to="/transactions">Budget App</Link>
      </h1>
      <button>
        <Link  className="button" to="/transactions/new">New transactions</Link>
      </button>
    </nav>
  );
}