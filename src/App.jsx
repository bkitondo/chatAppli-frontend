// import DispayUsers from './components/DisplayUsers';
// import User from './components/User';
// import DisplayDiscussion from './components/DisplayDiscussion';
// import "./styles/App.css"
// import { useEffect } from "react";
import Login from "./pages/Login";
// import axios from "axios"

function App() {

  // useEffect(()=>{
  //   axios.post("http://localhost:8080/api/auth/signup", {
  //       name: "bleudy",
  //       phone: 123456789
  //   },{
  //       headers: {
  //           "Content-Type": "application/json"
  //       }
  //   })
  //   .then((data)=>{
  //       console.log(data);
  //   })
  //   .catch((error)=>{
  //       console.log(error);
  //   })
  //   axios({
  //     method: "get",
  //     url: "http://localhost:8080/api/auth/signup",
  //     headers: {
  //     }
  //   });
  // }, [])

  return (
    <div  >
      {/* <User/>
      <DispayUsers/>
      <DisplayDiscussion/> */}
      <Login/>

    </div>
  );
}

export default App;
