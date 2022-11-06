import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { getGames } from "./gamesSlice";

function GamesPage() {
  const dispatch = useAppDispatch();

  const getAllGames = () => dispatch(getGames());

  const { games } = useAppSelector((state) => state.gamesState);

  console.log(games);
  return (
    <div>
      <h2>GamesPage</h2>
      <button
        className="text-white border border-solid border-cyan-700 bg-black rounded-sm p-3"
        onClick={getAllGames}
      >
        GET GAMES
      </button>
      {games?.map((game) => (
        <h2 key={game._id}>{game.name}</h2>
      ))}
    </div>
  );
}

export default GamesPage;
