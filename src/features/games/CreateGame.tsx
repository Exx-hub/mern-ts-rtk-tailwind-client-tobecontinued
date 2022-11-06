import React, { useState } from "react";
import { useAppDispatch } from "../../app/store";
import { CreateGameInfo } from "../../interfaces/Game";
import { createGame } from "./gamesSlice";

function CreateGame() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [fieldNumber, setFieldNumber] = useState(0);

  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      createGame({
        name,
        address,
        numberOfPeople,
        fieldNumber,
      })
    );
  };

  return (
    <div>
      <h1>CreateGame</h1>
      <form
        onSubmit={onSubmit}
        className="flex flex-col justify-center items-start"
      >
        <label htmlFor="name">NAME</label>
        <input
          className="border border-solid border-black"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
        />
        <label htmlFor="name">ADDRESS</label>
        <input
          className="border border-solid border-black"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          name="address"
        />
        <label htmlFor="name">NUMBER OF PEOPLE</label>
        <input
          className="border border-solid border-black"
          type="number"
          value={numberOfPeople}
          onChange={(e) => setNumberOfPeople(+e.target.value)}
          name="numberOfPeople"
        />
        <label htmlFor="name">FIELD NUMBER</label>
        <input
          className="border border-solid border-black"
          type="number"
          value={fieldNumber}
          onChange={(e) => setFieldNumber(+e.target.value)}
          name="fieldNumber"
        />
        <button className="text-white border border-solid border-cyan-700 bg-black rounded-sm p-3 mt-3">
          Create Game
        </button>
      </form>
    </div>
  );
}

export default CreateGame;
