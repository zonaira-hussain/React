
const Post =(props)=>{

    const {name,email,body} = props;

    return(
        <>
        <h3>{name}</h3>
        <p>email:{email}</p>
        <p>{body}</p>
        </>
    )

}

export default Post