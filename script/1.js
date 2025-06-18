document.addEventListener('DOMContentLoaded', function() {
    // Membuat gelembung mengambang
    const gelembungContainer = document.getElementById('gelembung-container');
    const jumlahGelembung = window.innerWidth < 768 ? 15 : 30;
    
    for (let i = 0; i < jumlahGelembung; i++) {
        const gelembung = document.createElement('div');
        gelembung.classList.add('gelembung');
        
        // Ukuran acak antara 5px dan 30px
        const ukuran = Math.random() * 25 + 5;
        gelembung.style.width = `${ukuran}px`;
        gelembung.style.height = `${ukuran}px`;
        
        // Posisi acak
        gelembung.style.left = `${Math.random() * 100}%`;
        
        // Durasi animasi acak antara 10-20 detik
        const durasi = Math.random() * 10 + 10;
        gelembung.style.animationDuration = `${durasi}s`;
        
        // Delay acak
        gelembung.style.animationDelay = `${Math.random() * 5}s`;
        
        gelembungContainer.appendChild(gelembung);
    }
    
    // Animasi klik tombol
    const tombol = document.querySelector('.tombol');
    tombol.addEventListener('click', function() {
        this.classList.add('terklik');
        setTimeout(() => {
            window.open("https://github.com/LEGIONCOMMUNITY/LegionCommunity");
            this.classList.remove('terklik');
        }, 300);
    });
});