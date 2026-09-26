// Словарь перевода интерфейса на 3 языка (RU / MD / EN)
const dictionary = {
    ru: {
        login: 'Вход',
        nav: [
            'Требования 250°C',
            'Размеры L и S/M (Пакеты с окном)',
            'Моно-ПЭТ и Сравнение с Коробкой',
            'Слои, Сертификаты и Цена'
        ],
        heroBadge: 'ИНЖЕНЕРНОЕ РЕШЕНИЕ ДЛЯ СЕТИ PROFI • ГОРЯЧАЯ ВИТРИНА 200–250 °C',
        heroTitle: 'Замена пакета из 100% Virgin Plastic на термостойкую эко-упаковку с прозрачным окном',
        sectionPouch: 'Рекомендуемый физический концепт: Термо-пакеты с окном (Размеры L и S/M)',
        sectionAlt: 'Альтернатива из 85% rPET и сравнение «Пакет против Жёсткой Коробки»',
        compareTitle: 'Сравнение с текущим пакетом Profi (5-угольный график преимуществ)',
        axisLabels: ['Без Virgin пластика', 'Термо 250°C (6ч)', 'Жиробарьер/0 ворса', 'Окно & Рециклинг', 'Цена & Вес'],
        btnEco: '🟢 Эко-концепт',
        btnOld: '🔴 Текущий пакет (Virgin)',
        products: [
            {
                name: 'Термо-пакет ThermoKraft-250™ Window (Размер L — Целая курица-гриль)',
                info: 'Прямая замена текущего полимерного пакета на высокоплотный термостойкий пакет с широким дном (Gusset 110 мм) под целую курицу (до 1.8 кг) и панорамным окном из кристаллического 85% rBOPET. Выдерживает 250 °C и 6 часов на горячей витрине.'
            },
            {
                name: 'Термо-пакет ThermoKraft-250™ Compact (Размер S/M — Крылышки, бёдра, картофель)',
                info: 'Компактная модификация (220×160×65 мм, порции 300–600 г) для жареного картофеля, куриных крылышек и бёдер. Снабжена широким прозрачным окном с защитой от запотевания и микроперфорацией отвода лишнего пара для сохранения хрустящей корочки.'
            },
            {
                name: 'Прозрачный моно-пакет rBOPET-250™ (85% Recycled PET • Размеры S/M и L)',
                info: 'Решение для случаев, когда требуется полностью полимерный пакет с обзором 360°. Изготовлен из одного слоя двуосно-ориентированного кристаллического ПЭТ с 85% постпотребительского рециклата (PCR). Сокращает Virgin Plastic с 14.5 г до 1.80 г (-87.6%).'
            },
            {
                name: 'Жёсткий лоток Faerch CPET C 2200-1L + Прозрачное окно-плёнка (80% rPET)',
                info: 'Инженерная проверка замены пакета на жёсткую коробку (TDS Faerch #2200012097): жёсткий лоток увеличивает общий расход материала до 23.5 г (+62% тяжелее пакета) и не вмещает целую курицу без резкого удорожания (+18.5%). Оправдан только для порционных блюд S/M.'
            }
        ]
    },
    md: {
        login: 'Intră',
        nav: [
            'Cerințe 250°C',
            'Mărimi L și S/M (Pungi cu fereastră)',
            'Mono-PET vs Cutie Rigidă',
            'Straturi, Certificate și Preț'
        ],
        heroBadge: 'SOLUȚIE INGINEREASCĂ PENTRU REȚEAUA PROFI • VITRINĂ CALDĂ 200–250 °C',
        heroTitle: 'Înlocuirea pungii din 100% Virgin Plastic cu ambalaj termorezistent eco cu fereastră transparentă',
        sectionPouch: 'Concept fizic recomandat: Pungi termice cu fereastră (Mărimi L și S/M)',
        sectionAlt: 'Alternativă din 85% rPET și analiza „Pungă vs Cutie Rigidă”',
        compareTitle: 'Comparație cu punga actuală Profi (Grafic pentagonal al avantajelor)',
        axisLabels: ['Fără Virgin Plastic', 'Termo 250°C (6h)', 'Barieră grăsime', 'Fereastră & Recicl.', 'Preț & Greutate'],
        btnEco: '🟢 Concept Eco',
        btnOld: '🔴 Punga actuală (Virgin)',
        products: [
            {
                name: 'Pungă termică ThermoKraft-250™ Window (Mărimea L — Pui întreg la rotisor)',
                info: 'Înlocuire directă a pungii actuale din plastic virgin cu o pungă termorezistentă cu bază largă (110 mm) pentru un pui întreg (până la 1.8 kg) și fereastră panoramică din 85% rBOPET. Rezistă la 250 °C și 6 ore pe raftul cald.'
            },
            {
                name: 'Pungă termică ThermoKraft-250™ Compact (Mărimea S/M — Aripioare, pulpe, cartofi)',
                info: 'Format compact (220×160×65 mm, porții 300–600 g) pentru cartofi copți, aripioare și pulpe de pui. Dotată cu fereastră transparentă Anti-Fog și micro-ventilație pentru păstrarea crustei crocante.'
            },
            {
                name: 'Pungă transparentă mono-material rBOPET-250™ (85% Recycled PET • S/M și L)',
                info: 'Soluție pentru ambalaj complet polimeric cu vizibilitate 360°. Realizată dintr-un singur strat de PET cristalin orientat biaxial cu 85% conținut reciclat (PCR). Reduce Virgin Plastic de la 14.5 g la 1.80 g (-87.6%).'
            },
            {
                name: 'Casoletă rigidă Faerch CPET C 2200-1L + Film fereastră transparent (80% rPET)',
                info: 'Verificare inginerească „Pungă vs Cutie rigidă” (TDS Faerch #2200012097): cutia rigidă crește greutatea totală la 23.5 g (+62% mai grea decât punga) și nu încape un pui întreg (+18.5% cost). Potrivită doar pentru porții S/M.'
            }
        ]
    },
    en: {
        login: 'Log In',
        nav: [
            '250°C Requirements',
            'Sizes L & S/M (Window Pouches)',
            'Mono-PET & Box vs Bag Analysis',
            'Layers, Certificates & Cost'
        ],
        heroBadge: 'ENGINEERING SOLUTION FOR PROFI RETAIL • HOT COUNTER 200–250 °C',
        heroTitle: 'Replacing the 100% Virgin Plastic Bag with a 250°C Grease-Proof Window Pouch',
        sectionPouch: 'Recommended Physical Concept: Window Thermal Pouches (Sizes L & S/M)',
        sectionAlt: '85% rPET Mono-Bag Alternative & "Bag vs Rigid Box" Engineering Analysis',
        compareTitle: 'Comparison vs Current Profi Bag (5-Axis Pentagon Advantage Chart)',
        axisLabels: ['Zero Virgin Plastic', '250°C Heat (6h)', 'Grease/0 Fibers', 'Window & Recycle', 'Cost & Weight'],
        btnEco: '🟢 Eco Concept',
        btnOld: '🔴 Current Bag (Virgin)',
        products: [
            {
                name: 'ThermoKraft-250™ Window Thermal Pouch (Size L — Whole Rotisserie Chicken)',
                info: 'Direct like-for-like replacement for the current virgin plastic bag: high-density thermal kraft pouch with 110 mm bottom gusset for a whole chicken (up to 1.8 kg) and panoramic 85% rBOPET viewing window. Withstands 250 °C and 6h hot shelf holding.'
            },
            {
                name: 'ThermoKraft-250™ Compact Window Pouch (Size S/M — Wings, Thighs, Potato Wedges)',
                info: 'Compact format (220×160×65 mm, 300–600 g portions) for potato wedges, chicken wings, and thighs. Features a wide anti-fog viewing window and steam micro-venting to keep skin crispy for 6 hours.'
            },
            {
                name: 'rBOPET-250™ Transparent Mono-Oven Bag (85% Recycled PET • Sizes S/M & L)',
                info: '100% polymer mono-material bag with 360° visibility. Made from a single layer of heat-set crystalline biaxially oriented PET with 85% PCR content. Cuts Virgin Plastic from 14.5 g down to 1.80 g (-87.6%).'
            },
            {
                name: 'Faerch CPET C 2200-1L Rigid Tray + Clear rPET Top-Seal Window (80% rPET)',
                info: 'Engineering evaluation of replacing a bag with a rigid box (Faerch TDS #2200012097): a rigid tray increases total material weight to 23.5 g (+62% heavier than a pouch) and cannot fit a whole chicken (+18.5% cost). Viable only for S/M portions.'
            }
        ]
    }
};

