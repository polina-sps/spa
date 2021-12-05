import NewsBlock from './components/NewsBlock';
import AboutBlock from './components/AboutBlock';
import ContactsBlock from './components/ContactsBlock';

const APP_ROUTES = {
    news: 'news',
    about: 'about',
    contacts: 'contacts',
};

class App {
    constructor(container) {
        return this.init(container);

    }
    renderNavigation(container) {
        const nav = document.createElement('nav');

        Object.keys(APP_ROUTES).forEach((route) => {
            const a = document.createElement('a');
            a.innerHTML = route.toUpperCase();
            a.href = '#';
            a.id = APP_ROUTES[route];
            // a.setAttribute('data-test-id' = APP_ROUTES[route]);

            nav.appendChild(a);
        });

        nav.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                e.preventDefault();

                window.location.hash = e.target.id;
            } else {
                return;
            }
        });


        container.appendChild(nav);

    }

    renderNewsBlock(container) {
        const news = new NewsBlock(container);
    }

    renderContactsBlock(container) {
        const contacts = new ContactsBlock(container);
    }

    renderAboutBlock(container) {
        const about = new AboutBlock();

        container.appendChild(about);
    }

    init(container) {
        //обработчики
        //прочая работа

        window.onhashchange = () => {
            this.render(container);
        };

        return this.render(container);
    }

    render(container) {
        console.log('RENDER');
        const el = document.createElement('div');
        this.renderNavigation(el);

        switch (window.location.hash.slice(1)) {
            case APP_ROUTES.news:
                this.renderNewsBlock(el);
                break;
            case APP_ROUTES.contacts:
                this.renderContactsBlock(el);
                break;
            case APP_ROUTES.about:
                this.renderAboutBlock(el);
                break;
            default:
        }
        container.innerText = '';
        container.appendChild(el);
    }
}

export default App;