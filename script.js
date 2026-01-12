document.addEventListener('DOMContentLoaded', () => {

    // Ambil elemen-elemen yang kita butuh
    const openButton = document.getElementById('open-button');
    const introScreen = document.getElementById('intro-screen');
    const cardScreen = document.getElementById('card-screen');
    const heartsContainer = document.getElementById('hearts-container');
    const birthdayMusic = document.getElementById('birthday-music'); // <-- TAMBAHAN

    // Apa yang terjadi pas tombol diklik
    openButton.addEventListener('click', () => {
        // 1. Sembunyikan layar pembuka
        introScreen.style.display = 'none';
        
        // 2. Tampilkan kartu ucapan
        cardScreen.classList.remove('hidden');

        // 3. Mulai animasi hati
        setInterval(createFloatingHeart, 300);

        // 4. PUTAR MUSIKNYA!
        birthdayMusic.play(); // <-- TAMBAHAN
    });

    // Fungsi untuk membuat satu hati
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
        heartsContainer.appendChild(heart);

        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
});