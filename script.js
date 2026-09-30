(function () {
  'use strict';

  /* #hanhat_code_ — Thông tin cá nhân (sửa tại đây) */
  const PROFILE = {
    name: "Hà Huy Long Nhật",
    alias: "Hà Nhật",
    nickname: "venom",
    field: "Công nghệ thông tin · An ninh mạng",
    tagline: [
      "Technology Enthusiast",
      "Programmer",
      "Web Developer",
      "Cybersecurity Learner",
      "Dreamer"
    ],
    facebook: "https://www.facebook.com/ha.nhat.11082011/",
    tiktok: "https://www.tiktok.com/@hanhat_huster"
  };

  /* #hanhat_code_ — Thông tin trường học (chi tiết) */
  const SCHOOLS = {
    "thcs": {
      icon: "🎓",
      status: "Đã từng học",
      title: "THCS Hà Huy Tập",
      tiktok: "https://www.tiktok.com/@9a1_hht?lang=en",
    },
    "thpt": {
      icon: "🚀",
      status: "Đang theo học",
      title: "THPT Cẩm Xuyên",
      tiktok: "https://www.tiktok.com/@10a6.k65_thptcx",
      facebook: "https://www.facebook.com/thptcamxuyen.hatinh",
      desc: "THPT Cẩm Xuyên là ngôi trường cấp 3 mình đang theo học hiện tại mình đang học lớp 6506."
    }
  };

  /* #hanhat_code_ — Passion topics (click mỗi card để mở modal) */
  const PASSION = [
    {
      id: "technology",
      icon: "💻",
      title: "TECHNOLOGY",
      shortDesc: "Công nghệ thông tin và những điều thú vị xoay quanh nó.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      desc: "Công nghệ thông tin (IT) là lĩnh vực nghiên cứu, phát triển và ứng dụng hệ thống máy tính, phần mềm, mạng và dữ liệu để xử lý, lưu trữ và truyền tải thông tin.",
      basics: [
        "Khái niệm cơ bản về phần cứng, phần mềm, hệ điều hành",
        "Mạng máy tính và truyền thông dữ liệu",
        "Cơ sở dữ liệu và hệ quản trị cơ sở dữ liệu",
        "Kiến trúc máy tính và hệ thống nhúng",
        "Điện toán đám mây và ảo hóa"
      ],
      apps: [
        "Xây dựng hệ thống thông tin doanh nghiệp",
        "Phát triển ứng dụng di động và web",
        "Quản trị hệ thống mạng và máy chủ",
        "Khai thác dữ liệu lớn (Big Data)",
        "Trí tuệ nhân tạo và học máy"
      ]
    },
    {
      id: "programming",
      icon: "⌨️",
      title: "PROGRAMMING",
      shortDesc: "Lập trình và tư duy giải quyết vấn đề.",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80",
      desc: "Lập trình là quá trình viết các câu lệnh để máy tính thực hiện một nhiệm vụ cụ thể. Đây là kỹ năng cốt lõi để biến ý tưởng thành sản phẩm.",
      basics: [
        "Biến, kiểu dữ liệu, toán tử, câu lệnh điều khiển",
        "Vòng lặp, hàm, mảng và danh sách",
        "Lập trình hướng đối tượng (OOP)",
        "Cấu trúc dữ liệu và giải thuật cơ bản",
        "Xử lý ngoại lệ và gỡ lỗi (debugging)"
      ],
      apps: [
        "Xây dựng ứng dụng desktop, mobile, web",
        "Phát triển game và ứng dụng đồ họa",
        "Tự động hóa công việc và script",
        "Xử lý dữ liệu và tính toán khoa học",
        "Thiết kế hệ thống lớn, phân tán"
      ]
    },
    {
      id: "webdev",
      icon: "🌐",
      title: "WEB DEVELOPMENT",
      shortDesc: "Xây dựng website và các sản phẩm web.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
      desc: "Web Development là lĩnh vực xây dựng các trang web và ứng dụng chạy trên trình duyệt, bao gồm cả giao diện người dùng và xử lý phía máy chủ.",
      basics: [
        "HTML — cấu trúc trang web",
        "CSS — tạo kiểu, layout, responsive",
        "JavaScript — tương tác và logic phía client",
        "HTTP/HTTPS, API, RESTful",
        "Framework: React, Vue, Next.js (frontend)"
      ],
      apps: [
        "Website doanh nghiệp, blog, portfolio cá nhân",
        "Ứng dụng web (SPA, PWA)",
        "E-commerce và hệ thống thanh toán",
        "Dashboard quản trị và báo cáo",
        "Landing page, microsite, sự kiện"
      ]
    },
    {
      id: "cybersecurity",
      icon: "🔐",
      title: "CYBERSECURITY",
      shortDesc: "Nghiên cứu an ninh mạng và bảo mật thông tin.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
      desc: "Cybersecurity (An ninh mạng) là lĩnh vực bảo vệ hệ thống, mạng và dữ liệu khỏi các cuộc tấn công mạng, truy cập trái phép và rò rỉ thông tin.",
      basics: [
        "Bảo mật hệ thống và mạng máy tính",
        "Mã hóa và mật mã học (Cryptography)",
        "Kiểm thử xâm nhập (Penetration Testing)",
        "Phân tích mã độc (Malware Analysis)",
        "Quản lý rủi ro và tuân thủ bảo mật"
      ],
      apps: [
        "Bảo vệ hạ tầng CNTT doanh nghiệp",
        "Điều tra và ứng cứu sự cố (Incident Response)",
        "Kiểm thử bảo mật ứng dụng web/mobile",
        "Bảo mật IoT và thiết bị nhúng",
        "Săn lùng lỗ hổng (Bug Bounty)"
      ]
    },
    {
      id: "learning",
      icon: "🧠",
      title: "LEARNING",
      shortDesc: "Luôn tìm hiểu những điều mới mỗi ngày.",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80",
      desc: "Học tập liên tục là kỹ năng quan trọng nhất trong ngành công nghệ, bởi công nghệ thay đổi không ngừng và kiến thức cũ có thể lỗi thời rất nhanh.",
      basics: [
        "Kỹ năng tự học và quản lý thời gian",
        "Đọc tài liệu tiếng Anh chuyên ngành",
        "Thực hành qua dự án thực tế",
        "Tư duy phản biện và giải quyết vấn đề",
        "Ghi chú và hệ thống hóa kiến thức"
      ],
      apps: [
        "Tự học lập trình qua dự án cá nhân",
        "Tham gia cộng đồng, open-source",
        "Theo dõi công nghệ mới, xu hướng",
        "Chia sẻ kiến thức qua blog, video",
        "Xây dựng lộ trình học tập cá nhân"
      ]
    },
    {
      id: "future",
      icon: "🚀",
      title: "FUTURE",
      shortDesc: "Hướng tới những mục tiêu lớn hơn.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      desc: "Tương lai của ngành CNTT gắn liền với AI, IoT, Blockchain, Cloud và An ninh mạng. Định hướng rõ ràng giúp đi đúng con đường.",
      basics: [
        "Định hướng nghề nghiệp trong ngành IT",
        "Xu hướng công nghệ: AI, IoT, Blockchain",
        "Kỹ năng mềm: giao tiếp, teamwork",
        "Xây dựng thương hiệu cá nhân",
        "Học tập suốt đời (lifelong learning)"
      ],
      apps: [
        "Trở thành chuyên gia trong lĩnh vực chọn",
        "Làm việc tại công ty công nghệ lớn",
        "Khởi nghiệp hoặc làm freelance",
        "Nghiên cứu và phát triển sản phẩm mới",
        "Đóng góp cho cộng đồng công nghệ"
      ]
    }
  ];

  /* #hanhat_code_ — Thành tích (bạn tự thêm vào mảng này) */
  const ACHIEVEMENTS = [
    // Ví dụ:
    // { icon: "🏆", title: "...", desc: "...", meta: "2025" }
  ];

  /* #hanhat_code_ — Hành trình (bạn tự thêm/sửa mốc tại đây) */
  const JOURNEY = [
    { year: "2023", title: "Khám phá Công nghệ thông tin", desc: "Bắt đầu tìm hiểu về thế giới công nghệ và những điều thú vị xoay quanh máy tính." },
    { year: "2024", title: "Học lập trình thi đấu C++", desc: "Học những kiến thức cơ bản để thi học sinh giỏi." },
    { year: "2024", title: "Tìm hiểu lập trình và phát triển website", desc: "Học những kiến thức nền tảng về lập trình và bắt đầu xây dựng các sản phẩm web đầu tiên, kiếm về cho mình những đồng tiền nho nhỏ." },
    { year: "2025", title: "Tìm hiểu chuyên sâu về website", desc: "Tạo ra hội nhóm ở Discord, bán ra những trang web mà khách hàng yêu cầu." },
    { year: "2026", title: "Tìm hiểu về ngành bảo mật thông tin mạng", desc: "Cùng các anh, chị HUST làm những dự án, kiếm về lợi nhuận cho mình." }
  ];

  /* #hanhat_code_ — DOM refs */
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const timeline = document.getElementById('timeline');
  const dreamParticles = document.getElementById('dreamParticles');
  const particlesCanvas = document.getElementById('particlesCanvas');
  const typedText = document.getElementById('typedText');
  const passionGrid = document.getElementById('passionGrid');
  const achievementsGrid = document.getElementById('achievementsGrid');
  const achievementsEmpty = document.getElementById('achievementsEmpty');

  const topicModal = document.getElementById('topicModal');
  const topicModalOverlay = document.getElementById('topicModalOverlay');
  const topicModalClose = document.getElementById('topicModalClose');
  const topicImage = document.getElementById('topicImage');
  const topicIcon = document.getElementById('topicIcon');
  const topicTitle = document.getElementById('topicTitle');
  const topicDesc = document.getElementById('topicDesc');
  const topicList = document.getElementById('topicList');
  const topicList2 = document.getElementById('topicList2');

  const schoolModal = document.getElementById('schoolModal');
  const schoolModalOverlay = document.getElementById('schoolModalOverlay');
  const schoolModalClose = document.getElementById('schoolModalClose');
  const schoolModalIcon = document.getElementById('schoolModalIcon');
  const schoolModalStatus = document.getElementById('schoolModalStatus');
  const schoolModalTitle = document.getElementById('schoolModalTitle');
  const schoolModalDesc = document.getElementById('schoolModalDesc');
  const schoolTiktokBtn = document.getElementById('schoolTiktokBtn');
  const schoolWebsiteBtn = document.getElementById('schoolWebsiteBtn');

  /* #hanhat_code_ — Navbar scroll */
  function handleNavScroll() {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  /* #hanhat_code_ — Menu mobile */
  navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
  });
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navToggle.classList.remove('open');
      navMenu.classList.remove('open');
    });
  });

  /* #hanhat_code_ — Smooth scroll */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* #hanhat_code_ — Active nav */
  const sections = document.querySelectorAll('section[id]');
  function updateActiveNav() {
    const scrollY = window.scrollY + 120;
    let current = 'home';
    sections.forEach(function (sec) {
      if (sec.offsetTop <= scrollY) current = sec.id;
    });
    navLinks.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', updateActiveNav, { passive: true });

  /* #hanhat_code_ — Reveal scroll */
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, index) {
      if (entry.isIntersecting) {
        setTimeout(function () {
          entry.target.classList.add('visible');
        }, index * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(function (el) { revealObserver.observe(el); });

  /* #hanhat_code_ — Typing effect */
  const taglines = PROFILE.tagline;
  let taglineIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  function typeLoop() {
    const current = taglines[taglineIndex];
    if (isDeleting) {
      typedText.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedText.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }
    let speed = isDeleting ? 40 : 80;
    if (!isDeleting && charIndex === current.length) {
      speed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      taglineIndex = (taglineIndex + 1) % taglines.length;
      speed = 400;
    }
    setTimeout(typeLoop, speed);
  }
  if (typedText) typeLoop();

  /* #hanhat_code_ — Counter */
  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(function (c) { counterObserver.observe(c); });
  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1400;
    const start = performance.now();
    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(eased * target);
      el.textContent = value.toLocaleString('vi-VN');
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target.toLocaleString('vi-VN');
    }
    requestAnimationFrame(update);
  }

  /* #hanhat_code_ — Render Passion */
  function renderPassion() {
    if (!passionGrid) return;
    passionGrid.innerHTML = '';
    PASSION.forEach(function (topic, idx) {
      const card = document.createElement('div');
      card.className = 'passion-card reveal';
      card.dataset.topic = topic.id;
      card.style.transitionDelay = (idx * 0.06) + 's';
      card.innerHTML =
        '<div class="passion-icon">' + topic.icon + '</div>' +
        '<h3>' + topic.title + '</h3>' +
        '<p>' + topic.shortDesc + '</p>' +
        '<div class="passion-hint">' +
          '<span>Xem chi tiết</span>' +
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>' +
        '</div>';
      card.addEventListener('click', function () { openTopic(topic); });
      passionGrid.appendChild(card);
      revealObserver.observe(card);
    });
  }
  renderPassion();

  /* #hanhat_code_ — Mở/đóng modal Passion */
  function openTopic(topic) {
    topicIcon.textContent = topic.icon;
    topicTitle.textContent = topic.title;
    topicDesc.textContent = topic.desc;
    topicImage.src = topic.image;
    topicImage.onerror = function () { this.onerror = null; this.style.display = 'none'; };
    topicList.innerHTML = '';
    topic.basics.forEach(function (item) {
      const li = document.createElement('li');
      li.textContent = item;
      topicList.appendChild(li);
    });
    topicList2.innerHTML = '';
    topic.apps.forEach(function (item) {
      const li = document.createElement('li');
      li.textContent = item;
      topicList2.appendChild(li);
    });
    topicModal.classList.add('active');
    topicModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeTopic() {
    topicModal.classList.remove('active');
    topicModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  topicModalClose.addEventListener('click', closeTopic);
  topicModalOverlay.addEventListener('click', closeTopic);

  /* #hanhat_code_ — Mở/đóng modal Trường học */
  function openSchool(key) {
    const s = SCHOOLS[key];
    if (!s) return;
    schoolModalIcon.textContent = s.icon;
    schoolModalStatus.textContent = s.status;
    schoolModalTitle.textContent = s.title;
    schoolModalDesc.textContent = s.desc;
    schoolTiktokBtn.href = s.tiktok;
    schoolWebsiteBtn.href = s.facebook;
    schoolModal.classList.add('active');
    schoolModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeSchool() {
    schoolModal.classList.remove('active');
    schoolModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  document.querySelectorAll('.edu-card').forEach(function (card) {
    card.addEventListener('click', function () {
      openSchool(card.dataset.school);
    });
  });
  schoolModalClose.addEventListener('click', closeSchool);
  schoolModalOverlay.addEventListener('click', closeSchool);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (topicModal.classList.contains('active')) closeTopic();
      if (schoolModal.classList.contains('active')) closeSchool();
    }
  });

  /* #hanhat_code_ — Render Achievements */
  function renderAchievements() {
    if (!achievementsGrid) return;
    achievementsGrid.innerHTML = '';
    if (ACHIEVEMENTS.length === 0) {
      if (achievementsEmpty) achievementsEmpty.style.display = 'block';
      achievementsGrid.style.display = 'none';
      return;
    }
    if (achievementsEmpty) achievementsEmpty.style.display = 'none';
    achievementsGrid.style.display = 'grid';
    ACHIEVEMENTS.forEach(function (a, idx) {
      const card = document.createElement('div');
      card.className = 'achievement-card reveal';
      card.style.transitionDelay = (idx * 0.08) + 's';
      card.innerHTML =
        '<div class="achievement-icon">' + a.icon + '</div>' +
        '<h3 class="achievement-title">' + a.title + '</h3>' +
        '<p class="achievement-desc">' + a.desc + '</p>' +
        '<div class="achievement-meta">' + a.meta + '</div>';
      achievementsGrid.appendChild(card);
      revealObserver.observe(card);
    });
  }
  renderAchievements();

  /* #hanhat_code_ — Render Journey */
  function renderJourney() {
    if (!timeline) return;
    timeline.innerHTML = '';
    JOURNEY.forEach(function (item, idx) {
      const el = document.createElement('div');
      el.className = 'timeline-item reveal';
      el.style.transitionDelay = (idx * 0.08) + 's';
      el.innerHTML =
        '<div class="timeline-year">' + item.year + '</div>' +
        '<div class="timeline-title">' + item.title + '</div>' +
        '<div class="timeline-desc">' + item.desc + '</div>';
      timeline.appendChild(el);
      revealObserver.observe(el);
    });
  }
  renderJourney();

  /* #hanhat_code_ — Particles nền */
  let particlesCtx, particlesDpr;
  let particles = [];
  function initParticles() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    particlesCanvas.width = window.innerWidth * dpr;
    particlesCanvas.height = window.innerHeight * dpr;
    particlesCanvas.style.width = window.innerWidth + 'px';
    particlesCanvas.style.height = window.innerHeight + 'px';
    particlesCtx = particlesCanvas.getContext('2d');
    particlesDpr = dpr;
    particles = [];
    const count = window.innerWidth < 768 ? 40 : 80;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * particlesCanvas.width,
        y: Math.random() * particlesCanvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.6 + 0.4,
        alpha: Math.random() * 0.6 + 0.2,
        hue: Math.random() > 0.7 ? 220 : (Math.random() > 0.5 ? 260 : 190)
      });
    }
  }
  function drawParticles() {
    if (!particlesCtx) return;
    particlesCtx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = particlesCanvas.width;
      if (p.x > particlesCanvas.width) p.x = 0;
      if (p.y < 0) p.y = particlesCanvas.height;
      if (p.y > particlesCanvas.height) p.y = 0;
      const twinkle = 0.7 + Math.sin(Date.now() * 0.001 + i) * 0.3;
      particlesCtx.beginPath();
      particlesCtx.arc(p.x, p.y, p.r * particlesDpr, 0, Math.PI * 2);
      particlesCtx.fillStyle = 'hsla(' + p.hue + ', 90%, 70%, ' + (p.alpha * twinkle) + ')';
      particlesCtx.fill();
    }
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 120 * particlesDpr;
        if (dist < maxDist) {
          particlesCtx.beginPath();
          particlesCtx.moveTo(particles[i].x, particles[i].y);
          particlesCtx.lineTo(particles[j].x, particles[j].y);
          particlesCtx.strokeStyle = 'rgba(79, 140, 255, ' + (0.08 * (1 - dist / maxDist)) + ')';
          particlesCtx.lineWidth = 0.6 * particlesDpr;
          particlesCtx.stroke();
        }
      }
    }
    requestAnimationFrame(drawParticles);
  }
  initParticles();
  requestAnimationFrame(drawParticles);

  window.addEventListener('resize', function () {
    clearTimeout(window.__resizeTimer);
    window.__resizeTimer = setTimeout(initParticles, 250);
  });

  /* #hanhat_code_ — Particles Dream */
  function createDreamParticles() {
    if (!dreamParticles) return;
    dreamParticles.innerHTML = '';
    const count = 25;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      const size = Math.random() * 3 + 1;
      p.style.cssText =
        'position:absolute;width:' + size + 'px;height:' + size + 'px;border-radius:50%;' +
        'background:radial-gradient(circle, #fff, rgba(79,140,255,0.6));' +
        'box-shadow:0 0 ' + (size * 4) + 'px rgba(79,140,255,0.8);' +
        'left:' + (Math.random() * 100) + '%;top:' + (Math.random() * 100) + '%;' +
        'opacity:' + (Math.random() * 0.6 + 0.3) + ';' +
        'animation:dreamFloat ' + (6 + Math.random() * 8) + 's ease-in-out infinite alternate;' +
        'animation-delay:' + (Math.random() * 4) + 's;';
      dreamParticles.appendChild(p);
    }
  }
  const dreamStyle = document.createElement('style');
  dreamStyle.textContent =
    '@keyframes dreamFloat {' +
    '  0% { transform: translate(0, 0) scale(1); opacity: 0.3; }' +
    '  50% { transform: translate(' + (Math.random() * 40 - 20) + 'px, ' + (Math.random() * 40 - 20) + 'px) scale(1.3); opacity: 0.9; }' +
    '  100% { transform: translate(0, 0) scale(1); opacity: 0.3; }' +
    '}';
  document.head.appendChild(dreamStyle);
  createDreamParticles();

  /* #hanhat_code_ — Parallax nhẹ */
  let parallaxTick = false;
  window.addEventListener('scroll', function () {
    if (!parallaxTick) {
      requestAnimationFrame(function () {
        const dreamSection = document.getElementById('dream');
        if (dreamSection) {
          const rect = dreamSection.getBoundingClientRect();
          const offset = rect.top * 0.05;
          const big = dreamSection.querySelector('.dream-big');
          if (big) big.style.transform = 'translateY(' + offset + 'px)';
        }
        parallaxTick = false;
      });
      parallaxTick = true;
    }
  }, { passive: true });

  /* #hanhat_code_ — Khởi động */
  updateActiveNav();

  console.log(
    '%c👋 Chào bạn, mình là Hà Nhật (venom)!',
    'color:#4f8cff; font-size:14px; font-weight:bold;'
  );
  console.log(
    '%cFacebook: ' + PROFILE.facebook,
    'color:#1877f2; font-size:12px;'
  );
  console.log(
    '%cTikTok: ' + PROFILE.tiktok,
    'color:#FE2C55; font-size:12px;'
  );

})();