// Достоверная инженерная база сравнения:
// Формула: Общий пластик (plasticMassG) - Вторсырьё (recycledG) = Первичный пластик (virginG)
const verifiedComparisons = [
    {
        // 1. Размер L — Целая курица-гриль (ThermoKraft-250 Window L против Текущего пакета Profi L)
        source: 'Размер L (Целая курица до 1.8 кг) • ASTM D4065 250°C • TAPPI T559 Kit 12 • CEPI',
        old: {
            name: 'Текущий термо-пакет Profi L (100% Virgin пластик PE/PA)',
            totalMassG: 14.5,
            plasticMassG: 14.5,
            recycledPct: 0,
            tempC: 200,
            holdHours: 4,
            greaseNoFiberScore: 72,
            windowRecycleScore: 25,
            costDeltaPct: 0,
            specNote: '200°C • Парниковый конденсат • Не перерабатывается (многослойный пластик)'
        },
        eco: {
            name: 'ThermoKraft-250™ Window (Размер L — Целая курица)',
            totalMassG: 15.5,
            plasticMassG: 2.0, // Только смотровое окно rBOPET (корпус 13.5 г — чистая целлюлоза FSC)
            recycledPct: 85,   // 85% rPET в окне -> всего 0.30 г Virgin Plastic!
            tempC: 250,
            holdHours: 6,
            greaseNoFiberScore: 98,
            windowRecycleScore: 96,
            costDeltaPct: 11.5,
            specNote: '250°C • 6ч витрины • Жиробарьер Kit 12 (0% ворса) • Окно Anti-Fog • Цена +11.5%'
        }
    },
    {
        // 2. Размер S/M — Крылышки, бёдра, картофель (ThermoKraft-250 Compact S/M против Текущего пакета S/M)
        source: 'Размер S/M (Порции 300–600 г: крылышки, бёдра, картофель) • Kit 12 • CEPI',
        old: {
            name: 'Текущий термо-пакет Profi S/M (100% Virgin пластик)',
            totalMassG: 9.0,
            plasticMassG: 9.0,
            recycledPct: 0,
            tempC: 200,
            holdHours: 4,
            greaseNoFiberScore: 70,
            windowRecycleScore: 25,
            costDeltaPct: 0,
            specNote: '9.0 г 100% первичного пластика • Размокание корочки за 45 мин'
        },
        eco: {
            name: 'ThermoKraft-250™ Compact (Размер S/M — Крылышки и картофель)',
            totalMassG: 9.2,
            plasticMassG: 1.2, // Смотровое окно 1.2 г (85% rPET) -> всего 0.18 г Virgin Plastic!
            recycledPct: 85,
            tempC: 250,
            holdHours: 6,
            greaseNoFiberScore: 98,
            windowRecycleScore: 97,
            costDeltaPct: 10.2,
            specNote: '250°C • 6ч полки • Хрустящая корочка • 0% волокон • Цена +10.2% (в допуске ≤15%)'
        }
    },
    {
        // 3. Моно-полимерный прозрачный пакет rBOPET-250 (85% PCR) против Текущего пакета
        source: 'Моно-полимер rBOPET (EFSA / EU 2022/1616) • RecyClass Class A • Обзор 360°',
        old: {
            name: 'Текущий многослойный пакет Profi (100% Virgin PE/PA)',
            totalMassG: 14.5,
            plasticMassG: 14.5,
            recycledPct: 0,
            tempC: 200,
            holdHours: 4,
            greaseNoFiberScore: 75,
            windowRecycleScore: 20,
            costDeltaPct: 0,
            specNote: '14.5 г Virgin пластика • Смесь полимеров исключает рециклинг'
        },
        eco: {
            name: 'Моно-пакет rBOPET-250™ (85% Recycled PET, 1 слой)',
            totalMassG: 12.0,
            plasticMassG: 12.0,
            recycledPct: 85, // 12.0 г - 10.2 г = 1.80 г Virgin Plastic (-87.6%)
            tempC: 250,
            holdHours: 6,
            greaseNoFiberScore: 100,
            windowRecycleScore: 95,
            costDeltaPct: 12.8,
            specNote: '250°C • 6ч полки • Полная прозрачность 360° • 1 моно-слой ПЭТ • Цена +12.8%'
        }
    },
    {
        // 4. Инженерное сравнение «Пакет против Коробки»: Жёсткий лоток Faerch CPET C 2200-1L
        source: 'Faerch TDS #2200012097 (CPET 21.38г + плёнка 2.12г = 23.5г) vs Базовый пакет 14.5г',
        old: {
            name: 'Текущий гибкий пакет Profi (14.5 г, 100% Virgin)',
            totalMassG: 14.5,
            plasticMassG: 14.5,
            recycledPct: 0,
            tempC: 200,
            holdHours: 4,
            greaseNoFiberScore: 72,
            windowRecycleScore: 25,
            costDeltaPct: 0,
            specNote: 'Лёгкий гибкий пакет (14.5 г), вмещает целую курицу, но 100% Virgin пластик'
        },
        eco: {
            name: 'Жёсткая коробка Faerch CPET 220°C + окно-плёнка (80% rPET)',
            totalMassG: 23.5,
            plasticMassG: 23.5,
            recycledPct: 80, // 23.5 г - 18.8 г = 4.70 г Virgin Plastic (-67.6%, но тяжелее пакета!)
            tempC: 220,
            holdHours: 6,
            greaseNoFiberScore: 96,
            windowRecycleScore: 86,
            costDeltaPct: 18.5,
            specNote: '220°C • Тяжелее пакета на +62% (23.5 г) • Не вмещает целую курицу • Цена +18.5%'
        }
    }
];

