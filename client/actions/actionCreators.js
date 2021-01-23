//  Actions are object

// increment
export const increment = ()=>{
    return {
        type: 'INCREMENT',
        index
    }
}

// add comment
export const addComment = (postId, author, comment)=>{
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }

}

// remove comment
export const removeComment = (postId,i)=>{
    type: 'REMOVE_COMMENT',
    postId,
    i
}