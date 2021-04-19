
import Comments from './Comments.json'
import Post from './Post'

const Blog =()=>{

    return(
        <>
        <h1>My Blog</h1>
        {
        //    Comments.map(aPost=><Post key={aPost.id} name={aPost.name} email={aPost.email} body={aPost.body}/>)
           Comments.map(({id,...keys})=><Post key={id} {...keys}/>)
        }
       </>
        
    )

}

export default Blog