// Расчёт Virgin Plastic по формуле (Общий пластик - Recycled = Virgin Plastic) и 5 лучей пятиугольника
function calculateMetrics(data) {
    const oldRecycledG = +(data.old.plasticMassG * (data.old.recycledPct / 100)).toFixed(2);
    const oldVirginG = +(data.old.plasticMassG - oldRecycledG).toFixed(2);

    const ecoRecycledG = +(data.eco.plasticMassG * (data.eco.recycledPct / 100)).toFixed(2);
    const ecoVirginG = +(data.eco.plasticMassG - ecoRecycledG).toFixed(2);

    // 1-й луч: Снижение Virgin Plastic (%)
    const virginReductionPct = oldVirginG > 0
        ? Math.max(0, Math.round(((oldVirginG - ecoVirginG) / oldVirginG) * 100))
        : 100;

    // 2-й луч: Термостойкость 250°C и 6ч удержания на полке (%)
    const oldThermalScore = Math.min(100, Math.round((data.old.tempC / 250) * 60 + (data.old.holdHours / 6) * 25));
    const ecoThermalScore = Math.min(100, Math.round((data.eco.tempC / 250) * 65 + (data.eco.holdHours / 6) * 35));

    // 5-й луч: Экономическая и весовая эффективность (допуск цены до +15% и вес пакета vs коробки)
    const weightRatioScore = data.eco.totalMassG <= data.old.totalMassG + 1.5 ? 95 : Math.max(45, 95 - Math.round((data.eco.totalMassG - data.old.totalMassG) * 4));
    const costFeasibilityScore = data.eco.costDeltaPct <= 15 ? 92 : Math.max(45, 92 - Math.round((data.eco.costDeltaPct - 15) * 8));
    const ecoCostWeightScore = Math.round((weightRatioScore + costFeasibilityScore) / 2);

    const oldPolygonScores = [
        10, // Базовый пакет = 100% Virgin Plastic (минимальный балл по экологии пластика)
        oldThermalScore,
        data.old.greaseNoFiberScore,
        data.old.windowRecycleScore,
        78  // Базовый пакет лёгкий и дешёвый, но неэкологичный
    ];

    const ecoPolygonScores = [
        virginReductionPct,
        ecoThermalScore,
        data.eco.greaseNoFiberScore,
        data.eco.windowRecycleScore,
        ecoCostWeightScore
    ];

    return {
        oldRecycledG,
        oldVirginG,
        ecoRecycledG,
        ecoVirginG,
        virginReductionPct,
        ecoThermalScore,
        ecoCostWeightScore,
        oldPolygonScores,
        ecoPolygonScores
    };
}

