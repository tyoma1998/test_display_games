import { configureStore } from "@reduxjs/toolkit";
import { gamesReducer } from "./reducer";

export default configureStore({
  reducer: gamesReducer,
});
