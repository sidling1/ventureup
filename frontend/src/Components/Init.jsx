import React from "react";
import  {Fragment, useEffect, useState} from "react";

function Init() {
    const [data, setData] = useState("empty");

    // useEffect(() => {
    //     fetch('http://localhost:3050/api/')
    //         .then(
    //         res => res.text()
    //         ).then(
    //             data => setData(data)
    //         );
    // }, []);

    return (
        <Fragment>
            {data}
        </Fragment>
    );
}

export default Init;