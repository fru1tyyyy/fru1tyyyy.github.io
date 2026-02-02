<script>
    import { onMount } from "svelte";

    let active = false;

    function handleScroll() {
        const scrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 20;
        active = scrollBottom;
    }

    onMount(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const scrollToTop = () => {
        const start = window.scrollY;
        const duration = 1200;
        /**
         * @type {number | null}
         */
        let startTime = null;

        /**
         * @param {number | null} time
         */
        function animate(time){
            if(!startTime) startTime = time;
            const timeElapsed = time - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = 0.5 * (1 - Math.cos(Math.PI * progress));
            window.scrollTo(0, start * (1 - ease));
            if(progress < 1){
                requestAnimationFrame(animate);
            }
        }
        requestAnimationFrame(animate);
    }
</script>
<style>
    .footer-panel {
        position: fixed;
        bottom: -100vh;
        left: 0;
        width: 100%;
        height: 100vh;
        background: #111;
        display: flex;
        flex-direction: column;
        transition: bottom 2s cubic-bezier(0.19, 1, 0.22, 1);
        z-index: 50;
    }

    .footer-panel.active {
        bottom: 0;
    }

    .wrapper {
        height: 100%;
        display: flex;
        flex-direction: column; 
        padding: 60px 80px;
        font-family: 'Inter', -apple-system, sans-serif;
        color: #fff;
        box-sizing: border-box;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-shrink: 0;
    }

    .back-to-top {
        display: flex;
        align-items: center;
        gap: 15px;
        background: none;
        border: none;
        font-weight: 600;
        cursor: pointer;
        font-size: 13px;
        color: #fff;
    }

    .arrow-circle {
        width: 45px;
        height: 45px;
        background-color: #fff;
        color: #000;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content-main {
        margin-top: autopx; 
        margin-bottom: auto; 
    }

    .cta-container {
        display: flex;
        flex-direction: column;
        transform: translateY(70px);
    }

    .cta-text {
        font-size: clamp(5rem, 22vw, 17rem);
        font-weight: 900;
        line-height: 0.8;
        margin-left: -8px;
        margin-top: 250px;
        background: linear-gradient(to right, #fff 20%, #ff3e00 40%, #ffbe00 60%, #fff 80%);
        background-size: 200% auto;
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        animation: shine 5s linear infinite;
        text-transform: uppercase;
        transform: scaleY(1.8);
    }

    @keyframes shine {
        to { background-position: 200% center; }
    }

    .footer-bottom {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        flex-shrink: 0;
        padding-top: 20px;
    }

    .social-links {
        display: flex;
        gap: 12px;
    }

    .social-btn {
        padding: 16px 40px;
        border: 1px solid #444;
        border-radius: 100px;
        text-decoration: none;
        color: #fff;
        font-size: 13px;
        font-weight: 600;
        transition: all 0.3s;
    }

    .social-btn:hover {
        background: #fff;
        color: #000;
    }

    .credits {
        text-align: right;
        font-size: 14px;
        color: #666;
    }

    .cta-text-link {
        text-decoration: none;
        color: inherit; 
   }

    .cta-text-link:hover {
        cursor: pointer;
        opacity: 0.9; 
   }

    @media (max-width: 768px) {
        .wrapper { padding: 30px 20px 40px 20px; }
        .back-to-top { position: absolute; bottom: 30px; right: 20px; z-index: 100;}
        .arrow-circle { width: 50px; height: 50px; }

        .content-main {
            margin-top: auto;
            margin-bottom: 20px;
        }

        .social-links { gap: 6px; width: 100%; margin-bottom: 90px; }
        .social-btn { padding: 12px 0; font-size: 10px; flex: 1; text-align: center; }
        .footer-bottom { flex-direction: column; align-items: flex-start; gap: 15px; width: 100%; }
        .credits { text-align: left; font-size: 11px; width: 100%; }
        .cta-container { transform: translateY(0); }
        .cta-text { font-size: 15vw; margin-top: 0; transform: scaleY(1.3); line-height: 0.8; }
    }
</style>
<div class="footer-panel" class:active>
    <div class="wrapper">
        <header class="header">
            <div class="copyright">© Yu Been 2025</div>
            <button class="back-to-top" on:click={scrollToTop} aria-label="Back to top">
                <div class="arrow-circle">↑</div>
            </button>
        </header>

        <section class="content-main">
            <div class="cta-container">
                <a href="mailto:yubeen721@gmail.com" class="cta-text-link">
                    <h1 class="cta-text">CONTACT</h1>
                </a>
            </div>
        </section>

        <footer class="footer-bottom">
            <div class="social-links">
                <a href="https://github.com/fru1tyyyy" target="_blank" class="social-btn">GITHUB</a>
                <a href="https://www.linkedin.com/in/been-yu" target="_blank" class="social-btn">LINKEDIN</a>
                <a href="https://linktr.ee/fru1tyyyy" target="_blank" class="social-btn">LINKTREE</a>
            </div>
            <div class="credits">
                <p>Design by <span>Yu Been</span></p>
                <p>yubeen721@gmail.com</p>
            </div>
        </footer>
    </div>
</div>