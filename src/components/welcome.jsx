import React from "react"
import "../styles/DisplayDiscussion.css"

const Welcome = () => {
  const userName = localStorage.getItem("userName")
  return (
    <div className="discussionPage">
      <h1 className="userNameWelcome">welcome {userName}</h1>
      <p className="start_discussion">
        start the discussion by choosing another connected person
      </p>
    </div>
  )
}
export default Welcome
