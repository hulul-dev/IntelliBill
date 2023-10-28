import React, { useState } from 'react';
import CommonAPISelect from '../CommonAPISelect'

const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const LoginFunction = () => {
    if (!userName || !password) {
      alert('All field are mandatory')
      return false
    }
    let url ='http://localhost:3000/api/login';
    let params = {
      "data" : {
        "username": userName,
        "password": password
      }
    }
    CommonAPISelect(url, params)
    .then(res => {
      const result = res.Output.status
      if(result.code == 200) {
        if (result.message == 'Login Successfully') {
          alert(result.message)
        }else {
          alert(result.message)
        }
      }else {
        alert(res.Output.error.message)
      }
    })

  }


  return (
    <div className='login-mainCointain' style={{margin: '-32px'}}> 
      <div className="bg-gray-100 min-h-screen flex justify-center items-center overflow-hidden">
        <div className="w-1/2 lg:w-full h-screen hidden lg:block">
          <img
            src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat"
            alt="Placeholder Image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full lg:w-1/2 p-8">
          <h1 className="text-2xl font-semibold mb-4">Login</h1>
          {/* <form> */}
      {/* <!-- Username Input --> */}
      <div className="mb-4">
        <label for="username" className="block text-gray-600">Username</label>
        <input 
        type="text" 
        id="username" 
        name="username"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
         className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          
          />
      </div>
      {/* <!-- Password Input --> */}
      <div className="mb-4">
        <label for="password" className="block text-gray-600">Password</label>
        <input 
        type="password" 
        id="password"
         name="password"
         onChange={(e) => setPassword(e.target.value)}
         value={password}
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
          
          />
      </div>
      {/* <!-- Remember Me Checkbox --> */}
      <div className="mb-4 flex items-center">
        <input type="checkbox" id="remember" name="remember" className="text-blue-500"/>
        <label for="remember" className="text-gray-600 ml-2">Remember Me</label>
      </div>
      {/* <!-- Forgot Password Link --> */}
      <div className="mb-6 text-blue-500">
        <a href="#" className="hover:underline">Forgot Password?</a>
      </div>
      {/* <!-- Login Button --> */}
      <button
      //  type="submit"
       onClick={() => LoginFunction()}
       className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
       >Login</button>
    {/* </form> */}
          <div className="mt-6 text-blue-500 text-center">
            <a href="#" className="hover:underline">
              Sign up Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
