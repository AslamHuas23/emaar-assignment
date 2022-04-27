const initialState = {
  users: []
}

export const userReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {

    case 'UPDATE_USER_ASYNC':
      console.log("UPDATE_USER_ASYNC called")
      return {
        ...state,
        users: [...state.users,...payload]
      }

    default:
      return state
  }
}

export default userReducer
