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