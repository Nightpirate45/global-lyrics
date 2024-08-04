document.getElementById('lyricsForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const authorName = document.getElementById('authorName').value;
    const language = document.getElementById('language').value;
    const lyricsText = document.getElementById('lyricsText').value;

    const lyricCard = document.createElement('div');
    lyricCard.className = 'lyric-card';
    lyricCard.innerHTML = `
        <h3>${authorName}</h3>
        <p><strong>Language:</strong> ${language}</p>
        <p>${lyricsText}</p>
    `;

    document.getElementById('lyricsContainer').appendChild(lyricCard);

    // Clear form
    document.getElementById('authorName').value = '';
    document.getElementById('language').value = '';
    document.getElementById('lyricsText').value = '';
});

// Ad Integration (Example using Google AdSense)
const adScript = document.createElement('script');
adScript.async = true;
adScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
document.head.appendChild(adScript);

adScript.onload = () => {
    const adContainer = document.createElement('div');
    adContainer.innerHTML = `
        <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-XXXXXXXXXXXXXXX"
            data-ad-slot="XXXXXXXXXXXXXXX"
            data-ad-format="auto"></ins>
    `;
    document.querySelector('.footer').appendChild(adContainer);
    (adsbygoogle = window.adsbygoogle || []).push({});
};
