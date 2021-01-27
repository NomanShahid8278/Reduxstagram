import React from 'react'
import Photo from './Photo'
import Comments from './comment'
import { Link } from 'react-router'
const Single = (props)=>{
    const index= props.posts.findIndex((post)=> post.code === props.params.postId)
    const post = props.posts[index]
    const postComments = props.comments[props.params.postId] || []
    return(
        <div className="single-photo">
             <Photo index={index} post={post} {...props}/>
             <Comments postComments={postComments} {...props}/>
        </div>
    )
}
export default Single