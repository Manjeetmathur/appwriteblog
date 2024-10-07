import React, { useEffect, useState } from 'react'
import {Container , PostForm } from "../components"
import appwriteSerice from "../appwrite/config"
import { useNavigate, useParams } from 'react-router-dom'
const EditPost = () => {
       const [post,setPosts] = useState(null)
       const {slug} = useParams()
       const navigate = useNavigate()
       
       useEffect(() => {
              if(slug){
                     appwriteSerice.getPosts(slug)
                     .then((post) =>{
                            if(post){
                                   setPosts(post)
                            }
                     })
              }
              else{
                     navigate('/')
              }
       },[slug,navigate])
  return (
    <div>
      <Container>
              <PostForm post={post}/>
      </Container>
    </div>
  )
}

export default EditPost
