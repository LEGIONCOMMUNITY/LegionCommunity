const discord = document.getElementById('buttonDiscord').onclick = function() {
    window.location.href = "html/discord.html";
};

const service = document.getElementById('buttonService').onclick = function() {
    setTimeout(() => {
        window.location.href = 'html/service.html';
    }, 1000);
};

const mods = document.getElementById('buttonMods').onclick = function() {
    setTimeout (() => {
        window.location.href = 'html/mods.html';
    }, 1000);
};