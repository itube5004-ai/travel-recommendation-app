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

            // Set sensible defaults for international quickInfo properties
            if (dest.location === 'international') {
                if (!dest.quickInfo.months) {
                    if (dest.bestSeasons) {
                        var seasonsKor = [];
                        dest.bestSeasons.forEach(function(s) {
                            if (s === 'spring') seasonsKor.push('봄 (3~5월)');
                            else if (s === 'summer') seasonsKor.push('여름 (6~8월)');
                            else if (s === 'autumn') seasonsKor.push('가을 (9~11월)');
                            else if (s === 'winter') seasonsKor.push('겨울 (12~2월)');
                        });
                        dest.quickInfo.months = seasonsKor.join(', ');
                    } else {
                        dest.quickInfo.months = '연중무휴';
                    }
                }
            }

            // 3. Normalize temp: map weather (old) to quickInfo.temp
            if (!dest.quickInfo.temp && dest.weather) {
                dest.quickInfo.temp = {};
                var seasons = ['spring', 'summer', 'autumn', 'winter'];
                for (var i = 0; i < seasons.length; i++) {
                    var s = seasons[i];
                    if (dest.weather[s]) {
                        var rawTemp = dest.weather[s];
                        var bracketIdx = rawTemp.indexOf('(');
                        if (bracketIdx !== -1) {
                            dest.quickInfo.temp[s] = rawTemp.substring(0, bracketIdx).replace(/^\s+|\s+$/g, '');
                        } else {
                            dest.quickInfo.temp[s] = rawTemp;
                        }
                    }
                }
            }

            // 4. Normalize details (spots, food, hotel, courses, weatherDesc, shopping, temperatures)
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
                    var hasArrayCourses = dest.details.courses && typeof dest.details.courses.join === 'function' && dest.details.courses[0] && typeof dest.details.courses[0] === 'object';
                    if (hasArrayCourses) {
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

// Landmark image map: destination ID → verified Unsplash URL
var LANDMARK_IMAGES = {
    // === 국내 ===
    'd1':  'https://images.unsplash.com/photo-1590483736622-39da8af75bba?w=800&auto=format&fit=crop', // 서울 경복궁
    'd2':  'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=800&auto=format&fit=crop', // 부산 광안대교
    'd3':  'https://images.unsplash.com/photo-1559742811-822873691df8?w=800&auto=format&fit=crop', // 인천 차이나타운
    'd4':  'https://images.unsplash.com/photo-1625244490958-b78de3e87038?w=800&auto=format&fit=crop', // 대구
    'd5':  'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop', // 대전
    'd6':  'https://images.unsplash.com/photo-1608096613064-7e7bd94d4d29?w=800&auto=format&fit=crop', // 광주
    'd7':  'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&auto=format&fit=crop', // 울산
    'd8':  'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&auto=format&fit=crop', // 세종
    'd9':  'https://images.unsplash.com/photo-1617450365226-9bf28c04e130?w=800&auto=format&fit=crop', // 제주
    'd10': 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&auto=format&fit=crop', // 수원화성
    'd11': 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=800&auto=format&fit=crop', // 강릉
    'd12': 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&auto=format&fit=crop', // 속초 설악산
    'd13': 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&auto=format&fit=crop', // 춘천
    'd14': 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=800&auto=format&fit=crop', // 전주 한옥마을
    'd15': 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&auto=format&fit=crop', // 여수 돌산대교
    'd16': 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&auto=format&fit=crop', // 경주 불국사
    'd17': 'https://images.unsplash.com/photo-1523592121529-f6dde35f079e?w=800&auto=format&fit=crop', // 통영
    'd18': 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&auto=format&fit=crop', // 천안
    'd19': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop', // 청주 상당산성
    'd20': 'https://images.unsplash.com/photo-1605152276897-4f618f831968?w=800&auto=format&fit=crop', // 공주 백제
    'd21': 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&auto=format&fit=crop', // 아산
    'd22': 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&auto=format&fit=crop', // 태안 꽃지
    'd23': 'https://images.unsplash.com/photo-1583247085381-04d24f53e3c9?w=800&auto=format&fit=crop', // 보령 머드
    'd24': 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800&auto=format&fit=crop', // 순천만
    'd25': 'https://images.unsplash.com/photo-1598535868022-4d0462ef9a3a?w=800&auto=format&fit=crop', // 담양 대나무숲
    'd26': 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&auto=format&fit=crop', // 천안 인근
    'd27': 'https://images.unsplash.com/photo-1583247085381-04d24f53e3c9?w=800&auto=format&fit=crop', // 아산 외암마을
    'd28': 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=800&auto=format&fit=crop', // 논산
    'd29': 'https://images.unsplash.com/photo-1543536448-1e76fc2795bf?w=800&auto=format&fit=crop', // 안동 하회마을
    'd30': 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=800&auto=format&fit=crop', // 평창
    'd31': 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&auto=format&fit=crop', // 양양
    'd32': 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=800&auto=format&fit=crop', // 남해
    'd33': 'https://images.unsplash.com/photo-1523592121529-f6dde35f079e?w=800&auto=format&fit=crop', // 거제
    'd34': 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&auto=format&fit=crop', // 고흥
    'd35': 'https://images.unsplash.com/photo-1598535868022-4d0462ef9a3a?w=800&auto=format&fit=crop', // 나주
    'd36': 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=800&auto=format&fit=crop', // 익산
    'd37': 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&auto=format&fit=crop', // 포항
    'd38': 'https://images.unsplash.com/photo-1543536448-1e76fc2795bf?w=800&auto=format&fit=crop', // 영주
    'd39': 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=800&auto=format&fit=crop', // 진도
    'd40': 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&auto=format&fit=crop', // 목포
    'd41': 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&auto=format&fit=crop', // 평택
    'd42': 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&auto=format&fit=crop', // 안성
    'd43': 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&auto=format&fit=crop', // 경주 추가
    'd44': 'https://images.unsplash.com/photo-1523592121529-f6dde35f079e?w=800&auto=format&fit=crop', // 하동
    'd45': 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&auto=format&fit=crop', // 완도
    'd46': 'https://images.unsplash.com/photo-1543536448-1e76fc2795bf?w=800&auto=format&fit=crop', // 합천
    'd47': 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=800&auto=format&fit=crop', // 정선
    'd48': 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&auto=format&fit=crop', // 인제
    'd49': 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&auto=format&fit=crop', // 서산
    'd50': 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&auto=format&fit=crop', // 무주 덕유산
    'd51': 'https://images.unsplash.com/photo-1598535868022-4d0462ef9a3a?w=800&auto=format&fit=crop', // 장흥
    'd52': 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=800&auto=format&fit=crop', // 부여
    'd53': 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&auto=format&fit=crop', // 오산
    'd54': 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&auto=format&fit=crop', // 당진
    'd55': 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop', // 청주
    'd56': 'https://images.unsplash.com/photo-1543536448-1e76fc2795bf?w=800&auto=format&fit=crop', // 제천
    'd57': 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=800&auto=format&fit=crop', // 원주
    'd58': 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&auto=format&fit=crop', // 공주
    'd59': 'https://images.unsplash.com/photo-1605152276897-4f618f831968?w=800&auto=format&fit=crop', // 부여
    'd60': 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop', // 홍성
    'd61': 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&auto=format&fit=crop', // 연기
    'd62': 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&auto=format&fit=crop', // 천안 인근2
    'd63': 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&auto=format&fit=crop', // 서천
    'd64': 'https://images.unsplash.com/photo-1583247085381-04d24f53e3c9?w=800&auto=format&fit=crop', // 보령
    'd65': 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop', // 천안 동남구
    'd66': 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=800&auto=format&fit=crop', // 충주
    'd67': 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=800&auto=format&fit=crop', // 영월
    'd68': 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&auto=format&fit=crop', // 아산 온양
    'd69': 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&auto=format&fit=crop', // 예산
    'd70': 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&auto=format&fit=crop', // 태안
    // === 해외 ===
    'i1':  'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format&fit=crop', // 도쿄 도리이
    'i2':  'https://images.unsplash.com/photo-1590253507317-09d57a41496a?w=800&auto=format&fit=crop', // 오사카 도톤보리
    'i3':  'https://images.unsplash.com/photo-1493997181344-712f2f19d87a?w=800&auto=format&fit=crop', // 교토 후시미이나리
    'i4':  'https://images.unsplash.com/photo-1535139262971-ab8b8f1d2b21?w=800&auto=format&fit=crop', // 삿포로 눈축제
    'i5':  'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop', // 방콕 사원
    'i6':  'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop', // 발리
    'i7':  'https://images.unsplash.com/photo-1555529633-0bd2655ab254?w=800&auto=format&fit=crop', // 다낭
    'i8':  'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&auto=format&fit=crop', // 싱가포르 마리나베이
    'i9':  'https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?w=800&auto=format&fit=crop', // 홍콩 야경
    'i10': 'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?w=800&auto=format&fit=crop', // 마카오
    'i11': 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop', // 파리 에펠탑
    'i12': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&auto=format&fit=crop', // 런던 빅벤
    'i13': 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&auto=format&fit=crop', // 로마 콜로세움
    'i14': 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=800&auto=format&fit=crop', // 바르셀로나 사그라다파밀리아
    'i15': 'https://images.unsplash.com/photo-1544085311-11a028465b03?w=800&auto=format&fit=crop', // 암스테르담 운하
    'i16': 'https://images.unsplash.com/photo-1491566102020-21838225c3c8?w=800&auto=format&fit=crop', // 프라하 천문시계
    'i17': 'https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?w=800&auto=format&fit=crop', // 빈 오페라하우스
    'i18': 'https://images.unsplash.com/photo-1577334928618-1eb1d7a18a38?w=800&auto=format&fit=crop', // 스위스 융프라우
    'i19': 'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=800&auto=format&fit=crop', // 그리스 산토리니
    'i20': 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800&auto=format&fit=crop', // 두바이 부르즈할리파
    'i21': 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&auto=format&fit=crop', // 뉴욕 자유의여신상
    'i22': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop', // 하와이 와이키키
    'i23': 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&auto=format&fit=crop', // 시드니 오페라하우스
    'i24': 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&auto=format&fit=crop', // 나이로비
    'i25': 'https://images.unsplash.com/photo-1612438214708-f428a707dd4e?w=800&auto=format&fit=crop', // 코타키나발루
    'i26': 'https://images.unsplash.com/photo-1567131408077-8f2f04f22c59?w=800&auto=format&fit=crop', // 세부
    'i27': 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&auto=format&fit=crop', // 하노이
    'i28': 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&auto=format&fit=crop', // 호치민
    'i29': 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop', // 치앙마이
    'i30': 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&auto=format&fit=crop', // 푸켓
    'i31': 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&auto=format&fit=crop', // 뉴델리 타지마할
    'i32': 'https://images.unsplash.com/photo-1539650116574-75c0c6a659e5?w=800&auto=format&fit=crop', // 이스탄불
    'i33': 'https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=800&auto=format&fit=crop', // 모스크바
    'i34': 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&auto=format&fit=crop', // 베를린
    'i35': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop', // 마드리드
    'i36': 'https://images.unsplash.com/photo-1564694202779-bc908c327862?w=800&auto=format&fit=crop', // 리스본
    'i37': 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&auto=format&fit=crop', // 피렌체
    'i38': 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&auto=format&fit=crop', // 방콕 추가
    'i39': 'https://images.unsplash.com/photo-1617450365226-9bf28c04e130?w=800&auto=format&fit=crop', // 몰디브
    'i40': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop', // 두바이 추가
    'i41': 'https://images.unsplash.com/photo-1543832923-44667a44c804?w=800&auto=format&fit=crop', // 멕시코 치첸이사
    'i42': 'https://images.unsplash.com/photo-1523592121529-f6dde35f079e?w=800&auto=format&fit=crop', // 리우데자네이루 예수상
    'i43': 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&auto=format&fit=crop', // 쿠알라룸푸르 페트로나스
    'i44': 'https://images.unsplash.com/photo-1517517787777-f81a4dc3e4ca?w=800&auto=format&fit=crop', // 뭄바이
    'i45': 'https://images.unsplash.com/photo-1577058298683-f66a9dd2df21?w=800&auto=format&fit=crop', // 오슬로
    'i46': 'https://images.unsplash.com/photo-1490750967868-88df5691cc5c?w=800&auto=format&fit=crop', // 헬싱키
    'i47': 'https://images.unsplash.com/photo-1568454537842-d933259bb258?w=800&auto=format&fit=crop', // 코펜하겐
    'i48': 'https://images.unsplash.com/photo-1574691250077-03a929faece5?w=800&auto=format&fit=crop', // 스톡홀름
    'i49': 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&auto=format&fit=crop', // 오클랜드
    'i50': 'https://images.unsplash.com/photo-1598598628469-6e3e9f4cd5b3?w=800&auto=format&fit=crop', // 캐나다 밴쿠버
};

// Name-based fallback image map
var NAME_IMAGES = {
    '서울': 'https://images.unsplash.com/photo-1590483736622-39da8af75bba?w=800&auto=format&fit=crop',
    '부산': 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=800&auto=format&fit=crop',
    '인천': 'https://images.unsplash.com/photo-1559742811-822873691df8?w=800&auto=format&fit=crop',
    '제주': 'https://images.unsplash.com/photo-1617450365226-9bf28c04e130?w=800&auto=format&fit=crop',
    '경주': 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&auto=format&fit=crop',
    '전주': 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=800&auto=format&fit=crop',
    '강릉': 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=800&auto=format&fit=crop',
    '여수': 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&auto=format&fit=crop',
    '도쿄': 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format&fit=crop',
    '오사카': 'https://images.unsplash.com/photo-1590253507317-09d57a41496a?w=800&auto=format&fit=crop',
    '교토': 'https://images.unsplash.com/photo-1493997181344-712f2f19d87a?w=800&auto=format&fit=crop',
    '방콕': 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop',
    '발리': 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop',
    '다낭': 'https://images.unsplash.com/photo-1555529633-0bd2655ab254?w=800&auto=format&fit=crop',
    '싱가포르': 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&auto=format&fit=crop',
    '홍콩': 'https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?w=800&auto=format&fit=crop',
    '파리': 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop',
    '런던': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&auto=format&fit=crop',
    '로마': 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&auto=format&fit=crop',
    '바르셀로나': 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=800&auto=format&fit=crop',
    '뉴욕': 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&auto=format&fit=crop',
    '하와이': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop',
    '시드니': 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&auto=format&fit=crop',
    '두바이': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop',
    '그리스': 'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=800&auto=format&fit=crop',
    '산토리니': 'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=800&auto=format&fit=crop',
    '몰디브': 'https://images.unsplash.com/photo-1617450365226-9bf28c04e130?w=800&auto=format&fit=crop',
    '프라하': 'https://images.unsplash.com/photo-1491566102020-21838225c3c8?w=800&auto=format&fit=crop',
    '암스테르담': 'https://images.unsplash.com/photo-1544085311-11a028465b03?w=800&auto=format&fit=crop',
    '스위스': 'https://images.unsplash.com/photo-1577334928618-1eb1d7a18a38?w=800&auto=format&fit=crop',
    '이스탄불': 'https://images.unsplash.com/photo-1539650116574-75c0c6a659e5?w=800&auto=format&fit=crop',
    '하노이': 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&auto=format&fit=crop',
    '호치민': 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&auto=format&fit=crop',
    '치앙마이': 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop',
    '푸켓': 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&auto=format&fit=crop',
};

function getLandmarkImage(dest) {
    // 1. First try the ID-based map (most accurate)
    if (dest.id && LANDMARK_IMAGES[dest.id]) {
        return LANDMARK_IMAGES[dest.id];
    }
    // 2. Try name-based map
    if (dest.name && NAME_IMAGES[dest.name]) {
        return NAME_IMAGES[dest.name];
    }
    // 3. Try partial name match
    if (dest.name) {
        for (var key in NAME_IMAGES) {
            if (dest.name.indexOf(key) !== -1 || key.indexOf(dest.name) !== -1) {
                return NAME_IMAGES[key];
            }
        }
    }
    // 4. Fallback by location type
    if (dest.location === 'domestic') {
        return 'https://images.unsplash.com/photo-1590483736622-39da8af75bba?w=800&auto=format&fit=crop';
    }
    return 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop';
}

function handleImageError(img, destId) {
    img.onerror = null; // Prevent infinite loop
    // Find destination by id
    var dest = null;
    if (typeof destinations !== 'undefined') {
        for (var i = 0; i < destinations.length; i++) {
            if (destinations[i].id === destId) {
                dest = destinations[i];
                break;
            }
        }
    }
    if (dest) {
        var fallback = getLandmarkImage(dest);
        img.src = fallback;
    } else {
        img.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop';
    }
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
                
                // Determine target days based on duration
                var targetDays = 3;
                if (userDuration === 'day') targetDays = 1;
                else if (userDuration === '2-3') targetDays = 3;
                else if (userDuration === '4-5' || userDuration === '4-6') targetDays = 5;
                else if (userDuration === '7-14') targetDays = 7;
                
                var isDomestic = dest.location === 'domestic';
                
                // Get available courses
                var rawCourse = '';
                if (dest.details.courses) {
                    rawCourse = dest.details.courses[userDuration] || Object.values(dest.details.courses)[0] || '';
                }
                
                var days = [];
                if (typeof rawCourse === 'string' && rawCourse.length > 0) {
                    days = rawCourse.split(' | ');
                }
                
                // Trim excess days to match targetDays
                if (days.length > targetDays) {
                    days = days.slice(0, targetDays);
                }
                
                // Clean up departure text in non-final days
                for (var i = 0; i < days.length - 1; i++) {
                    days[i] = days[i]
                        .replace(/->\s*.*귀국[^,]*/g, '')
                        .replace(/->\s*.*귀가[^,]*/g, '')
                        .replace(/->\s*.*공항\s*이동[^,]*/g, '')
                        .replace(/및\s*한국\s*귀국/g, '')
                        .replace(/및\s*귀국/g, '')
                        .replace(/및\s*귀가/g, '');
                }
                
                // Extract spots and foods for generation
                var spotList = [];
                if (dest.details.spots) {
                    spotList = typeof dest.details.spots === 'string' ? dest.details.spots.split(', ') : dest.details.spots;
                } else if (dest.spots) {
                    spotList = dest.spots.map(function(s) { return s.name; });
                }
                
                var foodList = [];
                if (dest.details.food) {
                    foodList = typeof dest.details.food === 'string' ? dest.details.food.split(', ') : dest.details.food;
                } else if (dest.food) {
                    foodList = dest.food.map(function(f) { return f.name; });
                }
                
                if (!spotList || spotList.length === 0) spotList = ['현지 명소', '로컬 스트리트', '주요 랜드마크', '자연 명소'];
                if (!foodList || foodList.length === 0) foodList = ['현지 대표 음식', '이색 디저트/카페'];
                
                // Fill itinerary to match targetDays exactly
                while (days.length < targetDays) {
                    var nextDayNum = days.length + 1;
                    var dayText = '';
                    var spot1 = spotList[(nextDayNum - 1) % spotList.length];
                    var spot2 = spotList[nextDayNum % spotList.length];
                    var food1 = foodList[(nextDayNum - 1) % foodList.length];
                    
                    if (targetDays === 1) {
                        dayText = "1일차: " + (spotList[0] || '주요 관광지') + " 방문 및 인생샷 촬영 -> " + (foodList[0] || '현지 맛집') + " 점심 -> " + (spotList[1] || '주변 명소') + " 탐방 후 귀가";
                    } else if (nextDayNum === 1) {
                        if (isDomestic) {
                            dayText = "1일차: " + dest.name + " 도착 및 숙소 체크인 -> " + (spotList[0] || '주요 명소') + " 방문 -> " + (foodList[0] || '현지 맛집') + " 저녁 식사";
                        } else {
                            dayText = "1일차: 현지 도착 및 호텔 체크인 -> " + (spotList[0] || '랜드마크') + " 야경 산책 -> 첫 현지 저녁 만찬";
                        }
                    } else if (nextDayNum === targetDays) {
                        if (isDomestic) {
                            dayText = nextDayNum + "일차: " + (spotList[(nextDayNum-1) % spotList.length] || '마지막 명소') + " 방문 -> 지역 기념품 구매 -> 귀가";
                        } else {
                            dayText = nextDayNum + "일차: 호텔 체크아웃 -> 마지막 기념품 쇼핑 -> 공항 이동 및 한국 귀국";
                        }
                    } else {
                        if (nextDayNum === 2) {
                            dayText = "2일차: " + spot1 + " 집중 탐방 및 인생샷 촬영 -> 로컬 카페거리 산책 -> " + food1 + " 맛집 탐방";
                        } else if (nextDayNum === 3) {
                            dayText = "3일차: 근교 자연 힐링 투어 (" + spot2 + ") -> " + (isDomestic ? '지역 특산품 쇼핑' : '전통 스파/마사지') + " -> 낙조 감상";
                        } else if (nextDayNum === 4) {
                            dayText = "4일차: " + spot1 + " & 박물관/미술관 예술 기행 -> 골목길/디자인 숍 탐방 -> 야시장 먹거리 정복";
                        } else if (nextDayNum === 5) {
                            dayText = "5일차: 숨겨진 뷰맛집 명소 산책 -> " + (isDomestic ? '온천/스파 힐링' : '리조트 수영장 호캉스') + " -> 파인 다이닝";
                        } else if (nextDayNum === 6) {
                            dayText = "6일차: 현지 문화 체험 (쿠킹클래스/공예 체험) -> 공원/광장 피크닉 -> 로컬 라이브 바";
                        } else if (nextDayNum === 7) {
                            dayText = "7일차: " + spot2 + " 자유 일정 -> 현지 기념품 쇼핑 -> " + (isDomestic ? '귀가' : '공항 이동 및 귀국');
                        } else {
                            dayText = nextDayNum + "일차: " + spot1 + " 주변 이색 명소 도보 자유 여행 -> 로컬 카페 시식";
                        }
                    }
                    days.push(dayText);
                }
                
                // Format the itinerary beautifully in vertical HTML
                var courseDesc = '<div class="course-list" style="display: flex; flex-direction: column; gap: 0.4rem; margin-top: 0.5rem; padding-left: 0.8rem; border-left: 2px solid var(--primary);">';
                days.forEach(function(dayText) {
                    var formattedDay = dayText.replace(/(\d+)일차:?/g, '<strong style="color: var(--primary);">$1Day:</strong>');
                    courseDesc += '<div class="course-day" style="line-height: 1.4;">' + formattedDay + '</div>';
                });
                courseDesc += '</div>';
                
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

            var imageSrc = getLandmarkImage(dest);
            var destName = dest.name || '알 수 없는 목적지';
            var destDesc = dest.description || '목적지 설명이 아직 작성되지 않았습니다.';
            var destMonths = (dest.quickInfo && dest.quickInfo.months) ? dest.quickInfo.months : '연중무휴';
            var destFlight = (dest.quickInfo && dest.quickInfo.flight) ? dest.quickInfo.flight : '자가용/대중교통';
            var destVisa = (dest.quickInfo && dest.quickInfo.visa) ? dest.quickInfo.visa : '해당없음';
            var destVoltage = (dest.quickInfo && dest.quickInfo.voltage) ? dest.quickInfo.voltage : '220V';
            var destStyle = dest.style || [];

            return `
            <div class="destination-card animate-fade-in" style="animation-delay: ${index * 0.1}s">
                <img src="${imageSrc}" alt="${destName}" class="card-img" onerror="handleImageError(this, '${dest.id}')">
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
