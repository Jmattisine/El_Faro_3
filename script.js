// Función para mostrar la hora en vivo
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `Hora actual: ${hours}:${minutes}:${seconds}`;
}

// Actualizar la hora cada segundo
setInterval(updateClock, 1000);

// Función para cargar artículos dinámicamente
function loadArticles() {
    const articlesContainer = document.getElementById('articles-container');
    const articles = [
        { title: 'El impacto de la tecnología en el trabajo', description: 'La digitalización está cambiando la manera en que trabajamos y nos relacionamos en el mundo laboral.' },
        { title: 'La educación post-pandemia', description: 'Cómo las nuevas tecnologías y el aprendizaje en línea están transformando la educación.' },
        { title: 'El futuro de la energía renovable', description: 'Las inversiones en energías renovables están liderando el camino hacia un futuro más sostenible.' }
    ];

    articles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.innerHTML = `<h3>${article.title}</h3><p>${article.description}</p>`;
        articlesContainer.appendChild(articleElement);
    });

    // Actualizar el contador de artículos
    document.getElementById('article-count').textContent = `Total de artículos: ${articles.length}`;
}

// Función para agregar un nuevo artículo
document.getElementById('article-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('article-title').value;
    const description = document.getElementById('article-description').value;
    
    if (title && description) {
        const newArticle = { title, description };
        
        const articlesContainer = document.getElementById('articles-container');
        const articleElement = document.createElement('article');
        articleElement.innerHTML = `<h3>${newArticle.title}</h3><p>${newArticle.description}</p>`;
        articlesContainer.appendChild(articleElement);
        
        // Limpiar formulario
        document.getElementById('article-title').value = '';
        document.getElementById('article-description').value = '';
        
        // Actualizar el contador de artículos
        const currentCount = document.getElementById('article-count').textContent.split(': ')[1];
        document.getElementById('article-count').textContent = `Total de artículos: ${parseInt(currentCount) + 1}`;
    }
});

// Inicializar cargando artículos
window.onload = loadArticles;

// Formulario de contacto (simulación de envío)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('contact-name').value;
    const message = document.getElementById('contact-message').value;

    if (name && message) {
        alert(`Gracias por contactarnos, ${name}! Hemos recibido tu mensaje: "${message}".`);
        
        // Limpiar formulario
        document.getElementById('contact-name').value = '';
        document.getElementById('contact-message').value = '';
    }
});
