import React, {Component} from "react";
import {VectorMap} from "react-jvectormap";


class Map extends Component{
    state = {
    countriesCodes: [],
    countriesNames: [],
    data: {},
    title: "Tantum videmus quantum scimus",
    color: "#48aeef"
    };

    handleColorChange = color => {
        console.log(color.hex);
        this.setState({color: color.hex});
    };

    handleChange = e => {
        this.setState({
            title: e.target.value
        });
    };

    handleClick = (e, countryCode) => {
        console.log(countryCode)
        const {countriesCode} = this.state;
        //if (countriesCode.indexOf(countryCode) === -1){
        //    this.setState(
        //        {
        //            countriesCodesArray: [...countriesCode, countryCode]
        //        },
        //        () => this.getCountriesNamesList()
        //    );
        //}
    };

    getCountriesNamesList = () => {
        const { countriesCodes } = this.state;
        const list = countriesCodes;
        this.setState(
            {countriesNames: list},
            () => this.makeMapData()
            );
    };

    makeMapData = () => {
        const {countriesCode} = this.state;
        let obj = {CN: 5, MX:5, TX: 5, KR:50 }
        countriesCode.forEach(countryCode => (obj[countryCode] = 5));
        this.setState({
            data:obj
        });
    };

    countriesData = (country) => {
        return "One Day, I will!"
    }

    render(){
        const {countriesNames, data, title, titleSet, color} = this.state;
        console.log(data)
        return(
            <div>
                <VectorMap map={"world_mill"}
                           backgroundColor={"#0077be"}
                           onRegionClick={this.handleClick}
                           containerClassName="wmap"
                           containerStyle={{
                               width : "100%",
                               height: "100%"
                           }}

                           regionStyle={{
                               width : "100%",
                               height: "100%",
                               initial: {
                                   fill: "#000000"
                               },
                               hover: {
                                   fill: "#eeefff",
                                   cursor: "pointer"
                               },
                               selected: {
                                   blink: ""
                               },
                               selectedHover: {}
                           }}
                           regionsSelectable={true}
                           series={{
                               regions: [
                                   {
                                       values: data,
                                       scale: ["#146804", "#ee0000"],
                                       normalizeFunction: "polynomial"
                                   }
                               ]
                           }}
                />
            <mapContainer>
                <h3>{title}</h3>
                <div>
                    {countriesNames.map((country, i) => (
                        <div key={i}> <h4>{country} </h4>
                        </div>
                    ))}
                </div>
            </mapContainer>
            </div>
        );
    }
}
export default Map;
