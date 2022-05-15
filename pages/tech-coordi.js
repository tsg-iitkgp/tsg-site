import React, { useEffect } from "react";

export default function Samyog () {
    const url=`https://github.com/tsg-iitkgp/OnBoarding/blob/master/README.md`
    useEffect(() => {
        window.location.href = url;
    }, []);

    return (<></>)
}