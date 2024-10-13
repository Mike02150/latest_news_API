document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'clZAZb9PIl_Sm3LAf5k9MUKYqa3bCSjevy0jaU_-XDl2Y4Sv';
    const newsContainer = document.getElementById('news-container');
    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search-input");
    const loadingElement = document.getElementById('loading-indicator');
    const toggleDarkModeButton = document.getElementById('toggle-dark-mode');

    async function fetchNews(query = '') {
        toggleLoading(true);
        let apiUrl = `https://api.currentsapi.services/v1/latest-news?apiKey=${apiKey}&language=en&country=PH`;
        if (query) {
            apiUrl = `https://api.currentsapi.services/v1/search?apiKey=${apiKey}&keywords=${query}&language=en&country=PH`;
        }

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (response.ok) {
                displayNews(data.news);
            } else {
                throw new Error(data.message || 'Failed to fetch news');
            }
        } catch (error) {
            newsContainer.innerHTML = `<p class="error">Error: ${error.message}</p>`;
        } finally {
            toggleLoading(false);
        }
    }

    function displayNews(articles) {
        newsContainer.innerHTML = '';
        if (!articles || articles.length === 0) {
            newsContainer.innerHTML = '<p>No news articles available at the moment.</p>';
            return;
        }

        articles.forEach(article => {
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');

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

    function toggleLoading(isLoading) {
        loadingElement.style.display = isLoading ? 'block' : 'none';
    }

    searchButton.addEventListener("click", async () => {
        const query = searchInput.value.trim();
        if (query !== "") {
            toggleLoading(true);
            await fetchNews(query);
        } else {
            alert("Please enter a search query.");
        }
    });

    searchInput.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            searchButton.click();
        }
    });

    // Dark mode toggle
    toggleDarkModeButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });

    fetchNews(); // Fetch default news on page load
});
