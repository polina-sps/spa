class NewsBlock {
    constructor(container) {
        this.init(container);
    }

    init(container) {
        this.render(container);
    }

    render(container) {
        const article = document.createElement('article');
        article.innerHTML = 'NEWS ARTICLE';

        container.appendChild(article);
    }
}

export default NewsBlock;