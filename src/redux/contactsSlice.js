import { createSlice } from "@reduxjs/toolkit";
import intitialContacts from "../data/contacts.json";

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: {
    items: intitialContacts,
  },
  // Об'єкт редюсерів
  reducers: {
    addContact(state, { payload }) {
      state.items.push(payload);
    },
    deleteContact(state, { payload }) {
      const index = state.items.findIndex((task) => task.id === payload);
      state.items.splice(index, 1);
    },
  },
});

// Генератори екшенів
export const { addContact, deleteContact } = contactsSlice.actions;

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;

// Selector
export const selectContacts = (state) => state.contacts.items;
