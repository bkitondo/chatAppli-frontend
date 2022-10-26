import '../styles/DisplayDiscussion.css'

const Welcome = ()=>{
    const userName = localStorage.getItem("userName")
    return(
        <div className="discussionPage">
            <h1 className="userNameWelcome" > bienvenu {userName} </h1>
        </div>
    )
}
export default Welcome