import { useState } from "react";
import {} from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie"
import {useNavigate} from "react-router-dom"
function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  
  async function  handleSubmit(e) {
    
    
    

    const response = await axios.post("https://dummyjson.com/auth/login", {
      username : username,
      password : password
    }).catch((err)=>{
      console.log(err.message);
      return;
    })

    

    Cookies.set('token', response.data.token);
   
    navigate("/home")
    
    


  }
  return (
    <>
      <div className=" hero bg-gradient-to-r from-indigo-500    w-screen h-screen    ">
        <div className="z-10 bg-white shadow-lg rounded-md flex items-center justify-evenly flex-col  w-[400px] h-[400px]   ">
          <h1 className="text-lg font-semibold">Login</h1>
          <div className="flex gap-8 justify-evenly">
            
            <input
            placeholder="username"
              onChange={(e)=>{
                setUserName(e.target.value);

              }}
              className="w-[300px] rounded border bg-[#ebecf0] p-3 px-5 "
              id="username"
              type="text"
            />
          </div>
          <div className="flex gap-8 justify-evenly">
            
            <input
            placeholder="password"
              onChange={(e)=>{
                setPassword(e.target.value);
              }}
              className="w-[300px] rounded border bg-[#ebecf0] p-3 px-5 "
              type="text"
            />
          </div>
          <button className=" w-[300px] p-3 text-white bg-blue-700 content-center hover:bg-blue-400 hover:text-white  text-center border   rounded border-gray-400" onClick={handleSubmit}>Submit</button>
        </div>

        
      </div>
      
    </>
  );
}

export default Login;
