import React, { useEffect } from "react";
import Grid from "../elements/Grid";
const { kakao } = window;

//지도생성함수
export const KakaoMap = (props) => {
  const { width, height, margin, keyword } = props;

  useEffect(() => {
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    const mapBox = document.getElementById("myMap"); //지도를 표시할 div
    const options = {
      center: new kakao.maps.LatLng(37.5666805, 126.9784147),
      level: 3,
    };

    const map = new kakao.maps.Map(mapBox, options);

    const ps = new kakao.maps.services.Places();

    function placeSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        for (var i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        map.setBounds(bounds);
      }
    }
    ps.keywordSearch(keyword, placeSearchCB);

    function displayMarker(place) {
      // 마커를 생성하고 지도에 표시합니다
      var marker = new kakao.maps.Marker({
        map: map,
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
        infowindow.open(map, marker);
      });
    }
  }, [keyword]);

  return <Grid width={width} height={height} margin={margin} id="myMap"></Grid>;
};

//지도검색함수
export const Search = (props) => {};
