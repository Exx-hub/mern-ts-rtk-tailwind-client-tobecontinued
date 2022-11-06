import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-teal-600 w-full">
      <div className=" flex justify-between w-4/5 mx-auto p-4">
        <h1>GAME.HUB</h1>

        <ul className="flex gap-8">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/create">CREATE GAME</Link>
          </li>
          <li>
            <Link to="/edit">EDIT GAME</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
