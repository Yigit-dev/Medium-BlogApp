import { useState } from "react"
import { connect } from "react-redux"

const DetailsBlog = ({blog}) => {


  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>

    </div>
  )
}

const mapStateToProps = (state, {id}) => ({
  blog: state.blogs.find(blog => blog.id === id)
})

export default connect(mapStateToProps)(DetailsBlog)