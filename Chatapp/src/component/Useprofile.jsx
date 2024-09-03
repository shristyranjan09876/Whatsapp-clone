import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Useprofile = () => {
  return (
  
       <div className="user-profile d-flex p-2 align-items-center">
            <img src="src/assets/avt.png" alt="User Avatar" className="rounded-circle me-2" width="50" height="50" />
            <div>
                <h5>Shristy</h5>
                <small>Online</small>
            </div>
        </div>
 
  )
}

export default Useprofile
