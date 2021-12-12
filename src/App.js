import Resume from './components/Resume';
import DataBlock from './components/DataBlock';
import Form from './components/Form';
import observer from './utils/observer';
import { DATA_RECEIVED } from './events';

// import Pizza from "./components/Pizza";

const APP_ROUTES = {
    resume: "resume",
    pizza: "to order pizza", //что будет показывать в адресной строке
    contacts: 'contacts',
    comments: 'comments',
};

class App {
    constructor(container) {
        return this.init(container);
    }

    renderNavigation(container) {
        const nav = document.createElement("nav");

        Object.keys(APP_ROUTES).forEach((route) => {
            const a = document.createElement("a");
            a.innerHTML = route.toUpperCase();
            a.href = "#";
            a.id = APP_ROUTES[route];

            nav.appendChild(a);
        });

        nav.addEventListener("click", (e) => {
            if (e.target.tagName === "A") {
                e.preventDefault();

                window.location.hash = e.target.id;
            } else {
                return;
            }
        });

        container.appendChild(nav);
    }

    renderResume(container) {
        const resume = new Resume(container);
    }

    renderPizza(container) {
        // const pizza = new Pizza(container);
        return;
    }
    renderCommentsBlock(container) {
        const comments = new DataBlock(container);
    }
    renderFormBlock(container) {
        container.appendChild(new Form());
        return;
    }

    init(container) {
        window.onhashchange = () => {
            this.render(container);
        };

        observer.subsribe(DATA_RECEIVED, (state) => {
            this.render(container, state);
        });

        observer.subsribe('click', (state) => {
            this.render(container, state);
        });

        // обработчики
        // прочая работа

        return this.render(container);
    }

    render(container) {
        console.log('RENDER');
        const el = document.createElement("div");
        this.renderNavigation(el);

        switch (window.location.hash.slice(1)) {
            case APP_ROUTES.resume:
                this.renderResume(el);
                break;
            case APP_ROUTES.pizza:
                this.renderPizza(el);
                break;
            case APP_ROUTES.contacts:
                this.renderFormBlock(el);
                break;
            case APP_ROUTES.contacts:
                this.renderFormBlock(el);
                break;
            case APP_ROUTES.comments:
                this.renderCommentsBlock(el);
                break;
            default:
        }

        container.innerText = "";
        container.appendChild(el);
    }
}

export default App;