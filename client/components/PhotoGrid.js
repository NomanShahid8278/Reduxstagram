import React from 'react'
import Photo from './Photo'
import { Link } from 'react-router'
const PhotoGrid = (props)=>{
    return(
        <div className="photo-grid">
            {props.posts.map((post,index)=><Photo increment = {props.increment} post = {post} key={index} index={index} comments={props.comments}/>)}
        </div>
    )
}
export default PhotoGrid