// Тригонометрический расчёт 5 координат (X, Y) пятиугольника
function getPentagonPoints(scores) {
    const cx = 150;
    const cy = 112;
    const maxRadius = 64;
    const angles = [-90, -18, 54, 126, 198];

    return scores.map((percent, i) => {
        const rad = (angles[i] * Math.PI) / 180;
        const r = (percent / 100) * maxRadius;
        const x = (cx + r * Math.cos(rad)).toFixed(1);
        const y = (cy + r * Math.sin(rad)).toFixed(1);
        return `${x},${y}`;
    }).join(' ');
}

// Отрисовка 5-угольного графика и наведение на 2 цветные кнопки
function setupCardRadar(card, data) {
    const polyOld = card.querySelector('.poly-old');
    const polyEco = card.querySelector('.poly-eco');
    const btnEco = card.querySelector('.btn-eco');
    const btnOld = card.querySelector('.btn-old');
    const titleEl = card.querySelector('.verified-title');
    const textEl = card.querySelector('.verified-text');

    const m = calculateMetrics(data);

    polyOld.setAttribute('points', getPentagonPoints(m.oldPolygonScores));
    polyEco.setAttribute('points', getPentagonPoints(m.ecoPolygonScores));

    function showBothMap() {
        polyEco.style.opacity = '1';
        polyOld.style.opacity = '1';
        titleEl.textContent = `📊 ${data.source}`;
        textEl.innerHTML =
            `<b>Формула Virgin Plastic:</b> ${data.eco.plasticMassG} г пластика − ${m.ecoRecycledG} г вторсырья (${data.eco.recycledPct}%) = <b>${m.ecoVirginG} г Virgin</b> (против <b>${m.oldVirginG} г</b> у базы → <b>-${m.virginReductionPct}%</b>)<br>` +
            `<b>Общая масса:</b> ${data.old.totalMassG} г → ${data.eco.totalMassG} г • <b>Цена:</b> +${data.eco.costDeltaPct}% • <i>Наведите на кнопки выше для деталей</i>`;
    }

    btnEco.addEventListener('mouseenter', () => {
        polyEco.style.opacity = '1';
        polyOld.style.opacity = '0.08';
        titleEl.textContent = `🟢 ${data.eco.name}`;
        textEl.innerHTML =
            `<b>Расчёт пластика:</b> Общий пластик ${data.eco.plasticMassG} г − Вторсырьё ${m.ecoRecycledG} г = <b>${m.ecoVirginG} г Virgin Plastic (-${m.virginReductionPct}%)</b><br>` +
            `<b>Характеристики:</b> ${data.eco.specNote}`;
    });

    btnOld.addEventListener('mouseenter', () => {
        polyEco.style.opacity = '0.08';
        polyOld.style.opacity = '1';
        titleEl.textContent = `🔴 ${data.old.name}`;
        textEl.innerHTML =
            `<b>Расчёт пластика:</b> Общий пластик ${data.old.plasticMassG} г − Вторсырьё 0 г = <b>${m.oldVirginG} г Virgin Plastic (100% первичный)</b><br>` +
            `<b>Проблема базы:</b> ${data.old.specNote}`;
    });

    btnEco.addEventListener('mouseleave', showBothMap);
    btnOld.addEventListener('mouseleave', showBothMap);

    showBothMap();
}

