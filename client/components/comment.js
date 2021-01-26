import React,{useRef} from 'react'
const Comments = ({postComments}) => {
    const author = React.useRef(null);
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log('Submitted')
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
                <input type="text" ref={author} placeholder="author"/>
                {/* <input type="text" ref="comment" placeholder="comment"/> */}
                <input type="submit" hidden/>
            </form>
        </div>
    )
}

export default Comments