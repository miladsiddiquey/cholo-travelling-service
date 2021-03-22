import React, { useEffect, useState } from 'react';
import data from '../../Data/data.json';
import Riders from '../Riders/Riders';




const Home = () => {
    const [riders, setRiders] = useState([]);

    useEffect(() => {
        setRiders(data)
    }, [])
    return (
        <div className="container ">
            <div className="row pt-5 mt-5">
                {
                    riders.map(rider => <Riders key={rider.id} rider={rider}></Riders>)
                }
            </div>
        </div>
    );
};

export default Home;