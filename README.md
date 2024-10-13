# CurrentsAPI News App

This is a simple web application that fetches the latest news articles from the CurrentsAPI and allows users to search for news by keyword. It includes a loading indicator to enhance user experience by showing when data is being fetched.

## Features

- Fetches the latest news articles using the [CurrentsAPI](https://currentsapi.services/en/docs/).
- Provides a search functionality to retrieve news articles based on user input.
- Displays a loading indicator while fetching the news or search results.

## Prerequisites

- You need to have an API key from [CurrentsAPI](https://currentsapi.services/en/docs/). Replace the placeholder `apiKey` in `script.js` with your own API key.

## File Structure

- `index.html`: The main HTML file containing the layout of the webpage.
- `script.js`: The JavaScript file containing the logic to fetch news articles, handle search input, and toggle the loading indicator.
- `styles.css`: The CSS file containing the styles for the webpage, including the layout and the loading indicator.

## How It Works

1. When the page loads, it fetches the latest news articles from CurrentsAPI.
2. The user can search for news articles by entering a keyword and clicking the search button or pressing `Enter`.
3. While the news is being fetched (both on initial load and when searching), a loading indicator is displayed to inform the user that data is being retrieved.
4. The fetched news articles are displayed below the search bar, with images, titles, publication dates, and descriptions.
5. If an error occurs during the fetch operation, an error message is displayed to the user.

## How to Run

1. Clone or download this repository.
2. Open the `index.html` file in a web browser.
3. The latest news will be fetched automatically, and you can search for specific news articles using the search bar.

## Code Breakdown

### `index.html`

This file contains the layout of the webpage, including the search bar and the container for displaying news articles. It also includes a hidden loading indicator that will be toggled via JavaScript when the news is being fetched.

### `script.js`

- **`fetchNews(query)`**: Fetches the news articles from CurrentsAPI. It either fetches the latest news or searches by keyword depending on the `query` parameter.
- **`displayNews(articles)`**: Displays the news articles in the webpage.
- **`toggleLoading(isLoading)`**: Toggles the visibility of the loading indicator based on whether the news is being fetched.
  
### `styles.css`

This file contains the styles for the webpage, including the layout for the news container, search bar, and loading indicator.

## Example

1. Open `index.html` in a browser.
2. A message "Loading news articles, please wait..." will appear while the news is being fetched.
3. After a few moments, the latest news articles will be displayed.
4. Enter a search query (e.g., "technology") and press `Enter` or click "Search". The loading indicator will show again, and the search results will be displayed.

---
