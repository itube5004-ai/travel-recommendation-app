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

function initApp() {
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
        const tempStr = getSeasonTempStr(dest.quickInfo.temp, userSeason);
        
        let detailsHtml = '';
        if (dest.details) {
            const userDuration = userAnswers.duration || '2-3';
            
            const weatherDesc = dest.details.weatherDesc[userSeason] || dest.details.weatherDesc['spring'];
            const courseDesc = dest.details.courses[userDuration] || Object.values(dest.details.courses)[0];
            
            const durationQuestion = activeQuestions.find(q => q.id === 'duration');
            const durationLabel = durationQuestion ? (durationQuestion.options.find(o => o.value === userDuration)?.label || userDuration) : userDuration;

            detailsHtml = `
                <div class="domestic-details" style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px dashed rgba(0,0,0,0.1);">
                    <h4 style="margin-bottom: 0.8rem; color: var(--primary);">✨ 여행 상세 정보</h4>
                    <div style="display: grid; gap: 0.8rem; font-size: 0.95rem;">
                        <p><strong>📸 인기 관광지:</strong> ${dest.details.spots}</p>
                        <p><strong>🍜 추천 맛집:</strong> ${dest.details.food}</p>
                        <p><strong>🏨 추천 숙소:</strong> ${dest.details.hotel}</p>
                        <p><strong>🌤️ ${displayMonth} 날씨:</strong> ${weatherDesc}</p>
                        ${dest.location === 'international' && dest.details.shopping ? `<p><strong>🎁 추천 쇼핑/선물:</strong> ${dest.details.shopping}</p>` : ''}
                        <p><strong>🗺️ 추천 코스 (${durationLabel}):</strong> ${courseDesc}</p>
                    </div>
                </div>
            `;
        }

        return `
        <div class="destination-card animate-fade-in" style="animation-delay: ${index * 0.1}s">
            <img src="${dest.image}" alt="${dest.name}" class="card-img">
            <div class="card-content">
                <h3 class="card-title">${dest.name}</h3>
                <p class="card-desc">${dest.description}</p>
                
                <div class="info-badges">
                    <div class="badge">
                        <div class="badge-title">📅 추천월</div>
                        <div class="badge-value">${dest.quickInfo.months}</div>
                    </div>
                    <div class="badge">
                        <div class="badge-title">${dest.location === 'domestic' ? '🚗 추천 교통' : '✈️ 항공'}</div>
                        <div class="badge-value">${dest.quickInfo.flight}</div>
                    </div>
                    ${dest.location === 'international' ? `
                    <div class="badge">
                        <div class="badge-title">🛂 비자</div>
                        <div class="badge-value">${dest.quickInfo.visa}</div>
                    </div>
                    ` : ''}
                    <div class="badge">
                        <div class="badge-title">🌡️ 평균온도</div>
                        <div class="badge-value">${tempStr}</div>
                    </div>
                    ${dest.location === 'international' ? `
                    <div class="badge">
                        <div class="badge-title">🔌 전압</div>
                        <div class="badge-value">${dest.quickInfo.voltage}</div>
                    </div>
                    ` : ''}
                </div>

                <div class="card-tags">
                    ${dest.style.map(s => `<span class="tag">#${styleTranslations[s] || s}</span>`).join('')}
                </div>
                
                ${detailsHtml}
            </div>
        </div>
    `}).join('');

    DOM.resultsGrid.innerHTML = html;
}

// Start
document.addEventListener('DOMContentLoaded', initApp);
