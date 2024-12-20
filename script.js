// script.js

const newsContainer = document.getElementById('news-container');

// Fetch news from an API
// const fetchNews = async () => {
//   try {
//     const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=1c5b47d5c32842bd85c09ab309f12b66');
//     const data = await response.json();

//     if (data.articles) {
//       displayNews(data.articles);
//     } else {
//       newsContainer.innerHTML = '<p>No news available at the moment.</p>';
//     }
//   } catch (error) {
//     console.error('Error fetching news:', error);
//     newsContainer.innerHTML = '<p>Failed to load news. Please try again later.</p>';
//   }
// };


const fetchNews = async () => {
  const mockArticles = [
    {
      title: " News 1",
      description: "This is the first mock news description.",
      url: "#",
      urlToImage: "https://via.placeholder.com/300",
    },
    {
      title: " News 2",
      description: "This is the second mock news description.",
      url: "#",
      urlToImage: "https://via.placeholder.com/300",
    },
    {
      title: " News 3",
      description: "This is the third mock news description.",
      url: "#",
      urlToImage: "https://via.placeholder.com/300",
    },
    {
      title: " News 4",
      description: "This is the fourth mock news description.",
      url: "#",
      urlToImage: "https://via.placeholder.com/300",
    },
  ];

  displayNews(mockArticles);
};


// Display news articles on the page
const displayNews = (articles) => {
  newsContainer.innerHTML = '';

  articles.forEach((article) => {
    const newsCard = document.createElement('div');
    newsCard.classList.add('news-card');

    newsCard.innerHTML = `
      <img src="${article.urlToImage || 'placeholder.jpg'}" alt="${article.title}">
      <div class="news-content">
        <h2>${article.title}</h2>
        <p>${article.description || 'No description available.'}</p>
        <a href="${article.url}" target="_blank">Read More</a>
      </div>
    `;

    newsContainer.appendChild(newsCard);
  });
};

// Call fetchNews on page load
fetchNews();
