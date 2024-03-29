// State
const blogState = []

// REDUCERS
const blogReducer = (state = blogState, action) => {
  switch (action.type) {
    case 'PUBLIC_BLOG': return action.blogs.filter(blog => !blog.privatePost)
    case 'LIST_BLOG': return action.blogs
    case 'ADD_BLOG' : return [...state,action.blog]
    case 'REMOVE_BLOG': return state.filter(blog => {return blog.id !== action.id})
    case 'EDIT_BLOG': return state.map(blog => {
      if(blog.id !== action.id){
        return blog
      } else {
        return {
          ...blog,
          ...action.updates
        }
      }
    })
    default: return state 
  }
}

export default blogReducer