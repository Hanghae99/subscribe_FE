import React, { useEffect, useState } from "react";
import Grid from "../elements/Grid";
import _ from "lodash";

const { kakao } = window;

export const KakaoMap = (props) => {
  const [kakaoMap, setKakaoMap] = useState(null);
  const { width, height, margin, keyword } = props;

  useEffect(() => {
    //지도생성함수
    const mapBox = document.getElementById("myMap"); //지도를 표시할 div
    const options = {
      center: new kakao.maps.LatLng(37.5666805, 126.9784147),
      level: 3,
    };

    const map = new kakao.maps.Map(mapBox, options);
    const center = map.getCenter();
    kakao.maps.event.addListener(
      map,
      "drag",
      _.throttle(function (e) {
        console.log("위도: " + center.getLat(), "경도: " + center.getLng());
      }, 1000)
    );
    setKakaoMap(map);
  }, []);

  useEffect(() => {
    //지도에 마커 생성 함수
    if (kakaoMap === null) {
      return;
    }
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    const ps = new kakao.maps.services.Places();

    function placeSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        kakaoMap.setBounds(bounds);
      }
    }
    ps.keywordSearch(keyword, placeSearchCB);

    function displayMarker(place) {
      // 마커를 생성하고 지도에 표시합니다
      const marker = new kakao.maps.Marker({
        map: kakaoMap,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "click", function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            "</div>"
        );
        infowindow.open(kakaoMap, marker);
      });
    }
  }, [keyword]);

  return <Grid width={width} height={height} margin={margin} id="myMap"></Grid>;
};
