const quizQuestions = [
    {
        id: 'location',
        question: '어디로 떠나고 싶으신가요?',
        options: [
            { value: 'domestic', label: '국내 (Korea)', icon: '🚗' },
            { value: 'international', label: '해외 (International)', icon: '✈️' }
        ]
    },
    {
        id: 'month',
        question: '언제 떠나실 예정인가요?',
        options: [
            { value: '1', label: '1월', icon: '❄️' },
            { value: '2', label: '2월', icon: '❄️' },
            { value: '3', label: '3월', icon: '🌸' },
            { value: '4', label: '4월', icon: '🌸' },
            { value: '5', label: '5월', icon: '🌸' },
            { value: '6', label: '6월', icon: '☀️' },
            { value: '7', label: '7월', icon: '☀️' },
            { value: '8', label: '8월', icon: '☀️' },
            { value: '9', label: '9월', icon: '🍁' },
            { value: '10', label: '10월', icon: '🍁' },
            { value: '11', label: '11월', icon: '🍁' },
            { value: '12', label: '12월', icon: '❄️' }
        ]
    },
    {
        id: 'duration',
        question: '여행 기간은 며칠이 좋은가요?',
        options: [
            { value: '1-3', label: '1~3일 (짧게)', icon: '🗓️' },
            { value: '4-7', label: '4~7일 (적당히)', icon: '📅' },
            { value: '8+', label: '8일 이상 (길게)', icon: '📆' }
        ]
    },
    {
        id: 'flight',
        question: '비행 시간은 어느 정도가 좋나요?',
        condition: (answers) => answers.location === 'international',
        options: [
            { value: 'short', label: '3시간 이내 (가까운 곳)', icon: '⏱️' },
            { value: 'medium', label: '3~6시간 (적당한 비행)', icon: '🛫' },
            { value: 'long', label: '6시간 이상 (멀리멀리)', icon: '🌍' }
        ]
    },
    {
        id: 'style',
        question: '이번 여행의 테마는 무엇인가요?',
        options: [
            { value: 'relaxation', label: '휴양 / 힐링', icon: '🏖️' },
            { value: 'city', label: '도시 탐험', icon: '🏙️' },
            { value: 'food', label: '맛집 탐방', icon: '🍜' },
            { value: 'nature', label: '자연 / 풍경', icon: '⛰️' },
            { value: 'culture', label: '역사 / 문화', icon: '🏛️' }
        ]
    }
];

let currentStep = 0;
let userAnswers = {};
let activeQuestions = [];
let currentRecommendations = [];

const DOM = {
    quizSection: document.getElementById('quiz-section'),
    resultsSection: document.getElementById('results-section'),
    quizContent: document.getElementById('quiz-content'),
    progressBar: document.getElementById('progress-bar'),
    prevBtn: document.getElementById('prev-btn'),
    resultsGrid: document.getElementById('results-grid'),
    restartBtn: document.getElementById('restart-btn')
};

