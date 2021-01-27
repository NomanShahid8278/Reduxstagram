import React,{useRef} from 'react'
const Comments = ({postComments,params,addComment}) => {
    const authorRef = useRef(null);
    const commentRef = useRef(null);
    const handleSubmit = (e)=>{
        e.preventDefault()
        const author = authorRef.current.value
        const comment = commentRef.current.value
        const postId = params.postId
        addComment(author,comment,postId)
    }
    return(
        <div className="comments">
            {postComments.map((comment,index)=>{
                return(
                    <div className="comment" key={index}>
                        <p>
                            <strong>{comment.user}</strong>
                            {comment.text}
                            <button className="remove-comment">&times;</button>
                        </p>
                    </div>
                )
            })}
            <form className="comment-form" onSubmit={handleSubmit}>
                <input type="text" ref={authorRef} placeholder="author"/>
                <input type="text" ref={commentRef} placeholder="comment"/>
                <input type="submit" hidden/>
            </form>
        </div>
    )
}

export default Comments