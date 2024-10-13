const apiKey = 'clZAZb9PIl_Sm3LAf5k9MUKYqa3bCSjevy0jaU_-XDl2Y4Sv';
const newsContainer = document.getElementById('news-container');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

async function fetchNews(query = '') {
    try {
        let apiUrl = `https://api.currentsapi.services/v1/latest-news?apiKey=${apiKey}&country=PH`;
        if (query) {
            apiUrl += `&keywords=${encodeURIComponent(query)}`;
        }

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            displayNews(data.news);
        } else {
            throw new Error(data.message || 'Failed to fetch news');
        }
    } catch (error) {
        newsContainer.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    }
}

function displayNews(articles) {
    newsContainer.innerHTML = '';
    if (articles.length === 0) {
        newsContainer.innerHTML = '<p>No news articles available at the moment.</p>';
        return;
    }

    articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        // Check if image is available and not "None"
        const imageHTML = article.image && article.image !== "None" 
            ? `<img src="${article.image}" alt="${article.title}" style="max-width:100%; height:auto; margin-bottom: 10px;">`
            : '';

        newsItem.innerHTML = `
            ${imageHTML}
            <h2><a href="${article.url}" target="_blank">${article.title}</a></h2>
            <p><strong>Published:</strong> ${new Date(article.published).toLocaleDateString()}</p>
            <p>${article.description}</p>
        `;

        newsContainer.appendChild(newsItem);
    });
}


// Fetch news on page load
fetchNews();

// Add event listener for search
searchBtn.addEventListener('click', () => {
    const query = searchInput.value;
    fetchNews(query);
});
