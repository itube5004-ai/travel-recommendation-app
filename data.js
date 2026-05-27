const destinations = [
{
  id: 'd1', name: '서울 (Seoul)', location: 'domestic',
  duration: ['day', '2-3', '4-5'],
  style: ['city', 'culture', 'shopping', 'food'],
  bestSeasons: ['spring', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?seoul,gyeongbokgung,palace',
  description: '600년 역사가 숨 쉬는 고궁과 화려한 네온사인이 공존하는, 과거와 미래가 어우러진 대한민국의 심장.',
  quickInfo: { months: '3~5월, 9~11월', flight: '수도 (해당없음)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '11~18℃', summer: '24~30℃', autumn: '10~20℃', winter: '-5~3℃' } },
  details: {
    spots: '경복궁, 남산타워(N서울타워), 명동, 북촌한옥마을, 광장시장, 이태원, 청계천, 덕수궁돌담길',
    food: '불고기, 냉면, 떡볶이, 광장시장 빈대떡, 종로 삼계탕, 마포 갈비',
    hotel: '롯데호텔 서울, 조선팰리스, 포시즌스 호텔 서울',
    weatherDesc: {
      spring: '벚꽃이 만개하는 3~4월이 가장 아름답고, 맑고 온화한 날씨가 관광하기 좋습니다.',
      summer: '고온다습한 여름에는 장마가 있으나, 한강공원 야경이 매력적입니다.',
      autumn: '단풍이 물드는 10~11월은 서울 여행의 최적기로, 고궁의 단풍이 장관입니다.',
      winter: '영하의 추운 날씨지만 크리스마스 일루미네이션과 겨울 먹거리가 매력적입니다.'
    },
    courses: {
      'day': '<br>1DAY: 경복궁 -> 북촌한옥마을 -> 인사동 -> 광장시장 -> 남산타워 야경',
      '2-3': '<br>1DAY: 경복궁 -> 북촌한옥마을 -> 인사동 -> 광장시장 점심 -> 청계천 산책<br>2DAY: 이태원 브런치 -> 용산 국립중앙박물관 -> 명동 쇼핑 -> 남산타워 야경<br>3DAY: 성수동 카페거리 -> 잠실 롯데월드 -> 한강공원 치맥',
      '4-5': '<br>1DAY: 경복궁 -> 북촌한옥마을 -> 인사동 전통차 -> 광장시장 먹거리<br>2DAY: 덕수궁돌담길 -> 서울시립미술관 -> 명동 쇼핑 -> 남산타워 야경<br>3DAY: 이태원 브런치 -> 국립중앙박물관 -> 한강 유람선 -> 여의도 밤도깨비야시장<br>4DAY: 성수동 카페거리 -> 건대 맛집거리 -> 잠실 롯데월드타워 전망대<br>5DAY: 홍대 자유시장 -> 연남동 산책 -> 마포 갈비 점심'
    }
  }
},
{
  id: 'd2', name: '부산 (Busan)', location: 'domestic',
  duration: ['2-3', '4-5'],
  style: ['city', 'food', 'nature'],
  bestSeasons: ['summer', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?busan,haeundae,beach',
  description: '푸른 바다와 형형색색 지붕이 어우러지는 항구도시, 해산물 천국이자 감성 여행의 성지.',
  quickInfo: { months: '6~10월', flight: 'KTX (약 2시간 30분)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '12~19℃', summer: '23~30℃', autumn: '13~22℃', winter: '1~8℃' } },
  details: {
    spots: '해운대해수욕장, 광안대교, 감천문화마을, 자갈치시장, 태종대, 해동용궁사, 흰여울문화마을, 영도다리',
    food: '돼지국밥, 밀면, 씨앗호떡, 자갈치 회, 해운대 조개구이, 부산어묵',
    hotel: '파크 하얏트 부산, 해운대 그랜드 호텔, 시그니엘 부산',
    weatherDesc: {
      spring: '온화한 해양성 기후로 벚꽃 명소가 많고, 바다 산책이 쾌적합니다.',
      summer: '해수욕 시즌으로 해운대와 광안리가 최고의 활기를 뿜어냅니다.',
      autumn: '시원한 바닷바람과 맑은 하늘이 어우러져 감천문화마을 산책에 제격입니다.',
      winter: '서울보다 온화하지만 해풍이 차가우며, 겨울 바다의 고즈넉한 풍경이 매력적입니다.'
    },
    courses: {
      '2-3': '<br>1DAY: 자갈치시장 아침 -> 영도 흰여울문화마을 -> 태종대 유원지 -> 광안리 야경<br>2DAY: 해운대 해변 산책 -> 해동용궁사 -> 감천문화마을 -> BIFF광장 길거리 음식<br>3DAY: 남포동 국제시장 -> 용두산공원 부산타워 -> 부산역 돼지국밥',
      '4-5': '<br>1DAY: 부산역 도착 -> 남포동 BIFF광장 -> 자갈치시장 회 점심 -> 영도 흰여울문화마을 -> 광안리 야경<br>2DAY: 해운대 해변 -> 동백섬 산책 -> 해운대 전통시장 -> 더베이101 야경<br>3DAY: 감천문화마을 -> 송도 해상케이블카 -> 태종대 유원지 -> 남포동 밀면<br>4DAY: 해동용궁사 -> 기장 죽성드림세트장 -> 기장 대변항 멸치회 -> 해운대 조개구이<br>5DAY: 범어사 산책 -> 서면 먹거리 탐방 -> 부전시장'
    }
  }
},
{
  id: 'd3', name: '인천 (Incheon)', location: 'domestic',
  duration: ['day', '2-3'],
  style: ['city', 'food', 'history'],
  bestSeasons: ['spring', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?incheon,chinatown,songdo',
  description: '이국적인 차이나타운 and 첨단 송도, 아름다운 섬이 만나는 서해안의 관문 도시.',
  quickInfo: { months: '4~5월, 9~10월', flight: '자가용/지하철 (서울에서 약 1시간)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '9~17℃', summer: '23~29℃', autumn: '10~20℃', winter: '-4~4℃' } },
  details: {
    spots: '차이나타운, 월미도, 송도 센트럴파크, 강화도, 을왕리해수욕장, 인천대교, 개항장거리, 자유공원',
    food: '짜장면, 쫄면, 중국냉면, 신포닭강정, 월미도 회센터, 강화도 젓갈',
    hotel: '쉐라톤 인천 호텔, 오라카이 송도파크호텔, 네스트호텔 인천',
    weatherDesc: {
      spring: '벚꽃과 함께 바다 바람이 불어오는 쾌적한 날씨로 섬 여행에 적합합니다.',
      summer: '해수욕과 월미도 놀이기구를 즐기기 좋지만, 장마철엔 습합니다.',
      autumn: '서해 노을이 아름다운 계절로, 강화도 단풍과 함께 여행하기 좋습니다.',
      winter: '차가운 해풍이 강하지만, 차이나타운의 따뜻한 짜장면이 기다립니다.'
    },
    courses: {
      'day': '<br>1DAY: 차이나타운 짜장면 -> 자유공원 -> 개항장거리 -> 월미도 놀이공원 -> 을왕리 일몰',
      '2-3': '<br>1DAY: 차이나타운 짜장면 브런치 -> 자유공원 산책 -> 개항장거리 -> 신포시장 닭강정 -> 월미도 일몰<br>2DAY: 송도 센트럴파크 수상택시 -> 송도 한옥마을 -> 트라이보울 -> 인천대교 전망<br>3DAY: 강화도 전등사 -> 고인돌 유적 -> 강화평화전망대 -> 강화도 젓갈 쇼핑'
    }
  }
},
{
  id: 'd4', name: '대구 (Daegu)', location: 'domestic',
  duration: ['day', '2-3'],
  style: ['city', 'food', 'culture'],
  bestSeasons: ['spring', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?daegu,korea,palgongsan',
  description: '뜨거운 열정의 도시, 근대 골목투어와 화려한 야시장이 매력적인 패션과 미식의 고장.',
  quickInfo: { months: '4~5월, 9~11월', flight: 'KTX (약 1시간 40분)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '10~20℃', summer: '24~33℃', autumn: '10~22℃', winter: '-3~6℃' } },
  details: {
    spots: '팔공산 갓바위, 서문시장, 김광석다시그리기길, 앞산전망대, 동성로, 수성못, 근대골목투어, 83타워',
    food: '납작만두, 막창, 뭉티기(육회), 동인동 찜갈비, 서문시장 칼국수, 대구 떡볶이',
    hotel: '호텔 인터불고 대구, 노보텔 앰배서더 대구, 대구 메리어트 호텔',
    weatherDesc: {
      spring: '벚꽃이 흐드러지는 봄, 팔공산과 수성못 주변이 특히 아름답습니다.',
      summer: '한국에서 가장 더운 도시 중 하나로 폭염에 대비가 필요합니다.',
      autumn: '팔공산 단풍이 절경이며, 시원한 날씨에 근대골목 산책이 최고입니다.',
      winter: '건조하고 추운 날씨지만, 따뜻한 막창 and 찜갈비가 몸을 녹여줍니다.'
    },
    courses: {
      'day': '<br>1DAY: 동성로 브런치 -> 근대골목투어 -> 김광석다시그리기길 -> 서문시장 야시장',
      '2-3': '<br>1DAY: 대구역 도착 -> 동성로 탐방 -> 근대골목투어 -> 김광석다시그리기길 -> 서문시장 야시장<br>2DAY: 팔공산 갓바위 등산 -> 동화사 -> 앞산전망대 야경<br>3DAY: 수성못 산책 -> 대구 삼성창조캠퍼스 -> 동인동 찜갈비 -> 83타워 전망'
    }
  }
},
{
  id: 'd5', name: '대전 (Daejeon)', location: 'domestic',
  duration: ['day', '2-3'],
  style: ['city', 'food', 'family'],
  bestSeasons: ['spring', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?daejeon,korea,science',
  description: '과학과 빵의 도시, 성심당 빵지순례와 유성온천으로 힐링하는 대한민국의 중심.',
  quickInfo: { months: '4~5월, 9~10월', flight: 'KTX (약 50분)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '9~19℃', summer: '23~31℃', autumn: '9~20℃', winter: '-5~4℃' } },
  details: {
    spots: '유성온천, 대전엑스포과학공원, 계족산황토길, 성심당, 한밭수목원, 국립중앙과학관, 대전 스카이로드, 장태산자연휴양림',
    food: '성심당 튀김소보로, 성심당 판타롱부추빵, 두부두루치기, 칼국수, 뚱보네 떡갈비',
    hotel: '유성호텔, 롯데시티호텔 대전, 호텔ICC',
    weatherDesc: {
      spring: '한밭수목원과 카이스트 벚꽃길이 아름답고, 온화한 날씨가 산책에 제격입니다.',
      summer: '내륙 분지 특성상 더운 편이지만, 계족산 맨발 황토길이 시원함을 줍니다.',
      autumn: '장태산자연휴양림의 단풍이 멋지고, 쾌적한 날씨에 과학관 투어가 즐겁습니다.',
      winter: '추운 날씨에 유성온천에서 몸을 녹이며 겨울을 즐길 수 있습니다.'
    },
    courses: {
      'day': '<br>1DAY: 성심당 빵지순례 -> 한밭수목원 -> 대전엑스포과학공원 -> 유성온천 족욕',
      '2-3': '<br>1DAY: 대전역 도착 -> 성심당 브런치 -> 한밭수목원 산책 -> 으능정이거리 -> 대전 스카이로드 야경<br>2DAY: 국립중앙과학관 -> 엑스포과학공원 -> 유성온천 힐링 -> 유성 먹거리타운<br>3DAY: 계족산황토길 맨발 트레킹 -> 장태산자연휴양림 -> 두부두루치기 점심'
    }
  }
},
{
  id: 'd6', name: '광주 (Gwangju)', location: 'domestic',
  duration: ['day', '2-3'],
  style: ['culture', 'food', 'history'],
  bestSeasons: ['spring', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?gwangju,korea,mudeungsan',
  description: '예향의 도시, 민주화의 성지이자 미식의 본고장에서 맛과 문화를 탐하는 감동 여행.',
  quickInfo: { months: '4~5월, 9~11월', flight: 'KTX (약 1시간 30분)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '10~19℃', summer: '24~30℃', autumn: '10~21℃', winter: '-2~6℃' } },
  details: {
    spots: '무등산, 양림동역사문화마을, 국립아시아문화전당, 1913송정역시장, 5·18기념공원, 광주 비엔날레전시관, 충장로, 펭귄마을',
    food: '광주 한정식, 상추튀김, 오리탕, 떡갈비, 1913송정역시장 마카롱, 충장로 주먹밥',
    hotel: '홀리데이인 광주, 라마다프라자 광주호텔, 상무 스위트호텔',
    weatherDesc: {
      spring: '무등산 철쭉이 만개하고, 양림동 골목이 꽃으로 물드는 아름다운 시기입니다.',
      summer: '장마와 더위가 있으나, 무등산 계곡의 시원함을 누릴 수 있습니다.',
      autumn: '무등산 억새와 단풍이 장관이며, 예술 축제가 풍성합니다.',
      winter: '남부 지방이라 비교적 온화하고, 따뜻한 한정식이 겨울 미식 여행에 좋습니다.'
    },
    courses: {
      'day': '<br>1DAY: 국립아시아문화전당 -> 충장로 주먹밥 점심 -> 양림동역사문화마을 -> 1913송정역시장',
      '2-3': '<br>1DAY: 국립아시아문화전당 -> 금남로 -> 충장로 주먹밥 점심 -> 5·18기념공원 -> 양림동역사문화마을<br>2DAY: 무등산 등산(입석대 코스) -> 광주 한정식 점심 -> 1913송정역시장 카페 투어<br>3DAY: 펭귄마을 -> 광주 비엔날레전시관 -> 상추튀김 맛집 -> 송정리역 출발'
    }
  }
},
{
  id: 'd7', name: '울산 (Ulsan)', location: 'domestic',
  duration: ['day', '2-3'],
  style: ['nature', 'city'],
  bestSeasons: ['spring', 'summer'],
  image: 'https://source.unsplash.com/800x600/?ulsan,korea,ganjeolgot,sunrise',
  description: '한반도에서 가장 먼저 해가 뜨는 간절곶, 고래의 도시에서 만나는 자연과 산업의 조화.',
  quickInfo: { months: '4~5월, 7~8월', flight: 'KTX (약 2시간 10분)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '11~19℃', summer: '23~30℃', autumn: '12~22℃', winter: '0~8℃' } },
  details: {
    spots: '간절곶, 대왕암공원, 태화강국가정원, 울산대교전망대, 장생포고래문화마을, 반구대암각화, 신불산억새평원, 주전해변',
    food: '언양불고기, 고래고기, 울산 곰장어, 울산 한우, 장생포 수산시장 회',
    hotel: '롯데호텔 울산, 호텔현대 울산, 울산 라마다앙코르 호텔',
    weatherDesc: {
      spring: '태화강 십리대숲이 푸르러지고, 대왕암 벚꽃이 바다와 어우러져 절경을 이룹니다.',
      summer: '주전해변과 간절곶에서 시원한 바다 바람을 즐기기 좋은 계절입니다.',
      autumn: '신불산 억새가 장관이며, 태화강 국가정원의 가을 풍경이 아름답습니다.',
      winter: '해풍이 차갑지만 간절곶 일출은 겨울에도 감동적입니다.'
    },
    courses: {
      'day': '<br>1DAY: 태화강국가정원 십리대숲 -> 장생포고래문화마을 -> 대왕암공원 -> 울산대교전망대 야경',
      '2-3': '<br>1DAY: 태화강국가정원 산책 -> 장생포고래문화마을 -> 울산대교전망대 야경 -> 언양불고기 저녁<br>2DAY: 간절곶 일출 -> 대왕암공원 -> 주전해변 -> 반구대암각화<br>3DAY: 신불산억새평원 트레킹 -> 영남알프스 -> 울산 한우 점심'
    }
  }
},
{
  id: 'd8', name: '세종 (Sejong)', location: 'domestic',
  duration: ['day'],
  style: ['nature', 'family'],
  bestSeasons: ['spring', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?sejong,korea,lake,park',
  description: '대한민국 행정수도, 아이와 함께 즐기는 드넓은 호수공원과 동물원이 있는 신도시 나들이.',
  quickInfo: { months: '4~5월, 9~10월', flight: '자가용 (서울에서 약 1시간 40분)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '8~18℃', summer: '23~31℃', autumn: '8~20℃', winter: '-6~3℃' } },
  details: {
    spots: '세종호수공원, 베어트리파크, 밀마루전망대, 합강습지공원, 국립세종수목원, 세종중앙공원, 방축천, 비암사',
    food: '세종 칼국수, 조치원 순대, 조치원 두부, 전의 멜론',
    hotel: '글래드 세종, 세종호텔 에스, 스카이힐호텔 세종',
    weatherDesc: {
      spring: '호수공원과 수목원에 봄꽃이 만발하여 가족 나들이에 완벽합니다.',
      summer: '더운 편이지만, 호수공원 분수와 합강습지에서 피서를 즐길 수 있습니다.',
      autumn: '국립세종수목원 단풍과 합강습지의 억새가 환상적입니다.',
      winter: '추운 날씨에 실내 전시와 따뜻한 순대국밥이 어울립니다.'
    },
    courses: {
      'day': '<br>1DAY: 국립세종수목원 -> 세종호수공원 산책 -> 조치원 순대 점심 -> 베어트리파크 -> 밀마루전망대 일몰'
    }
  }
},
{
  id: 'd9', name: '제주 (Jeju)', location: 'domestic',
  duration: ['2-3', '4-5'],
  style: ['relaxation', 'nature', 'food'],
  bestSeasons: ['spring', 'summer', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?jeju,hallasan,beach,korea',
  description: '에메랄드빛 바다와 한라산이 빚어낸 섬, 감귤향 가득한 바람 속에서 일상을 잊는 힐링의 섬.',
  quickInfo: { months: '4~6월, 9~10월', flight: '비행기 (서울에서 약 1시간 10분)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '12~18℃', summer: '24~30℃', autumn: '14~22℃', winter: '3~9℃' } },
  details: {
    spots: '성산일출봉, 우도, 협재해수욕장, 한라산, 만장굴, 섭지코지, 천지연폭포, 중문관광단지',
    food: '흑돼지구이, 갈치조림, 해물뚝배기, 전복죽, 고기국수, 감귤디저트, 빙떡',
    hotel: '제주신라호텔, 롯데호텔 제주, 해비치호텔앤리조트',
    weatherDesc: {
      spring: '유채꽃과 벚꽃이 동시에 피어 제주 전역이 꽃밭이 됩니다.',
      summer: '해수욕과 스노클링의 계절이지만, 태풍 소식에 주의가 필요합니다.',
      autumn: '한라산 단풍과 억새가 절경이며, 쾌적한 날씨에 올레길 트레킹이 좋습니다.',
      winter: '한라산 눈꽃과 동백꽃이 아름답고, 온화한 편이라 겨울 여행지로 인기입니다.'
    },
    courses: {
      '2-3': '<br>1DAY: 제주공항 도착 -> 용두암 -> 협재해수욕장 -> 한림공원 -> 중문관광단지 석식<br>2DAY: 성산일출봉 일출 -> 우도 자전거 투어 -> 성산 해녀의집 해물뚝배기 -> 섭지코지<br>3DAY: 한라산 영실코스 등반 -> 서귀포매일올레시장 -> 흑돼지거리 석식',
      '4-5': '<br>1DAY: 제주공항 -> 용두암 -> 제주동문시장 고기국수 -> 함덕해수욕장 -> 월정리 카페거리<br>2DAY: 성산일출봉 일출 -> 우도 자전거 투어(땅콩아이스크림) -> 성산 해물뚝배기<br>3DAY: 만장굴 -> 비자림 산책 -> 김녕해수욕장 -> 제주시 흑돼지거리<br>4DAY: 한라산 영실코스 등반 -> 중문관광단지 주상절리대 -> 천지연폭포 야간<br>5DAY: 서귀포매일올레시장 -> 이중섭거리 -> 협재해수욕장 스노클링 -> 공항'
    }
  }
},
{
  id: 'd10', name: '수원 (Suwon)', location: 'domestic',
  duration: ['day', '2-3'],
  style: ['history', 'food', 'culture'],
  bestSeasons: ['spring', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?suwon,hwaseong,fortress,korea',
  description: 'UNESCO 세계유산 수원화성이 우뚝 선 정조의 도시, 화려한 야경과 통닭의 성지.',
  quickInfo: { months: '4~5월, 9~11월', flight: '자가용/전철 (서울에서 약 1시간)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '9~18℃', summer: '23~30℃', autumn: '9~20℃', winter: '-5~4℃' } },
  details: {
    spots: '수원화성, 화성행궁, 수원통닭거리, 광교호수공원, 화홍문, 방화수류정, 수원화성박물관, 지동시장',
    food: '수원통닭, 수원왕갈비, 지동시장 순대, 수원 족발, 팔달문시장 호떡',
    hotel: '노보텔 앰배서더 수원, 라마다프라자 수원, 밸류호텔 수원',
    weatherDesc: {
      spring: '수원화성 성벽을 따라 벚꽃이 피어 산책하기 최적의 시기입니다.',
      summer: '덥고 습한 편이나 광교호수공원에서 녹음을 즐길 수 있습니다.',
      autumn: '화성 성곽길 단풍과 야경이 어우러져 로맨틱한 산책이 됩니다.',
      winter: '추운 편이지만, 화성행궁 야간 개장과 따뜻한 통닭이 매력적입니다.'
    },
    courses: {
      'day': '<br>1DAY: 수원화성 성곽길 걷기 -> 화성행궁 -> 팔달문시장 점심 -> 수원통닭거리 -> 방화수류정 야경',
      '2-3': '<br>1DAY: 수원화성 성곽길 완주 -> 화홍문 -> 화성행궁 -> 지동시장 먹거리 -> 방화수류정 야경<br>2DAY: 수원화성박물관 -> 수원왕갈비 점심 -> 광교호수공원 산책 -> 수원통닭거리 석식<br>3DAY: 수원월드컵경기장 -> 행궁동 벽화마을 카페거리 -> 팔달문시장 호떡'
    }
  }
},
{
  id: 'd11', name: '춘천 (Chuncheon)', location: 'domestic',
  duration: ['day', '2-3'],
  style: ['nature', 'food', 'relaxation'],
  bestSeasons: ['spring', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?chuncheon,nami,island,korea',
  description: '남이섬의 메타세쿼이아 길과 호수가 반기는 낭만의 도시, 닭갈비 성지 춘천.',
  quickInfo: { months: '4~5월, 9~11월', flight: 'ITX-청춘 (서울에서 약 1시간 10분)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '7~18℃', summer: '22~30℃', autumn: '6~19℃', winter: '-9~2℃' } },
  details: {
    spots: '남이섬, 소양강스카이워크, 강촌레일파크, 의암호, 춘천명동거리, 삼악산케이블카, 제이드가든, 애니메이션박물관',
    food: '춘천 닭갈비, 막국수, 감자전, 소양댐 붕어빵, 춘천 칡냉면',
    hotel: '세종호텔 춘천, 춘천 라데나호텔, 리첼호텔 춘천',
    weatherDesc: {
      spring: '남이섬 벚꽃과 신록이 물드는 시기로, 호반 자전거 여행이 최고입니다.',
      summer: '시원한 호수 바람이 불지만 여름철 습도가 높은 편입니다.',
      autumn: '남이섬 은행나무와 메타세쿼이아 단풍이 황금빛으로 물드는 절정의 계절입니다.',
      winter: '강원도 특유의 매서운 추위지만, 겨울 남이섬의 설경이 동화 같습니다.'
    },
    courses: {
      'day': '<br>1DAY: 남이섬 자전거 -> 강촌레일파크 -> 춘천명동 닭갈비 -> 소양강스카이워크 일몰',
      '2-3': '<br>1DAY: 남이섬 종일 투어(자전거, 산책) -> 춘천명동 닭갈비 저녁 -> 의암호 야경<br>2DAY: 제이드가든 산책 -> 소양강스카이워크 -> 삼악산케이블카 -> 막국수 점심<br>3DAY: 강촌레일파크 -> 애니메이션박물관 -> 춘천 칡냉면 점심'
    }
  }
},
{
  id: 'd12', name: '강릉 (Gangneung)', location: 'domestic',
  duration: ['day', '2-3', '4-5'],
  style: ['relaxation', 'food', 'nature'],
  bestSeasons: ['summer', 'winter'],
  image: 'https://source.unsplash.com/800x600/?gangneung,gyeongpo,beach,korea',
  description: '동해의 푸른 파도와 커피향이 어우러지는 바다의 도시, 사계절 감성 충전소.',
  quickInfo: { months: '7~8월, 12~2월', flight: 'KTX (서울에서 약 2시간)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '8~17℃', summer: '22~28℃', autumn: '9~19℃', winter: '-3~5℃' } },
  details: {
    spots: '경포대, 안목해변커피거리, 오죽헌, 주문진, 정동진, 강문해변, 초당마을, 경포호',
    food: '초당순두부, 강릉 짬뽕, 주문진 회, 감자옹심이, 안목커피, 장칼국수',
    hotel: '세인트존스호텔 강릉, 스카이베이호텔 경포, 강릉 씨마크호텔',
    weatherDesc: {
      spring: '경포호 벚꽃이 아름답고, 오죽헌 정원이 봄빛으로 물듭니다.',
      summer: '동해 해수욕의 최적기로, 경포해변 and 주문진이 활기를 띱니다.',
      autumn: '바다와 단풍이 어우러지며, 커피거리 산책이 감성적입니다.',
      winter: '초당순두부와 뜨거운 커피 한 잔으로 겨울 바다의 낭만을 즐깁니다.'
    },
    courses: {
      'day': '<br>1DAY: 안목해변 커피 -> 강문해변 소돌아들바위 -> 경포대 산책 -> 초당순두부마을 -> 주문진 횟집',
      '2-3': '<br>1DAY: 안목해변커피거리 브런치 -> 강문해변 -> 경포대 -> 경포호 산책 -> 초당순두부 저녁<br>2DAY: 정동진 일출 -> 주문진 수산시장 회 점심 -> 오죽헌 관람 -> 강릉 중앙시장<br>3DAY: 하슬라아트월드 -> 사근진해변 -> 안목커피거리 마무리',
      '4-5': '<br>1DAY: 강릉역 도착 -> 안목해변커피거리 -> 강문해변 -> 초당순두부 점심 -> 경포대 산책 -> 경포호 야경<br>2DAY: 정동진 일출 -> 정동진 레일바이크 -> 등명락가사 -> 강릉 짬뽕 점심 -> 오죽헌<br>3DAY: 주문진 수산시장 -> 주문진 방파제 -> 영진해변 -> 사근진해변 일몰<br>4DAY: 하슬라아트월드 -> 강릉솔향수목원 -> 강릉중앙시장 먹거리 투어<br>5DAY: 선교장 한옥체험 -> 허균·허난설헌기념공원 -> 안목커피 마무리'
    }
  }
},
{
  id: 'd13', name: '속초 (Sokcho)', location: 'domestic',
  duration: ['2-3', '4-5'],
  style: ['nature', 'food', 'relaxation'],
  bestSeasons: ['summer', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?sokcho,seoraksan,mountain,korea',
  description: '설악산의 웅장한 절경 아래, 동해 바다와 신선한 해산물이 기다리는 사계절 자연 천국.',
  quickInfo: { months: '7~8월, 9~10월', flight: '고속버스 (서울에서 약 2시간 30분)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '7~16℃', summer: '21~27℃', autumn: '8~18℃', winter: '-5~4℃' } },
  details: {
    spots: '설악산(울산바위, 비선대, 권금성), 속초해수욕장, 아바이마을(갯배), 중앙시장, 영금정, 청초호, 속초 등대해변, 외옹치바다향기로',
    food: '속초 홍게, 아바이순대, 오징어순대, 닭강정, 중앙시장 만석닭강정, 속초회센터 물회',
    hotel: '마레몬스 속초, 속초 쏠비치호텔, 한화리조트 설악',
    weatherDesc: {
      spring: '설악산 진달래 and 신록이 어우러지고, 바다 바람이 상쾌합니다.',
      summer: '해수욕과 설악산 계곡에서 물놀이를 즐기는 피서 최적지입니다.',
      autumn: '설악산 단풍이 전국 최초로 시작되어 10월 초가 절정입니다.',
      winter: '설악산 눈꽃과 겨울 바다의 웅장한 풍경이 일품입니다.'
    },
    courses: {
      '2-3': '<br>1DAY: 속초 도착 -> 중앙시장 닭강정 점심 -> 아바이마을 갯배 -> 영금정 -> 속초해수욕장 일몰<br>2DAY: 설악산 울산바위 등산 -> 신흥사 -> 비선대 -> 속초 홍게 저녁<br>3DAY: 외옹치바다향기로 산책 -> 속초 등대해변 -> 물회 점심',
      '4-5': '<br>1DAY: 속초 도착 -> 중앙시장 만석닭강정 -> 아바이마을 갯배 체험 -> 아바이순대 -> 영금정 일몰<br>2DAY: 설악산 울산바위 등산 -> 흔들바위 -> 비선대 -> 속초 홍게 저녁<br>3DAY: 설악산 권금성 케이블카 -> 대청봉 코스(체력에 따라 선택) -> 속초 오징어회<br>4DAY: 외옹치바다향기로 -> 속초해수욕장 -> 청초호 유람선 -> 중앙시장 야시장<br>5DAY: 낙산사 의상대 -> 낙산해수욕장 -> 양양 서피비치 -> 물회 점심'
    }
  }
},
{
  id: 'd14', name: '평창 (Pyeongchang)', location: 'domestic',
  duration: ['day', '2-3', '4-5'],
  style: ['nature', 'relaxation', 'family'],
  bestSeasons: ['summer', 'winter'],
  image: 'https://source.unsplash.com/800x600/?pyeongchang,korea,ski,mountain',
  description: '2018 동계올림픽의 감동이 서린 고원, 여름엔 목장 힐링 겨울엔 스키 천국.',
  quickInfo: { months: '7~8월, 12~2월', flight: 'KTX (서울에서 약 1시간 30분)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '4~15℃', summer: '19~27℃', autumn: '4~16℃', winter: '-10~0℃' } },
  details: {
    spots: '대관령양떼목장, 알펜시아리조트, 월정사, 오대산, 용평리조트, 이효석문화마을(메밀꽃필무렵), 대관령하늘목장, 올림픽스타디움',
    food: '평창 한우, 메밀국수, 메밀전병, 황태구이, 감자전, 올림픽시장 먹거리',
    hotel: '알펜시아리조트, 용평리조트, 대관령 펜션단지',
    weatherDesc: {
      spring: '잔설이 녹으며 고원 야생화가 피기 시작하는 조용한 시기입니다.',
      summer: '평균 기온이 서울보다 5~7도 낮아 시원한 피서지로 인기입니다.',
      autumn: '오대산 단풍과 이효석문화마을 메밀꽃이 장관을 이룹니다.',
      winter: '풍부한 적설량으로 스키 and 스노보드의 최적지이며, 눈꽃 축제가 열립니다.'
    },
    courses: {
      'day': '<br>1DAY: 대관령양떼목장 -> 대관령하늘목장 트랙터 투어 -> 메밀국수 점심 -> 월정사 전나무숲길',
      '2-3': '<br>1DAY: 대관령양떼목장 -> 대관령하늘목장 -> 메밀국수 점심 -> 이효석문화마을 산책<br>2DAY: 오대산 월정사 전나무숲길 -> 상원사 -> 평창 한우 저녁<br>3DAY: 알펜시아리조트(스키/관광) -> 올림픽스타디움 -> 횡계 황태구이 점심',
      '4-5': '<br>1DAY: 평창역 도착 -> 대관령양떼목장 -> 대관령하늘목장 트랙터 투어 -> 메밀전병 점심<br>2DAY: 오대산 소금강 트레킹 -> 월정사 전나무숲길 -> 상원사 -> 감자전 저녁<br>3DAY: 이효석문화마을 -> 허브나라농원 -> 평창 한우 석식<br>4DAY: 알펜시아리조트 레저 활동(스키/산악자전거) -> 올림픽스타디움 투어<br>5DAY: 용평리조트 곤돌라 -> 발왕산 정상 -> 횡계 황태구이 점심'
    }
  }
},
{
  id: 'd15', name: '양양 (Yangyang)', location: 'domestic',
  duration: ['day', '2-3'],
  style: ['nature', 'relaxation', 'adventure'],
  bestSeasons: ['summer', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?yangyang,surfing,beach,korea',
  description: '국내 서핑의 성지, 파도 위에서 자유를 만끽하고 낙산사에서 일출을 맞이하는 감성 여행지.',
  quickInfo: { months: '6~9월, 10월', flight: '고속버스 (서울에서 약 2시간 30분)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '7~16℃', summer: '21~27℃', autumn: '8~18℃', winter: '-4~4℃' } },
  details: {
    spots: '서피비치, 낙산사, 양양전통시장, 하조대, 죽도해변, 인구해변, 38선휴게소, 오색약수터',
    food: '양양 송이버섯요리, 물회, 장치찜(곤치조림), 양양전통시장 꿀빵, 해물라면',
    hotel: '서피비치 양양, 쏠비치 양양, 양양 서프호텔',
    weatherDesc: {
      spring: '야생화가 피고 바다가 잔잔해지며, 낙산사 산책이 평온합니다.',
      summer: '서핑 시즌이 본격 시작되며, 해변 축제와 물놀이로 활기가 넘칩니다.',
      autumn: '오색약수터와 주변 단풍이 절경이며, 파도도 적당해 서핑에 좋습니다.',
      winter: '차가운 겨울 바다의 정취가 있으며, 송이버섯 요리로 몸을 녹입니다.'
    },
    courses: {
      'day': '<br>1DAY: 서피비치 서핑 체험 -> 죽도해변 산책 -> 양양전통시장 꿀빵 -> 낙산사 일몰',
      '2-3': '<br>1DAY: 서피비치 서핑 레슨 -> 죽도해변 카페 -> 인구해변 -> 양양전통시장 꿀빵/물회 저녁<br>2DAY: 낙산사 일출 -> 의상대 -> 하조대 전망대 -> 오색약수터 -> 송이버섯 석식<br>3DAY: 38선휴게소 인증샷 -> 서피비치 자유 서핑 -> 해물라면 점심'
    }
  }
},
{
  id: 'd16', name: '경주 (Gyeongju)', location: 'domestic',
  duration: ['day', '2-3', '4-5'],
  style: ['history', 'culture', 'relaxation'],
  bestSeasons: ['spring', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?gyeongju,bulguksa,temple,korea',
  description: '천년 신라 왕국의 숨결이 살아 있는 지붕 없는 박물관, 벚꽃과 고분 사이를 거니는 시간 여행.',
  quickInfo: { months: '3~5월, 9~11월', flight: 'KTX (서울에서 약 2시간)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '9~19℃', summer: '23~31℃', autumn: '10~21℃', winter: '-2~7℃' } },
  details: {
    spots: '불국사, 석굴암, 첨성대, 동궁과월지(안압지), 대릉원(천마총), 경주국립박물관, 양동마을, 감은사지',
    food: '경주 십원빵, 황남빵, 교동법주, 경주 한정식, 찰보리빵, 콩국수',
    hotel: '힐튼 경주, 경주코오롱호텔, 라한셀렉트 경주',
    weatherDesc: {
      spring: '대릉원과 보문호 일대에 벚꽃이 만발하여 경주 여행의 하이라이트입니다.',
      summer: '무더운 편이나, 동해안 감포 바다와 계곡에서 피서가 가능합니다.',
      autumn: '단풍 든 불국사와 석굴암이 절경이며, 동궁과월지 야경이 환상적입니다.',
      winter: '관광객이 적어 고즈넉하게 유적을 감상할 수 있으며, 따뜻한 한정식이 좋습니다.'
    },
    courses: {
      'day': '<br>1DAY: 대릉원(천마총) -> 첨성대 -> 경주국립박물관 -> 황남빵 카페 -> 동궁과월지(안압지) 야경',
      '2-3': '<br>1DAY: 경주역 도착 -> 대릉원(천마총) -> 첨성대 -> 황리단길 카페 -> 동궁과월지 야경<br>2DAY: 불국사 -> 석굴암 -> 보문호 산책 -> 경주 한정식 석식<br>3DAY: 양동마을(세계유산) -> 경주국립박물관 -> 교동법주 체험 -> 십원빵 구입',
      '4-5': '<br>1DAY: 경주역 도착 -> 대릉원(천마총) 산책 -> 첨성대 -> 계림 -> 황리단길 브런치 -> 동궁과월지 야경<br>2DAY: 불국사 -> 석굴암 일출 -> 토함산 산책 -> 보문관광단지 -> 경주 한정식<br>3DAY: 양동마을 한옥체험 -> 옥산서원 -> 경주 콩국수 점심 -> 경주국립박물관<br>4DAY: 감은사지 -> 문무대왕릉(봉길해변) -> 감포항 회 점심 -> 주상절리 전망대<br>5DAY: 황남빵 본점 -> 교촌마을 교동법주 -> 십원빵 기념품 -> 경주역 출발'
    }
  }
},
{
  id: 'd17', name: '여수 (Yeosu)', location: 'domestic',
  duration: ['2-3', '4-5'],
  style: ['relaxation', 'food', 'nature'],
  bestSeasons: ['spring', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?yeosu,night,sea,korea',
  description: '낭만적인 여수밤바다와 섬들이 빚어내는 남해안의 보석 같은 항구도시.',
  quickInfo: { months: '4~5월, 9~10월', flight: 'KTX (2시간 50분)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '14℃', summer: '25℃', autumn: '17℃', winter: '4℃' } },
  details: {
    spots: '여수밤바다, 오동도, 향일암, 여수해상케이블카',
    food: '갓김치, 서대회무침, 돌산갓김치삼겹살, 게장백반',
    hotel: '베네치아호텔, 히든베이호텔, 여수유탑마리나호텔',
    weatherDesc: {
      spring: '벚꽃과 동백꽃이 만개하며 온화한 바닷바람이 불어 여행하기 최적의 시기입니다.',
      summer: '습하고 더운 날씨지만 해양 레저와 시원한 바다를 즐기기 좋습니다.',
      autumn: '맑고 선선한 날씨에 코스모스가 피어 남해안 드라이브가 아름답습니다.',
      winter: '비교적 따뜻한 남해안 기후이나 바닷바람이 차가워 방한 준비가 필요합니다.'
    },
    courses: {
      '2-3': '<br>1DAY: 여수엑스포역 -> 이순신광장 -> 여수밤바다(낭만포차거리) -> 돌산대교 야경<br>2DAY: 오동도 동백숲 산책 -> 여수해상케이블카 -> 돌산공원 -> 서대회무침 맛집<br>3DAY: 향일암 일출 -> 금오도 비렁길 트레킹 -> 여수수산시장',
      '4-5': '<br>1DAY: 여수엑스포역 -> 아쿠아플라넷 여수 -> 이순신광장 -> 여수밤바다 낭만포차<br>2DAY: 오동도 동백숲 -> 자산공원 -> 여수해상케이블카 -> 돌산공원 야경<br>3DAY: 향일암 일출 -> 돌산갓김치삼겹살 -> 하멜등대 -> 거문도 유람선<br>4DAY: 금오도 비렁길 트레킹 -> 안도 해안풍경 -> 게장백반 맛집<br>5DAY: 여수수산시장 -> 진남관 -> 충민사 -> 귀환'
    }
  }
},
{
  id: 'd18', name: '전주 (Jeonju)', location: 'domestic',
  duration: ['day', '2-3'],
  style: ['history', 'culture', 'food'],
  bestSeasons: ['spring', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?jeonju,hanok,village,korea',
  description: '천 년의 맛과 멋이 살아 숨 쉬는 한옥마을의 도시, 미식의 고장.',
  quickInfo: { months: '4~5월, 9~10월', flight: 'KTX (1시간 40분)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '13℃', summer: '26℃', autumn: '15℃', winter: '1℃' } },
  details: {
    spots: '전주한옥마을, 경기전, 풍남문, 오목대',
    food: '전주비빔밥, 콩나물국밥, 한정식, 초코파이(PNB풍년제과)',
    hotel: '라한호텔전주, 전주한옥숙박체험, 르윈호텔전주',
    weatherDesc: {
      spring: '따뜻한 봄바람과 함께 한옥마을 일대가 봄꽃으로 화사하게 물듭니다.',
      summer: '높은 습도와 기온으로 더위가 심하지만 빙수와 막걸리를 즐기기 좋습니다.',
      autumn: '맑은 하늘 아래 한옥마을의 고즈넉한 정취가 가장 아름다운 계절입니다.',
      winter: '영하의 추운 날씨이지만 따뜻한 콩나물국밥 한 그릇이 여행의 묘미입니다.'
    },
    courses: {
      'day': '<br>1DAY: 전주한옥마을 -> 경기전 -> 전동성당 -> 전주비빔밥 점심 -> 오목대 -> 풍남문 -> 남부시장 야시장',
      '2-3': '<br>1DAY: 전주한옥마을 도착 -> 경기전 -> 전동성당 -> 전주비빔밥 점심 -> 한복체험 -> 오목대 산책<br>2DAY: 풍남문 -> 전주향교 -> 남부시장 -> 막걸리골목 -> 덕진공원 연꽃<br>3DAY: 한지박물관 -> PNB풍년제과 초코파이 -> 모악산 금산사 -> 귀환'
    }
  }
},
{
  id: 'd19', name: '목포 (Mokpo)', location: 'domestic',
  duration: ['day', '2-3'],
  style: ['food', 'culture', 'nature'],
  bestSeasons: ['spring', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?mokpo,harbor,sunset,korea',
  description: '서남해안의 맛과 낭만이 공존하는 항구도시, 예술과 미식의 도시.',
  quickInfo: { months: '4~5월, 9~10월', flight: 'KTX (2시간 30분)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '13℃', summer: '25℃', autumn: '16℃', winter: '3℃' } },
  details: {
    spots: '유달산, 목포해상케이블카, 근대역사관, 평화광장',
    food: '세발낙지, 민어회, 홍어삼합, 꽃게탕',
    hotel: '샹그리아비치호텔, 목포신안비치호텔, 현대호텔목포',
    weatherDesc: {
      spring: '따뜻하고 온화한 해양성 기후로 유달산 봄꽃이 아름답게 피어납니다.',
      summer: '무더운 여름이지만 해풍이 불어와 내륙보다 선선한 편입니다.',
      autumn: '맑은 가을 하늘과 서해 낙조가 환상적인 풍경을 연출합니다.',
      winter: '해양성 기후로 비교적 온화하지만 바닷바람이 매서울 수 있습니다.'
    },
    courses: {
      'day': '<br>1DAY: 유달산 노적봉 -> 목포근대역사관 -> 세발낙지 점심 -> 목포해상케이블카 -> 평화광장 춤추는 바다분수',
      '2-3': '<br>1DAY: 유달산 등산 -> 목포근대역사관 1, 2관 -> 세발낙지 점심 -> 갓바위 -> 평화광장 야경<br>2DAY: 목포해상케이블카 -> 고하도 전망대 -> 민어회 맛집 -> 김대중노벨평화상기념관<br>3DAY: 신안 증도 태평염전 -> 우전해변 -> 홍어삼합 맛집 -> 귀환'
    }
  }
},
{
  id: 'd20', name: '순천 (Suncheon)', location: 'domestic',
  duration: ['day', '2-3'],
  style: ['nature', 'culture', 'relaxation'],
  bestSeasons: ['spring', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?suncheon,bay,wetland,korea',
  description: '갈대 물결 넘실대는 순천만의 생태 수도, 자연이 빚은 힐링 도시.',
  quickInfo: { months: '4~5월, 9~11월', flight: 'KTX (2시간 40분)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '14℃', summer: '26℃', autumn: '16℃', winter: '3℃' } },
  details: {
    spots: '순천만습지, 순천만국가정원, 낙안읍성, 선암사',
    food: '꼬막정식, 장어구이, 순천만짱뚱어탕, 한정식',
    hotel: '순천그랜드관광호텔, 순천장호텔, 에코수이트호텔',
    weatherDesc: {
      spring: '따뜻한 봄바람에 순천만국가정원의 꽃들이 만개해 화려한 풍경을 보여줍니다.',
      summer: '다소 무더우나 푸르른 갈대밭과 습지 생태체험이 좋은 시기입니다.',
      autumn: '순천만 갈대가 황금빛으로 물들며 철새 도래로 장관을 이루는 최고의 계절입니다.',
      winter: '추운 편이지만 겨울 철새 관찰의 적기로, 흑두루미를 만날 수 있습니다.'
    },
    courses: {
      'day': '<br>1DAY: 순천만국가정원 -> 호수정원 -> 꼬막정식 점심 -> 순천만습지 갈대밭 -> 용산전망대 일몰',
      '2-3': '<br>1DAY: 순천만국가정원 -> 호수정원 -> 세계정원구경 -> 꼬막정식 점심 -> 순천만습지 갈대밭 산책 -> 용산전망대 일몰<br>2DAY: 낙안읍성민속마을 -> 초가집체험 -> 장어구이 점심 -> 선암사 -> 조계산 산책<br>3DAY: 순천드라마촬영장 -> 순천전통시장 -> 짱뚱어탕 -> 귀환'
    }
  }
},
{
  id: 'd21', name: '담양 (Damyang)', location: 'domestic',
  duration: ['day', '2-3'],
  style: ['nature', 'relaxation', 'culture'],
  bestSeasons: ['spring', 'summer'],
  image: 'https://source.unsplash.com/800x600/?damyang,bamboo,forest,korea',
  description: '초록빛 대나무 숲이 선사하는 청량한 힐링, 자연 속의 쉼표 같은 도시.',
  quickInfo: { months: '4~6월, 7~8월', flight: 'KTX 광주송정역 경유 (2시간 30분)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '13℃', summer: '26℃', autumn: '15℃', winter: '1℃' } },
  details: {
    spots: '죽녹원, 관방제림, 메타세쿼이아길, 소쇄원',
    food: '대통밥, 떡갈비, 창평한과, 담양국수',
    hotel: '담양리조트, 죽녹원한옥펜션, 담양힐링파크',
    weatherDesc: {
      spring: '신록이 우거지기 시작하며 대나무 숲의 싱그러운 초록을 만끽할 수 있습니다.',
      summer: '대나무 숲이 시원한 그늘을 만들어 한여름에도 쾌적한 산책이 가능합니다.',
      autumn: '메타세쿼이아길의 단풍이 황금빛으로 물들어 환상적인 가을 드라이브 명소입니다.',
      winter: '상록수인 대나무가 겨울에도 푸르러 색다른 겨울 풍경을 감상할 수 있습니다.'
    },
    courses: {
      'day': '<br>1DAY: 죽녹원 대나무숲 산책 -> 대통밥 점심 -> 관방제림 -> 메타세쿼이아길 -> 담양국수 저녁',
      '2-3': '<br>1DAY: 죽녹원 대나무숲 산책 -> 대통밥 점심 -> 관방제림 산책 -> 메타세쿼이아길 포토존 -> 카페거리<br>2DAY: 소쇄원 한국정원 -> 명옥헌원림 -> 떡갈비 점심 -> 가사문학면 -> 창평슬로시티 한과체험<br>3DAY: 담양호 수변산책 -> 금성산성 -> 담양시장 -> 귀환'
    }
  }
},
{
  id: 'd22', name: '통영 (Tongyeong)', location: 'domestic',
  duration: ['2-3', '4-5'],
  style: ['nature', 'relaxation', 'food'],
  bestSeasons: ['spring', 'summer'],
  image: 'https://source.unsplash.com/800x600/?tongyeong,harbor,island,korea',
  description: '한려수도의 푸른 바다와 예술혼이 깃든 남해안의 나폴리.',
  quickInfo: { months: '4~6월, 7~8월', flight: '고속버스 (4시간 20분)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '14℃', summer: '25℃', autumn: '17℃', winter: '4℃' } },
  details: {
    spots: '동피랑벽화마을, 한려수도조망케이블카, 미륵도, 중앙시장',
    food: '충무김밥, 해물뚝배기, 멍게비빔밥, 꿀빵',
    hotel: '스탠포드인통영, 통영한산마리나호텔, 금호통영마리나리조트',
    weatherDesc: {
      spring: '온화한 해양성 기후에 벚꽃과 함께 한려수도의 절경을 감상할 수 있습니다.',
      summer: '해수욕과 섬 투어를 즐기기에 최적이며 해풍이 더위를 식혀줍니다.',
      autumn: '맑은 하늘과 코발트빛 바다가 어우러져 사진 촬영의 최적기입니다.',
      winter: '남해안 특유의 온화한 겨울로 한적한 여행을 즐길 수 있습니다.'
    },
    courses: {
      '2-3': '<br>1DAY: 통영중앙시장 충무김밥 -> 동피랑벽화마을 -> 서피랑 -> 강구안 -> 통영야경<br>2DAY: 한려수도조망케이블카 -> 미륵산 정상 -> 달아공원 일몰 -> 해물뚝배기 저녁<br>3DAY: 미륵도 해안도로 드라이브 -> 연화도 -> 꿀빵 카페 -> 귀환',
      '4-5': '<br>1DAY: 통영중앙시장 충무김밥 -> 동피랑벽화마을 -> 서피랑 -> 강구안 야경<br>2DAY: 한려수도조망케이블카 -> 미륵산 정상 -> 멍게비빔밥 점심 -> 달아공원 일몰<br>3DAY: 한산도 이충무공유적지 -> 제승당 -> 한산대첩기념관 -> 해물뚝배기<br>4DAY: 소매물도 등대섬 트레킹 -> 해금강 유람선<br>5DAY: 이순신공원 -> 통영옻칠미술관 -> 꿀빵 카페 -> 귀환'
    }
  }
},
{
  id: 'd23', name: '안동 (Andong)', location: 'domestic',
  duration: ['day', '2-3'],
  style: ['history', 'culture', 'food'],
  bestSeasons: ['spring', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?andong,hahoe,village,korea',
  description: '유교 문화의 정수가 살아 있는 선비의 고장, 전통과 맛의 고향.',
  quickInfo: { months: '4~5월, 9~10월', flight: '고속버스 (2시간 40분)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '12℃', summer: '25℃', autumn: '14℃', winter: '-1℃' } },
  details: {
    spots: '하회마을, 도산서원, 안동찜닭골목, 월영교',
    food: '안동찜닭, 안동간고등어, 헛제사밥, 안동소주',
    hotel: '안동그랜드호텔, 하회마을한옥스테이, 리치안동호텔',
    weatherDesc: {
      spring: '봄꽃과 함께 하회마을의 고즈넉한 풍경이 가장 아름답게 빛나는 시기입니다.',
      summer: '내륙 분지 지형으로 무더위가 심하지만 하회별신굿탈놀이를 감상할 수 있습니다.',
      autumn: '병산서원 and 하회마을의 단풍이 절경이며 안동국제탈춤페스티벌이 열립니다.',
      winter: '영하로 내려가는 매서운 추위가 있지만 한적한 겨울 고택 체험이 매력적입니다.'
    },
    courses: {
      'day': '<br>1DAY: 하회마을 -> 하회별신굿탈놀이 관람 -> 안동찜닭 점심 -> 월영교 -> 도산서원',
      '2-3': '<br>1DAY: 하회마을 -> 부용대 전망 -> 하회별신굿탈놀이 관람 -> 안동찜닭 점심 -> 월영교 야경<br>2DAY: 도산서원 -> 이육사문학관 -> 안동간고등어 점심 -> 병산서원 -> 안동소주박물관<br>3DAY: 봉정사 -> 안동민속박물관 -> 헛제사밥 점심 -> 안동구시장 -> 귀환'
    }
  }
},
{
  id: 'd24', name: '포항 (Pohang)', location: 'domestic',
  duration: ['day', '2-3'],
  style: ['nature', 'food', 'culture'],
  bestSeasons: ['summer', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?pohang,sunrise,homigot,korea',
  description: '한반도에서 가장 먼저 해가 뜨는 곳, 동해안의 활기찬 항구도시.',
  quickInfo: { months: '7~8월, 9~10월', flight: 'KTX (2시간 20분)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '13℃', summer: '25℃', autumn: '16℃', winter: '3℃' } },
  details: {
    spots: '호미곶, 스페이스워크, 포항운하, 구룡포근대문화거리',
    food: '과메기, 물회, 대게, 구룡포모리국수',
    hotel: '베니키아포항호텔, 포항아쿠아호텔, 호미곶한동리조트',
    weatherDesc: {
      spring: '동해의 시원한 해풍과 함께 온화한 날씨로 해안 드라이브가 좋습니다.',
      summer: '해수욕과 물회를 즐기기에 최적이며 동해안 특유의 시원함이 있습니다.',
      autumn: '맑은 하늘과 함께 과메기 시즌이 시작되며 호미곶 일출이 황황합니다.',
      winter: '겨울 과메기의 계절이며 호미곶 해맞이 축제가 열려 색다른 매력이 있습니다.'
    },
    courses: {
      'day': '<br>1DAY: 호미곶 상생의 손 -> 국립등대박물관 -> 물회 점심 -> 스페이스워크 -> 구룡포근대문화거리',
      '2-3': '<br>1DAY: 호미곶 일출 -> 상생의 손 -> 국립등대박물관 -> 물회 점심 -> 스페이스워크 트레킹<br>2DAY: 구룡포근대문화거리 -> 구룡포모리국수 점심 -> 포항운하 크루즈 -> 죽도시장 과메기<br>3DAY: 보경사 -> 내연산 12폭포 트레킹 -> 대게 맛집 -> 귀환'
    }
  }
},
{
  id: 'd25', name: '창원 (Changwon)', location: 'domestic',
  duration: ['day', '2-3'],
  style: ['nature', 'food', 'city'],
  bestSeasons: ['spring', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?jinhae,cherry,blossom,korea',
  description: '봄이면 벚꽃 물결로 물드는 진해, 바다와 도시가 어우러진 경남의 중심.',
  quickInfo: { months: '3~4월, 9~10월', flight: 'KTX 마산역 (2시간 40분)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '14℃', summer: '26℃', autumn: '17℃', winter: '4℃' } },
  details: {
    spots: '진해군항제(벚꽃), 주남저수지, 마산어시장, 불모산',
    food: '아구찜, 복어국, 마산어시장횟집, 밀면',
    hotel: '창원그랜드호텔, 풀만호텔창원, 호텔인터불고창원',
    weatherDesc: {
      spring: '진해 벚꽃이 만개하여 전국 최대의 벚꽃 축제가 펼쳐지는 환상적인 시기입니다.',
      summer: '남해안 해양성 기후로 무덥지만 주남저수지의 연꽃이 아름답습니다.',
      autumn: '선선한 날씨에 주남저수지 철새 도래로 자연 관찰의 최적기입니다.',
      winter: '비교적 온화한 겨울로 마산어시장의 따뜻한 복어국이 일품입니다.'
    },
    courses: {
      'day': '<br>1DAY: 진해여좌천 벚꽃길 -> 경화역 벚꽃터널 -> 아구찜 점심 -> 주남저수지 -> 마산어시장',
      '2-3': '<br>1DAY: 진해여좌천 벚꽃길 -> 경화역 벚꽃터널 -> 제황산공원 진해탑 -> 아구찜 점심 -> 해군사관학교<br>2DAY: 주남저수지 생태탐방 -> 창원의 집 -> 마산어시장 회센터 -> 돝섬 야경<br>3DAY: 불모산 등산 -> 진해해양공원 -> 복어국 점심 -> 귀환'
    }
  }
},
{
  id: 'd26', name: '천안 (Cheonan)', location: 'domestic',
  duration: ['day', '2-3'],
  style: ['history', 'culture', 'food'],
  bestSeasons: ['spring', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?cheonan,independence,korea',
  description: '대한독립의 숭고한 역사와 호두과자 향이 퍼지는 충남의 관문 도시.',
  quickInfo: { months: '4~5월, 9~10월', flight: 'KTX (40분)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '12℃', summer: '26℃', autumn: '14℃', winter: '-1℃' } },
  details: {
    spots: '독립기념관, 아라리오갤러리, 천안삼거리공원, 태조산',
    food: '호두과자, 병천순대, 천안삼거리 수제비, 갈비탕',
    hotel: '천안라마다앙코르호텔, 호텔아이엠, 천안메트로호텔',
    weatherDesc: {
      spring: '벚꽃이 피는 태조산 and 독립기념관 일대가 봄나들이 명소로 인기입니다.',
      summer: '내륙 분지 특성으로 무더위가 기승이지만 태조산 계곡에서 피서가 가능합니다.',
      autumn: '맑고 선선한 가을에 독립기념관 and 태조산 단풍 산책이 좋습니다.',
      winter: '영하의 추운 날씨이며 따뜻한 병천순대국과 호두과자가 겨울 별미입니다.'
    },
    courses: {
      'day': '<br>1DAY: 독립기념관 -> 겨레의 집 -> 병천순대 점심 -> 아라리오갤러리 -> 천안삼거리공원 -> 호두과자',
      '2-3': '<br>1DAY: 독립기념관 -> 겨레의 탑 -> 겨레의 집 전시관 -> 병천순대 점심 -> 유관순열사 생가<br>2DAY: 태조산 등산 -> 각원사 청동대불 -> 아라리오갤러리 -> 갈비탕 저녁<br>3DAY: 천안삼거리공원 -> 중앙시장 -> 호두과자 맛집 -> 귀환'
    }
  }
},
{
  id: 'd27', name: '청주 (Cheongju)', location: 'domestic',
  duration: ['day', '2-3'],
  style: ['nature', 'history', 'culture'],
  bestSeasons: ['spring', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?cheongju,fortress,korea',
  description: '세계 최초 금속활자의 고장, 고즈넉한 역사와 자연이 어우러진 충북의 수도.',
  quickInfo: { months: '4~5월, 9~10월', flight: '고속버스 (1시간 40분)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '12℃', summer: '26℃', autumn: '14℃', winter: '-2℃' } },
  details: {
    spots: '수암골벽화마을, 상당산성, 청남대, 무심천',
    food: '청주한정식, 올갱이국밥, 수암골칼국수, 직지찰떡빵',
    hotel: '그랜드플라자청주호텔, 청주S호텔, 클라르호텔청주',
    weatherDesc: {
      spring: '따뜻한 봄날에 상당산성 둘레길과 무심천 벚꽃길이 아름답습니다.',
      summer: '내륙 분지로 무더운 편이지만 청남대 숲속 산책이 시원합니다.',
      autumn: '상당산성과 청남대의 단풍이 절경이며 하이킹 최적의 계절입니다.',
      winter: '영하의 추위가 이어지지만 올갱이국밥으로 따뜻하게 속을 데울 수 있습니다.'
    },
    courses: {
      'day': '<br>1DAY: 수암골벽화마을 -> 올갱이국밥 점심 -> 상당산성 둘레길 -> 무심천 산책 -> 성안길 카페거리',
      '2-3': '<br>1DAY: 수암골벽화마을 -> 올갱이국밥 점심 -> 상당산성 둘레길 -> 무심천 벚꽃길 산책<br>2DAY: 청남대 (구 대통령별장) -> 숲속산책로 -> 한정식 점심 -> 국립청주박물관 -> 직지사지<br>3DAY: 초정약수 -> 고인쇄박물관 -> 직지찰떡빵 -> 성안길 쇼핑 -> 귀환'
    }
  }
},
{
  id: 'd28', name: '공주 (Gongju)', location: 'domestic',
  duration: ['day', '2-3'],
  style: ['history', 'culture', 'nature'],
  bestSeasons: ['spring', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?gongju,gongsanseong,baekje,korea',
  description: '백제의 고도에서 만나는 1,500년 전 찬란한 문화유산의 향기.',
  quickInfo: { months: '4~5월, 9~10월', flight: '고속버스 (1시간 40분)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '12℃', summer: '26℃', autumn: '14℃', winter: '-1℃' } },
  details: {
    spots: '공산성, 무령왕릉, 마곡사, 고마나루',
    food: '알밤과자, 공주밤막걸리, 칼국수, 한정식',
    hotel: '공주한옥마을, 롯데부여리조트(인근), 공주호텔',
    weatherDesc: {
      spring: '금강변 벚꽃과 공산성의 봄꽃이 어우러져 산책하기 좋은 계절입니다.',
      summer: '무더운 여름이지만 마곡사 계곡의 시원한 물소리가 청량감을 줍니다.',
      autumn: '공산성과 마곡사의 단풍이 절경이며 백제문화제가 열리는 시기입니다.',
      winter: '추운 겨울이지만 한적한 고도의 정취를 느끼며 따뜻한 칼국수를 즐길 수 있습니다.'
    },
    courses: {
      'day': '<br>1DAY: 공산성 성곽길 산책 -> 무령왕릉과 왕릉원 -> 알밤과자 -> 고마나루명승지 -> 금강신관공원',
      '2-3': '<br>1DAY: 공산성 성곽길 산책 -> 금서루 전망 -> 무령왕릉과 왕릉원 -> 칼국수 점심 -> 국립공주박물관<br>2DAY: 마곡사 -> 백범명상길 -> 한정식 점심 -> 석장리박물관 -> 공주밤막걸리<br>3DAY: 고마나루명승지 -> 금강 자전거길 -> 알밤과자 -> 계룡산 갑사 -> 귀환'
    }
  }
},
{
  id: 'd29', name: '단양 (Danyang)', location: 'domestic',
  duration: ['day', '2-3'],
  style: ['nature', 'adventure', 'relaxation'],
  bestSeasons: ['summer', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?danyang,dodamsambong,rock,korea',
  description: '기암괴석과 에메랄드빛 남한강이 빚어낸 충북의 비경, 스릴 and 힐링의 도시.',
  quickInfo: { months: '6~8월, 9~10월', flight: '고속버스 (2시간)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '11℃', summer: '24℃', autumn: '13℃', winter: '-3℃' } },
  details: {
    spots: '도담삼봉, 단양강잔도, 만천하스카이워크, 고수동굴',
    food: '마늘순대, 마늘떡갈비, 올갱이해장국, 산채비빔밥',
    hotel: '단양리버스호텔, 대명리조트단양, 소노문단양',
    weatherDesc: {
      spring: '남한강변의 봄꽃과 도담삼봉의 조화가 아름다우며 래프팅 시즌이 시작됩니다.',
      summer: '패러글라이딩, 래프팅 등 수상 레저의 최적기이며 계곡 물놀이가 인기입니다.',
      autumn: '소백산 단풍과 도담삼봉의 가을 풍경이 절경을 이루는 시기입니다.',
      winter: '영하의 추운 날씨이지만 고수동굴 내부는 연중 15도로 쾌적합니다.'
    },
    courses: {
      'day': '<br>1DAY: 도담삼봉 -> 석문 -> 마늘순대 점심 -> 만천하스카이워크 -> 단양강잔도 산책',
      '2-3': '<br>1DAY: 도담삼봉 -> 석문 -> 마늘순대 점심 -> 만천하스카이워크 -> 단양강잔도 -> 수양개빛터널 야경<br>2DAY: 고수동굴 탐험 -> 올갱이해장국 점심 -> 래프팅 또는 패러글라이딩 -> 단양시장<br>3DAY: 소백산 등산(비로봉) -> 산채비빔밥 점심 -> 구인사 -> 귀환'
    }
  }
},
{
  id: 'd30', name: '군산 (Gunsan)', location: 'domestic',
  duration: ['day', '2-3'],
  style: ['history', 'culture', 'food'],
  bestSeasons: ['spring', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?gunsan,railway,village,korea',
  description: '근대의 기억이 골목마다 스며든 시간여행의 도시, 빵 and 짬뽕의 고장.',
  quickInfo: { months: '4~5월, 9~10월', flight: 'KTX 익산역 경유 (2시간 10분)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '12℃', summer: '25℃', autumn: '15℃', winter: '1℃' } },
  details: {
    spots: '경암동철길마을, 초원사진관, 근대역사박물관, 선유도',
    food: '이성당빵(전국 최초 빵집), 중동짬뽕, 꽃게탕, 콩나물비빔밥',
    hotel: '에이본호텔군산, 군산아리울호텔, 군산롯데시티호텔',
    weatherDesc: {
      spring: '따뜻한 봄바람에 선유도 해변과 벚꽃길이 아름다운 시기입니다.',
      summer: '해양성 기후로 내륙보다 선선하지만 장마철 습도가 높을 수 있습니다.',
      autumn: '맑은 가을 하늘과 함께 근대 건축물 탐방이 최적인 계절입니다.',
      winter: '서해 바닷바람이 차가우나 한적한 근대거리 산책의 매력이 있습니다.'
    },
    courses: {
      'day': '<br>1DAY: 이성당 단팥빵 -> 근대역사박물관 -> 초원사진관 -> 중동짬뽕 점심 -> 경암동철길마을 -> 해망굴',
      '2-3': '<br>1DAY: 이성당 단팥빵 -> 근대역사박물관 -> 근대미술관 -> 초원사진관 -> 중동짬뽕 점심 -> 경암동철길마을<br>2DAY: 선유도 명사십리해변 -> 장자도 -> 대장도 -> 꽃게탕 저녁<br>3DAY: 해망굴 -> 신흥동 일본식가옥(히로쓰가옥) -> 동국사 -> 콩나물비빔밥 -> 귀환'
    }
  }
},
{
  id: 'd31', name: '문경 (Mungyeong)', location: 'domestic',
  duration: ['day', '2-3'],
  style: ['nature', 'history', 'family'],
  bestSeasons: ['spring', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?mungyeong,saejae,pass,korea',
  description: '옛 선비들이 과거 보러 넘던 고갯길, 자연 and 역사가 함께하는 체험의 도시.',
  quickInfo: { months: '4~5월, 9~10월', flight: '고속버스 (2시간 10분)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '12℃', summer: '25℃', autumn: '13℃', winter: '-2℃' } },
  details: {
    spots: '문경새재, 레일바이크, 오미자테마터널, 에코월드',
    food: '오미자떡, 약돌돼지, 오미자한과, 산채정식',
    hotel: '문경스파리조트, STX리조트문경, 문경관광호텔',
    weatherDesc: {
      spring: '문경새재 옛길에 봄꽃이 피어 트레킹과 역사 탐방의 최적기입니다.',
      summer: '내륙 산간 지역이라 도심보다 선선하며 오미자 열매가 익어가는 시기입니다.',
      autumn: '문경새재의 단풍이 절정을 이루며 오미자 축제가 열려 활기찬 계절입니다.',
      winter: '영하의 추위가 이어지지만 새재 겨울 설경이 운치 있습니다.'
    },
    courses: {
      'day': '<br>1DAY: 문경새재 제1관문(주흘관) -> 제2관문(조곡관) -> 약돌돼지 점심 -> 레일바이크 -> 오미자테마터널',
      '2-3': '<br>1DAY: 문경새재 제1관문~제3관문 트레킹 -> 약돌돼지 점심 -> 문경도자기박물관<br>2DAY: 레일바이크 -> 가은오픈세트장 -> 산채정식 점심 -> 오미자테마터널 -> 오미자떡 체험<br>3DAY: 에코월드 자연생태공원 -> 고모산성 -> 오미자한과 기념품 -> 귀환'
    }
  }
},
{
  id: 'd32', name: '남해 (Namhae)', location: 'domestic',
  duration: ['2-3', '4-5'],
  style: ['nature', 'relaxation', 'food'],
  bestSeasons: ['spring', 'summer'],
  image: 'https://source.unsplash.com/800x600/?namhae,german,village,terraced,field',
  description: '다랭이논과 독일마을이 어우러진 보물섬, 남해바다의 따뜻한 품.',
  quickInfo: { months: '4~6월, 7~8월', flight: '고속버스 남해행 (4시간 30분)', visa: '국내 (해당없음)', voltage: '220V',
    temp: { spring: '14℃', summer: '25℃', autumn: '17℃', winter: '4℃' } },
  details: {
    spots: '독일마을, 보리암, 다랭이마을, 상주은모래비치',
    food: '멸치쌈밥, 남해마늘갈비, 바다장어, 시금치삼합',
    hotel: '사우스케이프리조트, 힐튼남해골프앤스파리조트, 남해편백자연휴양림',
    weatherDesc: {
      spring: '유채꽃과 다랭이논의 초록빛이 어우러져 사진 촬영 명소로 인기입니다.',
      summer: '상주은모래비치에서 해수욕을 즐기기 좋으며 남해안 특유의 시원함이 있습니다.',
      autumn: '황금빛 다랭이논과 은빛 억새가 가을 정취를 물씬 풍깁니다.',
      winter: '남해안 온화한 기후로 겨울에도 비교적 따뜻하지만 바람이 강할 수 있습니다.'
    },
    courses: {
      '2-3': '<br>1DAY: 독일마을 -> 남해대교 전망 -> 멸치쌈밥 점심 -> 다랭이마을 -> 상주은모래비치 석양<br>2DAY: 보리암 일출 -> 금산 등산 -> 바다장어 점심 -> 남해편백자연휴양림<br>3DAY: 창선-삼천포대교 드라이브 -> 물건방조어부림 -> 마늘갈비 점심 -> 귀환',
      '4-5': '<br>1DAY: 남해대교 -> 이순신순국공원 -> 독일마을 산책 -> 맥주파티<br>2DAY: 다랭이마을 -> 가천암수바위 -> 멸치쌈밥 점심 -> 상주은모래비치 해수욕<br>3DAY: 보리암 일출 -> 금산 보리암길 트레킹 -> 바다장어 점심 -> 남해편백자연휴양림<br>4DAY: 창선-삼천포대교 드라이브 -> 노량해협 -> 물건방조어부림 -> 시금치삼합<br>5DAY: 남해유배문학관 -> 앵강만 카페거리 -> 마늘갈비 점심 -> 귀환'
    }
  }
},
{
  id: 'i1', name: '오사카, 일본 (Osaka)', location: 'international',
  flight: 'short',
  duration: ['2-3', '4-6', '7-14'],
  style: ['food', 'city', 'shopping'],
  bestSeasons: ['spring', 'autumn', 'winter'],
  image: 'https://source.unsplash.com/800x600/?osaka,dotonbori',
  description: '먹다 쓰러지는 미식의 도시, 활기 넘치는 네온과 인정 넘치는 사람들이 반기는 곳.',
  quickInfo: { months: '3~5월, 10~12월', flight: '1시간 40분 직항', visa: '90일 무비자', voltage: '100V',
    temp: { spring: '14~20℃', summer: '26~33℃', autumn: '15~24℃', winter: '3~10℃' } },
  details: {
    spots: '도톤보리, 유니버설 스튜디오 재팬(USJ), 오사카성, 우메다 스카이빌딩',
    food: '타코야키, 오코노미야키, 쿠시카츠, 이카야키',
    hotel: '크로스호텔 오사카, 호텔 닛코 오사카, 더 리츠칼튼 오사카',
    shopping: '돈키호테 면세품, 신사이바시 드럭스토어, 리쿠로 오지상 치즈케이크, 글리코 과자',
    weatherDesc: {
      spring: '벚꽃이 만개하는 3~4월이 가장 아름다우며, 평균 기온 15~20℃로 관광하기 좋습니다.',
      summer: '고온다습하며 35℃ 이상 올라가는 날이 많아 실내 관광 위주가 좋습니다.',
      autumn: '10~11월은 단풍과 쾌적한 날씨로 오사카성 주변 산책이 최고입니다.',
      winter: '5~10℃의 쌀쌀한 날씨지만 일루미네이션과 연말 분위기가 매력적입니다.'
    },
    courses: {
      '2-3': '<br>1DAY: 간사이공항 도착 -> 도톤보리 거리 산책 -> 글리코 간판 포토존 -> 이치란 라멘<br>2DAY: 오사카성 공원 -> 쿠로몬시장 점심 -> 신사이바시 쇼핑 -> 난바 야경<br>3DAY: 유니버설 스튜디오 재팬 종일 -> 우메다 스카이빌딩 야경 -> 귀국',
      '4-6': '<br>1DAY: 간사이공항 도착 -> 도톤보리 거리 산책 -> 글리코 간판 포토존<br>2DAY: 오사카성 -> 쿠로몬시장 -> 신사이바시 쇼핑<br>3DAY: USJ 종일<br>4DAY: 나라공원 사슴 -> 도다이지 -> 나라마치 산책<br>5DAY: 우메다 스카이빌딩 -> 텐노지 동물원 -> 아베노하루카스 전망대<br>6DAY: 린쿠 프리미엄 아울렛 -> 귀국',
      '7-14': '<br>1DAY: 간사이공항 도착 -> 도톤보리<br>2DAY: 오사카성 -> 쿠로몬시장 -> 신사이바시<br>3DAY: USJ 종일<br>4DAY: 나라공원 -> 도다이지<br>5DAY: 교토 후시미이나리 -> 기요미즈데라<br>6DAY: 교토 아라시야마 -> 금각사<br>7DAY: 고베 이진칸 -> 고베 하버랜드 -> 고베규 디너<br>8DAY: 우메다 -> 덴덴타운 -> 아메무라<br>9DAY: 스미요시타이샤 -> 텐노지 -> 귀국'
    }
  }
},
{
  id: 'i2', name: '도쿄, 일본 (Tokyo)', location: 'international',
  flight: 'short',
  duration: ['2-3', '4-6', '7-14'],
  style: ['city', 'shopping', 'food', 'culture'],
  bestSeasons: ['spring', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?tokyo,shibuya,crossing',
  description: '전통과 초현대가 공존하는 세계 최대의 메트로폴리탄, 끝없는 볼거리와 먹거리의 천국.',
  quickInfo: { months: '3~5월, 10~11월', flight: '2시간 30분 직항', visa: '90일 무비자', voltage: '100V',
    temp: { spring: '12~20℃', summer: '25~32℃', autumn: '14~23℃', winter: '2~10℃' } },
  details: {
    spots: '시부야 스크램블 교차로, 아사쿠사 센소지, 신주쿠 가부키초, 도쿄타워',
    food: '스시, 라멘, 텐푸라, 규카츠',
    hotel: '파크 하얏트 도쿄, 시나가와 프린스호텔, 호텔 그레이서리 신주쿠',
    shopping: '하라주쿠 패션, 아키하바라 전자제품, 긴자 명품, 돈키호테 잡화',
    weatherDesc: {
      spring: '3월 말~4월 초 벚꽃 시즌이며, 기온 15~20℃로 야외 활동에 최적입니다.',
      summer: '고온다습한 여름으로 30℃ 이상이 지속되며, 하나비(불꽃놀이) 축제가 열립니다.',
      autumn: '10~11월 맑고 선선한 날씨에 단풍 명소가 아름답습니다.',
      winter: '맑은 날이 많고 3~8℃로 쌀쌀하지만, 일루미네이션이 화려합니다.'
    },
    courses: {
      '2-3': '<br>1DAY: 나리타/하네다 도착 -> 시부야 스크램블 교차로 -> 하라주쿠 다케시타도리 -> 오모테산도 카페<br>2DAY: 아사쿠사 센소지 -> 스카이트리 전망대 -> 아키하바라 -> 신주쿠 야경<br>3DAY: 츠키지 외시장 아침식사 -> 긴자 쇼핑 -> 도쿄타워 -> 귀국',
      '4-6': '<br>1DAY: 도착 -> 시부야 -> 하라주쿠 -> 오모테산도<br>2DAY: 아사쿠사 센소지 -> 스카이트리 -> 아키하바라<br>3DAY: 메이지신궁 -> 신주쿠교엔 -> 가부키초<br>4DAY: 츠키지 -> 오다이바 -> 레인보우브릿지 야경<br>5DAY: 가마쿠라 당일치기 -> 대불 -> 에노시마<br>6DAY: 긴자 쇼핑 -> 도쿄타워 -> 귀국',
      '7-14': '<br>1DAY: 도착 -> 시부야 -> 하라주쿠<br>2DAY: 아사쿠사 -> 스카이트리 -> 아키하바라<br>3DAY: 메이지신궁 -> 신주쿠교엔 -> 골든가이<br>4DAY: 츠키지 -> 긴자 -> 오다이바<br>5DAY: 가마쿠라 -> 에노시마 당일치기<br>6DAY: 닛코 당일치기 -> 도쇼구<br>7DAY: 하코네 온천 -> 오와쿠다니 -> 아시노코 호수<br>8DAY: 지브리 미술관 -> 나카노 브로드웨이 -> 이케부쿠로<br>9DAY: 시모키타자와 -> 다이칸야마 -> 에비스 맥주기념관 -> 귀국'
    }
  }
},
{
  id: 'i3', name: '교토, 일본 (Kyoto)', location: 'international',
  flight: 'short',
  duration: ['2-3', '4-6'],
  style: ['culture', 'history', 'nature'],
  bestSeasons: ['spring', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?kyoto,fushimi,inari,torii',
  description: '천년 고도의 품격, 붉은 도리이와 단풍이 어우러지는 일본 전통미의 정수.',
  quickInfo: { months: '3~5월, 10~11월', flight: '1시간 40분 직항 (간사이공항)', visa: '90일 무비자', voltage: '100V',
    temp: { spring: '10~20℃', summer: '25~34℃', autumn: '12~24℃', winter: '1~9℃' } },
  details: {
    spots: '기요미즈데라, 후시미이나리 타이샤, 아라시야마 대나무숲, 금각사(킨카쿠지)',
    food: '유도후(두부요리), 교카이세키, 말차 디저트, 유바(두부껍질)',
    hotel: '호텔 그란비아 교토, 교토 브라이튼 호텔, 더 리츠칼튼 교토',
    shopping: '유젠(교토 전통 염색), 요지야 기름종이, 말차 과자, 교토 도자기',
    weatherDesc: {
      spring: '3월 말~4월 중순 벚꽃 만개, 15~20℃의 온화한 날씨로 사찰 탐방에 최적입니다.',
      summer: '분지 지형으로 고온다습하며 35℃ 이상 올라가 매우 덥습니다.',
      autumn: '11월 중순~12월 초 단풍이 절정이며, 10~20℃의 쾌적한 날씨입니다.',
      winter: '바닥 냉기가 올라오는 추위로 5℃ 이하, 가끔 눈이 내려 설경이 아름답습니다.'
    },
    courses: {
      '2-3': '<br>1DAY: 간사이공항 도착 -> 후시미이나리 타이샤 천 개의 도리이 -> 기요미즈데라 -> 산넨자카 거리<br>2DAY: 아라시야마 대나무숲 -> 텐류지 -> 금각사 -> 니조성<br>3DAY: 니시키시장 아침 -> 기온 거리 산책 -> 야사카신사 -> 귀국',
      '4-6': '<br>1DAY: 도착 -> 후시미이나리 타이샤 -> 도후쿠지<br>2DAY: 기요미즈데라 -> 산넨자카 -> 기온 거리 -> 게이샤 문화 체험<br>3DAY: 아라시야마 대나무숲 -> 텐류지 -> 도게츠교<br>4DAY: 금각사 -> 료안지 -> 니조성 -> 니시키시장<br>5DAY: 우지 도인 -> 말차 체험 -> 나라 당일치기<br>6DAY: 히가시야마 산책 -> 쇼핑 -> 귀국'
    }
  }
},
{
  id: 'i4', name: '후쿠오카, 일본 (Fukuoka)', location: 'international',
  flight: 'short',
  duration: ['2-3', '4-6'],
  style: ['food', 'city', 'shopping'],
  bestSeasons: ['spring', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?fukuoka,japan,canal,city',
  description: '돈코츠 라멘의 본고장, 야타이 포장마차의 정취가 가득한 규슈의 관문 도시.',
  quickInfo: { months: '3~5월, 10~11월', flight: '1시간 20분 직항', visa: '90일 무비자', voltage: '100V',
    temp: { spring: '12~19℃', summer: '25~32℃', autumn: '14~23℃', winter: '3~10℃' } },
  details: {
    spots: '하카타 나카스 야타이, 캐널시티 하카타, 다자이후 텐만구, 텐진 지하상가',
    food: '하카타 돈코츠 라멘, 모츠나베, 멘타이코, 미즈타키(닭 전골)',
    hotel: '호텔 닛코 후쿠오카, 그랜드 하얏트 후쿠오카, 호텔 포르자 하카타',
    shopping: '텐진 지하상가 의류, 하카타 토오리몬 만주, 이와타야 백화점, 멘타이코 선물',
    weatherDesc: {
      spring: '벚꽃이 3월 말 피기 시작하며, 15~20℃로 야외 활동에 좋습니다.',
      summer: '고온다습하며 30℃ 이상, 기온 축제 등 여름 축제가 열립니다.',
      autumn: '쾌적한 날씨에 15~22℃로 다자이후 단풍이 아름답습니다.',
      winter: '5~10℃로 비교적 온화하며, 겨울 야타이 라멘이 특별합니다.'
    },
    courses: {
      '2-3': '<br>1DAY: 후쿠오카공항 도착 -> 하카타역 주변 -> 캐널시티 하카타 -> 나카스 야타이 라멘<br>2DAY: 다자이후 텐만구 -> 스타벅스 다자이후점 -> 텐진 쇼핑 -> 모츠나베 디너<br>3DAY: 오호리공원 산책 -> 하카타 포장마차 골목 -> 귀국',
      '4-6': '<br>1DAY: 도착 -> 캐널시티 하카타 -> 나카스 야타이<br>2DAY: 다자이후 텐만구 -> 규슈국립박물관 -> 텐진<br>3DAY: 야나가와 뱃놀이 -> 장어덮밥 -> 오호리공원<br>4DAY: 이토시마 해안 드라이브 -> 후타미가우라 부부바위 -> 해산물 점심<br>5DAY: 시카노시마 -> 하코자키궁 -> 하카타 전통공예관<br>6DAY: 텐진 지하상가 쇼핑 -> 귀국'
    }
  }
},
{
  id: 'i5', name: '방콕, 태국 (Bangkok)', location: 'international',
  flight: 'medium',
  duration: ['2-3', '4-6', '7-14'],
  style: ['food', 'city', 'shopping'],
  bestSeasons: ['winter'],
  image: 'https://source.unsplash.com/800x600/?bangkok,grand,palace,temple',
  description: '화려한 사원과 숨 막히는 길거리 음식, 저렴한 쇼핑까지 모든 것이 넘치는 동남아의 심장.',
  quickInfo: { months: '11~2월', flight: '5시간 30분 직항', visa: '90일 무비자', voltage: '220V',
    temp: { spring: '29~36℃', summer: '28~34℃', autumn: '26~32℃', winter: '22~32℃' } },
  details: {
    spots: '왕궁과 왓프라깨우, 카오산로드, 짜뚜짝 주말시장, 왓아룬(새벽사원)',
    food: '팟타이, 똠얌꿍, 망고 스티키라이스, 쏨땀(파파야 샐러드)',
    hotel: '방콕 매리어트 마르퀴스, 시암 켐핀스키, 아난타라 리버사이드',
    shopping: '짜뚜짝시장 수공예품, 씨암 파라곤 명품, 터미널21 트렌디 패션, 나라야 가방',
    weatherDesc: {
      spring: '3~5월은 가장 더운 건기로 35℃ 이상이며, 에어컨 시설이 필수입니다.',
      summer: '우기가 시작되어 갑작스런 폭우가 내리지만, 스콜 후 빨리 갭니다.',
      autumn: '10~11월은 우기 막바지로 가끔 비가 오며, 점차 선선해집니다.',
      winter: '11~2월은 건기이며 22~32℃로 관광 최적 시즌입니다.'
    },
    courses: {
      '2-3': '<br>1DAY: 수완나품공항 도착 -> 왕궁 & 왓프라깨우 -> 왓포(와불) -> 왓아룬 야경<br>2DAY: 짜뚜짝 주말시장 -> 씨암 파라곤 쇼핑 -> 아시아티크 야시장<br>3DAY: 카오산로드 -> 담넌사두악 수상시장 -> 귀국',
      '4-6': '<br>1DAY: 도착 -> 왕궁 -> 왓프라깨우 -> 왓포<br>2DAY: 짜뚜짝시장 -> 씨암 파라곤 -> 터미널21<br>3DAY: 담넌사두악 수상시장 -> 매끌렁 기찻길시장 -> 왓아룬 야경<br>4DAY: 아유타야 당일투어 -> 유적지 탐방<br>5DAY: 카오산로드 -> 차이나타운 야오와랏 -> 루프탑바<br>6DAY: 태국 마사지 -> 쇼핑 -> 귀국',
      '7-14': '<br>1DAY: 도착 -> 카오산로드<br>2DAY: 왕궁 -> 왓프라깨우 -> 왓포 -> 왓아룬<br>3DAY: 짜뚜짝시장 -> 씨암 일대 쇼핑<br>4DAY: 담넌사두악 -> 매끌렁 기찻길시장<br>5DAY: 아유타야 당일투어<br>6DAY: 차이나타운 -> 루프탑바<br>7DAY: 파타야 당일치기 -> 산호섬<br>8DAY: 쿠킹클래스 -> 태국 마사지 -> 쇼핑 -> 귀국'
    }
  }
},
{
  id: 'i6', name: '다낭, 베트남 (Da Nang)', location: 'international',
  flight: 'medium',
  duration: ['2-3', '4-6'],
  style: ['relaxation', 'food', 'nature'],
  bestSeasons: ['spring', 'summer'],
  image: 'https://source.unsplash.com/800x600/?danang,vietnam,beach,marble',
  description: '에메랄드빛 바다 and 황금빛 해변, 가성비 최고의 리조트 휴양과 미식을 동시에.',
  quickInfo: { months: '3~8월', flight: '4시간 40분 직항', visa: '45일 무비자', voltage: '220V',
    temp: { spring: '24~30℃', summer: '26~34℃', autumn: '23~29℃', winter: '19~24℃' } },
  details: {
    spots: '미케비치, 바나힐 골든브릿지, 호이안 구시가지, 오행산(마블마운틴)',
    food: '반미, 쌀국수(퍼), 미꽝, 반쎄오(베트남식 부침개)',
    hotel: '인터컨티넨탈 다낭, 풀만 다낭, 하얏트 리젠시 다낭',
    shopping: '한시장 기념품, 호이안 맞춤옷, 코코넛 오일, 베트남 커피(G7)',
    weatherDesc: {
      spring: '건기가 시작되어 비가 적고, 25~30℃로 해변 휴양에 좋습니다.',
      summer: '가장 덥지만 맑은 날이 많아 해양 액티비티에 최적입니다.',
      autumn: '9~11월은 우기로 태풍과 많은 비가 예상됩니다.',
      winter: '비가 자주 오고 20℃ 전후로 선선하며, 관광 비수기입니다.'
    },
    courses: {
      '2-3': '<br>1DAY: 다낭공항 도착 -> 미케비치 리조트 체크인 -> 해변 휴식 -> 용다리 야경<br>2DAY: 바나힐 골든브릿지 종일 -> 한시장 쇼핑 -> 해산물 디너<br>3DAY: 호이안 구시가지 -> 등불 거리 -> 올드타운 카페 -> 귀국',
      '4-6': '<br>1DAY: 도착 -> 미케비치 리조트 -> 해변 휴식<br>2DAY: 바나힐 골든브릿지 종일 투어<br>3DAY: 호이안 구시가지 -> 맞춤옷 주문 -> 등불 야경<br>4DAY: 오행산(마블마운틴) -> 참 조각 박물관 -> 한강 야경<br>5DAY: 후에 당일투어 -> 황궁 -> 티엔무 사원<br>6DAY: 미케비치 스노클링 -> 한시장 쇼핑 -> 귀국'
    }
  }
},
{
  id: 'i7', name: '싱가포르 (Singapore)', location: 'international',
  flight: 'medium',
  duration: ['2-3', '4-6'],
  style: ['city', 'food', 'shopping'],
  bestSeasons: ['spring', 'winter'],
  image: 'https://source.unsplash.com/800x600/?singapore,marina,bay,sands',
  description: '미래 도시의 스카이라인과 다문화 미식, 깨끗하고 안전한 동남아의 보석.',
  quickInfo: { months: '2~4월, 11~1월', flight: '6시간 20분 직항', visa: '90일 무비자', voltage: '230V',
    temp: { spring: '25~32℃', summer: '25~32℃', autumn: '24~31℃', winter: '24~31℃' } },
  details: {
    spots: '마리나베이샌즈, 가든스 바이 더 베이, 센토사섬, 차이나타운',
    food: '칠리크랩, 하이난 치킨라이스, 락사, 카야토스트',
    hotel: '마리나베이샌즈, 래플스 호텔, 풀러턴 호텔',
    shopping: '오차드로드 명품, ION 오차드, 무스타파 센터, TWG 티',
    weatherDesc: {
      spring: '건기에 해당하며 비교적 맑은 날이 많고, 27~32℃입니다.',
      summer: '무더운 날씨가 계속되며, 갑작스런 스콜이 자주 내립니다.',
      autumn: '우기가 시작되어 오후에 소나기가 자주 내립니다.',
      winter: '우기이지만 하루 종일 비가 오진 않으며, 크리스마스 장식이 화려합니다.'
    },
    courses: {
      '2-3': '<br>1DAY: 창이공항 도착 -> 마리나베이샌즈 전망대 -> 가든스 바이 더 베이 -> 슈퍼트리 라이트쇼<br>2DAY: 센토사섬(유니버설 스튜디오/아쿠아리움) -> 머라이언파크 -> 클락키 야경<br>3DAY: 차이나타운 -> 리틀인디아 -> 오차드로드 쇼핑 -> 귀국',
      '4-6': '<br>1DAY: 도착 -> 마리나베이샌즈 -> 가든스 바이 더 베이<br>2DAY: 센토사섬 종일(USS, 아쿠아리움, 해변)<br>3DAY: 차이나타운 -> 리틀인디아 -> 아랍스트리트 -> 칠리크랩 디너<br>4DAY: 보타닉가든(UNESCO) -> 오차드로드 쇼핑 -> 나이트사파리<br>5DAY: 머라이언파크 -> 에스플러네이드 -> 호커센터 미식투어<br>6DAY: 주얼 창이 -> 쇼핑 -> 귀국'
    }
  }
},
{
  id: 'i8', name: '타이베이, 대만 (Taipei)', location: 'international',
  flight: 'short',
  duration: ['2-3', '4-6'],
  style: ['food', 'city', 'culture', 'shopping'],
  bestSeasons: ['spring', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?taipei,101,tower,night',
  description: '야시장의 열기와 구름 위의 지우펀, 소확행 가득한 보물 같은 도시.',
  quickInfo: { months: '3~5월, 10~11월', flight: '2시간 30분 직항', visa: '90일 무비자', voltage: '110V',
    temp: { spring: '18~26℃', summer: '27~34℃', autumn: '20~28℃', winter: '13~19℃' } },
  details: {
    spots: '지우펀 올드스트리트, 스린야시장, 타이베이101 전망대, 용산사',
    food: '샤오롱바오(딘타이펑), 우육면, 망고빙수, 루로우판',
    hotel: '만다린 오리엔탈 타이베이, W 타이베이, 시저파크 호텔',
    shopping: '융캉제 디저트, 파인애플케이크, 시먼딩 패션, 대만 차(우롱차)',
    weatherDesc: {
      spring: '가끔 비가 오지만 20~25℃로 쾌적하며, 관광하기 가장 좋은 시기입니다.',
      summer: '30℃ 이상의 무더위 and 태풍 시즌으로 실내 관광 위주가 좋습니다.',
      autumn: '맑고 선선한 날씨에 22~28℃로 야외 활동에 좋습니다.',
      winter: '비가 자주 오고 15℃ 전후로 서늘하며, 온천 여행이 제격입니다.'
    },
    courses: {
      '2-3': '<br>1DAY: 타오위안공항 도착 -> 시먼딩 거리 산책 -> 용산사 -> 스린야시장<br>2DAY: 타이베이101 전망대 -> 융캉제(딘타이펑) -> 중정기념당 -> 닝샤야시장<br>3DAY: 지우펀 올드스트리트 -> 스펀 천등날리기 -> 귀국',
      '4-6': '<br>1DAY: 도착 -> 시먼딩 -> 용산사 -> 스린야시장<br>2DAY: 타이베이101 -> 융캉제 -> 중정기념당<br>3DAY: 지우펀 -> 스펀 천등날리기 -> 진과스 황금박물관<br>4DAY: 베이터우 온천 -> 국립고궁박물원 -> 스린야시장<br>5DAY: 단수이 노을 -> 홍마오청 -> 어인부두 -> 라오허제야시장<br>6DAY: 화산1914 문화창의공원 -> 쇼핑 -> 귀국'
    }
  }
},
{
  id: 'i9', name: '홍콩 (Hong Kong)', location: 'international',
  flight: 'short',
  duration: ['2-3', '4-6'],
  style: ['city', 'food', 'shopping'],
  bestSeasons: ['autumn', 'winter'],
  image: 'https://source.unsplash.com/800x600/?hongkong,victoria,peak,skyline',
  description: '빅토리아 하버의 백만불 야경과 딤섬의 향연, 동서양이 만나는 매력적인 도시.',
  quickInfo: { months: '10~12월', flight: '3시간 30분 직항', visa: '90일 무비자', voltage: '220V',
    temp: { spring: '20~26℃', summer: '27~32℃', autumn: '22~28℃', winter: '14~19℃' } },
  details: {
    spots: '빅토리아피크, 침사추이 스타의 거리, 란콰이펑, 홍콩 디즈니랜드',
    food: '딤섬, 완탄면, 에그타르트, 로스트구스(소금구이 거위)',
    hotel: '더 페닌슐라 홍콩, 만다린 오리엔탈 홍콩, 리갈 공항호텔',
    shopping: '하버시티 명품, 레이디스마켓 기념품, 사사 화장품, 제니 쿠키',
    weatherDesc: {
      spring: '안개가 잦고 습한 날씨이며, 20~25℃로 가끔 비가 내립니다.',
      summer: '30℃ 이상의 고온다습한 날씨에 태풍이 올 수 있습니다.',
      autumn: '맑고 건조하며 22~28℃로 홍콩 여행의 최적기입니다.',
      winter: '15~20℃로 선선하며 맑은 날이 많아 야경 감상에 좋습니다.'
    },
    courses: {
      '2-3': '<br>1DAY: 홍콩공항 도착 -> 침사추이 스타의 거리 -> 심포니 오브 라이츠 야경<br>2DAY: 빅토리아피크 트램 -> 센트럴 미드레벨 에스컬레이터 -> 란콰이펑 -> 소호<br>3DAY: 몽콕 레이디스마켓 -> 템플스트리트 야시장 -> 귀국',
      '4-6': '<br>1DAY: 도착 -> 침사추이 -> 심포니 오브 라이츠<br>2DAY: 빅토리아피크 -> 센트럴 -> 란콰이펑<br>3DAY: 홍콩 디즈니랜드 종일<br>4DAY: 몽콕 -> 레이디스마켓 -> 템플스트리트 야시장<br>5DAY: 스탠리마켓 -> 리펄스베이 -> 애버딘 수상마을<br>6DAY: 마카오 당일치기(세나도광장, 카지노) -> 귀국'
    }
  }
},
{
  id: 'i10', name: '발리, 인도네시아 (Bali)', location: 'international',
  flight: 'medium',
  duration: ['4-6', '7-14'],
  style: ['relaxation', 'nature', 'culture'],
  bestSeasons: ['spring', 'summer'],
  image: 'https://source.unsplash.com/800x600/?bali,ubud,rice,terrace',
  description: '신들의 섬에서 만나는 에메랄드빛 라이스 테라스와 영혼이 치유되는 힐링의 안식처.',
  quickInfo: { months: '4~10월', flight: '7시간 직항', visa: '30일 무비자', voltage: '230V',
    temp: { spring: '24~31℃', summer: '24~30℃', autumn: '24~31℃', winter: '24~30℃' } },
  details: {
    spots: '우붓 라이스 테라스, 꾸따비치, 울루와뚜 사원, 테갈랄랑 계단식 논',
    food: '나시고렝, 미고렝, 바비굴링(통돼지구이), 사떼(꼬치구이)',
    hotel: '아야나 리조트 발리, 불가리 리조트 발리, 우붓 행잉가든',
    shopping: '우붓 아트마켓 수공예품, 루왁커피, 바틱 직물, 실버 주얼리',
    weatherDesc: {
      spring: '건기가 시작되어 맑은 날이 많고 25~31℃로 해변과 관광에 최적입니다.',
      summer: '건기 중심으로 가장 쾌적하며, 서핑과 다이빙에 좋은 시기입니다.',
      autumn: '건기 후반으로 여전히 맑지만, 10월부터 가끔 비가 옵니다.',
      winter: '우기로 매일 스콜이 내리지만, 리조트에서 힐링하기 좋습니다.'
    },
    courses: {
      '4-6': '<br>1DAY: 응우라라이공항 도착 -> 꾸따비치 -> 스미냑 선셋 디너<br>2DAY: 울루와뚜 사원 -> 켓착댄스 공연 -> 짐바란 해산물 디너<br>3DAY: 우붓 이동 -> 테갈랄랑 라이스 테라스 -> 우붓 원숭이숲<br>4DAY: 우붓 아트마켓 -> 바투르산 전망 -> 티르타엠풀 사원<br>5DAY: 누사두아 해변 -> 스노클링 -> 스파 힐링<br>6DAY: 탄아롯 사원 일몰 -> 쇼핑 -> 귀국',
      '7-14': '<br>1DAY: 도착 -> 꾸따비치 -> 스미냑<br>2DAY: 울루와뚜 사원 -> 켓착댄스 -> 짐바란<br>3DAY: 우붓 이동 -> 테갈랄랑 -> 원숭이숲<br>4DAY: 바투르산 일출 트레킹 -> 티르타엠풀<br>5DAY: 우붓 요가 리트릿 -> 쿠킹클래스<br>6DAY: 누사페니다 섬 투어 -> 케링킹 비치<br>7DAY: 짱구 서핑 -> 에코 비치 -> 탄아롯 사원<br>8DAY: 스파 데이 -> 세미냑 쇼핑 -> 디너<br>9DAY: 렘봉안섬 스노클링 -> 맹그로브 투어 -> 귀국'
    }
  }
},
{
  id: 'i11', name: '파리, 프랑스 (Paris)', location: 'international',
  flight: 'long',
  duration: ['4-6', '7-14'],
  style: ['culture', 'romantic', 'shopping', 'food'],
  bestSeasons: ['spring', 'summer', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?paris,eiffel,tower',
  description: '에펠탑 아래 흐르는 센 강의 낭만, 예술 and 패션과 미식이 숨 쉬는 빛의 도시.',
  quickInfo: { months: '4~6월, 9~10월', flight: '12시간 직항', visa: '90일 무비자 (쉥겐)', voltage: '230V',
    temp: { spring: '8~17℃', summer: '15~26℃', autumn: '8~17℃', winter: '2~8℃' } },
  details: {
    spots: '에펠탑, 루브르 박물관, 몽마르트르 언덕, 개선문(샹젤리제)',
    food: '크루아상, 에스카르고, 스테이크 프리트, 마카롱',
    hotel: '르 브리스톨 파리, 호텔 플라자 아테네, 시타딘 생제르맹데프레',
    shopping: '갤러리 라파예트 명품, 샹젤리제 플래그십, 마레지구 편집숍, 라듀레 마카롱',
    weatherDesc: {
      spring: '기온이 올라가며 8~17℃로 꽃이 피고, 야외 카페가 활기를 띱니다.',
      summer: '20~26℃로 따뜻하며 해가 밤 10시까지 져, 야외 활동이 최적입니다.',
      autumn: '단풍이 아름답고 10~17℃로 선선하며, 관광객이 줄어 쾌적합니다.',
      winter: '2~8℃로 춥지만, 크리스마스 장식 and 솔드(세일) 시즌이 매력적입니다.'
    },
    courses: {
      '4-6': '<br>1DAY: 샤를드골공항 도착 -> 에펠탑 야경 -> 센강 유람선<br>2DAY: 루브르 박물관(오전) -> 튈르리 정원 -> 샹젤리제 -> 개선문<br>3DAY: 몽마르트르 -> 사크레쾨르 대성당 -> 마레지구 산책<br>4DAY: 오르세 미술관 -> 생제르맹데프레 카페 -> 갤러리 라파예트 쇼핑<br>5DAY: 베르사유 궁전 당일투어 -> 거울의 방 -> 정원 산책<br>6DAY: 노트르담 주변 -> 셰익스피어 앤 컴퍼니 서점 -> 귀국',
      '7-14': '<br>1DAY: 도착 -> 에펠탑 -> 센강 유람<br>2DAY: 루브르 박물관 -> 튈르리 정원<br>3DAY: 몽마르트르 -> 사크레쾨르<br>4DAY: 오르세 미술관 -> 생제르맹데프레<br>5DAY: 베르사유 궁전 종일<br>6DAY: 샹젤리제 -> 개선문 -> 갤러리 라파예트<br>7DAY: 지베르니 모네의 정원 당일투어<br>8DAY: 마레지구 -> 퐁피두 센터 -> 바스티유<br>9DAY: 퐁텐블로 궁전 -> 파리 미식투어<br>10DAY: 라데팡스 -> 면세점 쇼핑 -> 귀국'
    }
  }
},
{
  id: 'i12', name: '런던, 영국 (London)', location: 'international',
  flight: 'long',
  duration: ['4-6', '7-14'],
  style: ['culture', 'city', 'history', 'shopping'],
  bestSeasons: ['summer', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?london,big,ben,parliament',
  description: '빅벤의 종소리와 템즈강의 낭만, 왕실 전통 and 현대 문화가 어우러지는 도시.',
  quickInfo: { months: '6~9월', flight: '12시간 직항', visa: '6개월 무비자', voltage: '230V',
    temp: { spring: '7~15℃', summer: '13~23℃', autumn: '7~15℃', winter: '2~8℃' } },
  details: {
    spots: '빅벤(엘리자베스 타워), 대영박물관, 타워브릿지, 버킹엄 궁전',
    food: '피시앤칩스, 선데이 로스트, 애프터눈 티, 풀 잉글리시 브렉퍼스트',
    hotel: '더 사보이, 클래리지스, 프리미어 인 런던시티',
    shopping: '해로즈 백화점, 옥스포드 스트리트, 리버티 백화점, 포트넘앤메이슨 홍차',
    weatherDesc: {
      spring: '기온이 오르며 8~15℃, 가끔 비가 오지만 공원의 꽃이 아름답습니다.',
      summer: '15~25℃로 가장 따뜻하며, 해가 길어 야외 활동에 최적입니다.',
      autumn: '단풍이 아름답고 8~15℃, 뮤지컬과 문화 시즌이 시작됩니다.',
      winter: '2~8℃로 춥고 해가 짧지만, 크리스마스 장식 and 윈터 원더랜드가 매력적입니다.'
    },
    courses: {
      '4-6': '<br>1DAY: 히드로공항 도착 -> 빅벤 -> 웨스트민스터 사원 -> 런던아이<br>2DAY: 대영박물관(오전) -> 코벤트 가든 -> 웨스트엔드 뮤지컬<br>3DAY: 타워브릿지 -> 런던탑 -> 보로마켓 -> 세인트폴 대성당<br>4DAY: 버킹엄 궁전 근위병 교대식 -> 하이드파크 -> 해로즈 쇼핑<br>5DAY: 노팅힐 -> 포토벨로마켓 -> 옥스포드 스트리트 쇼핑<br>6DAY: 그리니치(시간의 기준점) -> 캐나리워프 -> 귀국',
      '7-14': '<br>1DAY: 도착 -> 빅벤 -> 웨스트민스터 -> 런던아이<br>2DAY: 대영박물관 -> 코벤트가든<br>3DAY: 타워브릿지 -> 런던탑 -> 보로마켓<br>4DAY: 버킹엄 궁전 -> 하이드파크 -> 해로즈<br>5DAY: 노팅힐 -> 포토벨로 마켓<br>6DAY: 테이트모던 -> 사우스뱅크 -> 웨스트엔드 뮤지컬<br>7DAY: 옥스퍼드 당일치기 -> 크라이스트처치 -> 보들리안 도서관<br>8DAY: 캠든마켓 -> 리젠트파크 -> 베이커스트리트(셜록홈즈)<br>9DAY: 윈저성 당일투어 -> 쇼핑 -> 귀국'
    }
  }
},
{
  id: 'i13', name: '로마, 이탈리아 (Rome)', location: 'international',
  flight: 'long',
  duration: ['4-6', '7-14'],
  style: ['history', 'culture', 'food', 'romantic'],
  bestSeasons: ['spring', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?rome,colosseum,italy',
  description: '모든 길이 통하는 영원의 도시, 2천년 역사 and 최고의 미식이 살아 숨 쉬는 곳.',
  quickInfo: { months: '4~6월, 9~10월', flight: '12시간 30분 직항', visa: '90일 무비자 (쉥겐)', voltage: '230V',
    temp: { spring: '10~20℃', summer: '20~32℃', autumn: '12~22℃', winter: '3~12℃' } },
  details: {
    spots: '콜로세움, 트레비 분수, 바티칸 시국(성 베드로 대성당), 판테온',
    food: '카르보나라, 젤라토, 마르게리타 피자, 카치오에페페',
    hotel: '호텔 에덴(도르체스터), 호텔 드 루시, 호텔 포르테 체자리',
    shopping: '비아 콘도티 명품거리, 가죽 제품, 무라노 유리 장식, 리모첼로',
    weatherDesc: {
      spring: '꽃이 만발하고 12~20℃로 쾌적하며, 로마 관광의 최적 시즌입니다.',
      summer: '30℃ 이상으로 매우 덥고 관광객이 많으며, 충분한 수분 섭취가 필요합니다.',
      autumn: '15~22℃로 선선하며 관광객이 줄어 여유롭게 관광할 수 있습니다.',
      winter: '5~12℃로 쌀쌀하지만, 크리스마스 시즌 바티칸의 분위기가 특별합니다.'
    },
    courses: {
      '4-6': '<br>1DAY: 피우미치노공항 도착 -> 트레비 분수 -> 스페인 광장 -> 판테온<br>2DAY: 콜로세움 -> 포로 로마노 -> 팔라티노 언덕 -> 카르보나라 디너<br>3DAY: 바티칸 시국 -> 성 베드로 대성당 -> 시스티나 예배당 -> 바티칸 박물관<br>4DAY: 트라스테베레 골목 산책 -> 진실의 입 -> 나보나 광장<br>5DAY: 보르게세 미술관 -> 비아 콘도티 쇼핑 -> 로마 젤라토 투어<br>6DAY: 카타콤베 -> 아피아 가도 -> 귀국',
      '7-14': '<br>1DAY: 도착 -> 트레비분수 -> 스페인광장 -> 판테온<br>2DAY: 콜로세움 -> 포로 로마노 -> 팔라티노<br>3DAY: 바티칸 시국 종일<br>4DAY: 트라스테베레 -> 나보나 광장<br>5DAY: 폼페이 당일투어 -> 나폴리 피자<br>6DAY: 피렌체 당일치기 -> 두오모 -> 우피치<br>7DAY: 보르게세 미술관 -> 비아 콘도티<br>8DAY: 티볼리 빌라데스테 -> 아드리아나 별장<br>9DAY: 카타콤베 -> 아피아 가도 -> 쇼핑 -> 귀국'
    }
  }
},
{
  id: 'i14', name: '바르셀로나, 스페인 (Barcelona)', location: 'international',
  flight: 'long',
  duration: ['4-6', '7-14'],
  style: ['culture', 'food', 'city'],
  bestSeasons: ['spring', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?barcelona,sagrada,familia',
  description: '가우디의 천재적 건축과 지중해의 태양, 열정의 플라멩코가 울려 퍼지는 예술의 도시.',
  quickInfo: { months: '4~6월, 9~10월', flight: '13시간 직항', visa: '90일 무비자 (쉥겐)', voltage: '230V',
    temp: { spring: '12~20℃', summer: '22~30℃', autumn: '14~22℃', winter: '5~14℃' } },
  details: {
    spots: '사그라다 파밀리아, 구엘공원, 람블라스 거리, 카사밀라(라 페드레라)',
    food: '파에야, 타파스, 하몬 이베리코, 츄러스 콘 초콜라떼',
    hotel: '호텔 아르츠 바르셀로나, 맨더린 오리엔탈 바르셀로나, 카사 까밀라 호텔',
    shopping: '라 보케리아 시장 먹거리, 파세이그 데 그라시아 명품, 자라 본점, 올리브오일',
    weatherDesc: {
      spring: '기온 14~20℃로 온화하며 꽃이 피고, 관광에 최적인 시기입니다.',
      summer: '25~30℃로 덥지만 해변 바캉스와 축제를 즐기기 좋습니다.',
      autumn: '15~22℃로 쾌적하며 관광객이 줄어 여유로운 관광이 가능합니다.',
      winter: '5~14℃로 비교적 온화하며, 크리스마스 마켓이 열립니다.'
    },
    courses: {
      '4-6': '<br>1DAY: 엘프라트공항 도착 -> 람블라스 거리 -> 라 보케리아 시장 -> 고딕지구<br>2DAY: 사그라다 파밀리아 -> 카사밀라 -> 카사바트요 -> 타파스 디너<br>3DAY: 구엘공원 -> 몬주익 언덕 -> 마법의 분수 쇼<br>4DAY: 바르셀로네타 해변 -> 올림픽항구 -> 보른지구 -> 플라멩코 공연<br>5DAY: 몬세라트 수도원 당일투어 -> 검은 성모상<br>6DAY: 파세이그 데 그라시아 쇼핑 -> 귀국',
      '7-14': '<br>1DAY: 도착 -> 람블라스 -> 라 보케리아 -> 고딕지구<br>2DAY: 사그라다 파밀리아 -> 카사밀라 -> 카사바트요<br>3DAY: 구엘공원 -> 몬주익 -> 마법의 분수<br>4DAY: 바르셀로네타 해변 -> 보른지구<br>5DAY: 몬세라트 수도원 당일투어<br>6DAY: 피카소 미술관 -> 엘 보른 문화센터<br>7DAY: 지로나 당일치기 -> 컬러풀 강변마을<br>8DAY: 캄프누 스타디움 투어 -> 그라시아 거리<br>9DAY: 파세이그 데 그라시아 쇼핑 -> 가우디 건축 산책 -> 귀국'
    }
  }
},
{
  id: 'i15', name: '프라하, 체코 (Prague)', location: 'international',
  flight: 'long',
  duration: ['2-3', '4-6'],
  style: ['culture', 'history', 'romantic'],
  bestSeasons: ['spring', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?prague,charles,bridge,castle',
  description: '동화 속 중세 도시, 카를교 위의 석양과 프라하성의 야경이 잊히지 않는 보헤미안의 도시.',
  quickInfo: { months: '4~6월, 9~10월', flight: '11시간 30분 (경유)', visa: '90일 무비자 (쉥겐)', voltage: '230V',
    temp: { spring: '5~15℃', summer: '14~25℃', autumn: '5~14℃', winter: '-3~3℃' } },
  details: {
    spots: '카를교, 프라하성, 구시가지 광장, 천문시계(오를로이)',
    food: '뜨르들로(굴뚝빵), 꼴레뇨(돼지무릎 요리), 굴라쉬, 체코 맥주',
    hotel: '아르코텔 캄파, 그랜디엄 프라하, 만다린 오리엔탈 프라하',
    shopping: '보헤미안 크리스탈(유리공예), 마리오네뜨 인형, 체코 맥주, 쿠비스타 디자인 소품',
    weatherDesc: {
      spring: '5~15℃로 점점 따뜻해지며, 벚꽃이 피는 5월이 가장 아름답습니다.',
      summer: '15~25℃로 따뜻하고 낮이 길어 관광하기 좋지만, 성수기입니다.',
      autumn: '단풍이 물드는 9~10월은 10~15℃로 쾌적하며, 최고의 여행 시기입니다.',
      winter: '영하로 내려가며 눈 덮인 프라하가 동화처럼 아름답습니다.'
    },
    courses: {
      '2-3': '<br>1DAY: 바츨라프 하벨공항 도착 -> 구시가지 광장 -> 천문시계 -> 화약탑 -> 틴 성당<br>2DAY: 카를교 일출 -> 프라하성 -> 성 비투스 대성당 -> 황금소로 -> 말라스트라나<br>3DAY: 유대인 지구(요제포프) -> 비셰흐라트 요새 -> 체코 맥주 펍 -> 귀국',
      '4-6': '<br>1DAY: 도착 -> 구시가지 광장 -> 천문시계 -> 틴 성당<br>2DAY: 카를교 -> 프라하성 -> 성 비투스 대성당 -> 황금소로<br>3DAY: 말라스트라나 -> 레논벽 -> 페트린 타워 전망<br>4DAY: 유대인 지구 -> 비셰흐라트 -> 댄싱하우스<br>5DAY: 체스키 크룸로프 당일투어 -> 중세 마을 산책<br>6DAY: 바츨라프 광장 -> 쇼핑 -> 귀국'
    }
  }
},
{
  id: 'i16', name: '뉴욕, 미국 (New York)', location: 'international',
  flight: 'long',
  duration: ['4-6', '7-14'],
  style: ['city', 'culture', 'shopping', 'food'],
  bestSeasons: ['spring', 'autumn'],
  image: 'https://source.unsplash.com/800x600/?newyork,times,square,manhattan',
  description: '세계의 수도, 타임스퀘어의 네온부터 센트럴파크의 고요함까지 무한한 에너지의 도시.',
  quickInfo: { months: '4~6월, 9~11월', flight: '14시간 직항', visa: 'ESTA 필요 (90일)', voltage: '120V',
    temp: { spring: '6~18℃', summer: '20~30℃', autumn: '8~20℃', winter: '-3~5℃' } },
  details: {
    spots: '타임스퀘어, 센트럴파크, 자유의 여신상, 브로드웨이',
    food: '뉴욕 피자, 베이글, 스테이크, 파스트라미 샌드위치',
    hotel: '더 플라자, 호텔 에디슨, 포드 에이트 뉴욕',
    shopping: '5번가 명품(티파니, 카르티에), 소호 편집숍, 우드버리 아울렛, 첼시마켓',
    weatherDesc: {
      spring: '꽃이 피고 10~18℃로 쾌적하며, 센트럴파크 산책에 최적입니다.',
      summer: '25~35℃로 덥고 습하며, 야외 공연 and 축제가 활발합니다.',
      autumn: '센트럴파크 단풍이 절경이며 10~20℃로 뉴욕 여행의 최적기입니다.',
      winter: '영하로 내려가며 눈이 내리지만, 록펠러센터 크리스마스 트리가 상징적입니다.'
    },
    courses: {
      '4-6': '<br>1DAY: JFK공항 도착 -> 타임스퀘어 -> 브로드웨이 뮤지컬 관람<br>2DAY: 자유의 여신상 페리 -> 엘리스섬 -> 월스트리트 -> 브루클린 브릿지<br>3DAY: 센트럴파크 산책 -> 메트로폴리탄 미술관 -> 5번가 쇼핑<br>4DAY: 엠파이어 스테이트 빌딩 -> 첼시마켓 -> 하이라인 파크 -> 그리니치빌리지<br>5DAY: 소호/노리타 쇼핑 -> 리틀이탈리 -> 차이나타운 -> 탑오브더록 야경<br>6DAY: 우드버리 아울렛 쇼핑 -> 귀국',
      '7-14': '<br>1DAY: 도착 -> 타임스퀘어 -> 브로드웨이<br>2DAY: 자유의 여신상 -> 월스트리트 -> 브루클린 브릿지<br>3DAY: 센트럴파크 -> 메트로폴리탄 미술관<br>4DAY: 엠파이어 스테이트 -> 첼시마켓 -> 하이라인<br>5DAY: 소호/노리타 -> 리틀이탈리 -> 차이나타운<br>6DAY: MoMA -> 록펠러센터 -> 5번가 쇼핑<br>7DAY: 브루클린 덤보 -> 윌리엄스버그 -> 피터루거 스테이크<br>8DAY: 구겐하임 미술관 -> 어퍼웨스트사이드 -> 링컨센터<br>9DAY: 우드버리 아울렛 -> 저녁 탑오브더록 야경 -> 귀국'
    }
  }
},
{
  id: 'i17', name: '하와이, 미국 (Hawaii)', location: 'international',
  flight: 'long',
  duration: ['4-6', '7-14'],
  style: ['relaxation', 'nature', 'adventure'],
  bestSeasons: ['spring', 'summer', 'autumn', 'winter'],
  image: 'https://source.unsplash.com/800x600/?hawaii,waikiki,beach,diamond,head',
  description: '코발트빛 태평양과 알로하 스피릿, 사계절 언제나 따뜻한 꿈의 낙원.',
  quickInfo: { months: '4~10월 (건기)', flight: '9시간 직항', visa: 'ESTA 필요 (90일)', voltage: '120V',
    temp: { spring: '22~28℃', summer: '24~30℃', autumn: '23~29℃', winter: '20~26℃' } },
  details: {
    spots: '와이키키 비치, 다이아몬드 헤드, 노스쇼어, 진주만 기념관',
    food: '포케(생선회 덮밥), 로코모코, 갈릭 쉬림프, 말라사다(도넛)',
    hotel: '하레쿨라니, 로얄 하와이안, 힐튼 하와이안 빌리지',
    shopping: '알라모아나 센터, 와이켈레 프리미엄 아울렛, 코나커피, 마카다미아 초콜릿',
    weatherDesc: {
      spring: '건기가 시작되어 맑은 날이 많고 24~28℃로 해변에 최적입니다.',
      summer: '가장 맑고 따뜻한 시기로 26~30℃, 서핑 and 스노클링에 완벽합니다.',
      autumn: '여전히 따뜻하며 24~29℃, 10월부터 가끔 비가 오기 시작합니다.',
      winter: '우기이지만 20~26℃로 따뜻하며, 고래 관측 시즌입니다.'
    },
    courses: {
      '4-6': '<br>1DAY: 호놀룰루공항 도착 -> 와이키키 비치 -> 듀크 카하나모쿠 동상 -> 선셋<br>2DAY: 다이아몬드 헤드 트레킹 -> 카할라 -> 하나우마 베이 스노클링<br>3DAY: 진주만 기념관 -> USS 애리조나 -> 알라모아나 센터 쇼핑<br>4DAY: 노스쇼어 드라이브 -> 할레이와 타운 -> 새우 트럭 점심 -> 선셋비치<br>5DAY: 쿠알로아 랜치(쥬라기 공원 촬영지) -> 카일루아 비치<br>6DAY: 와이키키 서핑 레슨 -> 쇼핑 -> 귀국',
      '7-14': '<br>1DAY: 도착 -> 와이키키 비치<br>2DAY: 다이아몬드 헤드 -> 하나우마 베이<br>3DAY: 진주만 -> 알라모아나 쇼핑<br>4DAY: 노스쇼어 -> 할레이와 -> 새우 트럭<br>5DAY: 쿠알로아 랜치 -> 카일루아 비치<br>6DAY: 마우이 섬 이동 -> 라하이나 타운<br>7DAY: 할레아칼라 국립공원 일출 -> 이아오 밸리<br>8DAY: 몰로키니 크레이터 스노클링 투어<br>9DAY: 카아나팔리 비치 -> 호놀룰루 복귀<br>10DAY: 와이켈레 아울렛 쇼핑 -> 귀국'
    }
  }
},
{
  id: 'i18', name: '스톡홀름, 스웨덴 (Stockholm)', location: 'international',
  flight: 'long',
  duration: ['4-6', '7-14'],
  style: ['culture', 'city', 'nature'],
  bestSeasons: ['summer'],
  image: 'https://source.unsplash.com/800x600/?stockholm,gamla,stan,sweden',
  description: '14개의 섬 위에 세워진 북유럽의 베니스, 세련된 디자인 and 청정 자연의 조화.',
  quickInfo: { months: '6~8월', flight: '11시간 (경유)', visa: '90일 무비자 (쉥겐)', voltage: '230V',
    temp: { spring: '3~12℃', summer: '13~22℃', autumn: '4~11℃', winter: '-5~1℃' } },
  details: {
    spots: '감라스탄(구시가지), 바사 박물관, 시청사(노벨상 만찬장), 스칸센 야외박물관',
    food: '미트볼(쇼트불라르), 그라브락스(연어절임), 시나몬롤, 스뫼르고스보르드(뷔페)',
    hotel: '그랜드호텔 스톡홀름, 호텔 스케파르홀멘, 스칸딕 그랜드 센트럴',
    shopping: 'H&M 본점, 디자인토리에 북유럽 디자인, IKEA, 달라 목마',
    weatherDesc: {
      spring: '3~12℃로 아직 쌀쌀하며, 5월부터 점차 따뜻해지고 꽃이 핍니다.',
      summer: '백야로 밤 11시까지 밝으며 15~22℃로 야외활동에 최적입니다.',
      autumn: '빠르게 추워지며 4~11℃, 단풍이 아름답지만 해가 짧아집니다.',
      winter: '영하로 내려가며 눈이 많고 해가 오후 3시에 지지만, 오로라 관측이 가능합니다.'
    },
    courses: {
      '4-6': '<br>1DAY: 알란다공항 도착 -> 감라스탄 구시가지 산책 -> 왕궁 근위병 교대식<br>2DAY: 바사 박물관 -> 유르고르덴 섬 -> 스칸센 야외박물관 -> ABBA 뮤지엄<br>3DAY: 시청사(노벨상 만찬장) -> 세르옐 광장 -> 디자인토리에 쇼핑<br>4DAY: 쇠데르말름(소포) 힙스터 거리 -> 포토그라피스카 미술관<br>5DAY: 드로트닝홀름 궁전(UNESCO) -> 군도 보트투어<br>6DAY: H&M 본점 -> NK 백화점 -> 귀국',
      '7-14': '<br>1DAY: 도착 -> 감라스탄 산책<br>2DAY: 바사 박물관 -> 스칸센<br>3DAY: 시청사 -> 세르옐 광장<br>4DAY: 쇠데르말름 -> 포토그라피스카<br>5DAY: 드로트닝홀름 궁전 -> 군도 투어<br>6DAY: 웁살라 당일치기 -> 웁살라 대성당 -> 대학교<br>7DAY: 시그투나(스웨덴 최초의 도시) 당일치기<br>8DAY: 밀레스고르덴 조각공원 -> 리딩괴 -> 쇼핑<br>9DAY: 공항 면세 쇼핑 -> 귀국'
    }
  }
},
{
  id: 'i19', name: '코펜하겐, 덴마크 (Copenhagen)', location: 'international',
  flight: 'long',
  duration: ['2-3', '4-6'],
  style: ['culture', 'city', 'food'],
  bestSeasons: ['summer'],
  image: 'https://source.unsplash.com/800x600/?copenhagen,nyhavn,denmark',
  description: '알록달록한 니하운 운하와 세계 최고의 미식, 휘게의 나라에서 만나는 행복의 비밀.',
  quickInfo: { months: '6~8월', flight: '11시간 (경유)', visa: '90일 무비자 (쉥겐)', voltage: '230V',
    temp: { spring: '4~13℃', summer: '12~22℃', autumn: '5~12℃', winter: '-2~4℃' } },
  details: {
    spots: '인어공주 동상, 니하운(컬러풀 항구), 티볼리 공원, 크리스티안스보르 궁전',
    food: '스뫼레브뢰드(오픈 샌드위치), 플레스케스타이(돼지고기), 덴마크 페이스트리, 핫도그',
    hotel: '호텔 다글리아, 닐스 유엘 코펜하겐, 코펜하겐 애드미럴 호텔',
    shopping: '로얄 코펜하겐 도자기, 레고 플래그십스토어, 일루무스 백화점, 조지 옌센 실버',
    weatherDesc: {
      spring: '점차 따뜻해지며 5~13℃, 5월 말부터 야외 활동이 가능합니다.',
      summer: '15~22℃로 가장 좋은 날씨이며, 밤 10시까지 해가 밝습니다.',
      autumn: '기온이 빠르게 떨어지며 5~12℃, 비가 잦아집니다.',
      winter: '영하로 내려가고 해가 오후 4시에 지지만, 크리스마스 마켓이 유명합니다.'
    },
    courses: {
      '2-3': '<br>1DAY: 카스트럽공항 도착 -> 니하운 컬러풀 항구 산책 -> 인어공주 동상 -> 로젠보르 궁전<br>2DAY: 크리스티안스보르 궁전 -> 스트뢰에 거리 쇼핑 -> 티볼리 공원 야경<br>3DAY: 크리스티아니아 자유마을 -> 로얄 코펜하겐 본점 -> 귀국',
      '4-6': '<br>1DAY: 도착 -> 니하운 -> 인어공주 동상 -> 로젠보르<br>2DAY: 크리스티안스보르 궁전 -> 스트뢰에 거리 -> 티볼리<br>3DAY: 프레데릭스보르 성 당일투어 -> 힐레뢰드<br>4DAY: 크리스티아니아 -> 아말리엔보르 궁전 근위병 교대<br>5DAY: 코펜하겐 미식투어 -> 뉴 노르딕 요리 체험 -> 레고스토어<br>6DAY: 말뫼(스웨덴) 당일치기 -> 외레순 대교 -> 귀국'
    }
  }
},
{
  id: 'i20', name: '헬싱키, 핀란드 (Helsinki)', location: 'international',
  flight: 'long',
  duration: ['2-3', '4-6'],
  style: ['culture', 'city', 'nature'],
  bestSeasons: ['summer', 'winter'],
  image: 'https://source.unsplash.com/800x600/?helsinki,cathedral,finland',
  description: '순백의 대성당과 사우나 문화, 디자인 and 자연이 어우러지는 북유럽의 숨은 보석.',
  quickInfo: { months: '6~8월, 12~2월', flight: '10시간 직항', visa: '90일 무비자 (쉥겐)', voltage: '230V',
    temp: { spring: '0~10℃', summer: '12~22℃', autumn: '2~8℃', winter: '-8~-1℃' } },
  details: {
    spots: '수오멘린나 요새(UNESCO), 헬싱키 대성당, 마켓 광장(카우파토리), 오디 중앙도서관',
    food: '연어수프, 카렐리안 파이, 순록 스테이크, 핀란드 시나몬롤(꼬르바푸스티)',
    hotel: '호텔 카타야노카, 호텔 클라우스 K, 스칸딕 시모넨카투',
    shopping: '마리메꼬 본점, 이딸라 유리공예, 무민 기념품, 핀란드 사우나 용품',
    weatherDesc: {
      spring: '눈이 녹기 시작하며 0~10℃, 4월에도 쌀쌀하지만 해가 길어집니다.',
      summer: '백야로 거의 해가 지지 않으며 15~22℃로 야외활동에 최적입니다.',
      autumn: '빠르게 추워지며 2~8℃, 단풍(루스카)이 아름답지만 비가 잦습니다.',
      winter: '영하 10℃ 이하로 춥지만 오로라 관측 and 사우나 체험의 최적 시즌입니다.'
    },
    courses: {
      '2-3': '<br>1DAY: 반타공항 도착 -> 헬싱키 대성당 -> 원로원 광장 -> 마켓 광장 -> 에스플라나디 공원<br>2DAY: 수오멘린나 요새 페리투어 -> 템펠리아우키오 암석교회 -> 마리메꼬 본점 쇼핑<br>3DAY: 오디 중앙도서관 -> 디자인 디스트릭트 -> 이딸라 매장 -> 귀국',
      '4-6': '<br>1DAY: 도착 -> 헬싱키 대성당 -> 원로원 광장 -> 마켓 광장<br>2DAY: 수오멘린나 요새 종일 투어<br>3DAY: 템펠리아우키오 암석교회 -> 시벨리우스 공원 -> 핀란드 사우나 체험<br>4DAY: 누크시오 국립공원 하이킹 -> 베리 따기 체험<br>5DAY: 디자인 디스트릭트 -> 마리메꼬 -> 이딸라 -> 무민숍<br>6DAY: 포르보(Porvoo) 올드타운 당일치기 -> 귀국'
    }
  }
}
];

if (typeof window !== 'undefined') {
  window.destinations = destinations;
} else if (typeof module !== 'undefined') {
  module.exports = destinations;
}
