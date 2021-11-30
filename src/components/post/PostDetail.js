import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { PostContext } from "./PostProvider"
import "./Post.css"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export const PostDetail = () => {
  const { myPosts, getMyPosts, deleteMyPost, getMyPostById } = useContext(PostContext)
  const [post, setPost] = useState({})
  const { myPostId } = useParams();
  const history = useHistory()

  // Get all saved movies, then find id of the specific movie on each detail page
  useEffect(() => {
    getMyPosts()
    const thisPost = myPosts.find(m => m.id === parseInt(myPostId))
    setPost(thisPost)
  }, [myPostId])

  // // Delete a movie from local database, then change page to My Movie list
  // const deleteMovie = () => {
  //   deleteMyMovie(movie)
  //     .then(() => {
  //       history.push("/movies")
  //     })
  // }

  // // Finds the movie object in local database, then allows user to edit by changing page to Edit Movie Form
  // const editMovie = (event) => {
  //   getMyMovieById(movie).then(() => {
  //     history.push(`/movies/edit/${event.target.id}`)
  //   })
  // }

  return (
    <>
      <Container className="detail text-center d-flex">
        <Card className="detail_card d-flex mx-auto" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <p>{post.content}</p>
            <p>{post.publication_date}</p>
            {/* <Button onClick={deleteMovie} variant="dark">Delete Movie</Button>
            <Button className="form_button" id={movie.id} onClick={editMovie} variant="dark">Edit Movie</Button> */}
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}