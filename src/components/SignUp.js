import React,{useState} from "react";

const SignUp = () => {
    
   
  return (
    <>
    <div>
      <form>
        <div class="mb-3">
          <label class="form-label">Full Name</label>
          <input type="text" class="form-control" id="name" />
          
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-control">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          

          <div id="emailHelp" class="form-text">
            
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
          
        </div>
        
        <button type="submit" class="btn btn-primary">
          Signup
        </button>
      </form>
    </div>
    </>
  );
};

export default SignUp;