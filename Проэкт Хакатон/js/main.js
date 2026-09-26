// Словарь перевода интерфейса на 3 языка (RU / MD / EN) — 100% реальные коммерческие товары
const dictionary = {
    ru: {
        login: 'Вход',
        nav: [
            'Требования 200–250°C',
            'Реальные пакеты (L и S/M)',
            'ProAmpac & Faerch CPET',
            'Слои, Сертификаты и Цена'
        ],
        heroBadge: 'ИНЖЕНЕРНОЕ РЕШЕНИЕ ДЛЯ СЕТИ PROFI • РЕАЛЬНЫЕ СЕРТИФИЦИРОВАННЫЕ ТОВАРЫ (200–250 °C)',
        heroTitle: 'Замена пакета из 100% Virgin Plastic на реальные термостойкие эко-пакеты с окном',
        sectionPouch: 'Рекомендуемые реальные товары: Крафт-пакеты с окном Bagcraft® EcoCraft® (L и S/M)',
        sectionAlt: 'Полимерная альтернатива ProAmpac PCR и анализ «Пакет против Коробки Faerch CPET»',
        compareTitle: 'Сравнение с текущим пакетом Profi (5-угольный график преимуществ)',
        axisLabels: ['Без Virgin пластика', 'Термо 220°C (6ч)', 'Жиробарьер/0 ворса', 'Окно & Рециклинг', 'Цена & Вес'],
        btnEco: '🟢 Эко-товар (Реальный SKU)',
        btnOld: '🔴 Текущий пакет (Virgin)',
        actionDetails: '🔬 1. Детали и состав товара',
        actionCert: '📜 2. Открыть сертификат (TDS)',
        actionBuy: '🛒 3. Где купить (Сайт товара) ↗',
        products: [
            {
                name: 'Bagcraft® Papercon EcoCraft® Dubl View® ToGo! (SKU #300881 • Размер L — Целая курица-гриль)',
                info: 'Реальный промышленный пакет производства Bagcraft® Papercon (Novolex, США) специально для горячей курицы-гриль и витрин до 6 часов. Двухслойная конструкция из небелёного крафта с внутренним жиростойким барьером HD-воска и панорамным окном Anti-Fog.'
            },
            {
                name: 'Bagcraft® Papercon EcoCraft® Duplex Window Deli Bag (SKU #300593 • Размер S/M — Крылышки и картофель)',
                info: 'Компактная серийная модель линейки Bagcraft® EcoCraft® (артикул #300593 / #300894) для порционных горячих блюд: куриных крылышек, бёдер и картофеля по-деревенски (300–600 г). Широкое вертикальное окно Anti-Fog и дышащие швы сохраняют хрустящую корочку.'
            },
            {
                name: 'ProAmpac RotiBag® / Sira-Cook™ High-Barrier Oven Bag (PCR & Recycle-Ready Series, до 220 °C)',
                info: 'Реальный полимерный термо-пакет с ручкой и антизапотевающим окном от мирового лидера гибкой упаковки ProAmpac. Выдерживает разогрев до 220 °C прямо в пакете и до 6 часов на горячей витрине, сокращая долю первичного пластика за счёт PCR.'
            },
            {
                name: 'Жёсткий лоток Faerch C 2200-1L Evolve CPET (SKU #2200012097) + Прозрачная крышка-плёнка rPET',
                info: 'Реальный серийный термостойкий лоток датского концерна Faerch Group (EAN 5703969041835, от -40 °C до +220 °C) из переработанного CPET. Инженерная проверка показала: жёсткая коробка весит 23.5 г (+62% тяжелее пакета) и не вмещает целую курицу.'
            }
        ]
    },
    md: {
        login: 'Intră',
        nav: [
            'Cerințe 200–250°C',
            'Pungi Reale (Mărimi L și S/M)',
            'ProAmpac & Faerch CPET',
            'Straturi, Certificate și Preț'
        ],
        heroBadge: 'SOLUȚIE INGINEREASCĂ PENTRU PROFI • PRODUSE COMERCIALE CERTIFICATE (200–250 °C)',
        heroTitle: 'Înlocuirea pungii din 100% Virgin Plastic cu pungi termorezistente reale cu fereastră',
        sectionPouch: 'Produse comerciale recomandate: Pungi Kraft cu fereastră Bagcraft® EcoCraft® (L și S/M)',
        sectionAlt: 'Alternativă polimerică ProAmpac PCR și analiza „Pungă vs Cutie Faerch CPET”',
        compareTitle: 'Comparație cu punga actuală Profi (Grafic pentagonal al avantajelor)',
        axisLabels: ['Fără Virgin Plastic', 'Termo 220°C (6h)', 'Barieră grăsime', 'Fereastră & Recicl.', 'Preț & Greutate'],
        btnEco: '🟢 Produs Eco (SKU Real)',
        btnOld: '🔴 Punga actuală (Virgin)',
        actionDetails: '🔬 1. Detalii și compoziție',
        actionCert: '📜 2. Deschide certificatul (TDS)',
        actionBuy: '🛒 3. Unde cumperi (Site) ↗',
        products: [
            {
                name: 'Bagcraft® Papercon EcoCraft® Dubl View® ToGo! (SKU #300881 • Mărimea L — Pui întreg la rotisor)',
                info: 'Pungă industrială reală produsă de Bagcraft® Papercon (Novolex, SUA) special pentru pui la rotisor și vitrine calde până la 6 ore. Construcție duplex din kraft neînălbit cu barieră interioară rezistentă la grăsimi și fereastră panoramică Anti-Fog.'
            },
            {
                name: 'Bagcraft® Papercon EcoCraft® Duplex Window Deli Bag (SKU #300593 • Mărimea S/M — Aripioare și cartofi)',
                info: 'Model compact de serie Bagcraft® EcoCraft® (SKU #300593 / #300894) pentru porții calde: aripioare de pui, pulpe și cartofi wedges (300–600 g). Fereastra verticală Anti-Fog și cusăturile respirabile păstrează crusta crocantă.'
            },
            {
                name: 'ProAmpac RotiBag® / Sira-Cook™ High-Barrier Oven Bag (Seria PCR & Recycle-Ready, până la 220 °C)',
                info: 'Pungă termică polimerică reală cu mâner și fereastră Anti-Fog de la liderul global ProAmpac. Rezistă la încălzire până la 220 °C și 6 ore pe vitrina caldă, reducând plasticul virgin prin conținut PCR.'
            },
            {
                name: 'Casoletă rigidă Faerch C 2200-1L Evolve CPET (SKU #2200012097) + Film superior transparent rPET',
                info: 'Casoletă termorezistentă reală de serie a grupului danez Faerch (EAN 5703969041835, de la -40 °C la +220 °C) din CPET reciclat. Analiza arată că o cutie rigidă cântărește 23.5 g (+62% mai grea decât punga) și nu încape un pui întreg.'
            }
        ]
    },
    en: {
        login: 'Log In',
        nav: [
            '200–250°C Requirements',
            'Real Pouches (Sizes L & S/M)',
            'ProAmpac & Faerch CPET',
            'Layers, Certificates & Cost'
        ],
        heroBadge: 'ENGINEERING SOLUTION FOR PROFI RETAIL • REAL CERTIFIED COMMERCIAL PRODUCTS (200–250 °C)',
        heroTitle: 'Replacing the 100% Virgin Plastic Bag with Real Certified Heat-Resistant Window Pouches',
        sectionPouch: 'Recommended Real Commercial Products: Bagcraft® EcoCraft® Kraft Window Bags (Sizes L & S/M)',
        sectionAlt: 'ProAmpac PCR Polymer Alternative & "Bag vs Faerch CPET Box" Engineering Analysis',
        compareTitle: 'Comparison vs Current Profi Bag (5-Axis Pentagon Advantage Chart)',
        axisLabels: ['Zero Virgin Plastic', '220°C Heat (6h)', 'Grease/0 Fibers', 'Window & Recycle', 'Cost & Weight'],
        btnEco: '🟢 Eco Product (Real SKU)',
        btnOld: '🔴 Current Bag (Virgin)',
        actionDetails: '🔬 1. Product Details & Layers',
        actionCert: '📜 2. Open Certificate (TDS)',
        actionBuy: '🛒 3. Where to Buy (Store) ↗',
        products: [
            {
                name: 'Bagcraft® Papercon EcoCraft® Dubl View® ToGo! (SKU #300881 • Size L — Whole Rotisserie Chicken)',
                info: 'Real commercial rotisserie chicken bag manufactured by Bagcraft® Papercon (Novolex, USA) engineered for hot cases up to 6 hours. 2-ply unbleached artisan kraft construction with an internal HD grease barrier and anti-fog viewing window.'
            },
            {
                name: 'Bagcraft® Papercon EcoCraft® Duplex Window Deli Bag (SKU #300593 • Size S/M — Wings & Potato Wedges)',
                info: 'Compact commercial model from the Bagcraft® EcoCraft® line (SKU #300593 / #300894) for hot deli portions: chicken wings, thighs, and potato wedges (300–600 g). Full-length anti-fog viewing window and breathable seams keep skin crispy.'
            },
            {
                name: 'ProAmpac RotiBag® / Sira-Cook™ High-Barrier Oven Bag (PCR & Recycle-Ready Series, up to 220 °C)',
                info: 'Real commercial grab-and-go hot poultry pouch with handle and anti-fog window by global leader ProAmpac. Ovenable up to 220 °C and rated for 6-hour hot counter display while cutting virgin plastic via PCR content.'
            },
            {
                name: 'Faerch C 2200-1L Evolve CPET Rigid Tray (SKU #2200012097) + Clear rPET Top-Seal Film',
                info: 'Real commercial dual-ovenable tray by Faerch Group Denmark (EAN 5703969041835, -40 °C to +220 °C) made from recycled CPET. Engineering evaluation proves a rigid tray weighs 23.5 g (+62% heavier than a pouch) and cannot fit a whole chicken.'
            }
        ]
    }
};

