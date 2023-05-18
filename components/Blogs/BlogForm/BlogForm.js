// AddBlog & EditBlog Form...
import {
  addBlogToDatabase,
  editBlogFromDatabase,
} from "../../../actions/blogs";
import { connect } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/router";
import { format } from "date-fns";

const BlogForm = ({ dispatch, blog }) => {
  const [title, setTitle] = useState(blog ? blog.title : "");
  const [body, setBody] = useState(blog ? blog.body : "");
  const [category, setCategory] = useState(blog ? blog.category : "");
  const [privatePost, setPrivatePost] = useState(
    blog ? blog.privatePost : false
  );

  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    // format:  year, month, hour, minute, second yyyy/MM/dd/HH/mm/ss
    // TODO: 14 ? 2 ? a.m ? p.m
    const date = format(new Date(), "yyyy/MM/dd/hh/mm/ss")
      .split("/")
      .map((x) => parseInt(x));
    date[1] = date[1] - 1; // Month return value a index
    if (!!blog) {
      dispatch(
        editBlogFromDatabase(blog.id, {
          privatePost,
          title,
          body,
          category,
          date,
        })
      );
      router.push("/profile");
    } else {
      dispatch(addBlogToDatabase({ privatePost, title, body, category, date }));
      router.push("/profile");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="enter title"
          />
        </div>
        <div>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="enter body"
          ></textarea>
        </div>
        <div>
          <label htmlFor="category">
            Category: &nbsp;
            <select
              id="category"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              name="category"
            >
              <option value={category === "" ? category : null}>
                {category == "" ? category : null}
              </option>
              <option value="science">Science</option>
              <option value="software">Software</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="privatePost">
            Private Blog
            <input
              type="checkbox"
              checked={privatePost}
              onChange={(e) =>
                e.target.checked ? setPrivatePost(true) : setPrivatePost(false)
              }
              id="privatePost"
            />
          </label>
        </div>
        <div>
          <button type="submit">Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default connect()(BlogForm);
