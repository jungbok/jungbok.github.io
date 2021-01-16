import React from "react"
import {VectorMap} from "react-jvectormap"

const mapData = {
    CN: 20,
    US: 20,
    KR: 100
};

const handleClick = (e, countryCode) => {
    console.log(countreyCode)
}

const Map = () => {
    return (
        <div>
            <VectorMap map={"world_mill"}
                       backgroundColor=#0077ee
        </div>
    )
}