function getCheonanTravelTime(id) {
    var times = {
        'd1': 'KTX 40분 / 차 1시간 10분',
        'd2': 'KTX 2시간 10분 / 차 3시간 30분',
        'd3': '자가용 약 1시간 20분',
        'd4': 'KTX 1시간 10분 / 차 2시간 10분',
        'd5': 'KTX 20분 / 차 40분',
        'd6': 'KTX 1시간 20분 / 차 2시간',
        'd7': 'KTX 1시간 50분 / 차 3시간',
        'd8': '자가용 약 30분',
        'd9': '청주공항 경유 비행기 약 2시간',
        'd10': '전철 30분 / 차 45분',
        'd11': '자가용 약 2시간',
        'd12': '자가용 약 2시간 40분',
        'd13': '자가용 약 2시간 50분',
        'd14': '자가용 약 2시간 10분',
        'd15': '자가용 약 2시간 40분',
        'd16': 'KTX 1시간 30분 / 차 2시간 40분',
        'd17': 'KTX 2시간 30분 / 차 3시간',
        'd18': '자가용 약 1시간 20분',
        'd19': 'KTX 2시간 / 차 3시간',
        'd20': 'KTX 2시간 10분 / 차 2시간 40분',
        'd21': '자가용 약 2시간',
        'd22': '자가용 약 3시간',
        'd23': '자가용 약 2시간 10분',
        'd24': 'KTX 1시간 40분 / 차 2시간 50분',
        'd25': 'KTX 2시간 10분 / 차 3시간',
        'd26': '자가용 10~20분 (초근접!)',
        'd27': '자가용 약 35분',
        'd28': '자가용 약 45분',
        'd29': '자가용 약 1시간 40분',
        'd30': '자가용 약 1시간 20분',
        'd31': '자가용 약 1시간 30분',
        'd32': '자가용 약 3시간 10분',
        'd33': '자가용 약 3시간 30분',
        'd34': '자가용 약 2시간 50분',
        'd35': '자가용 약 1시간 50분',
        'd36': '자가용 약 1시간 30분',
        'd37': '자가용 약 2시간 40분',
        'd38': '자가용 약 2시간 20분',
        'd39': '자가용 약 3시간 50분',
        'd40': '자가용 약 3시간 40분',
        'd41': '자가용 약 1시간',
        'd42': '자가용 약 1시간 30분',
        'd43': '자가용 약 3시간 10분',
        'd44': '자가용 약 2시간 50분',
        'd45': '자가용 약 2시간 50분',
        'd46': '자가용 약 2시간 40분',
        'd47': '자가용 약 2시간 30분',
        'd48': '자가용 약 3시간',
        'd49': '자가용 약 1시간 30분',
        'd50': '자가용 약 1시간 50분',
        'd51': '자가용 약 2시간 50분',
        'd52': '자가용 약 1시간 20분',
        'd53': '자가용 약 1시간 40분',
        'd54': '자가용 약 1시간 40분',
        'd55': '자가용 약 1시간',
        'd56': '자가용 약 1시간 35분',
        'd57': '자가용 약 1시간 50분',
        'd58': '자가용 약 1시간',
        'd59': '자가용 약 30분',
        'd60': '자가용 약 1시간',
        'd61': '자가용 약 25분',
        'd62': '자가용 약 35분',
        'd63': '자가용 약 50분',
        'd64': '자가용 약 50분',
        'd65': '자가용 약 1시간 10분',
        'd66': '자가용 약 1시간 30분',
        'd67': '자가용 약 1시간 20분',
        'd68': '자가용 약 55분',
        'd69': '자가용 약 55분',
        'd70': '자가용 약 1시간 15분'
    };
    return times[id] || '자가용/대중교통 이용';
}

