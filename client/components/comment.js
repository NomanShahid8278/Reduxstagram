import React,{useRef} from 'react'
const Comments = ({postComments,params,addComment,removeComment}) => {
    const postId = params.postId
    const authorRef = useRef(null);
    const commentRef = useRef(null);
    const renderComments = (comment,index)=>{
        return(
            <div className="comment" key={index}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" onClick={()=>removeComment(postId,index)}>&times;</button>
                </p>
            </div>
        )
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        const author = authorRef.current.value
        const comment = commentRef.current.value
        addComment(postId,author,comment)
        authorRef.current.value = null
        commentRef.current.value = null
    }
    return(
        <div className="comments">
            {postComments.map(renderComments)}
            <form className="comment-form" onSubmit={handleSubmit}>
                <input type="text" ref={authorRef} placeholder="author"/>
                <input type="text" ref={commentRef} placeholder="comment"/>
                <input type="submit" hidden/>
            </form>
        </div>
    )
}

export default Comments