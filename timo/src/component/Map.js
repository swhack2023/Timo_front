import React, { useEffect, useRef, useState } from 'react';
import './mapstyle.css';
const { kakao } = window;

const MapComponent = () => {
  const [openOverlayIndex, setOpenOverlayIndex] = useState(null);
  const overlays = useRef([]);
  const mapRef = useRef(null);

  const closeOverlay = () => setOpenOverlayIndex(null);

  useEffect(() => {
    const mapContainer = document.getElementById('map');
    const mapOption = {
      center: new kakao.maps.LatLng(33.451475, 126.570528),
      level: 3,
    };

    const map = new kakao.maps.Map(mapContainer, mapOption);

    mapRef.current = map;
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
            '                <div><a href="/D_4" class="link">홈페이지</a></div>' + 
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
        '                <div><a href="/D_3" class="link">홈페이지</a></div>' + 
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
        '                <div><a href="/D_2" class="link">홈페이지</a></div>' + 
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
        '                <div><a href="/D_1" class="link">홈페이지</a></div>' + 
        '            </div>' + 
        '        </div>' + 
        '    </div>' +    
        '</div>',
        latlng: new kakao.maps.LatLng(33.451393, 126.570738)
      }
    ];


    positions.forEach((position, index) => {
      const marker = new kakao.maps.Marker({
        map: map,
        position: position.latlng,
      });

      const overlay = new kakao.maps.CustomOverlay({
        content: position.content.replace('title="닫기"', `title="닫기" onclick="window.closeOverlay(${index})"`),
        map: null,
        position: position.latlng,
      });

      overlays.current[index] = overlay;

      kakao.maps.event.addListener(marker, 'click', () => {
        setOpenOverlayIndex(index);
      });
    });

    window.closeOverlay = (index) => {
      overlays.current[index].setMap(null);
    };
  }, []);

  useEffect(() => {
    overlays.current.forEach((overlay, index) => {
      if (index === openOverlayIndex) {
        overlay.setMap(mapRef.current);
      } else {
        overlay.setMap(null);
      }
    });
  }, [openOverlayIndex]);

  return (
    <div id="map" style={{ width: '100%', height: '740px' }}></div>
  );
};

export default MapComponent;
