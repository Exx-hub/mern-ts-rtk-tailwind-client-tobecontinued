import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { CreateGameInfo, Game } from "../../interfaces/Game";

interface GameState {
  games: Game[] | null;
  singleGame: Game | null;
  loading: boolean;
  error: boolean;
}

const initialState: GameState = {
  games: [],
  singleGame: null,
  loading: false,
  error: false,
};

// async thunk actions => gets data from backend or api

export const getGames = createAsyncThunk(
  "games/getGames",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:8080/api/games");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createGame = createAsyncThunk(
  "games/createGame",
  async (gameInfo: CreateGameInfo, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/games",
        gameInfo
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const gameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGames.pending, (state) => {
        state.loading = true;
      })
      .addCase(getGames.fulfilled, (state, action) => {
        state.loading = false;
        state.games = action.payload.data;
      })
      .addCase(getGames.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default gameSlice.reducer;
