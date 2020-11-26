/*global kakao*/
import React, { Component } from "react";
// const { kakao } = window;
const API = "70b90c001c802a0dd2c50ac68cb8c8ae";

class MapElement extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${API}&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById("map");
        let options = {
          center: new kakao.maps.LatLng(37.506502, 127.053617),
          level: 7,
        };
        const map = new kakao.maps.Map(container, options);
        let markerPosition = new kakao.maps.LatLng(
          37.62197524055062,
          127.16017523675508
        );
        let marker = new kakao.maps.Marker({ position: markerPosition });
        marker.setMap(map);
      });
    };
  }
  render() {
    return <div id={"map"} className="Map"></div>;
  }
}

export default MapElement;