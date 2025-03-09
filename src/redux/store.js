// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

const contactsPersisted = persistReducer(persistConfig, contactsReducer);

const rootReducer = {
  contacts: contactsPersisted,
  filters: filtersReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);
