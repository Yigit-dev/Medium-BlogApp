// State
const blogState = []

// REDUCERS
const blogReducer = (state = blogState, action) => {
  switch (action.type) {
    case 'ADD_BLOG' : return [...state,action.blog]
    case 'LIST_BLOG': return action.blogs
    default: return state 
  }
}

export default blogReducer