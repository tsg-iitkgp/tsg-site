import React, { useEffect } from "react";

export default function Samyog () {
    const url=`https://teams.microsoft.com/l/meetup-join/19%3afEA4jgh7DiEdKCxzbYTTK93ZeC_0b45UAiWMSKD6uWI1%40thread.tacv2/1643986398615?context=%7b%22Tid%22%3a%2271dbb522-5704-4537-9f25-6ad2dcd4278d%22%2c%22Oid%22%3a%22dd75559f-8144-468e-8786-0da7ad15378a%22%7d`
    useEffect(() => {
        window.location.href = url;
    }, []);

    return (<></>)
}