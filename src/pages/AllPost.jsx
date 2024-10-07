import React, { useEffect, useState } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config"
const AllPost = () => {
       const [posts,setPosts] = useState([])

       useEffect(() => {},[])

       appwriteService.getPosts([])
       .then((posts) => {
              if(posts){
                     setPosts(posts.documents)
              }
       })
  return (
    <div>
       <Container>
              <div className="">
                     {posts.map((post) => (
                            <div className="" key={post.$id}>
                                   <PostCard post={post}/>
                            </div>
                     ))}
              </div>
       </Container>
    </div>
  )
}

export default AllPost
