import { createStore } from "redux";
import songs from "./reducers/songs";

const store = createStore(songs);

export default store;
