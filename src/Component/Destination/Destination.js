import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import data from '../../Data/data.json';
import GoogleMaps from "simple-react-google-maps"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserFriends } from '@fortawesome/free-solid-svg-icons'




const Destination = () => {
    const { rideId } = useParams()
    const [rider, setRider] = useState({})
    useEffect(() => {
        const riderData = data.find(ride => ride.id == rideId);
        setRider(riderData)
        console.log(riderData)
    }, [rideId])

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const [isShow, setIsShow] = useState(false)

    return (
        <div className="container">

            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12 mt-5 ">
                    {
                        isShow === false ?
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="mb-3">
                                    <input name="destination-from" className="form-control" ref={register} />
                                </div>
                                <div className="mb-3">
                                    <input name="destination-to" className="form-control" ref={register({ required: true })} />
                                </div>

                                <button type="submit" onClick={() => setIsShow(true)} className="btn btn-primary">Search</button>
                            </form> :

                            <div>

                                <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-around">
                                        <img src={rider.img} alt="" style={{ width: '50px', height: '50px' }} />
                                        <h5>{rider.name}</h5>
                                        <h5><FontAwesomeIcon icon={faUserFriends} /> {rider.people}</h5>
                                        <h5>{rider.price}</h5>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-around">
                                        <img src={rider.img} alt="" style={{ width: '50px', height: '50px' }} />
                                        <h5>{rider.name}</h5>
                                        <h5><FontAwesomeIcon icon={faUserFriends} />{rider.people}</h5>
                                        <h5>{rider.price}</h5>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-around">
                                        <img src={rider.img} alt="" style={{ width: '50px', height: '50px' }} />
                                        <h5>{rider.name}</h5>
                                        <h5><FontAwesomeIcon icon={faUserFriends} />{rider.people}</h5>
                                        <h5>{rider.price}</h5>
                                    </li>
                                </ul>
                            </div>


                    }
                </div>
                <div className="col-sm-12 col-md-7 col-lg-7 mt-5">
                    <div>
                        <GoogleMaps
                            apiKey={"AIzaSyDxROgMA9-LwBwLdzkgaKtITC9r-_g3kz4"}
                            style={{ height: "400px", width: "100%" }}
                            zoom={6}
                            center={{ lat: 37.4224764, lng: -122.0842499 }}
                            markers={{ lat: 37.4224764, lng: -122.0842499 }} //optional
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Destination;