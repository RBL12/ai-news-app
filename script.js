const apiKey = 'YOUR_NEWS_API_KEY'; // Get from newsapi.org

async function getNews() {
  const query = document.getElementById('search').value;
  const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();
  const container = document.getElementById('news-container');
  container.innerHTML = '';
  data.articles.forEach(article => {
    const div = document.createElement('div');
    div.className = 'article';
    div.innerHTML = `
      <h3>${article.title}</h3>
      <p>${article.description}</p>
      <button onclick="summarize('${article.description}')">Summarize</button>
    `;
    container.appendChild(div);
  });
}

function summarize(text) {
  alert("AI summary feature coming soon!");
}