function normalizeDestinations() {
    if (typeof destinations !== 'undefined') {
        destinations.forEach(function(dest) {
            // 1. Force location to be determined robustly by ID prefix
            var idStr = String(dest.id).toLowerCase();
            dest.location = idStr.charAt(0) === 'd' ? 'domestic' : 'international';
            
            // 2. Ensure quickInfo is fully populated
            if (!dest.quickInfo) {
                dest.quickInfo = {};
            }
            
            // If flight is at top level, map to quickInfo.flight
            if (dest.flight && !dest.quickInfo.flight) {
                dest.quickInfo.flight = dest.flight === 'short' ? '3시간 이내' : (dest.flight === 'medium' ? '3~6시간' : '6시간 이상');
            }
            
            // Set sensible defaults for domestic quickInfo properties and override travel time from Cheonan Campus
            if (dest.location === 'domestic') {
                dest.quickInfo.flight = getCheonanTravelTime(dest.id);
                if (!dest.quickInfo.voltage) dest.quickInfo.voltage = '220V';
                if (!dest.quickInfo.visa) dest.quickInfo.visa = '국내 (해당없음)';
                if (!dest.quickInfo.months) dest.quickInfo.months = dest.quickInfo.bestTime || '연중무휴';
            }

            // 3. Normalize details (spots, food, hotel, courses, weatherDesc, shopping, temperatures)
            if (!dest.details) {
                dest.details = {};
                
                // Map spots
                if (dest.spots) {
                    dest.details.spots = dest.spots.map(function(s) { return s.name; }).join(', ');
                } else {
                    dest.details.spots = '';
                }

                // Map food
                if (dest.food) {
                    if (typeof dest.food[0] === 'object') {
                        dest.details.food = dest.food.map(function(f) { return f.name; }).join(', ');
                    } else {
                        dest.details.food = dest.food.join(', ');
                    }
                } else {
                    dest.details.food = '';
                }

                // Map hotel
                if (dest.hotels) {
                    dest.details.hotel = dest.hotels.map(function(h) { return h.name; }).join(', ');
                } else if (dest.hotel) {
                    if (typeof dest.hotel === 'string') {
                        dest.details.hotel = dest.hotel;
                    } else if (typeof dest.hotel === 'object' && dest.hotel.join) {
                        dest.details.hotel = dest.hotel.join(', ');
                    } else {
                        dest.details.hotel = '';
                    }
                } else {
                    dest.details.hotel = '주변 주요 호텔 및 게스트하우스';
                }

                // Map weatherDesc
                dest.details.weatherDesc = {};
                if (dest.weather) {
                    var seasons = ['spring', 'summer', 'autumn', 'winter'];
                    for (var i = 0; i < seasons.length; i++) {
                        var s = seasons[i];
                        if (dest.weather[s]) {
                            var rawTemp = dest.weather[s];
                            var start = rawTemp.indexOf('(');
                            var end = rawTemp.lastIndexOf(')');
                            if (start !== -1 && end !== -1) {
                                dest.details.weatherDesc[s] = rawTemp.substring(start + 1, end);
                            } else {
                                dest.details.weatherDesc[s] = rawTemp;
                            }
                        }
                    }
                } else {
                    dest.details.weatherDesc = { spring: '여행하기 좋은 선선한 날씨입니다.', summer: '야외 활동에 어울리는 여름 기후입니다.', autumn: '맑고 선선하여 걷기 좋은 날씨입니다.', winter: '따뜻한 외투가 필요한 계절입니다.' };
                }

                // Map shopping
                if (dest.location === 'international' && dest.shopping) {
                    dest.details.shopping = typeof dest.shopping === 'string' ? dest.shopping : dest.shopping.join(', ');
                }

                // Map courses
                dest.details.courses = {};
                if (dest.courses) {
                    dest.courses.forEach(function(c) {
                        var t = c.title.toLowerCase();
                        var schedStr = c.schedule.join(' | ');
                        if (t.indexOf('당일') !== -1 || t.indexOf('하루') !== -1) {
                            dest.details.courses['day'] = schedStr;
                        } else if (t.indexOf('2박') !== -1 || t.indexOf('2~3') !== -1 || t.indexOf('3일') !== -1) {
                            dest.details.courses['2-3'] = schedStr;
                        } else if (t.indexOf('4~5') !== -1 || t.indexOf('4박') !== -1 || t.indexOf('5일') !== -1) {
                            dest.details.courses['4-5'] = schedStr;
                        } else if (t.indexOf('4~6') !== -1 || t.indexOf('6일') !== -1) {
                            dest.details.courses['4-6'] = schedStr;
                        } else if (t.indexOf('7~14') !== -1 || t.indexOf('1주') !== -1 || t.indexOf('2주') !== -1 || t.indexOf('이상') !== -1) {
                            dest.details.courses['7-14'] = schedStr;
                        } else {
                            if (!dest.details.courses['2-3']) dest.details.courses['2-3'] = schedStr;
                        }
                    });
                    
                    var possibleKeys = dest.location === 'domestic' ? ['day', '2-3', '4-5'] : ['2-3', '4-6', '7-14'];
                    possibleKeys.forEach(function(k) {
                        if (!dest.details.courses[k]) {
                            for (var firstKey in dest.details.courses) {
                                dest.details.courses[k] = dest.details.courses[firstKey];
                                break;
                            }
                        }
                    });
                }
            } else {
                // If dest.details already exists but has the older layout (like data_intl.js i1-i20)
                var isOldLayout = dest.details.temperatures || dest.details.hotels || (dest.details.spots && dest.details.spots[0] && typeof dest.details.spots[0] === 'object');
                
                if (isOldLayout) {
                    // Map spots (array of objects)
                    if (dest.details.spots) {
                        if (dest.details.spots[0] && typeof dest.details.spots[0] === 'object') {
                            dest.details.spots = dest.details.spots.map(function(s) { return s.name; }).join(', ');
                        } else if (typeof dest.details.spots === 'object' && dest.details.spots.join) {
                            dest.details.spots = dest.details.spots.join(', ');
                        }
                    } else {
                        dest.details.spots = '';
                    }

                    // Map food (array of objects)
                    if (dest.details.food) {
                        if (dest.details.food[0] && typeof dest.details.food[0] === 'object') {
                            dest.details.food = dest.details.food.map(function(f) { return f.name; }).join(', ');
                        } else if (typeof dest.details.food === 'object' && dest.details.food.join) {
                            dest.details.food = dest.details.food.join(', ');
                        }
                    } else {
                        dest.details.food = '';
                    }

                    // Map hotels to hotel
                    if (dest.details.hotels) {
                        dest.details.hotel = dest.details.hotels.map(function(h) { return h.name; }).join(', ');
                    } else if (dest.details.hotel && typeof dest.details.hotel === 'object' && dest.details.hotel.join) {
                        dest.details.hotel = dest.details.hotel.join(', ');
                    } else if (!dest.details.hotel) {
                        dest.details.hotel = '주변 주요 호텔';
                    }

                    // Map weatherDesc from details.temperatures
                    dest.details.weatherDesc = {};
                    if (dest.details.temperatures) {
                        var seasons = ['spring', 'summer', 'autumn', 'winter'];
                        for (var i = 0; i < seasons.length; i++) {
                            var s = seasons[i];
                            if (dest.details.temperatures[s]) {
                                var rawTemp = dest.details.temperatures[s];
                                var start = rawTemp.indexOf('(');
                                var end = rawTemp.lastIndexOf(')');
                                if (start !== -1 && end !== -1) {
                                    dest.details.weatherDesc[s] = rawTemp.substring(start + 1, end);
                                } else {
                                    dest.details.weatherDesc[s] = rawTemp;
                                }
                            }
                        }
                    }

                    // Map temp from details.temperatures
                    if (!dest.quickInfo.temp && dest.details.temperatures) {
                        dest.quickInfo.temp = {};
                        var seasons = ['spring', 'summer', 'autumn', 'winter'];
                        for (var i = 0; i < seasons.length; i++) {
                            var s = seasons[i];
                            if (dest.details.temperatures[s]) {
                                var rawTemp = dest.details.temperatures[s];
                                var bracketIdx = rawTemp.indexOf('(');
                                if (bracketIdx !== -1) {
                                    dest.quickInfo.temp[s] = rawTemp.substring(0, bracketIdx).replace(/^\s+|\s+$/g, '');
                                } else {
                                    dest.quickInfo.temp[s] = rawTemp;
                                }
                            }
                        }
                    }

                    // Map shopping
                    if (dest.details.shopping) {
                        if (dest.details.shopping[0] && typeof dest.details.shopping[0] === 'object') {
                            dest.details.shopping = dest.details.shopping.map(function(sh) { 
                                return sh.category + ': ' + sh.items.join(', '); 
                            }).join(' | ');
                        } else if (typeof dest.details.shopping === 'object' && dest.details.shopping.join) {
                            dest.details.shopping = dest.details.shopping.join(', ');
                        }
                    }

                    // Map courses (array of objects)
                    if (dest.details.courses && typeof dest.details.courses.join === 'undefined') {
                        var newCourses = {};
                        dest.details.courses.forEach(function(c) {
                            var t = c.title.toLowerCase();
                            var schedStr = c.schedule.join(' | ');
                            if (t.indexOf('당일') !== -1 || t.indexOf('하루') !== -1) {
                                newCourses['day'] = schedStr;
                            } else if (t.indexOf('2박') !== -1 || t.indexOf('2~3') !== -1 || t.indexOf('3일') !== -1) {
                                newCourses['2-3'] = schedStr;
                            } else if (t.indexOf('4~5') !== -1 || t.indexOf('4박') !== -1 || t.indexOf('5일') !== -1) {
                                newCourses['4-5'] = schedStr;
                            } else if (t.indexOf('4~6') !== -1 || t.indexOf('6일') !== -1) {
                                newCourses['4-6'] = schedStr;
                            } else if (t.indexOf('7~14') !== -1 || t.indexOf('1주') !== -1 || t.indexOf('2주') !== -1 || t.indexOf('이상') !== -1) {
                                newCourses['7-14'] = schedStr;
                            } else {
                                if (!newCourses['2-3']) newCourses['2-3'] = schedStr;
                            }
                        });
                        
                        var possibleKeys = ['2-3', '4-6', '7-14'];
                        possibleKeys.forEach(function(k) {
                            if (!newCourses[k]) {
                                for (var firstKey in newCourses) {
                                    newCourses[k] = newCourses[firstKey];
                                    break;
                                }
                            }
                        });
                        dest.details.courses = newCourses;
                    }
                } else {
                    // New flat structure but ensure spots, food, hotel are string-formatted nicely if they are arrays
                    if (dest.details.spots && typeof dest.details.spots === 'object' && dest.details.spots.join) {
                        dest.details.spots = dest.details.spots.join(', ');
                    }
                    if (dest.details.food && typeof dest.details.food === 'object' && dest.details.food.join) {
                        dest.details.food = dest.details.food.join(', ');
                    }
                    if (dest.details.hotel && typeof dest.details.hotel === 'object' && dest.details.hotel.join) {
                        dest.details.hotel = dest.details.hotel.join(', ');
                    }
                }
            }

            // 4. Ultimate safety fallback for weatherDesc to prevent TypeError
            if (dest.details && !dest.details.weatherDesc) {
                dest.details.weatherDesc = { spring: '여행하기 좋은 선선한 날씨입니다.', summer: '야외 활동에 어울리는 여름 기후입니다.', autumn: '맑고 선선하여 걷기 좋은 날씨입니다.', winter: '따뜻한 외투가 필요한 계절입니다.' };
            }
            if (dest.details && dest.details.weatherDesc) {
                var seasons = ['spring', 'summer', 'autumn', 'winter'];
                seasons.forEach(function(s) {
                    if (!dest.details.weatherDesc[s]) {
                        dest.details.weatherDesc[s] = '여행하기 좋은 날씨입니다.';
                    }
                });
            }
        });
    }
}

