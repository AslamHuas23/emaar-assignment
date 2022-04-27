const initialState = {
    counter: 0
  }
  
  export const counterReducer = (state = initialState, action) => {
    const { payload } = action
    switch (action.type) {
      case 'INCREASE':
        return {
          ...state,
          counter: state.counter + 1
        }
  
      case 'DECREASE':
        return {
            ...state,
            counter: state.counter - 1
        }
  
      default:
        return state
    }
  }
  