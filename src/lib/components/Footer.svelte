<script>
    import { onMount } from "svelte";
    let active = false;

    function handleScroll() {
        const scrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
        active = scrollBottom;
    }

    onMount(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
</script>
<style>
    .footer-panel {
        position: fixed;
        bottom: -100vh;
        left: 0;
        width: 100%;
        height: 100vh;
        background: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: bottom 0.7s ease;
        z-index: 50;
    }

    .footer-panel.active {
        bottom: 0;
    }

    .content {
        text-align: center;
        max-width: 900px;
        padding: 2rem;
        color: white;
    }

    h2 {
        font-size: clamp(3.5rem, 10vw, 6rem);
        font-weight: 700;
        letter-spacing: -0.03em;
        margin-bottom: 2.5rem;
    }

    .socials {
        display: flex;
        justify-content: center;
        gap: 1.25rem;
        flex-wrap: wrap;
        margin-bottom: 2.5rem;
    }

    .socials a {
        text-decoration: none;
        color: white;
        font-size: 0.95rem;
        padding: 0.55rem 1.4rem;
        border: 1px solid rgba(255,255,255,0.25);
        border-radius: 999px;
        transition: all 0.25s ease;
    }

    .socials a:hover {
        background: white;
        color: black;
        border-color: white;
    }

    .contact {
        font-size: 0.9rem;
        opacity: 0.6;
        display: flex;
        justify-content: center;
        gap: 2rem;
        flex-wrap: wrap;
    }
</style>

<div class="footer-panel" class:active>
    <div class="content">
        <h2>LETS CONNECT :D</h2>
        <div class="socials">
            <a href="https://github.com/fru1tyyyy" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/been-yu" target="_blank">LinkedIn</a>
            <a href="https://linktr.ee/fru1tyyyy" target="_blank">LinkTree</a>
        </div>
        <div class="contact">
            <span>Email: yubeen721@gmail.com</span>
            <span>Malaysia</span>
        </div>
    </div>
</div>