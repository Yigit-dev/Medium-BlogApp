// State
const authState = {}

// REDUCERS
const authReducer = (state = authState, action) => {
  switch(action.type){
    case 'LOGIN'  : return {uid: action.uid}
    case 'LOGOUT' : return {}
    default: return state
  }
}

export default authReducer
