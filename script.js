document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll (Lenis)
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Register GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Preloader
    const preloader = document.getElementById('preloader');
    const loaderProgress = document.querySelector('.loader-progress');
    
    gsap.to(loaderProgress, {
        width: '100%',
        duration: 2.5,
        ease: 'power4.inOut',
        onComplete: () => {
            gsap.to(preloader, {
                opacity: 0,
                scale: 1.1,
                filter: 'blur(20px)',
                duration: 1.5,
                ease: 'power3.inOut',
                onComplete: () => {
                    preloader.style.display = 'none';
                    startAnimations();
                }
            });
        }
    });

    // Countdown Timer
    const targetDate = new Date('May 28, 2026 07:45:00').getTime();
    function updateCountdown() {
        const now = new Date().getTime();
        const diff = targetDate - now;
        if (diff < 0) return;

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        const dEl = document.getElementById('days');
        const hEl = document.getElementById('hours');
        const mEl = document.getElementById('minutes');

        if (dEl) dEl.innerText = String(d).padStart(2, '0');
        if (hEl) hEl.innerText = String(h).padStart(2, '0');
        if (mEl) mEl.innerText = String(m).padStart(2, '0');
    }
    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Cinematic Animations
    function startAnimations() {
        // Hero Parallax & Reveal
        gsap.from('.hero-image-overlay img', {
            scale: 1.4,
            filter: 'brightness(0) blur(20px)',
            duration: 4,
            ease: 'power4.out'
        });
        
        gsap.from('.hero-content > *', {
            y: 100,
            opacity: 0,
            filter: 'blur(10px)',
            stagger: 0.2,
            duration: 2,
            ease: 'expo.out'
        });

        // Floating Motion for Hero
        gsap.to('.hero-content', {
            y: -20,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });

        // Section Reveals with ScrollTrigger
        const sections = ['#invitation', '#venue', '#ending'];
        sections.forEach(id => {
            const el = document.querySelector(id + ' .container');
            if (!el) return;

            gsap.from(el, {
                scrollTrigger: {
                    trigger: id,
                    start: 'top 80%',
                },
                y: 100,
                opacity: 0,
                duration: 1.5,
                ease: 'power4.out'
            });
        });

        // Timeline boxes stagger
        gsap.from('.event-box', {
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            stagger: 0.3,
            duration: 1.5,
            ease: 'power4.out'
        });
        
        // Heart Pulse interaction
        gsap.to('.heart-path', {
            opacity: 0.7,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }

    // Music Logic
    const musicBtn = document.getElementById('music-toggle');
    let isPlaying = false;
    // Updated to a high-quality All of Me Piano Cover style track
    const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'); 
    audio.loop = true;

    if (musicBtn) {
        musicBtn.addEventListener('click', () => {
            if (isPlaying) {
                audio.pause();
                musicBtn.querySelector('.music-icon').innerText = '🎵';
                gsap.to(musicBtn, { scale: 1, duration: 0.3 });
            } else {
                audio.play();
                musicBtn.querySelector('.music-icon').innerText = '🔊';
                gsap.to(musicBtn, { scale: 1.2, duration: 0.3 });
            }
            isPlaying = !isPlaying;
        });
    }

    // Copy Address
    const copyBtn = document.getElementById('copy-address');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText("Vellu Mahal A/C, Trichy bypass, Dindigul").then(() => {
                const toast = document.createElement('div');
                toast.className = 'toast';
                toast.innerText = 'Address Copied to Clipboard';
                document.body.appendChild(toast);
                
                gsap.from(toast, { y: 20, opacity: 0, duration: 0.4 });
                setTimeout(() => {
                    gsap.to(toast, { y: -20, opacity: 0, duration: 0.4, onComplete: () => toast.remove() });
                }, 2500);
            });
        });
    }
});
