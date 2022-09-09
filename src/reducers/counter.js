const initialState = {
  count: 0,
  inputNumber: 0,
  buttonClicked: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        buttonClicked : state.buttonClicked + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        buttonClicked : state.buttonClicked + 1
      };
      
    case 'NUMBER_INPUT':
      return{
        ...state,
        count: parseInt(state.inputNumber),
        inputNumber: null,
        buttonClicked: (state.buttonClicked =0)
        
      };
      case 'NUMBER_CHANGE':
        return {
          ...state,
          inputNumber: action.number
          
        }
    default:
      return state;
  }
}

export default counterReducer;