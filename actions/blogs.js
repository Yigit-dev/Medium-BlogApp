import database from '../firebase/firebaseConfig'

// ACTIONS

// ADD BLOG FOR REDUCER
export const addBlog = (blog) => ({
  type: 'ADD_BLOG',
  blog
})
// ADD BLOG FOR DATABASE THEN ADD BLOG
export const addBlogToDatabase = (blogData = {}) => {
  return (dispatch,getState) => {
    const uid = getState().auth.uid
    database.ref('blogs').push({uid,...blogData})
    .then(response => {
      dispatch(addBlog({
        uid,
        id: response.key,
        ...blogData
      }))
    })
  }
}

// REMOVE BLOG FOR REDUCER
export const removeBlog = (id) => ({
  type: 'REMOVE_BLOG',
  id
})
// REMOVE BLOG FOR DATABASE THEN REDUCER
export const removeBlogFromDatabase = (id) => {
  return (dispatch) => {
    return database.ref(`blogs/${id}`).remove()
      .then(() => {
        dispatch(removeBlog(id))
      })
  }
}

// EDIT BLOG FOR REDUCER
export const editBlog = (id,updates) => ({
  type: 'EDIT_BLOG',
  id,
  updates
})
// EDIT BLOG FOR DATABASE
export const editBlogFromDatabase = (id,updates = {}) => {
  return dispatch => (
    database.ref(`blogs/${id}`).update(updates)
      .then(() => {
        dispatch(editBlog(id,updates))
      })
  )
}

// LIST BLOG FOR REDUCER
export const listBlog = blogs => ({
  type: 'LIST_BLOG',
  blogs
})

// LIST BLOG FOR DATABASE
export const listBlogFromDatabase = () => {
  return (dispatch,getState) => {
    const uid = getState().auth.uid
    return database.ref('blogs').once('value')
      .then(snapshot => {
        const blogs = []
        snapshot.forEach(blog => {
          const result = blog.val()
          if(result.uid === uid){
            blogs.push({
              id: blog.key,
              ...result
            })
          }
        })
        dispatch(listBlog(blogs))
      })
  }
}

// PUBLIC LIST BLOG FOR REDUCER
export const publicBlog = blogs => ({
  type: 'PUBLIC_BLOG',
  blogs
})

// PUBLIC LIST BLOG FOR DATABASE
export const publicBlogFromDatabase = () => {
  return (dispatch) => {
    return database.ref('blogs').once('value', snapshot => {
      const blogs = []
      snapshot.forEach(blog => {
        const result = blog.val()
        if(result.privatePost === false){
          blogs.push({
            id: blog.key,
            ...result
          })
        }
      })
      dispatch(publicBlog(blogs))
    })
  }
}