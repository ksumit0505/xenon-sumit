import React from 'react'

const NavBar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{
        margin:"0px",padding:"0px",marginBottom:"7px"
    }}>
        
  <div class="container-fluid " style={{
    // background:"#f7ea49",
    background:"skyblue",
    padding:"20px 20px",    
    // height:"48%",
    // margin:"0px 0px",
    // backgroundImage:'url("https://c8.alamy.com/comp/H8N0CR/empty-interior-of-room-with-vase-over-brick-wall-background-3d-rendering-H8N0CR.jpg")'
  }}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuIeJLnB2-mMmSW331zKM8qk3YQyvkQjWEfQ&usqp=CAU" alt="The Change" style={{
        borderRadius:"20px",
        height:"70px",
        marginRight:"30px"
        
    }} />
    <a class="navbar-brand text-warning" href="#" style={
        {marginRight:"580px",
        fontSize:"30px"
    }}
        >Flaming Wheels</a >
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item ">
          <a class="nav-link active text-light" aria-current="page" href="/">Gallery</a>
        </li>
       
       
        <li class="nav-item" >
                <a class="nav-link active text-light" href="/signup">
                  Signup
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-light" href="/signin">
                  Signin
                </a>
              </li>
        
      </ul>
    </div>
  </div>
  </div>
</nav>
    </>
  )
}

export default NavBar;