function initApp() {
    normalizeDestinations();
    currentStep = 0;
    userAnswers = {};
    activeQuestions = getActiveQuestions();
    
    DOM.quizSection.classList.remove('hidden');
    DOM.resultsSection.classList.add('hidden');
    
    renderStep();
    
    DOM.prevBtn.replaceWith(DOM.prevBtn.cloneNode(true));
    DOM.restartBtn.replaceWith(DOM.restartBtn.cloneNode(true));
    
    DOM.prevBtn = document.getElementById('prev-btn');
    DOM.restartBtn = document.getElementById('restart-btn');
    
    DOM.prevBtn.addEventListener('click', handlePrev);
    DOM.restartBtn.addEventListener('click', initApp);
}

function getActiveQuestions() {
    return quizQuestions.filter(q => {
        if (q.condition) {
            return q.condition(userAnswers);
        }
        return true;
    }).map(q => {
        if (q.id === 'duration') {
            if (userAnswers.location === 'domestic') {
                return {
                    ...q,
                    options: [
                        { value: 'day', label: '당일 치기', icon: '🚄' },
                        { value: '2-3', label: '2~3일', icon: '🎒' },
                        { value: '4-5', label: '4~5일', icon: '🧳' }
                    ]
                };
            } else {
                return {
                    ...q,
                    options: [
                        { value: '2-3', label: '2~3일', icon: '🎒' },
                        { value: '4-6', label: '4~6일', icon: '🧳' },
                        { value: '7-14', label: '1주~2주', icon: '✈️' }
                    ]
                };
            }
        }
        return q;
    });
}

