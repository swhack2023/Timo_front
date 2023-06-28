import React, { useEffect, useState } from 'react';
import './mapstyle.css';
const { kakao } = window;

const Main = () => {
  const [map, setMap] = useState(null);
  const [infoWindow, setInfoWindow] = useState(null);

  useEffect(() => {
    const mapContainer = document.getElementById('map');
    const mapOptions = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };

    const kakaoMap = new kakao.maps.Map(mapContainer, mapOptions);
    setMap(kakaoMap);

    const positions = [
      {
        content:
            '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title">' + 
            '            카카오 스페이스닷원' + 
            '            <div class="close" title="닫기"></div>' + 
            '        </div>' + 
            '        <div class="body">' + 
            '            <div class="img">' +
            '                <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumnail.png" width="73" height="70">' +
            '           </div>' + 
            '            <div class="desc">' + 
            '                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>' + 
            '                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' + 
            '                <div><a href="/BF" class="link">홈페이지</a></div>' + 
            '            </div>' + 
            '        </div>' + 
            '    </div>' +    
            '</div>',
        latlng: new kakao.maps.LatLng(33.450705, 126.570677)
      },
      {
        content: 
        '<div class="wrap">' + 
        '    <div class="info">' + 
        '        <div class="title">' + 
        '           더미2' + 
        '            <div class="close" title="닫기"></div>' + 
        '        </div>' + 
        '        <div class="body">' + 
        '            <div class="img">' +
        '                <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumnail.png" width="73" height="70">' +
        '           </div>' + 
        '            <div class="desc">' + 
        '                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>' + 
        '                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' + 
        '                <div><a href="/BF" class="link">홈페이지</a></div>' + 
        '            </div>' + 
        '        </div>' + 
        '    </div>' +    
        '</div>',
        latlng: new kakao.maps.LatLng(33.450936, 126.569477)
      },
      {
        content: 
        '<div class="wrap">' + 
        '    <div class="info">' + 
        '        <div class="title">' + 
        '            더미3' + 
        '            <div class="close" title="닫기"></div>' + 
        '        </div>' + 
        '        <div class="body">' + 
        '            <div class="img">' +
        '                <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumnail.png" width="73" height="70">' +
        '           </div>' + 
        '            <div class="desc">' + 
        '                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>' + 
        '                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' + 
        '                <div><a href="/BF" class="link">홈페이지</a></div>' + 
        '            </div>' + 
        '        </div>' + 
        '    </div>' +    
        '</div>',
        latlng: new kakao.maps.LatLng(33.450879, 126.569940)
      },
      {
        content: 
        '<div class="wrap">' + 
        '    <div class="info">' + 
        '        <div class="title">' + 
        '            더미4' + 
        '            <div class="close" title="닫기"></div>' + 
        '        </div>' + 
        '        <div class="body">' + 
        '            <div class="img">' +
        '                <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumnail.png" width="73" height="70">' +
        '           </div>' + 
        '            <div class="desc">' + 
        '                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>' + 
        '                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' + 
        '                <div><a href="/BF" class="link">홈페이지</a></div>' + 
        '            </div>' + 
        '        </div>' + 
        '    </div>' +    
        '</div>',
        latlng: new kakao.maps.LatLng(33.451393, 126.570738)
      }
    ];

    positions.forEach((position) => {
      const marker = new kakao.maps.Marker({
        map: kakaoMap,
        position: position.latlng
      });

      const infowindow = new kakao.maps.InfoWindow({
        content: position.content
      });

      kakao.maps.event.addListener(marker, 'click', makeClickListener(kakaoMap, marker, infowindow));
    });
  }, []);

  const makeClickListener = (map, marker, infowindow) => {
    return function () {
      if (infoWindow) {
        infoWindow.close();
      }
      infowindow.open(map, marker);
      setInfoWindow(infowindow);
    };
  };

  useEffect(() => {
    const handleMapClick = () => {
      if (infoWindow) {
        infoWindow.close();
        setInfoWindow(null);
      }
    };

    if (map) {
      kakao.maps.event.addListener(map, 'click', handleMapClick);
    }

    return () => {
      if (map) {
        kakao.maps.event.removeListener(map, 'click', handleMapClick);
      }
    };
  }, [map, infoWindow]);

  useEffect(() => {
    const closeOverlay = () => {
      if (infoWindow) {
        infoWindow.close();
        setInfoWindow(null);
      }
    };

    const closeButtons = document.getElementsByClassName('close');
    for (let i = 0; i < closeButtons.length; i++) {
      closeButtons[i].addEventListener('click', closeOverlay);
    }

    return () => {
      for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].removeEventListener('click', closeOverlay);
      }
    };
  }, [infoWindow]);

  return (
    <div>
      <div id="map" style={{ width: '99%', height: '650px' }}></div>
    </div>
  );
};

export default Main;
