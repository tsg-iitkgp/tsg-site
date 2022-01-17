import React, { useEffect } from "react";

export default function Samyog () {
    const url=`https://teams.microsoft.com/l/meetup-join/19%3afEA4jgh7DiEdKCxzbYTTK93ZeC_0b45UAiWMSKD6uWI1%40thread.tacv2/1642426669769?context=%7b%22Tid%22%3a%2271dbb522-5704-4537-9f25-6ad2dcd4278d%22%2c%22Oid%22%3a%226db43205-f12f-48dd-b3e6-56546feb54af%22%7d`
    useEffect(() => {
        window.location.href = url;
    }, []);

    return (<></>)
}