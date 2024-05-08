function CommentsModal({ comments, openModal }) {
  return (
    <div className=''>
      {comments &&
        comments.map((comment) => (
          <Comment
            key={comment.id}
            username={comment.user_id}
            comment={comment.text}
          />
        ))}
    </div>
  )
}
export default CommentsModal
