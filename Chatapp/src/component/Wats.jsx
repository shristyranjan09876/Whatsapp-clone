import React from 'react';
import '../component/wats.css'

const Wats = () => {
   const chatdata = [
    {name:'riya',message:'hello'},
    {name:'siya',message:'hello'},
    {name:'tiya',message:'hello'},
    {name:'miya',message:'hello'},
    {name:'riya',message:'hello'},
    {name:'siya',message:'hello'},
   ]


    return (
        <div className="container-fluid py-5 ">
            <div className='row'>
                <div className="col-12 col-4 d-flex align-items-center justify-content-center">
                {chatdata.map((item, index) => (
        <div key={index} className="userChat">
          <div className="userChatInfo">
            <span>{item.name}</span>
            <p>{item.message}</p>
          </div>
        </div>
      ))}
      
                </div>
                <div  className=" col-sm-12 col-md-8 d-flex align-items-center justify-content-center">
                    <img src="src/assets/wbg.jpg" alt="Shopping" className="img-fluid about-img" />
                </div>
            </div>
        </div>
    );
}

export default Wats;
