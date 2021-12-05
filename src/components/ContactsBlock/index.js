import './style';


class ContactsBlock {
    constructor(container) {
        this.init(container);
    }

    init(container) {
        this.render(container);
    }

    render(container) {
        const article = document.createElement('article');
        article.classList.add('contacts');
        article.innerHTML = 'CONTACTS';

        container.appendChild(article);
    }
}

export default ContactsBlock;