// Инициализация всех карточек на странице
const allCards = document.querySelectorAll('.products-board');
allCards.forEach((card, index) => {
    if (verifiedComparisons[index]) {
        setupCardRadar(card, verifiedComparisons[index]);
    }
});

// Переключение языков (RU / MD / EN)
const langSelect = document.querySelector('.lang-select');
const loginBtn = document.querySelector('.log-in');
const newLinks = document.querySelectorAll('.desc-nav-bar');

langSelect.addEventListener('change', () => {
    const t = dictionary[langSelect.value];

    newLinks.forEach((link, index) => {
        if (t.nav[index]) link.textContent = t.nav[index];
    });

    document.getElementById('heroBadge').textContent = t.heroBadge;
    document.getElementById('heroTitle').textContent = t.heroTitle;
    document.getElementById('pouch-solutions').textContent = t.sectionPouch;
    document.getElementById('alt-candidates').textContent = t.sectionAlt;
    loginBtn.textContent = t.login;

    const currentCards = document.querySelectorAll('.products-board');
    currentCards.forEach((card, index) => {
        if (t.products[index]) {
            card.querySelector('.name-product').textContent = t.products[index].name;
            card.querySelector('.info-product').textContent = t.products[index].info;
        }
        card.querySelector('.table-desc').textContent = t.compareTitle;
        const labels = card.querySelectorAll('.axis-label');
        labels.forEach((lbl, i) => {
            lbl.textContent = t.axisLabels[i];
        });
        card.querySelector('.btn-eco').textContent = t.btnEco;
        card.querySelector('.btn-old').textContent = t.btnOld;
    });
});

