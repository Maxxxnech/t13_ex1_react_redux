import { createStore } from "redux";

  const initialState = {
    name: "Paul",
    secondName: "Atreides",
  };

  function reducer(state, action) {
    switch (action.type) {
      case "CHANGE_NAME":
        return { ...state, name: action.payload };
      case "CHANGE_SECOND_NAME":
        return { ...state, secondName: action.payload };
      default:
        return state;
    }
  }

  const store = createStore(reducer, initialState);

  const changeName = {
    type: "CHANGE_NAME",
    payload: "Ivan",
  };

  const changeSecondName = {
    type: "CHANGE_SECOND_NAME",
    payload: "Ivanov",
  };

  console.log(store.getState());
  store.dispatch(changeName);
  console.log(store.getState());
  store.dispatch(changeSecondName);
  console.log(store.getState());