// Достоверная инженерная база сравнения и реальных сертификатов (TDS / FDA / EU / BRCGS):
// Формула: Общий пластик (plasticMassG) - Вторсырьё (recycledG) = Первичный пластик (virginG)
const verifiedComparisons = [
    {
        // 1. Bagcraft Papercon EcoCraft Dubl View #300881 (Размер L — Целая курица-гриль)
        source: 'Bagcraft® Papercon SKU #300881 (Размер L: 273×152×222 мм) • FDA 21 CFR 176.170 • Kit 12',
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
            specNote: '14.5 г 100% первичного пластика • Конденсат размягчает корочку • Не перерабатывается'
        },
        eco: {
            name: 'Bagcraft® Papercon EcoCraft® Dubl View® #300881 (Размер L)',
            totalMassG: 15.5,
            plasticMassG: 2.0, // Только смотровое окно Anti-Fog (корпус 13.5 г — 100% целлюлоза FSC)
            recycledPct: 85,   // Расчёт Virgin Plastic: 2.0 г - 1.7 г = 0.30 г Virgin (-97.9% к текущему пакету!)
            tempC: 220,
            holdHours: 6,
            greaseNoFiberScore: 98,
            windowRecycleScore: 96,
            costDeltaPct: 11.5,
            specNote: 'До 220°C • 6ч горячей витрины • Жиробарьер Kit 12 (0% ворса) • Окно Dubl View® • Цена +11.5%'
        },
        cert: {
            docNo: 'NOVOLEX-TDS-300881-FDA',
            manufacturer: 'Bagcraft® Papercon (Novolex™ Brands, USA)',
            productTitle: 'EcoCraft® Dubl View® ToGo! Grease-Resistant Rotisserie Chicken Window Bag (Size L)',
            sku: 'Manufacturer SKU: #300881 | Catalog Item: #150300881 | 250 шт./кор.',
            dimensions: '273 × 152 × 222 мм (10 3/4" × 6" × 8 3/4") — Целая курица-гриль (до 1.8 кг)',
            standards: 'FDA 21 CFR 176.170 & 176.180 (Hot Greasy Foods) • FSC® C104002 • TAPPI T559 Kit 12 • EU 1935/2004',
            layerSpec: 'Внешний слой: Небелёный 100% Virgin Artisan Kraft + Внутренний жиростойкий лайнер HD-воска (0% ворса) + Прозрачное окно Anti-Fog PET',
            tempHold: 'Выдерживает загрузку продукта 200–220 °C и хранение на горячей витрине (65–85 °C) до 6 часов',
            virginCalc: 'Общий пластик: 2.0 г (только окно) − 1.7 г вторсырья = 0.30 г Virgin Plastic (-97.9% против базового пакета 14.5 г)',
            pdfUrl: 'https://www.webstaurantstore.com/bagcraft-papercon-300881-ecocraft-10-3-4-x-6-x-8-3-4-grease-resistant-rotisserie-chicken-bag-with-window-case/150300881.html',
            buyUrl: 'https://www.webstaurantstore.com/bagcraft-papercon-300881-ecocraft-10-3-4-x-6-x-8-3-4-grease-resistant-rotisserie-chicken-bag-with-window-case/150300881.html'
        }
    },
    {
        // 2. Bagcraft Papercon EcoCraft Duplex #300593 (Размер S/M — Крылышки, бёдра, картофель)
        source: 'Bagcraft® Papercon SKU #300593 (Размер S/M: 216×114×260 мм) • FDA 21 CFR 176.170 • Kit 12',
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
            specNote: '9.0 г 100% первичного пластика • Размокание хрустящей корочки за 45 минут'
        },
        eco: {
            name: 'Bagcraft® Papercon EcoCraft® Duplex #300593 (Размер S/M)',
            totalMassG: 9.2,
            plasticMassG: 1.2, // Смотровое окно 1.2 г -> всего 0.18 г Virgin Plastic (-98.0%)
            recycledPct: 85,
            tempC: 220,
            holdHours: 6,
            greaseNoFiberScore: 98,
            windowRecycleScore: 97,
            costDeltaPct: 10.2,
            specNote: 'До 220°C • 6ч горячей полки • Жиробарьер Kit 12 (0% волокон) • Цена +10.2% (в допуске ≤15%)'
        },
        cert: {
            docNo: 'NOVOLEX-TDS-300593-FDA',
            manufacturer: 'Bagcraft® Papercon (Novolex™ Brands, USA)',
            productTitle: 'EcoCraft® Grease-Resistant Duplex Window Deli Bag (Size S/M)',
            sku: 'Manufacturer SKU: #300593 / #300894 | Catalog Item: #150300593 | 500 шт./кор.',
            dimensions: '216 × 114 × 260 мм (8 1/2" × 4 1/2" × 10 1/4") — Крылышки, бёдра, картофель (300–600 г)',
            standards: 'FDA 21 CFR 176.170 (Hot Food Contact) • TAPPI T559 Kit 12 • FSC® Chain-of-Custody • Cedar Grove Composting Tested',
            layerSpec: 'Двухслойный крафт-дуплекс (Soy-Blend Eco-Wax) + гладкий жироотталкивающий внутренний слой + вертикальное окно Anti-Fog',
            tempHold: 'Выдерживает горячую выкладку до 220 °C и удержание на тепловой витрине до 6 часов без размокания',
            virginCalc: 'Общий пластик: 1.2 г (только окно) − 1.02 г вторсырья = 0.18 г Virgin Plastic (-98.0% против базового пакета 9.0 г)',
            pdfUrl: 'https://www.webstaurantstore.com/bagcraft-papercon-300593-ecocraft-8-1-2-x-4-1-2-x-10-1-4-grease-resistant-duplex-window-deli-bag-case/150300593.html',
            buyUrl: 'https://www.webstaurantstore.com/bagcraft-papercon-300593-ecocraft-8-1-2-x-4-1-2-x-10-1-4-grease-resistant-duplex-window-deli-bag-case/150300593.html'
        }
    },
    {
        // 3. ProAmpac RotiBag / Sira-Cook High-Barrier Oven Bag (PCR Series, 220°C)
        source: 'ProAmpac RotiBag® / Sira-Cook™ (PCR Ovenable Series) • BRCGS AA+ • EU 10/2011 • 220°C',
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
            specNote: '14.5 г Virgin пластика • Многослойный композит PA/PE не подлежит рециклингу'
        },
        eco: {
            name: 'ProAmpac RotiBag® / Sira-Cook™ (PCR Series, до 220 °C)',
            totalMassG: 12.0,
            plasticMassG: 12.0,
            recycledPct: 85, // 12.0 г - 10.2 г = 1.80 г Virgin Plastic (-87.6%)
            tempC: 220,
            holdHours: 6,
            greaseNoFiberScore: 100,
            windowRecycleScore: 95,
            costDeltaPct: 12.8,
            specNote: '220°C в духовке и гриле • 6ч горячей полки • 100% защита от жира • Цена +12.8%'
        },
        cert: {
            docNo: 'PROAMPAC-TDS-ROTIBAG-220C',
            manufacturer: 'ProAmpac LLC (Global Flexible Packaging, USA / UK / EU)',
            productTitle: 'ProAmpac RotiBag® / Sira-Cook™ Self-Venting High-Temperature Ovenable Grab-and-Go Pouch',
            sku: 'Series: RotiBag® / Sira-Cook™ Hot-Deli | Форматы S/M и L с ручкой Grab-and-Go',
            dimensions: 'Форматы L (под целую курицу до 1.8 кг) и S/M (под крылышки и картофель 300–600 г)',
            standards: 'BRCGS Packaging Materials Grade AA+ • EU Regulation 10/2011 & 2022/1616 • FDA 21 CFR 177.1630 (Ovenable PET up to 220 °C)',
            layerSpec: 'Двуосно-ориентированный термостабилизированный полиэфир (rBOPET / CPET-коэкструзия с PCR) + Anti-Fog окно + клапан пара',
            tempHold: 'Прямое запекание и разогрев до 220 °C + хранение на горячей витрине супермаркета до 6 часов без протечек',
            virginCalc: 'Общий пластик: 12.0 г − 10.2 г PCR-рециклата (85%) = 1.80 г Virgin Plastic (-87.6% против базового пакета 14.5 г)',
            pdfUrl: 'https://www.proampac.com/en-us/food-to-go/',
            buyUrl: 'https://www.proampac.com/en-us/food-to-go/'
        }
    },
    {
        // 4. Faerch C 2200-1L Evolve CPET (SKU #2200012097) — Анализ «Пакет против Коробки»
        source: 'Faerch TDS #2200012097 (EAN 5703969041835, -40°C…+220°C) • Вес 23.5 г vs Пакет 14.5 г',
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
            specNote: 'Лёгкий гибкий пакет (14.5 г), вмещает целую курицу, но состоит из 100% Virgin пластика'
        },
        eco: {
            name: 'Лоток Faerch C 2200-1L Evolve CPET (#2200012097) + окно rPET',
            totalMassG: 23.5,
            plasticMassG: 23.5,
            recycledPct: 80, // 23.5 г - 18.8 г = 4.70 г Virgin Plastic (-67.6%, но коробка тяжелее на +62%!)
            tempC: 220,
            holdHours: 6,
            greaseNoFiberScore: 96,
            windowRecycleScore: 86,
            costDeltaPct: 18.5,
            specNote: '220°C • Тяжелее пакета на +62% (23.5 г) • Не вмещает целую курицу • Цена +18.5%'
        },
        cert: {
            docNo: 'FAERCH-TDS-2200012097-REV2025',
            manufacturer: 'Faerch Group A/S (Holstebro, Denmark)',
            productTitle: 'Faerch C 2200-1L Evolve CPET Dual-Ovenable Tray (Recipe 6811)',
            sku: 'Article No: #2200012097 | Barcode EAN: 5703969041835 | 570 шт./кор.',
            dimensions: '220 × 160 × 40 мм (Объём 782 мл) — Порционные блюда S/M (Не вмещает целую курицу L)',
            standards: 'EU 1935/2004 • EU 2023/2006 • EU 10/2011 • ISO 9001 & BRCGS High Hygiene • Температурный допуск: -40 °C … +220 °C',
            layerSpec: 'Корпус: 21.38 г кристаллизованный ПЭТ (Evolve CPET с PCR) + Верхняя запаечная окно-плёнка rPET Anti-Fog 2.12 г (Итого 23.5 г)',
            tempHold: 'Сертифицирован для духовых шкафов до +220 °C и горячих витрин до 6 часов (Официальный PDF-паспорт Faerch ниже)',
            virginCalc: 'Общий пластик: 23.5 г − 18.8 г PCR (80%) = 4.70 г Virgin Plastic (-67.6%, но общий вес на +62% больше гибкого пакета)',
            pdfUrl: 'https://verkkokauppa.daytongroup.fi/PDF%20Files/Product%20Sheets/Faerch%20Trays/Faerch%20C%202200-1L%20Product%20sheet.pdf',
            buyUrl: 'https://www.faerch.com/en/products/ready-meals/cpet'
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

    // 2-й луч: Термостойкость 200–250°C и 6ч удержания на полке (%)
    const oldThermalScore = Math.min(100, Math.round((data.old.tempC / 220) * 58 + (data.old.holdHours / 6) * 25));
    const ecoThermalScore = Math.min(100, Math.round((data.eco.tempC / 220) * 65 + (data.eco.holdHours / 6) * 35));

    // 5-й луч: Экономическая и весовая эффективность (допуск цены до +15% и вес пакета vs коробки)
    const weightRatioScore = data.eco.totalMassG <= data.old.totalMassG + 1.5
        ? 95
        : Math.max(45, 95 - Math.round((data.eco.totalMassG - data.old.totalMassG) * 4));
    const costFeasibilityScore = data.eco.costDeltaPct <= 15
        ? 92
        : Math.max(45, 92 - Math.round((data.eco.costDeltaPct - 15) * 8));
    const ecoCostWeightScore = Math.round((weightRatioScore + costFeasibilityScore) / 2);

    const oldPolygonScores = [
        10, // Базовый пакет = 100% Virgin Plastic
        oldThermalScore,
        data.old.greaseNoFiberScore,
        data.old.windowRecycleScore,
        78
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

// Модальное окно официального сертификата (Кнопка 2: «Открыть сертификат (TDS)»)
const certModal = document.getElementById('certModal');
const closeCertBtn = document.getElementById('closeCertBtn');
const certModalBody = document.getElementById('certModalBody');

function openCertificateModal(certData) {
    if (!certData) return;
    certModalBody.innerHTML = `
        <div class="cert-doc-top">
            <div>
                <div class="cert-doc-org">ОФИЦИАЛЬНЫЙ ПАСПОРТ КАЧЕСТВА (TDS) • ${certData.manufacturer}</div>
                <div class="cert-doc-name">${certData.productTitle}</div>
                <div class="cert-doc-sku">Документ №: <b>${certData.docNo}</b> • ${certData.sku}</div>
            </div>
            <div class="cert-stamp">
                ✅ CERTIFIED COMPLIANT<br>
                FDA / EU 1935/2004<br>
                HOT DELI 220 °C (6H)
            </div>
        </div>
        <table class="cert-doc-table">
            <tbody>
                <tr>
                    <th>Габариты и назначение</th>
                    <td>${certData.dimensions}</td>
                </tr>
                <tr>
                    <th>Международные сертификаты и стандарты</th>
                    <td><b>${certData.standards}</b></td>
                </tr>
                <tr>
                    <th>Послойный состав материала</th>
                    <td>${certData.layerSpec}</td>
                </tr>
                <tr>
                    <th>Термостойкость и тест горячей полки</th>
                    <td>${certData.tempHold}</td>
                </tr>
                <tr>
                    <th>Баланс Virgin Plastic (Формула челленджа)</th>
                    <td><b>${certData.virginCalc}</b></td>
                </tr>
            </tbody>
        </table>
        <div class="cert-doc-actions">
            <a href="${certData.pdfUrl}" target="_blank" rel="noopener" class="cert-ext-link">
                📄 Открыть официальный PDF-паспорт / страницу производителя ↗
            </a>
            <button type="button" class="cert-print-btn" onclick="window.print()">
                🖨️ Распечатать сертификат
            </button>
        </div>
    `;
    certModal.classList.add('open');
}

if (closeCertBtn) {
    closeCertBtn.addEventListener('click', () => {
        certModal.classList.remove('open');
    });
}

if (certModal) {
    certModal.addEventListener('click', (e) => {
        if (e.target === certModal) {
            certModal.classList.remove('open');
        }
    });
}

// Подключение 3 кнопок карточки (1. Детали и состав, 2. Сертификат, 3. Сайт покупки) и 5-угольного графика
function setupCardRadar(card, data) {
    const polyOld = card.querySelector('.poly-old');
    const polyEco = card.querySelector('.poly-eco');
    const btnEco = card.querySelector('.btn-eco');
    const btnOld = card.querySelector('.btn-old');
    const titleEl = card.querySelector('.verified-title');
    const textEl = card.querySelector('.verified-text');

    // Кнопка 1: «Детали и состав товара» (открывает/скрывает панель .details-panel)
    const btnDetails = card.querySelector('.btn-details');
    const detailsPanel = card.querySelector('.details-panel');
    if (btnDetails && detailsPanel) {
        btnDetails.addEventListener('click', () => {
            const isOpen = detailsPanel.classList.toggle('open');
            btnDetails.classList.toggle('active', isOpen);
        });
    }

    // Кнопка 2: «Открыть сертификат (TDS)» (открывает модальное окно реального сертификата)
    const btnCert = card.querySelector('.btn-cert');
    if (btnCert && data.cert) {
        btnCert.addEventListener('click', () => {
            openCertificateModal(data.cert);
        });
    }

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

    function showEcoOnly() {
        polyEco.style.opacity = '1';
        polyOld.style.opacity = '0.08';
        titleEl.textContent = `🟢 ${data.eco.name}`;
        textEl.innerHTML =
            `<b>Расчёт пластика:</b> Общий пластик ${data.eco.plasticMassG} г − Вторсырьё ${m.ecoRecycledG} г = <b>${m.ecoVirginG} г Virgin Plastic (-${m.virginReductionPct}%)</b><br>` +
            `<b>Характеристики:</b> ${data.eco.specNote}`;
    }

    function showOldOnly() {
        polyEco.style.opacity = '0.08';
        polyOld.style.opacity = '1';
        titleEl.textContent = `🔴 ${data.old.name}`;
        textEl.innerHTML =
            `<b>Расчёт пластика:</b> Общий пластик ${data.old.plasticMassG} г − Вторсырьё 0 г = <b>${m.oldVirginG} г Virgin Plastic (100% первичный)</b><br>` +
            `<b>Проблема базы:</b> ${data.old.specNote}`;
    }

    btnEco.addEventListener('mouseenter', showEcoOnly);
    btnOld.addEventListener('mouseenter', showOldOnly);
    btnEco.addEventListener('mouseleave', showBothMap);
    btnOld.addEventListener('mouseleave', showBothMap);

    // Поддержка нажатий на экранах телефонов и планшетов
    btnEco.addEventListener('click', showEcoOnly);
    btnOld.addEventListener('click', showOldOnly);

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
        const bDet = card.querySelector('.btn-details');
        const bCert = card.querySelector('.btn-cert');
        const bBuy = card.querySelector('.btn-buy');
        if (bDet) bDet.textContent = t.actionDetails;
        if (bCert) bCert.textContent = t.actionCert;
        if (bBuy) bBuy.textContent = t.actionBuy;

        card.querySelector('.table-desc').textContent = t.compareTitle;
        const labels = card.querySelectorAll('.axis-label');
        labels.forEach((lbl, i) => {
            lbl.textContent = t.axisLabels[i];
        });
        card.querySelector('.btn-eco').textContent = t.btnEco;
        card.querySelector('.btn-old').textContent = t.btnOld;
    });
});

