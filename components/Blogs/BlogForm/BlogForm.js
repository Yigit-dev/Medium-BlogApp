import { addBlogToDatabase } from "../../../actions/blogs"
import { connect } from 'react-redux'
import { useState } from "react"

const BlogForm = ({dispatch}) => {

  const [title,setTitle] = useState('')
  const [body,setBody]   = useState('')

  const onSubmit = e => {
    e.preventDefault()
    dispatch(addBlogToDatabase({title,body}))
  }
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="enter title"/>
        </div>
        <div>
          <textarea value={body} onChange={e => setBody(e.target.value)}  placeholder="enter body"></textarea>
        </div>  
        <div>
          <button type="submit">Save Changes</button>
        </div>
      </form>    
    </div>
  )
}

export default connect()(BlogForm)
