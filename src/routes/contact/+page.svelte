<script>
    import { fade, fly } from "svelte/transition";
    import { onMount } from "svelte";
    import Header from "$lib/components/Header.svelte";
    let showIntro = true;

    onMount(() => {
        document.body.style.overflow = "hidden";
        setTimeout(() => {
            showIntro = false;
            document.body.style.overflow = "auto";
        }, 1000);
    })
</script>

<svelte:head>
    <title>YU BEEN</title>
</svelte:head>

<style>
    .intro-screen {
        position: fixed;
        inset: 0;
        background: black;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        text-align: center;
    }

    .intro-text h1 {
        font-size: clamp(3rem, 10vw, 7rem);
        margin-top: 0;
    }

    .footer-panel {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: #111;
        display: flex;
        flex-direction: column;
        z-index: 50;
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

    .content-main {
        margin-top: auto;
        margin-bottom: auto;
    }

    .cta-container {
        display: flex;
        flex-direction: column;
        transform: translateY(70px);
    }

    .cta-text {
        font-size: clamp(4rem, 12vw, 10rem);
        font-weight: 900;
        line-height: 0.8;
        margin-left: -8px;
        margin-top: 250px;
        background: linear-gradient(
            to right,
            #fff 20%,
            #ff3e00 40%,
            #ffbe00 60%,
            #fff 80%
        );
        background-size: 200% auto;
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        animation: shine 5s linear infinite;
        text-transform: uppercase;
        transform: scaleY(1.8);
        clip-path: inset(0 100% 0 0);
        animation: shine 5s linear infinite, revealText 1.1s cubic-bezier(0.77, 0, 0.175, 1) 1.1s forwards;
    }

    @keyframes revealText {
        from {
            clip-path: inset(0 100% 0 0);
        } 
        to {
            clip-path: inset(0 0 0 0)
        }
    }

    @keyframes shine {
        to {
            background-position: 200% center;
        }
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
        .wrapper {
            padding: 30px 20px 40px 20px;
        }

        .content-main {
            margin-top: auto;
            margin-bottom: 20px;
        }

        .social-links {
            gap: 6px;
            width: 100%;
            margin-bottom: 90px;
        }

        .social-btn {
            padding: 12px 0;
            font-size: 10px;
            flex: 1;
            text-align: center;
        }

        .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
            width: 100%;
        }

        .credits {
            text-align: left;
            font-size: 11px;
            width: 100%;
        }

        .cta-container {
            transform: translateY(0);
        }

        .cta-text {
            font-size: 15vw;
            margin-top: 0;
            transform: scaleY(1.3);
            line-height: 0.8;
        }
    }
</style>
{#if showIntro}
<div class="intro-screen" transition:fade={{duration: 300}}>
    <div class="intro-text">
        <h1 transition:fly={{y: -300, duration: 400}}>Contact</h1>
    </div>
</div>
{/if}

<Header/>
<div class="footer-panel">
    <div class="wrapper">
        <header class="header">
            <div class="copyright">© Yu Been 2025</div>
        </header>
        <section class="content-main">
            <div class="cta-container">
                <a href="mailto:yubeen721@gmail.com" class="cta-text-link"><h1 class="cta-text">CONTACT</h1></a>
            </div>
        </section>
        <footer class="footer-bottom">
            <div class="social-links">
                <a href="https://github.com/fru1tyyyy" target="_blank" rel="noopener noreferrer" class="social-btn">GITHUB</a>
                <a href="https://www.linkedin.com/in/been-yu" target="_blank" rel="noopener noreferrer" class="social-btn">LINKEDIN</a>
                <a href="https://linktr.ee/fru1tyyyy" target="_blank" rel="noopener noreferrer" class="social-btn">LINKTREE</a>
            </div>
            <div class="credits">
                <p>Design by <span>Yu Been</span></p>
                <p>yubeen721@gmail.com</p>
            </div>
        </footer>
    </div>
</div>