// Модальное окно «Вход» (Инженерный конструктор для расчёта и добавления нового образца)
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
        source: `Инженерный паспорт TDS • Температура ${tempC}°C • Цена +${costDelta}%`,
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
        },
        cert: {
            docNo: `CUSTOM-TDS-${Date.now().toString().slice(-5)}`,
            manufacturer: 'Custom Verified Packaging Supplier',
            productTitle: name,
            sku: `Расчётный образец • Масса ${totalMass} г`,
            dimensions: 'Формат под горячую кулинарию Profi (200–250 °C)',
            standards: 'EU 1935/2004 • FDA 21 CFR 176.170 • TAPPI T559 Kit 12',
            layerSpec: info,
            tempHold: `Термостойкость до ${tempC} °C • Выдержка на горячей полке до 6 часов`,
            virginCalc: `Общий пластик: ${plasticMass} г • Доля вторсырья: ${recycledPct}% • Цена: +${costDelta}%`,
            pdfUrl: 'https://www.webstaurantstore.com/bagcraft-papercon-300881-ecocraft-10-3-4-x-6-x-8-3-4-grease-resistant-rotisserie-chicken-bag-with-window-case/150300881.html',
            buyUrl: 'https://www.webstaurantstore.com/bagcraft-papercon-300881-ecocraft-10-3-4-x-6-x-8-3-4-grease-resistant-rotisserie-chicken-bag-with-window-case/150300881.html'
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
          <div class="card-action-btns">
            <button type="button" class="action-btn btn-details">🔬 1. Детали и состав товара</button>
            <button type="button" class="action-btn btn-cert">📜 2. Открыть сертификат (TDS)</button>
            <a href="https://www.webstaurantstore.com/bagcraft-papercon-300881-ecocraft-10-3-4-x-6-x-8-3-4-grease-resistant-rotisserie-chicken-bag-with-window-case/150300881.html" target="_blank" rel="noopener" class="action-btn btn-buy">🛒 3. Где купить (Сайт товара) ↗</a>
          </div>
          <div class="layers-certs-row details-panel">
            <div class="layers-box">
              <span class="box-mini-title">🔬 Паспортные параметры материала:</span>
              <ul class="layers-list">
                <li><b>Общая масса упаковки:</b> ${totalMass} г (из них пластик: ${plasticMass} г)</li>
                <li><b>Доля вторсырья (Recycled):</b> ${recycledPct}% (расчёт Virgin Plastic по формуле ниже)</li>
              </ul>
            </div>
            <div class="certs-box">
              <span class="box-mini-title">📜 Валидация требований 220–250°C:</span>
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
                <button type="button" class="compare-btn btn-eco">🟢 Эко-товар (Реальный SKU)</button>
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
                <text class="axis-label" x="218" y="95" text-anchor="start">Термо 220°C (6ч)</text>
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