import React ,{useState,useEffect} from 'react'
import axios from 'axios'

const Feed = () => {

    const [posts,setPosts] = useState([{
        _id:"1",
        image:"https://tse4.mm.bing.net/th/id/OIP.ayACpdslq2Oq9hSUQnfMWQHaF1?r=0&rs=1&pid=ImgDetMain&o=7&rm=3 ",
        caption:"Beautiful scenery"
    }])

    useEffect(()=>{

        axios.get("http://127.0.0.1:3000/posts")
        .then((res)=>{
            setPosts(res.data.posts)
        })
    },[])

  return (
    <div>
      <section className='feed-section'>
        {
            posts.length>0?(
                posts.map((post)=>(
                    <div key={post._id} className='post-card'>
                        <img src={post.image} alt={post.caption}/>
                        <p>{post.caption}</p>
                    </div>
                ))
            ):(
                <h1>No posts available</h1>
            )
        }
      </section>
    </div>
  )
}
export default Feed