// Модальное окно «Вход» (Инженерный конструктор для расчёта и добавления нового концепта)
const adminModal = document.getElementById('adminModal');
const openAdminBtn = document.getElementById('openAdminBtn');
const closeAdminBtn = document.getElementById('closeAdminBtn');
const addPackForm = document.getElementById('addPackForm');
const cardsContainer = document.getElementById('cardsContainer');

openAdminBtn.addEventListener('click', (e) => {
    e.preventDefault();
    adminModal.classList.add('open');
});

closeAdminBtn.addEventListener('click', () => {
    adminModal.classList.remove('open');
});

addPackForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('inpName').value;
    const img = document.getElementById('inpImg').value || 'img/pouch-chicken-l.jpg';
    const info = document.getElementById('inpInfo').value;
    const totalMass = parseFloat(document.getElementById('inpTotalMass').value);
    const plasticMass = parseFloat(document.getElementById('inpPlasticMass').value);
    const recycledPct = parseFloat(document.getElementById('inpRecycledPct').value);
    const costDelta = parseFloat(document.getElementById('inpCostDelta').value);
    const tempC = parseFloat(document.getElementById('inpTemp').value);
    const greaseScore = parseFloat(document.getElementById('inpGrease').value);
    const recycleScore = parseFloat(document.getElementById('inpRecycle').value);

    const newComparisonData = {
        source: `Инженерный расчёт TDS • Температура ${tempC}°C • Цена +${costDelta}%`,
        old: {
            name: 'Текущий термо-пакет Profi (100% Virgin пластик)',
            totalMassG: 14.5,
            plasticMassG: 14.5,
            recycledPct: 0,
            tempC: 200,
            holdHours: 4,
            greaseNoFiberScore: 72,
            windowRecycleScore: 25,
            costDeltaPct: 0,
            specNote: '14.5 г 100% первичного пластика • Не перерабатывается'
        },
        eco: {
            name: name,
            totalMassG: totalMass,
            plasticMassG: plasticMass,
            recycledPct: recycledPct,
            tempC: tempC,
            holdHours: 6,
            greaseNoFiberScore: greaseScore,
            windowRecycleScore: recycleScore,
            costDeltaPct: costDelta,
            specNote: `${tempC}°C • 6ч витрины • Жиробарьер ${greaseScore}% • Окно и рециклинг ${recycleScore}% • Цена +${costDelta}%`
        }
    };

    const newCard = document.createElement('div');
    newCard.className = 'products-board';
    newCard.innerHTML = `
        <div class="picture-product">
          <span class="size-badge badge-recommended">🔬 НОВЫЙ РАСЧЁТНЫЙ ОБРАЗЕЦ • ДОБАВЛЕНО В СИСТЕМУ</span>
          <img src="${img}" alt="${name}" class="img-product">
        </div>
        <div class="desc-product">
          <h2 class="name-product">${name}</h2>
          <p class="info-product">${info}</p>
          <div class="layers-certs-row">
            <div class="layers-box">
              <span class="box-mini-title">🔬 Паспортные параметры материала:</span>
              <ul class="layers-list">
                <li><b>Общая масса упаковки:</b> ${totalMass} г (из них пластик: ${plasticMass} г)</li>
                <li><b>Доля вторсырья (Recycled):</b> ${recycledPct}% (расчёт Virgin Plastic по формуле ниже)</li>
              </ul>
            </div>
            <div class="certs-box">
              <span class="box-mini-title">📜 Валидация требований 250°C:</span>
              <div class="cert-badges">
                <span class="cert-pill">🌡️ Tmax: ${tempC} °C (6ч полки)</span>
                <span class="cert-pill">🛡️ Жиробарьер/0 ворса: ${greaseScore}%</span>
                <span class="cert-pill">👁️ Окно & Рециклинг: ${recycleScore}%</span>
                <span class="cert-pill price-pill">💶 Цена: +${costDelta}%</span>
              </div>
            </div>
          </div>
          <div class="option-product">
            <h2 class="table-desc">Сравнение с текущим пакетом Profi (5-угольный график преимуществ)</h2>
          </div>
          <div class="radar-compare-box">
            <div class="radar-info-side">
              <div class="compare-btns">
                <button type="button" class="compare-btn btn-eco">🟢 Эко-концепт</button>
                <button type="button" class="compare-btn btn-old">🔴 Текущий пакет (Virgin)</button>
              </div>
              <div class="verified-data-box">
                <p class="verified-title">Паспорт сравнения (TDS)</p>
                <p class="verified-text">Наведите на кнопку, чтобы сравнить показатели</p>
              </div>
            </div>
            <div class="radar-chart-side">
              <svg class="radar-svg" viewBox="0 0 300 210">
                <polygon class="radar-grid" points="150,48 210.9,92.2 187.6,163.8 112.4,163.8 89.1,92.2"></polygon>
                <polygon class="radar-grid" points="150,80 180.4,102.1 168.8,137.9 131.2,137.9 119.6,102.1"></polygon>
                <line class="radar-axis" x1="150" y1="112" x2="150" y2="48"></line>
                <line class="radar-axis" x1="150" y1="112" x2="210.9" y2="92.2"></line>
                <line class="radar-axis" x1="150" y1="112" x2="187.6" y2="163.8"></line>
                <line class="radar-axis" x1="150" y1="112" x2="112.4" y2="163.8"></line>
                <line class="radar-axis" x1="150" y1="112" x2="89.1" y2="92.2"></line>
                <polygon class="poly-old" points="150,112 150,112 150,112 150,112 150,112"></polygon>
                <polygon class="poly-eco" points="150,112 150,112 150,112 150,112 150,112"></polygon>
                <text class="axis-label" x="150" y="34" text-anchor="middle">Без Virgin пластика</text>
                <text class="axis-label" x="218" y="95" text-anchor="start">Термо 250°C (6ч)</text>
                <text class="axis-label" x="194" y="182" text-anchor="start">Жиробарьер/0 ворса</text>
                <text class="axis-label" x="106" y="182" text-anchor="end">Окно & Рециклинг</text>
                <text class="axis-label" x="82" y="95" text-anchor="end">Цена & Вес</text>
              </svg>
            </div>
          </div>
        </div>
    `;

    cardsContainer.appendChild(newCard);
    setupCardRadar(newCard, newComparisonData);
    adminModal.classList.remove('open');
    addPackForm.reset();
    newCard.scrollIntoView({ behavior: 'smooth' });
});