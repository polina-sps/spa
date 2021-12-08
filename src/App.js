import Resume from './components/Resume';
import DataBlock from './components/DataBlock';
// import Pizza from "./components/Pizza";

const APP_ROUTES = {
    resume: "resume",
    pizza: "to order pizza", //что будет показывать в адресной строке
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

    init(container) {
        window.onhashchange = () => {
            this.render(container);
        };

        return this.render(container);
    }

    render(container) {
        const el = document.createElement("div");
        this.renderNavigation(el);

        switch (window.location.hash.slice(1)) {
            case APP_ROUTES.resume:
                this.renderResume(el);
                break;
            case APP_ROUTES.pizza:
                this.renderPizza(el);
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