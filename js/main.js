/* ========= chuyển màn ========= */
function next(id) {
    document.querySelector(".active").classList.remove("active");
    document.getElementById("screen" + id).classList.add("active");
}

/* ========= typing ========= */
const text = "Xin chào... Hôm nay anh làm trang web này cho một người rất dễ thương 💗";
let i = 0;

function type() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text[i];
        i++;
        setTimeout(type, 40);
    }
}
type();

/* ========= counter ========= */
const startDate = new Date("Dec 20, 2025 00:00:00");

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60) % 24);
    const minutes = Math.floor(diff / (1000 * 60) % 60);

    document.getElementById("counter").innerHTML =
        `${days} ngày ${hours} giờ ${minutes} phút`;
}

setInterval(updateCounter, 1000);

/* ========= nút chạy ========= */
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseenter", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});


noBtn.addEventListener("click", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});


noBtn.addEventListener("blur", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});


/* ========= đồng ý ========= */
function yes() {
    next(6);
    startConfetti();
}

/* ========= confetti ========= */
function startConfetti() {
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];

    for (let i = 0; i < 120; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 6 + 2,
            d: Math.random() * 5 + 1
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#ff8fb1";

        pieces.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();

            p.y += p.d;
            if (p.y > canvas.height) p.y = 0;
        });

        requestAnimationFrame(draw);
    }

    draw();
}


/* ===== timeline animation ===== */

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll(".timeline-item")
    .forEach(el => observer.observe(el));