function updateProgress() {
    const progress = ((currentStep) / activeQuestions.length) * 100;
    DOM.progressBar.style.width = `${progress}%`;
}

function renderStep() {
    activeQuestions = getActiveQuestions();
    
    if (currentStep >= activeQuestions.length) {
        showResults();
        return;
    }

    updateProgress();

    const question = activeQuestions[currentStep];
    
    if (currentStep === 0) {
        DOM.prevBtn.classList.add('hidden');
    } else {
        DOM.prevBtn.classList.remove('hidden');
    }

    let html = `
        <div class="animate-fade-in" style="width:100%;">
            <h2>${question.question}</h2>
            <div class="options-grid">
                ${question.options.map(opt => `
                    <button class="option-btn ${userAnswers[question.id] === opt.value ? 'selected' : ''}" 
                            data-value="${opt.value}">
                        <span class="option-icon">${opt.icon}</span>
                        <span class="option-label">${opt.label}</span>
                    </button>
                `).join('')}
            </div>
        </div>
    `;

    DOM.quizContent.innerHTML = html;

    const optionBtns = document.querySelectorAll('.option-btn');
    optionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => handleOptionSelect(question.id, btn.dataset.value));
    });
}

function handleOptionSelect(questionId, value) {
    userAnswers[questionId] = value;
    
    const btns = document.querySelectorAll('.option-btn');
    btns.forEach(b => b.classList.remove('selected'));
    document.querySelector(`.option-btn[data-value="${value}"]`).classList.add('selected');

    setTimeout(() => {
        currentStep++;
        renderStep();
    }, 300);
}

