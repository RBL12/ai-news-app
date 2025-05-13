const apiKey = '71680848ee1740f8b842212d153fc24f';

async function getNews() {
  const query = document.getElementById('search').value || 'latest';
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
      <p>${article.description || "No description available."}</p>
      <button onclick="summarize('${article.description || ''}')">Summarize</button>
    `;
    container.appendChild(div);
  });
}

function summarize(text) {
  alert("AI summary feature coming soon!");
}
