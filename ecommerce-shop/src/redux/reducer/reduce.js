const addItem = [];

const itemReducer = (state = addItem, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (state.includes(action.payload) === false) {
        action.payload["quantity"] = 1;
        return [...state, action.payload];
      } else {
        action.payload["quantity"] += 1;
        return [...state];
      }

    case "DELETE_ITEM":
      if (state.includes(action.payload) === true) {
        action.payload["quantity"] -= 1;
        return (state = state.filter(x => {
          return x["quantity"] > 0;
        }));
      } else {
        return [...state];
      }
    case "DELETE_ALL_ITEM":
      return (state = state.filter(x => {
        return x.id !== action.payload.id;
      }));

    default:
      return state;
  }
};

export default itemReducer;
