/* ===================================================================
   UMAIR.DEV — Portfolio JavaScript
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ===========================================
     1. TYPING ANIMATION
     =========================================== */
  const typingEl = document.getElementById('typingText');
  const phrases = [
    'Mobile Developer',
    'React Native Expert',
    'UI/UX Enthusiast',
    'App Architect'
  ];
  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typeDelay = 80;

  function typeWriter() {
    const current = phrases[phraseIdx];

    if (isDeleting) {
      typingEl.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      typeDelay = 40;
    } else {
      typingEl.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      typeDelay = 80;
    }

    if (!isDeleting && charIdx === current.length) {
      typeDelay = 2200;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      typeDelay = 400;
    }

    setTimeout(typeWriter, typeDelay);
  }

  typeWriter();

  /* ===========================================
     2. NAVBAR SCROLL EFFECT
     =========================================== */
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  function handleNavScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  /* ===========================================
     3. MOBILE MENU
     =========================================== */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu on link click
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  /* ===========================================
     4. ACTIVE NAV HIGHLIGHTING
     =========================================== */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    const scrollPos = window.scrollY + window.innerHeight / 3;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  /* ===========================================
     5. SCROLL REVEAL (IntersectionObserver)
     =========================================== */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay || '0', 10);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ===========================================
     6. STAT COUNTER ANIMATION
     =========================================== */
  const statNumbers = document.querySelectorAll('.stat-number');
  let statsAnimated = false;

  function animateCounters() {
    if (statsAnimated) return;
    statsAnimated = true;

    statNumbers.forEach(stat => {
      const target = parseInt(stat.dataset.target, 10);
      const duration = 2000;
      const startTime = performance.now();

      function updateCount(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);
        stat.textContent = current;

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      }

      requestAnimationFrame(updateCount);
    });
  }

  const statsSection = document.querySelector('.stats-grid');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    statsObserver.observe(statsSection);
  }

  /* ===========================================
     7. SKILL BAR ANIMATION
     =========================================== */
  const skillFills = document.querySelectorAll('.skill-fill');

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetWidth = entry.target.dataset.width;
        entry.target.style.width = targetWidth + '%';
        entry.target.classList.add('animate');
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  skillFills.forEach(fill => skillObserver.observe(fill));

  /* ===========================================
     8. SMOOTH SCROLL FOR NAV LINKS
     =========================================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ===========================================
     9. CONTACT FORM
     =========================================== */
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) return;

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalHTML = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span>Opening Mail...</span>';
      submitBtn.disabled = true;

      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`Hi Umair,\n\n${message}\n\n---\nSender: ${name}\nEmail: ${email}`);
      const mailtoUrl = `mailto:hello@umair.dev?subject=${subject}&body=${body}`;

      window.location.href = mailtoUrl;

      setTimeout(() => {
        submitBtn.innerHTML = originalHTML;
        submitBtn.disabled = false;
        contactForm.reset();
        if (formSuccess) {
          formSuccess.innerHTML = '<span class="success-icon">✉️</span><p>Email client opened! You can also email directly at <a href="mailto:hello@umair.dev" style="color:var(--text-primary);text-decoration:underline;">hello@umair.dev</a>.</p>';
          formSuccess.classList.add('show');

          setTimeout(() => {
            formSuccess.classList.remove('show');
          }, 8000);
        }
      }, 1000);
    });
  }

  /* ===========================================
     10. BACK TO TOP & DYNAMIC YEAR
     =========================================== */
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  /* ===========================================
     11. THREE.JS 3D BLOB
     =========================================== */
  const canvas = document.getElementById('blob-canvas');
  if (canvas && window.THREE) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Create a sphere
    const geometry = new THREE.SphereGeometry(2, 64, 64);
    
    // We'll use a standard material and deform vertices in the render loop using Math
    const material = new THREE.MeshStandardMaterial({
      color: 0x475569, // slate-600
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    
    const blob = new THREE.Mesh(geometry, material);
    scene.add(blob);
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    
    camera.position.z = 5;
    
    // Original vertices for reference during deformation
    const originalPositions = [];
    const positionAttribute = geometry.getAttribute('position');
    for (let i = 0; i < positionAttribute.count; i++) {
      originalPositions.push(
        new THREE.Vector3(
          positionAttribute.getX(i),
          positionAttribute.getY(i),
          positionAttribute.getZ(i)
        )
      );
    }
    
    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    document.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      mouseY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    });
    
    let time = 0;
    function animate() {
      requestAnimationFrame(animate);
      time += 0.01;
      
      targetX = mouseX * 0.5;
      targetY = mouseY * 0.5;
      
      blob.rotation.x += 0.002;
      blob.rotation.y += 0.003;
      
      // Blob deformation
      const posAttribute = geometry.getAttribute('position');
      const v = new THREE.Vector3();
      
      for (let i = 0; i < posAttribute.count; i++) {
        v.copy(originalPositions[i]);
        // Add noise based on position and time
        const noise = 
          Math.sin(v.x * 2 + time) * 0.1 + 
          Math.sin(v.y * 2 + time * 1.5) * 0.1 + 
          Math.sin(v.z * 2 + time * 0.8) * 0.1;
        
        v.normalize().multiplyScalar(2 + noise);
        
        posAttribute.setXYZ(i, v.x, v.y, v.z);
      }
      
      posAttribute.needsUpdate = true;
      
      // Parallax effect
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (-targetY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      
      renderer.render(scene, camera);
    }
    
    animate();
    
    // Handle resize
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  /* ===========================================
     12. KEYBOARD NAVIGATION SUPPORT
     =========================================== */
  document.addEventListener('keydown', (e) => {
    // Escape closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      navToggle.classList.remove('open');
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      navToggle.focus();
    }
  });

});
