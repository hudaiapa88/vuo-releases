/* Vuo for Windows - language switch + latest-release lookup. No dependencies. */
(function () {
  'use strict';

  var REPO = 'hudaiapa88/vuo-releases';
  var FALLBACK = 'https://github.com/' + REPO + '/releases/latest';
  var ASSET_RE = /^Vuo-Setup-.*\.exe$/;

  var T = {
    en: {
      title: 'Vuo for Windows - control your PC from your phone',
      desc: 'Download Vuo for Windows and control your PC from your Android phone: low-latency picture, touch, mouse and full keyboard, window and monitor switching, game mode and phone microphone.',
      skip: 'Skip to content', navLabel: 'Page', footLabel: 'Links', langLabel: 'Language',
      navFeatures: 'Features', navInstall: 'Install', navFaq: 'FAQ',
      eyebrow: 'PC app for Windows 10 / 11',
      h1a: 'Control your Windows PC', h1b: 'from your phone',
      lead: 'Vuo shows your PC screen on your Android phone with low latency. Use touch, mouse and a full PC keyboard, switch windows and monitors, and play with a gamepad - on the same Wi-Fi or over the internet.',
      download: 'Download for Windows', getAndroid: 'Android app on Google Play',
      metaLoading: 'Checking the latest version...',
      metaFound: 'Version {v} · {size} · 64-bit installer',
      metaFallback: 'Opens the latest release on GitHub',
      req1: 'Windows 10 or 11, 64-bit', req2: 'Vuo app on an Android phone',
      onPhone: 'The Windows app installs on your PC. Open this page on your computer to download it.',
      afterH: 'Download started.', afterP: 'Open Vuo-Setup when it finishes. If Windows says it protected your PC, select More info, then Run anyway.',
      afterLink: 'Installation help',
      shotsH: 'A look at the phone app', shotsP: 'Screens from the Vuo Android app connected to a Windows PC.',
      alt1: 'Using the PC from the phone', alt2: 'Window switcher with monitors and open windows',
      alt3: 'Game mode with an on-screen gamepad', alt4: 'PC keyboard with navigation keys and shortcuts',
      alt5: 'Screen menu with monitors and the Fit to phone option', alt6: 'Menu with shortcuts, sound, phone microphone and files',
      alt7: 'List of saved PCs',
      featH: 'What you can do',
      f1h: 'Low-latency picture', f1p: 'See your PC screen live on your phone, with little delay between the PC and the phone.',
      f2h: 'Touch, mouse and full keyboard', f2p: 'Tap and drag like a touchpad, use a full PC keyboard with F keys, and send shortcuts such as Alt+Tab or Ctrl+Alt+Del.',
      f3h: 'Window switcher', f3p: 'See the open windows on your PC and jump to the one you need.',
      f4h: 'Monitor switching', f4p: 'Have more than one monitor? Choose which one you see on the phone.',
      f5h: 'Fit to phone', f5p: "A monitor's windows are reshaped to fit the phone screen, and go back when you turn it off.",
      f6h: 'Phone microphone to PC', f6p: "Use your phone as the PC's microphone. Optional; needs the free VB-CABLE virtual audio device on the PC.",
      f7h: 'Game mode', f7p: 'Play with an on-screen gamepad or a Bluetooth controller paired to your phone. The PC sees a virtual Xbox 360 controller.',
      f8h: 'Code, QR or same Wi-Fi', f8p: 'Connect with a 9-digit code or a QR code, or pick your PC from the list on the same Wi-Fi. Works over the internet too.',
      f9h: 'You approve every new phone', f9p: 'The first time a phone tries to connect, the PC asks you. Nothing connects until you allow it.',
      howH: 'Get started in a few minutes',
      s1h: 'Install on your PC', s1p: 'Download Vuo-Setup and run it. Pick the optional drivers you want.',
      s2h: 'Install on your phone', s2p: 'Get the Vuo app for Android from Google Play.',
      s3h: 'Connect', s3p: 'Enter the 9-digit code shown on the PC, scan its QR code, or choose the PC on the same Wi-Fi.',
      s4h: 'Approve on the PC', s4p: 'Allow the new phone on your PC once. Then you are in.',
      instH: 'Installing',
      ssH: 'If Windows shows a warning',
      ssP: 'The installer is not code-signed yet, so Windows SmartScreen may stop it the first time. This is expected for new apps without a signing certificate.',
      ss1: 'On <span class="ui">Windows protected your PC</span>, select <span class="ui">More info</span>.',
      ss2: 'Check that the app is <span class="ui">Vuo-Setup</span>, then select <span class="ui">Run anyway</span>.',
      drvH: 'Optional drivers (chosen during setup)',
      drv1: 'Virtual controller - for game mode', drv2: 'Virtual display - for "Fit to phone"', drv3: 'Phone microphone - installed separately',
      faqH: 'Questions',
      q1: 'Can someone else connect to my PC?', a1: 'Not without you. Each new phone has to be approved on the PC before it can connect. A code alone is not enough.',
      q2: 'Do the phone and PC need to be on the same Wi-Fi?', a2: 'No. On the same Wi-Fi the phone finds the PC automatically. When you are away, connect over the internet with the 9-digit code or the QR code.',
      q3: 'Do I need the drivers?', a3: 'Only for the features that use them: the virtual controller for game mode and the virtual display for "Fit to phone". Everything else works without them.',
      q4: 'How do updates work?', a4: 'Updates are built in. The PC app checks for new versions and installs them for you, so you only download the installer once.',
      q5: 'How do I uninstall Vuo?', a5: 'Use Windows Settings → Apps → Installed apps → Vuo → Uninstall. The drivers stay installed unless you choose to remove them when asked, because other programs may use them.',
      finalH: 'Ready to try it?',
      privacy: 'Privacy policy', terms: 'Terms of use', allReleases: 'All releases', playLink: 'Google Play',
      footNote: 'Vuo for Windows. This page and the installers are hosted on GitHub.'
    },
    tr: {
      title: "Windows için Vuo - bilgisayarınızı telefondan kontrol edin",
      desc: "Windows için Vuo'yu indirin, bilgisayarınızı Android telefonunuzdan kontrol edin: düşük gecikmeli görüntü, dokunma, fare ve tam klavye, pencere ve monitör geçişi, oyun modu ve telefon mikrofonu.",
      skip: 'İçeriğe geç', navLabel: 'Sayfa', footLabel: 'Bağlantılar', langLabel: 'Dil',
      navFeatures: 'Özellikler', navInstall: 'Kurulum', navFaq: 'SSS',
      eyebrow: 'Windows 10 / 11 için bilgisayar uygulaması',
      h1a: 'Windows bilgisayarınızı', h1b: 'telefonunuzdan kontrol edin',
      lead: "Vuo, bilgisayarınızın ekranını Android telefonunuzda düşük gecikmeyle gösterir. Dokunma, fare ve tam PC klavyesini kullanın, pencereler ve monitörler arasında geçin, kumandayla oynayın. Aynı Wi-Fi'da da, internet üzerinden de çalışır.",
      download: 'Windows için indir', getAndroid: "Android uygulaması Google Play'de",
      metaLoading: 'Son sürüm kontrol ediliyor…',
      metaFound: 'Sürüm {v} · {size} · 64 bit kurulum dosyası',
      metaFallback: "GitHub'daki son sürüm sayfasını açar",
      req1: 'Windows 10 veya 11, 64 bit', req2: 'Android telefonda Vuo uygulaması',
      onPhone: 'Windows uygulaması bilgisayara kurulur. İndirmek için bu sayfayı bilgisayarınızda açın.',
      afterH: 'İndirme başladı.', afterP: "Bittiğinde Vuo-Setup'ı açın. Windows bilgisayarınızı koruduğunu söylerse Ek bilgi'yi, ardından Yine de çalıştır'ı seçin.",
      afterLink: 'Kurulum yardımı',
      shotsH: 'Telefon uygulamasına bir bakış', shotsP: 'Bir Windows bilgisayara bağlı Vuo Android uygulamasından ekranlar.',
      alt1: 'Bilgisayarı telefondan kullanma', alt2: 'Monitörler ve açık pencerelerle pencere geçişi',
      alt3: 'Ekran kumandalı oyun modu', alt4: 'Gezinme tuşları ve kısayollarla PC klavyesi',
      alt5: 'Monitörler ve Telefona uyarla seçeneğiyle ekran menüsü', alt6: 'Kısayollar, ses, telefon mikrofonu ve dosyalar menüsü',
      alt7: 'Kayıtlı bilgisayarlar listesi',
      featH: 'Neler yapabilirsiniz',
      f1h: 'Düşük gecikmeli görüntü', f1p: 'Bilgisayarınızın ekranını telefonda canlı görün; bilgisayarla telefon arasında gecikme az olur.',
      f2h: 'Dokunma, fare ve tam klavye', f2p: 'Dokunmatik yüzey gibi dokunup sürükleyin, F tuşlarıyla tam PC klavyesini kullanın, Alt+Tab ya da Ctrl+Alt+Del gibi kısayollar gönderin.',
      f3h: 'Pencere geçişi', f3p: 'Bilgisayardaki açık pencereleri görün, istediğinize geçin.',
      f4h: 'Monitör geçişi', f4p: 'Birden fazla monitörünüz mü var? Telefonda hangisini göreceğinizi seçin.',
      f5h: 'Telefona uyarla', f5p: 'Bir monitördeki pencereler telefon ekranına göre yeniden boyutlanır; kapattığınızda eski hallerine döner.',
      f6h: 'Telefon mikrofonu bilgisayara', f6p: "Telefonunuzu bilgisayarın mikrofonu olarak kullanın. İsteğe bağlıdır; bilgisayarda ücretsiz VB-CABLE sanal ses aygıtı gerekir.",
      f7h: 'Oyun modu', f7p: 'Ekrandaki kumandayla ya da telefona bağlı bir Bluetooth kumandayla oynayın. Bilgisayar bunu sanal bir Xbox 360 kumandası olarak görür.',
      f8h: "Kod, QR ya da aynı Wi-Fi", f8p: "9 haneli kodla ya da QR kodla bağlanın, veya aynı Wi-Fi'daki listeden bilgisayarınızı seçin. İnternet üzerinden de çalışır.",
      f9h: 'Her yeni telefonu siz onaylarsınız', f9p: 'Bir telefon ilk kez bağlanmak istediğinde bilgisayar size sorar. Siz izin vermeden bağlanamaz.',
      howH: 'Birkaç dakikada başlayın',
      s1h: 'Bilgisayara kurun', s1p: "Vuo-Setup'ı indirip çalıştırın. İstediğiniz isteğe bağlı sürücüleri seçin.",
      s2h: 'Telefona kurun', s2p: "Android için Vuo uygulamasını Google Play'den edinin.",
      s3h: 'Bağlanın', s3p: "Bilgisayarda görünen 9 haneli kodu girin, QR kodunu okutun ya da aynı Wi-Fi'daki bilgisayarı seçin.",
      s4h: 'Bilgisayarda onaylayın', s4p: 'Yeni telefona bilgisayarda bir kez izin verin. Hepsi bu.',
      instH: 'Kurulum',
      ssH: 'Windows uyarı gösterirse',
      ssP: 'Kurulum dosyası henüz kod imzalı değil; bu yüzden Windows SmartScreen onu ilk seferde durdurabilir. İmza sertifikası olmayan yeni uygulamalarda bu beklenen bir durumdur.',
      ss1: '<span class="ui">Windows kişisel bilgisayarınızı korudu</span> ekranında <span class="ui">Ek bilgi</span>\'yi seçin.',
      ss2: 'Uygulamanın <span class="ui">Vuo-Setup</span> olduğunu kontrol edip <span class="ui">Yine de çalıştır</span>\'ı seçin.',
      drvH: 'İsteğe bağlı sürücüler (kurulumda seçilir)',
      drv1: 'Sanal kumanda - oyun modu için', drv2: 'Sanal ekran - "Telefona uyarla" için', drv3: 'Telefon mikrofonu - ayrıca kurulur',
      faqH: 'Sorular',
      q1: 'Başkası bilgisayarıma bağlanabilir mi?', a1: 'Siz izin vermeden hayır. Her yeni telefonun bağlanabilmesi için bilgisayarda onaylanması gerekir. Kodu bilmek tek başına yetmez.',
      q2: "Telefonla bilgisayar aynı Wi-Fi'da mı olmalı?", a2: "Hayır. Aynı Wi-Fi'da telefon bilgisayarı kendiliğinden bulur. Uzaktayken 9 haneli kodla ya da QR kodla internet üzerinden bağlanırsınız.",
      q3: 'Sürücüler gerekli mi?', a3: 'Yalnızca onları kullanan özellikler için: oyun modu için sanal kumanda, "Telefona uyarla" için sanal ekran. Geri kalan her şey onlarsız çalışır.',
      q4: 'Güncellemeler nasıl oluyor?', a4: 'Güncelleme uygulamanın içinde. Bilgisayar uygulaması yeni sürümleri kontrol edip sizin için kurar; kurulum dosyasını bir kez indirmeniz yeter.',
      q5: "Vuo'yu nasıl kaldırırım?", a5: 'Windows Ayarlar → Uygulamalar → Yüklü uygulamalar → Vuo → Kaldır. Başka programlar da kullanıyor olabileceği için sürücüler, sorulduğunda kaldırmayı seçmezseniz yüklü kalır.',
      finalH: 'Denemeye hazır mısınız?',
      privacy: 'Gizlilik politikası', terms: 'Kullanım koşulları', allReleases: 'Tüm sürümler', playLink: 'Google Play',
      footNote: "Windows için Vuo. Bu sayfa ve kurulum dosyaları GitHub'da barındırılır."
    }
  };

  var release = null; // { version, size } once resolved
  var failed = false;
  var lang = pickLang();

  function pickLang() {
    try {
      var q = new URLSearchParams(location.search).get('lang');
      if (q && T[q]) return q;
    } catch (e) {}
    try {
      var saved = localStorage.getItem('vuo-lang');
      if (saved && T[saved]) return saved;
    } catch (e) {}
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
    return /^tr\b/i.test(nav) ? 'tr' : 'en';
  }

  function fmtSize(bytes) {
    var mb = bytes / 1048576;
    var n = mb.toLocaleString(lang === 'tr' ? 'tr-TR' : 'en-US', { maximumFractionDigits: mb < 10 ? 1 : 0 });
    return n + ' MB';
  }

  function renderMeta() {
    var d = T[lang];
    var text = release
      ? d.metaFound.replace('{v}', release.version).replace('{size}', fmtSize(release.size))
      : (failed ? d.metaFallback : d.metaLoading);
    document.querySelectorAll('.dl-meta').forEach(function (el) { el.textContent = text; });
  }

  function apply(l) {
    lang = l;
    var d = T[l];
    document.documentElement.lang = l;
    document.title = d.title;
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', d.desc);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (d[k] != null) el.textContent = d[k];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-html');
      if (d[k] != null) el.innerHTML = d[k]; // trusted strings from this file only
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-alt');
      if (d[k] != null) el.alt = d[k];
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var parts = el.getAttribute('data-i18n-attr').split(':');
      if (d[parts[1]] != null) el.setAttribute(parts[0], d[parts[1]]);
    });
    var lg = document.querySelector('.lang');
    if (lg) lg.setAttribute('aria-label', d.langLabel);

    // Localized screenshots live in assets/screens/<lang>/(hero|shotN).(webp|jpg)
    var sh = function (k) { return k === 'hero' ? 'hero' : 'shot' + k; };
    document.querySelectorAll('[data-shot-src]').forEach(function (el) {
      el.srcset = 'assets/screens/' + l + '/' + sh(el.getAttribute('data-shot-src')) + '.webp';
    });
    document.querySelectorAll('[data-shot-img]').forEach(function (el) {
      el.src = 'assets/screens/' + l + '/' + sh(el.getAttribute('data-shot-img')) + '.jpg';
    });

    document.querySelectorAll('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === l));
    });
    renderMeta();
  }

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () {
      var l = b.getAttribute('data-lang');
      try { localStorage.setItem('vuo-lang', l); } catch (e) {}
      apply(l);
    });
  });

  apply(lang);

  // A phone visitor gets the Play Store first; the installer stays one tap away.
  var ua = navigator.userAgent || '';
  if (/Android/i.test(ua)) {
    document.documentElement.classList.add('is-phone');
    var phoneNote = document.querySelector('.on-phone');
    if (phoneNote) phoneNote.hidden = false;
  }

  // After a click on a download link: what to expect next (SmartScreen).
  document.querySelectorAll('.dl-link').forEach(function (a) {
    a.addEventListener('click', function () {
      var box = document.querySelector('.after-dl');
      if (box && !document.documentElement.classList.contains('is-phone')) box.hidden = false;
    });
  });

  // Latest release -> direct installer link. Any failure keeps the GitHub fallback link.
  var ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
  var timer = setTimeout(function () { if (ctrl) ctrl.abort(); }, 8000);
  fetch('https://api.github.com/repos/' + REPO + '/releases/latest', {
    headers: { Accept: 'application/vnd.github+json' },
    signal: ctrl ? ctrl.signal : undefined
  })
    .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
    .then(function (rel) {
      var asset = (rel.assets || []).filter(function (a) { return ASSET_RE.test(a.name); })[0];
      if (!asset) throw new Error('no installer asset');
      var m = asset.name.match(/^Vuo-Setup-(.*)\.exe$/);
      release = { version: (m && m[1]) || String(rel.tag_name || '').replace(/^v/, ''), size: asset.size };
      document.querySelectorAll('.dl-link').forEach(function (a) { a.href = asset.browser_download_url; });
    })
    .catch(function () {
      failed = true;
      document.querySelectorAll('.dl-link').forEach(function (a) { a.href = FALLBACK; });
    })
    .then(function () { clearTimeout(timer); renderMeta(); });
})();
