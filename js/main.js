// =========================================
// DATA — اطلاعات شهدا
// =========================================
const shahada = [
  {
    id: "shahid-mousavi",
    name: "سردار شهید سیدعبدالرحیم موسوی",
    rank: "فرمانده ستادکل نیروهای مسلح",
    birthDate: "۱۳۴۲",
    birthPlace: "زنجان",
    martyrdomDate: "۴ دی ۱۴۰۲",
    martyrdomPlace: "زینبیه، دمشق، سوریه",
    operation: "ترور توسط رژیم صهیونیستی",
    buried: "امامزاده صالح تهران، تجریش",
    image: "images/mousavi.jpg",
    will: `بسم الله الرحمن الرحیم\n\nبیش از سه دهه در راه جبهه مقاومت قدم برداشتم. آنچه مهم بود نه نام و نشان، بلکه خدمت به اسلام و مظلومین بود.\n\nبه فرزندانم وصیت می‌کنم که راه حق را رها نکنند. دنیا گذراست و آنچه می‌ماند عمل صالح است.\n\nالسلام علیک یا اباعبدالله الحسین`,
    willSignature: "سیدرضی موسوی · مستشار نظامی ایران در سوریه"
  },
  {
    id: "shahid-nasirzade",
    name: "شهید امیر عزیز نصیرزاده",
    rank: "امیر سرتیپ خلبان · وزیر دفاع جمهوری اسلامی ایران",
    birthDate: "۱۳۴۳",
    birthPlace: "سراب، آذربایجان شرقی",
    martyrdomDate: "۹ اسفند ۱۴۰۴",
    martyrdomPlace: "تهران",
    operation: "حمله مشترک آمریکا و اسرائیل به ایران",
    buried: "تهران",
    image: "images/nasirzade.jpg",
    will: `به ملت شریف ایران،\n\nخلبانی را از جوانی دوست داشتم چون آسمان بی‌مرز است مثل عشق به وطن. در جنگ تحمیلی با اف‌۱۴ پرواز کردم و امروز هم آماده‌ام.\n\nوصیتم به جوانان این است: تخصص را با ایمان درهم بیامیزید. ایران نیاز به متخصصان مؤمن دارد، نه شعار.\n\nزنده باد ایران`,
    willSignature: "عزیز نصیرزاده · وزیر دفاع دولت چهاردهم"
  },
  {
    id: "shahid-pakpour",
    name: "سردار شهید محمد پاکپور",
    rank: "سرلشکر پاسدار · فرمانده کل سپاه پاسداران انقلاب اسلامی",
    birthDate: "۱۳۴۰",
    birthPlace: "اراک، استان مرکزی",
    martyrdomDate: "۹ اسفند ۱۴۰۴",
    martyrdomPlace: "تهران",
    operation: "حمله مشترک آمریکا و اسرائیل به ایران",
    buried: "تهران",
    image: "images/pakboor.jpg",
    will: `به رزمندگان سپاه پاسداران،\n\nشانزده سال افتخار داشتم که در کنار شما باشم. این راه با خون شهدا رنگ گرفته و با خون ما ادامه خواهد یافت.\n\nدشمن می‌داند که کشتن فرمانده، سپاه را متوقف نمی‌کند. درخت انقلاب با خون آبیاری می‌شود.\n\nتا آزادی قدس، ایستاده‌ایم`,
    willSignature: "محمد پاکپور · فرمانده کل سپاه پاسداران"
  },
  {
    id: "shahid-tangsiri",
    name: "سردار شهید علیرضا تنگسیری",
    rank: "دریادار پاسدار · فرمانده نیروی دریایی سپاه پاسداران",
    birthDate: "۱۳۴۱",
    birthPlace: "تنگستان، بوشهر",
    martyrdomDate: "۶ فروردین ۱۴۰۵",
    martyrdomPlace: "ایران",
    operation: "جنگ اسرائیل و ایران",
    buried: "بوشهر",
    image: "images/tangsiri.jpg",
    will: `به دریانوردان غیور سپاه،\n\nخلیج فارس خانه ماست و تنگه هرمز شاهرگ ماست. هیچ دشمنی حق ندارد این آبراه را از ما بگیرد.\n\nرئیسعلی دلواری از همین بوشهر برخاست و با دست خالی در برابر استعمار ایستاد. ما با امکانات بیشتر، باید غیرت کمتری داشته باشیم؟\n\nدریا همیشه متعلق به ماست`,
    willSignature: "علیرضا تنگسیری · فرمانده نیروی دریایی سپاه"
  }
];

