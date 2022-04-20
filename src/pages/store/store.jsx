import { configureStore } from "@reduxjs/toolkit";
import searchResultSlice from "./searchResultSlice";

export default configureStore({
  reducer: {
    searchResult: searchResultSlice
  }
});