function handlePrev() {
    if (currentStep > 0) {
        currentStep--;
        renderStep();
    }
}

function showResults() {
    DOM.progressBar.style.width = '100%';
    
    setTimeout(() => {
        DOM.quizSection.classList.add('hidden');
        DOM.resultsSection.classList.remove('hidden');
        
        calculateRecommendations();
    }, 500);
}

const styleTranslations = {
    'relaxation': '휴양',
    'city': '도시',
    'food': '미식',
    'nature': '자연',
    'culture': '문화/역사',
    'shopping': '쇼핑',
    'nightlife': '밤문화',
    'history': '역사',
    'family': '가족',
    'adventure': '액티비티',
    'romantic': '로맨틱'
};

function getSeasonFromMonth(month) {
    if (!month) return 'spring';
    const m = parseInt(month);
    if ([3, 4, 5].includes(m)) return 'spring';
    if ([6, 7, 8].includes(m)) return 'summer';
    if ([9, 10, 11].includes(m)) return 'autumn';
    if ([12, 1, 2].includes(m)) return 'winter';
    return 'spring';
}

function calculateRecommendations() {
    let scoredDestinations = destinations.map(dest => {
        let score = 0;
        
        if (dest.location === userAnswers.location) {
            score += 10;
        } else {
            score -= 100;
        }

        if (dest.duration) {
            if (dest.duration.includes(userAnswers.duration)) {
                score += 10;
            } else {
                score -= 50; // 일정이 불가능한 경우 강력하게 제외
            }
        }

        if (userAnswers.flight && dest.flight === userAnswers.flight) {
            score += 5;
        }

        if (dest.style && dest.style.includes(userAnswers.style)) {
            score += 5;
        }

        const userSeason = getSeasonFromMonth(userAnswers.month);
        
        if (dest.bestSeasons && dest.bestSeasons.includes(userSeason)) {
            score += 5;
        } else if (dest.bestSeasons) {
            score -= 2;
        }

        return { ...dest, score };
    });

    currentRecommendations = scoredDestinations
        .filter(d => d.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);

    if (currentRecommendations.length === 0) {
        currentRecommendations = destinations.filter(d => d.location === userAnswers.location).slice(0, 3);
    }

    renderRecommendations(currentRecommendations);
}

function getSeasonTempStr(tempObj, selectedSeason) {
    if (!tempObj) return "-";
    // If user selected a season, show that specific temp. Otherwise show spring as default or something.
    if (selectedSeason && tempObj[selectedSeason]) {
        let seasonKor = { 'spring': '봄', 'summer': '여름', 'autumn': '가을', 'winter': '겨울' }[selectedSeason];
        return `${tempObj[selectedSeason]} (${seasonKor})`;
    }
    return tempObj['spring'] || "-";
}

