import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config"
import { Container,PostCard } from '../components'
const Home = () => {
       const [posts , setPosts] = useState([])

       useEffect(() => {
              appwriteService.getPosts()
              .then((posts) => {
                     if(posts){
                            setPosts(posts.documents)
                     }
              })
       },[])

       if(posts.length === 0){
              return (
                     <div className="">
                            <Container>
                                   <div className="">
                                          <div className="">
                                                 <h1>Login to read Posts</h1>
                                          </div>
                                   </div>
                            </Container>
                     </div>
              )
       }
  return (
    <div>
      <div className="">
              <Container>
                     <div className="">
                            {
                                   posts.map((post) => (
                                          <div className="" key={post.$id}>
                                                 <PostCard {...post}/>
                                          </div>
                                   ))
                            }
                     </div>
              </Container>
      </div>
    </div>
  )
}

export default Home