// =========================================
// ROUTING
// =========================================
function getUrlParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

function goToShahid(id) {
  history.pushState({}, '', '?shahid=' + id);
  showProfile(id);
}

function goHome() {
  history.pushState({}, '', window.location.pathname);
  document.getElementById('profilePage').classList.remove('active');
  document.getElementById('homePage').classList.remove('hidden');
  window.scrollTo(0, 0);
}

function showProfile(id) {
  const s = shahada.find(x => x.id === id);
  if (!s) return;

  document.getElementById('homePage').classList.add('hidden');
  document.getElementById('profilePage').classList.add('active');

  document.getElementById('profileBgImg').src = s.image;
  document.getElementById('profileBgImg').alt = s.name;
  document.getElementById('profileName').textContent = s.name;
  document.getElementById('profileRank').textContent = s.rank;

  const infoData = [
    { label: 'تاریخ تولد',    value: s.birthDate },
    { label: 'محل تولد',      value: s.birthPlace },
    { label: 'تاریخ شهادت',   value: s.martyrdomDate },
    { label: 'محل شهادت',     value: s.martyrdomPlace },
    { label: 'عملیات',        value: s.operation },
    { label: 'محل دفن',       value: s.buried },
  ];

  document.getElementById('infoGrid').innerHTML = infoData.map(d => `
    <div class="info-card">
      <div class="info-card-label">${d.label}</div>
      <div class="info-card-value">${d.value}</div>
    </div>
  `).join('');

  document.getElementById('willText').innerHTML = s.will.replace(/\n/g, '<br>');
  document.getElementById('willSignature').textContent = '— ' + s.willSignature;

  window.scrollTo(0, 0);
}

// =========================================
// BUILD CARDS + QR CODES
// =========================================
function buildCards() {
  const grid = document.getElementById('cardsGrid');
  const baseUrl = window.location.origin + window.location.pathname;

  shahada.forEach((s, i) => {
    const card = document.createElement('div');
    card.className = 'shahid-card reveal';
    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${s.image}" alt="${s.name}" loading="lazy">
        <div class="card-img-overlay"></div>
        <div class="card-badge">شهید</div>
      </div>
      <div class="card-body">
        <div class="card-name">${s.name}</div>
        <div class="card-rank">${s.rank}</div>
        <div class="card-meta">
          <div class="card-meta-item"><span>📍</span><span>${s.birthPlace}</span></div>
          <div class="card-meta-item"><span>📅</span><span>${s.martyrdomDate}</span></div>
          <div class="card-meta-item"><span>⚔️</span><span>${s.operation}</span></div>
        </div>
        <div class="qr-section">
          <div class="qr-wrap" id="qr-${s.id}"></div>
          <div class="qr-label">
            <strong>کد QR اختصاصی</strong>
            اسکن کنید تا صفحه این شهید باز شود
          </div>
        </div>
      </div>
    `;
    card.addEventListener('click', () => goToShahid(s.id));
    grid.appendChild(card);

    setTimeout(() => {
      new QRCode(document.getElementById('qr-' + s.id), {
        text: baseUrl + '?shahid=' + s.id,
        width: 52,
        height: 52,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.M
      });
    }, 100 + i * 80);
  });

  setTimeout(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach((e, idx) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), idx * 120);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  }, 200);
}

// =========================================
// INIT
// =========================================
window.addEventListener('popstate', () => {
  const id = getUrlParam('shahid');
  if (id) showProfile(id);
  else goHome();
});

buildCards();

const initId = getUrlParam('shahid');
if (initId) showProfile(initId);