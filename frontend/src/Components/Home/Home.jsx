import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Home(){
    const [loading,setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(()=>{
        // Too expensive to check each time (ig this is uneccesary, maybe do something else but temporarily this is ok)
        async function func(){
            const SERVER_URI = process.env.REACT_APP_SERVER_URI;

            const res = await fetch(`${SERVER_URI}/user/myprofile`,{
                method:"GET",
                credentials:'include'
            });

            const data = await res.json();
            console.log(data);

            if( Object.keys(data).length === 0 ){
                console.log(' Profile Not Set, Forward to Profile Initialization ');
                setLoading(true);
                navigate('/profile-edit')
            }else{
                setLoading(false);
            }

        }
        
        func();
    },[]);

    if(loading){
        return(
            <>
                <div>
                    Loading ......
                </div>
            </>
        )
    }

    return(
        <>
            <div>
                This is Home
            </div>
        </>
    )
}

export default Home;