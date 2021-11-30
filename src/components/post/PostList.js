import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { PostContext } from "./PostProvider"
import "./Post.css"
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export const PostList = (props) => {
  const { getMyPosts, myPosts } = useContext(PostContext)

  useEffect(() => {
    getMyPosts()
  }, [])

  return (
    <>
      <Container className="text-center">
        <h1 className="page_title">My Posts</h1>
      </Container>
      <div className="movie_list text-center">
        {
          myPosts.map(post =>
            <Card className="movie_card" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <p>{post.content}</p>
                <p>{post.publication_date}</p>
                <Link className="text-black" to={`/posts/detail/${post.id}`}>Details</Link>
              </Card.Body>
            </Card>
          )
        }
      </div>
    </>
  )
}
