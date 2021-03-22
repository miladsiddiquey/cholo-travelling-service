import React from 'react';
import { Link } from 'react-router-dom';

const Riders = (props) => {
    const{name, img, id} = props.rider;
    return (
        
        <div className="col-sm-12 col-md-3 col-lg-3 pt-5 d-flex justify-content-around">
            <div className="card p-5 " style={{width:'18rem',height:'18rem',borderRadius:'10px'}}>
            <Link to ={"/destination/"+id}>
           <img className="text-center" src={img} alt="" style={{height:'150px',width:'150px'}}/>
            <h4>{name}</h4>
           </Link>
            </div>
        </div>
    );
};

export default Riders;