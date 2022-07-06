import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import DataContext from './context/DataContext';

const PostPage = () => {
  const { posts, handleDelete } = useContext(DataContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(post => (post.id).toString() === id);
  console.log(posts);
  return (
    <main className='PostPage'>
      <article className='post'>
          { post &&
            <>
              <h2>{ post.title }</h2>
              <p className='postDate'>{ post.datetime }</p>
              <p className='postBody'>{ post.body }</p>
              <Link to={`/edit/${post.id}`}>
                <button className='editButton'>Edit Post</button>
              </Link>
              <button onClick={() => handleDelete(post.id)}>
                Delete Post
              </button>
              <button onClick={() => navigate(-1)} style={{ marginLeft: '0.5rem' }}>
                Go Back
              </button>
            </>
          }
      </article>
    </main>
  )
}

export default PostPage