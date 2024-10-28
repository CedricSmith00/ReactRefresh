/* eslint-disable react/prop-types */
function Post({url,author}) {
    return (
        <>
        <img src={url} width ="60%" />
        <br></br>
        <h2>{author}</h2>
        </>
    )
}

export default Post;