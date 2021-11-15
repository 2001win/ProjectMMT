export const addItem = product => {
  return {
    type: "ADD_ITEM",
    payload: product,
  };
};
export const delAllItem = product => {
  return {
    type: "DELETE_ALL_ITEM",
    payload: product,
  };
};

export const delItem = product => {
  return {
    type: "DELETE_ITEM",
    payload: product,
  };
};
