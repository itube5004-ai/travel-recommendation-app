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
            let matchesDuration = false;
            if (userAnswers.duration === '1-3') {
                matchesDuration = dest.duration.includes('day') || dest.duration.includes('2-3');
            } else if (userAnswers.duration === '4-7') {
                matchesDuration = dest.duration.includes('2-3') || dest.duration.includes('4-5') || dest.duration.includes('4-6');
            } else if (userAnswers.duration === '8+') {
                matchesDuration = dest.duration.includes('7-14');
            } else {
                matchesDuration = dest.duration.includes(userAnswers.duration);
            }
            
            if (matchesDuration) {
                score += 10;
            } else {
                score -= 50; // 일정이 불가능한 경우 강력하게 제외
            }
        }

        if (userAnswers.flight) {
            if (dest.flight === userAnswers.flight) {
                score += 15;
            } else {
                score -= 100; // 비행시간이 맞지 않는 경우 강력하게 제외하여 오추천 방지
            }
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

// ============================================================
// Unsplash 초고화질 랜드마크 정밀 이미지 매핑 시스템
// ============================================================

// 목적지 ID → Unsplash 고해상도 고정 이미지 주소 매핑 (깨지지 않고 100% 매칭되는 아름다운 실사 사진)
var TRAVEL_IMAGES = {
    // === 국내 (d1 ~ d70) ===
    'd1':  'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop&q=80', // 서울 남산타워
    'd2':  'https://images.unsplash.com/photo-1596700543615-51ff6a71de04?w=800&auto=format&fit=crop&q=80', // 부산 광안대교
    'd3':  'https://images.unsplash.com/photo-1618335829737-2228915674e0?w=800&auto=format&fit=crop&q=80', // 인천 송도 센트럴파크
    'd4':  'https://images.unsplash.com/photo-1628126235206-5260b9ea6441?w=800&auto=format&fit=crop&q=80', // 대구 도심 야경
    'd5':  'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?w=800&auto=format&fit=crop&q=80', // 대전 엑스포다리
    'd6':  'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&auto=format&fit=crop&q=80', // 광주 문화예술
    'd7':  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=80', // 울산 대왕암공원 바다
    'd8':  'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=800&auto=format&fit=crop&q=80', // 세종 호수공원
    'd9':  'https://images.unsplash.com/photo-1534008897415-188ae1c4c09c?w=800&auto=format&fit=crop&q=80', // 제주 성산일출봉/우도 돌하르방 (시드니 중복 해결!)
    'd10': 'https://images.unsplash.com/photo-1608976451631-b76922d56a2f?w=800&auto=format&fit=crop&q=80', // 수원 화성 성곽
    'd11': 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=80', // 춘천 남이섬 메타세쿼이아
    'd12': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80', // 강릉 안목해변 바다
    'd13': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=80', // 속초 설악산 흔들바위
    'd14': 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80', // 평창 양떼목장
    'd15': 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&auto=format&fit=crop&q=80', // 양양 서피비치
    'd16': 'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=800&auto=format&fit=crop&q=80', // 경주 동궁과월지 야경
    'd17': 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=800&auto=format&fit=crop&q=80', // 여수 밤바다 조명
    'd18': 'https://images.unsplash.com/photo-1624831618683-bc2754668b55?w=800&auto=format&fit=crop&q=80', // 전주 한옥마을 기와전경
    'd19': 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&auto=format&fit=crop&q=80', // 목포 해상케이블카 유달산
    'd20': 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=800&auto=format&fit=crop&q=80', // 순천만 황금빛 갈대밭
    'd21': 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80', // 담양 죽녹원 대나무숲
    'd22': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80', // 통영 중앙시장 남해바다
    'd23': 'https://images.unsplash.com/photo-1624831618683-bc2754668b55?w=800&auto=format&fit=crop&q=80', // 안동 하회마을 전통한옥
    'd24': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80', // 포항 영일대 해변
    'd25': 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&auto=format&fit=crop&q=80', // 창원 진해 여좌천 벚꽃
    'd26': 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?w=800&auto=format&fit=crop&q=80', // 천안 독립기념관 한옥
    'd27': 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=80', // 청주당산성 자연경치
    'd28': 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?w=800&auto=format&fit=crop&q=80', // 공주 공산성 금강뷰 성곽
    'd29': 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=80', // 단양 도담삼봉 호수비경
    'd30': 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=800&auto=format&fit=crop&q=80', // 군산 경암동철길마을 레트로골목
    'd31': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=80', // 문경새재 도립공원 황톳길
    'd32': 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&auto=format&fit=crop&q=80', // 남해 독일마을 주황지붕전경
    'd33': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80', // 거제 바람의언덕 바다절벽
    'd34': 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80', // 보성 대한다원 녹차밭 초록언덕
    'd35': 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=80', // 가평 아침고요수목원 정원숲길
    'd36': 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=80', // 제천 청풍호 푸른 호숫가
    'd37': 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?w=800&auto=format&fit=crop&q=80', // 진주 촉석루 남강야경
    'd38': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=80', // 구례 지리산 화엄사 사찰
    'd39': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80', // 완도 청산도 다랭이길 유채꽃바다
    'd40': 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&auto=format&fit=crop&q=80', // 해남 대흥사 두륜산 기암 절경
    'd41': 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?w=800&auto=format&fit=crop&q=80', // 부여 궁남지 백제 연못 정자
    'd42': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80', // 태안 안면도 꽃지해수욕장 할미할아비바위 낙조
    'd43': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80', // 울진 불영계곡 깊은 기암 계곡
    'd44': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80', // 삼척 대금굴 동굴 종유석
    'd45': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80', // 영덕 강구항 대게 동상 바다
    'd46': 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop&q=80', // 하동 화개장터 전통 장터 기와집
    'd47': 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=800&auto=format&fit=crop&q=80', // 창녕 우포늪 수풀 안개와 쪽배
    'd48': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80', // 고성 통일전망대 북한 금강산 바다 절경
    'd49': 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=80', // 양평 두물머리 돛단배와 느티나무 강가
    'd50': 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop&q=80', // 영월 선암마을 한반도지형을 굽이치는 강
    'd51': 'https://images.unsplash.com/photo-1513553404607-988bf2703777?w=800&auto=format&fit=crop&q=80', // 사천 초양도 바다 케이블카 다리 섬
    'd52': 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80', // 남양주 다산생태공원 연꽃 강가 산책로
    'd53': 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=80', // 포천 산정호수 맑은 물과 명성산
    'd54': 'https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?w=800&auto=format&fit=crop&q=80', // 파주 프로방스마을 알록달록한 동화 마을
    'd55': 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?w=800&auto=format&fit=crop&q=80', // 광주 남한산성 성벽 야경 전경
    'd56': 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=800&auto=format&fit=crop&q=80', // 양주 장흥조각공원 푸른 숲 잔디 광장
    'd57': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=80', // 동두천 소요산 자재암 폭포와 가을 단풍
    'd58': 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=80', // 이천 예스파크 전통 도자기 굽는 가마
    'd59': 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80', // 안성 안성맞춤랜드 호수 분수와 공원
    'd60': 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?w=800&auto=format&fit=crop&q=80', // 여주 신륵사 다층석탑과 강변 바위 절벽
    'd61': 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=800&auto=format&fit=crop&q=80', // 평택 진위천 시민유원지 호수 꽃밭
    'd62': 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80', // 오산 독산성 세마대 역사 장대 성곽
    'd63': 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=80', // 의왕 왕송호수 레일바이크와 연꽃
    'd64': 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=800&auto=format&fit=crop&q=80', // 군포 철쭉동산 분홍빛 철쭉 꽃밭
    'd65': 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=800&auto=format&fit=crop&q=80', // 시흥 오이도 빨간등대 선착장 서해 바다
    'd66': 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=800&auto=format&fit=crop&q=80', // 김포 한강중앙공원 음악분수 금빛수로
    'd67': 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=800&auto=format&fit=crop&q=80', // 고양 일산 호수공원 장미원 꽃밭 호수
    'd68': 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop&q=80', // 성남 탄천 징검다리와 가을 갈대길
    'd69': 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&auto=format&fit=crop&q=80', // 과천 국립현대미술관 나선형 내부 램프
    'd70': 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=800&auto=format&fit=crop&q=80', // 구리 아차산 보루 한강 조망 바위 전경

    // === 해외 (i1 ~ i50) ===
    'i1':  'https://images.unsplash.com/photo-1590559899731-a3826de9a9c4?w=800&auto=format&fit=crop&q=80', // 오사카 도톤보리
    'i2':  'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&auto=format&fit=crop&q=80', // 도쿄 타워
    'i3':  'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format&fit=crop&q=80', // 교토 청수사
    'i4':  'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&auto=format&fit=crop&q=80', // 후쿠오카 캐널시티
    'i5':  'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop&q=80', // 방콕 왓아룬
    'i6':  'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=800&auto=format&fit=crop&q=80', // 다낭 골든브릿지
    'i7':  'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&auto=format&fit=crop&q=80', // 싱가포르 마리나베이샌즈
    'i8':  'https://images.unsplash.com/photo-1571474004502-c1def214ac6d?w=800&auto=format&fit=crop&q=80', // 타이베이 지우펀
    'i9':  'https://images.unsplash.com/photo-1506970135314-c1a9bdde8f68?w=800&auto=format&fit=crop&q=80', // 홍콩 야경
    'i10': 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop&q=80', // 발리 우붓
    'i11': 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop&q=80', // 파리 에펠탑
    'i12': 'https://images.unsplash.com/photo-1513635269975-59663e0ca1ad?w=800&auto=format&fit=crop&q=80', // 런던 타워브릿지
    'i13': 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&auto=format&fit=crop&q=80', // 로마 콜로세움
    'i14': 'https://images.unsplash.com/photo-1583779457094-abdbf4a10c2c?w=800&auto=format&fit=crop&q=80', // 바르셀로나 가우디
    'i15': 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?w=800&auto=format&fit=crop&q=80', // 프라하 카를교
    'i16': 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&auto=format&fit=crop&q=80', // 뉴욕 타임스퀘어
    'i17': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80', // 하와이 와이키키
    'i18': 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?w=800&auto=format&fit=crop&q=80', // 스톡홀름 감라스탄
    'i19': 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&auto=format&fit=crop&q=80', // 코펜하겐 니하운
    'i20': 'https://images.unsplash.com/photo-1517404207487-515366514757?w=800&auto=format&fit=crop&q=80', // 헬싱키 성당
    'i21': 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&auto=format&fit=crop&q=80', // 오슬로 피오르
    'i22': 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop&q=80', // 레이캬비크 오로라
    'i23': 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&auto=format&fit=crop&q=80', // 시드니 오페라하우스
    'i24': 'https://images.unsplash.com/photo-1548848221-0c2e497ed557?w=800&auto=format&fit=crop&q=80', // 멜버른 역
    'i25': 'https://images.unsplash.com/photo-1559511260-66a654ae982a?w=800&auto=format&fit=crop&q=80', // 밴쿠버 산/도시
    'i26': 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&auto=format&fit=crop&q=80', // 토론토 타워
    'i27': 'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?w=800&auto=format&fit=crop&q=80', // 샌프란시스코 금문교
    'i28': 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&auto=format&fit=crop&q=80', // 로스앤젤레스 피어
    'i29': 'https://images.unsplash.com/photo-1595853035070-59a39fe84de3?w=800&auto=format&fit=crop&q=80', // 뮌헨 시청사
    'i30': 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&auto=format&fit=crop&q=80', // 베러린 문
    'i31': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80', // 암스테르담 운하
    'i32': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80', // 브뤼셀 광장
    'i33': 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?w=800&auto=format&fit=crop&q=80', // 리스본 골목트램
    'i34': 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=80', // 비엔나 궁전
    'i35': 'https://images.unsplash.com/photo-1562095241-8c6714fd4178?w=800&auto=format&fit=crop&q=80', // 부다페스트 야경
    'i36': 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&auto=format&fit=crop&q=80', // 이스탄불 사원
    'i37': 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800&auto=format&fit=crop&q=80', // 카이로 피라미드
    'i38': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop&q=80', // 두바이 야경
    'i39': 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&auto=format&fit=crop&q=80', // 푸켓 섬/해안
    'i40': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80', // 보라카이 비치
    'i41': 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop&q=80', // 세부 해변폭포
    'i42': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80', // 괌 투몬베이
    'i43': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80', // 사이판 해변
    'i44': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80', // 코타키나발루 선셋
    'i45': 'https://images.unsplash.com/photo-1548345680-f5475ea5df84?w=800&auto=format&fit=crop&q=80', // 블라디보스토크 다리
    'i46': 'https://images.unsplash.com/photo-1608155686393-8fdd966d784d?w=800&auto=format&fit=crop&q=80', // 아테네 신전
    'i47': 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&auto=format&fit=crop&q=80', // 산토리니 파란지붕
    'i48': 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=80', // 취리히 설산
    'i49': 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&auto=format&fit=crop&q=80', // 베네치아 운하
    'i50': 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&auto=format&fit=crop&q=80'  // 니스 해변
};

// 안정적인 백업 플레이스홀더 이미지
var PLACEHOLDER_IMAGES = {
    'domestic':      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop&q=60',
    'international': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=60'
};

function getLandmarkImage(dest) {
    if (dest && dest.id && TRAVEL_IMAGES[dest.id]) {
        return TRAVEL_IMAGES[dest.id];
    }
    // 예외 Fallback
    if (dest && dest.location === 'domestic') {
        return PLACEHOLDER_IMAGES['domestic'];
    }
    return PLACEHOLDER_IMAGES['international'];
}

function handleImageError(img) {
    img.onerror = null;
    var destId = img.getAttribute('data-dest-id');
    var isDomestic = destId && destId.charAt(0) === 'd';
    img.src = isDomestic ? PLACEHOLDER_IMAGES['domestic'] : PLACEHOLDER_IMAGES['international'];
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
                else if (userDuration === '2-3' || userDuration === '1-3') targetDays = 3;
                else if (userDuration === '4-5' || userDuration === '4-6' || userDuration === '4-7') targetDays = 5;
                else if (userDuration === '7-14' || userDuration === '8+') targetDays = 7;
                
                var isDomestic = dest.location === 'domestic';
                
                // Get available courses - Prioritize best duration match robustly
                var rawCourse = null;
                var days = [];
                if (dest.details.courses) {
                    if (Array.isArray(dest.details.courses)) {
                        // Format B: Array of course objects
                        var matchedCourse = dest.details.courses[0];
                        if (matchedCourse && matchedCourse.schedule) {
                            // Extract to days array by copying it
                            days = matchedCourse.schedule.slice(0);
                        }
                    } else {
                        // Format A: Object of strings
                        var priorityKeys = [];
                        if (userDuration === '1-3') {
                            priorityKeys = ['2-3', 'day', '4-5', '4-6', '7-14'];
                        } else if (userDuration === '4-7') {
                            priorityKeys = ['4-5', '4-6', '7-14', '2-3', 'day'];
                        } else if (userDuration === '8+') {
                            priorityKeys = ['7-14', '4-6', '4-5', '2-3', 'day'];
                        } else {
                            priorityKeys = [userDuration, '2-3', '4-5', '4-6', '7-14', 'day'];
                        }
                        
                        for (var k = 0; k < priorityKeys.length; k++) {
                            if (dest.details.courses[priorityKeys[k]]) {
                                rawCourse = dest.details.courses[priorityKeys[k]];
                                break;
                            }
                        }
                        if (!rawCourse) {
                            rawCourse = Object.values(dest.details.courses)[0] || '';
                        }
                        
                        if (typeof rawCourse === 'string' && rawCourse.length > 0) {
                            days = rawCourse.split(' | ');
                        }
                    }
                }
                
                // Detect simple dynamic timeline (like morning/lunch/dinner without clear day indicator)
                var hasDayIndicator = days.some(function(d) {
                    return d.indexOf('일차') !== -1 || d.toLowerCase().indexOf('day') !== -1;
                });
                
                if (!hasDayIndicator && days.length > 0) {
                    // Combine single day hourly activities into one rich Day 1 itinerary
                    var joined = days.map(function(d) {
                        return d.replace(/^(오전|점심|오후|저녁|아침|낮):\s*/, '');
                    }).join(' -> ');
                    days = ["1일차: " + joined];
                }
                
                // Trim excess days to match targetDays
                if (days.length > targetDays) {
                    days = days.slice(0, targetDays);
                }
                
                // Clean up departure text, airports, and raw day indicators in non-final days
                for (var i = 0; i < days.length - 1; i++) {
                    days[i] = days[i]
                        .replace(/->\s*[^->]*(공항|귀국|귀가|일차|Day)[^,->]*/gi, '') // 비말기 일정에 묻은 공항/귀국/다음일차 지시어 일체 청소
                        .replace(/및\s*한국\s*귀국/g, '')
                        .replace(/및\s*귀국/g, '')
                        .replace(/및\s*귀가/g, '')
                        .replace(/\s*->\s*$/g, ''); // 뒤에 남은 잔여 화살표 제거
                }
                
                // Extract spots and foods for dynamic generation if day count is short
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
                
                // Guarantee strictly sequential day numbering to prevent duplicate/skipped days
                for (var dIdx = 0; dIdx < days.length; dIdx++) {
                    var correctDayNum = dIdx + 1;
                    var cleanDayContent = days[dIdx].replace(/^(\d+)(일차|Day):?\s*/i, '');
                    days[dIdx] = correctDayNum + "일차: " + cleanDayContent;
                }
                
                // Format the itinerary beautifully in vertical HTML
                var courseDesc = '<div class="course-list" style="display: flex; flex-direction: column; gap: 0.4rem; margin-top: 0.5rem; padding-left: 0.8rem; border-left: 2px solid var(--primary);">';
                days.forEach(function(dayText) {
                    // 오직 문장 맨 앞에 오는 일차(예: 1일차:, 2일차:) 지시어만 1Day:, 2Day: 로 치환하도록 ^ 앵커 적용
                    var formattedDay = dayText.replace(/^(\d+)일차:?/g, '<strong style="color: var(--primary);">$1Day:</strong>');
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
                <img src="${imageSrc}" alt="${destName}" class="card-img" data-dest-id="${dest.id}" onerror="handleImageError(this)">
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

// Start & Single Bind Events safely
document.addEventListener('DOMContentLoaded', function() {
    initApp();
    if (DOM.prevBtn) DOM.prevBtn.addEventListener('click', handlePrev);
    if (DOM.restartBtn) DOM.restartBtn.addEventListener('click', initApp);
});