function renderRecommendations(recs) {
    if (recs.length === 0) {
        DOM.resultsGrid.innerHTML = '<p>조건에 맞는 여행지를 찾지 못했습니다.</p>';
        return;
    }

    const userSeason = getSeasonFromMonth(userAnswers.month);
    const displayMonth = userAnswers.month ? `${userAnswers.month}월` : '선택한 달';

    const html = recs.map((dest, index) => {
        try {
            var tempStr = getSeasonTempStr(dest.quickInfo ? dest.quickInfo.temp : null, userSeason);
            
            var detailsHtml = '';
            if (dest.details) {
                var userDuration = userAnswers.duration || '2-3';
                
                var weatherDesc = '여행하기 좋은 날씨입니다.';
                if (dest.details.weatherDesc) {
                    weatherDesc = dest.details.weatherDesc[userSeason] || dest.details.weatherDesc['spring'] || '여행하기 좋은 날씨입니다.';
                }
                
                var courseDesc = '추천 일정이 곧 추가될 예정입니다.';
                if (dest.details.courses) {
                    courseDesc = dest.details.courses[userDuration] || Object.values(dest.details.courses)[0] || '추천 일정이 곧 추가될 예정입니다.';
                }
                
                var durationLabel = userDuration;
                if (typeof activeQuestions !== 'undefined' && activeQuestions.find) {
                    var durationQuestion = activeQuestions.find(function(q) { return q.id === 'duration'; });
                    if (durationQuestion && durationQuestion.options && durationQuestion.options.find) {
                        var matchedOpt = durationQuestion.options.find(function(o) { return o.value === userDuration; });
                        if (matchedOpt && matchedOpt.label) {
                            durationLabel = matchedOpt.label;
                        }
                    }
                }

                detailsHtml = `
                    <div class="domestic-details" style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px dashed rgba(0,0,0,0.1);">
                        <h4 style="margin-bottom: 0.8rem; color: var(--primary);">✨ 여행 상세 정보</h4>
                        <div style="display: grid; gap: 0.8rem; font-size: 0.95rem;">
                            <p><strong>📸 인기 관광지:</strong> ${dest.details.spots || '-'}</p>
                            <p><strong>🍜 추천 맛집:</strong> ${dest.details.food || '-'}</p>
                            <p><strong>🏨 추천 숙소:</strong> ${dest.details.hotel || '-'}</p>
                            <p><strong>🌤️ ${displayMonth} 날씨:</strong> ${weatherDesc}</p>
                            ${dest.location === 'international' && dest.details.shopping ? `<p><strong>🎁 추천 쇼핑/선물:</strong> ${dest.details.shopping}</p>` : ''}
                            <p><strong>🗺️ 추천 코스 (${durationLabel}):</strong> ${courseDesc}</p>
                        </div>
                    </div>
                `;
            }

            var imageSrc = dest.image || 'https://loremflickr.com/800/600/travel';
            var destName = dest.name || '알 수 없는 목적지';
            var destDesc = dest.description || '목적지 설명이 아직 작성되지 않았습니다.';
            var destMonths = (dest.quickInfo && dest.quickInfo.months) ? dest.quickInfo.months : '연중무휴';
            var destFlight = (dest.quickInfo && dest.quickInfo.flight) ? dest.quickInfo.flight : '자가용/대중교통';
            var destVisa = (dest.quickInfo && dest.quickInfo.visa) ? dest.quickInfo.visa : '해당없음';
            var destVoltage = (dest.quickInfo && dest.quickInfo.voltage) ? dest.quickInfo.voltage : '220V';
            var destStyle = dest.style || [];

            return `
            <div class="destination-card animate-fade-in" style="animation-delay: ${index * 0.1}s">
                <img src="${imageSrc}" alt="${destName}" class="card-img">
                <div class="card-content">
                    <h3 class="card-title">${destName}</h3>
                    <p class="card-desc">${destDesc}</p>
                    
                    <div class="info-badges">
                        <div class="badge">
                            <div class="badge-title">📅 추천월</div>
                            <div class="badge-value">${destMonths}</div>
                        </div>
                        <div class="badge">
                            <div class="badge-title">${dest.location === 'domestic' ? '🚗 추천 교통' : '✈️ 항공'}</div>
                            <div class="badge-value">${destFlight}</div>
                        </div>
                        ${dest.location === 'international' ? `
                        <div class="badge">
                            <div class="badge-title">🛂 비자</div>
                            <div class="badge-value">${destVisa}</div>
                        </div>
                        ` : ''}
                        <div class="badge">
                            <div class="badge-title">🌡️ 평균온도</div>
                            <div class="badge-value">${tempStr}</div>
                        </div>
                        ${dest.location === 'international' ? `
                        <div class="badge">
                            <div class="badge-title">🔌 전압</div>
                            <div class="badge-value">${destVoltage}</div>
                        </div>
                        ` : ''}
                    </div>

                    <div class="card-tags">
                        ${destStyle.map(function(s) { return `<span class="tag">#` + (styleTranslations[s] || s) + `</span>`; }).join('')}
                    </div>
                    
                    ${detailsHtml}
                </div>
            </div>
            `;
        } catch (e) {
            if (typeof console !== 'undefined' && console.error) {
                console.error("Error rendering destination: " + dest.id, e);
            }
            return '';
        }
    }).join('');

    DOM.resultsGrid.innerHTML = html || '<p>조건에 맞는 여행지를 찾지 못했습니다.</p>';
}

// Start
document.addEventListener('DOMContentLoaded', initApp);
