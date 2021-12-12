import observer from '../../utils/observer';
import { DATA_RECEIVED } from '../../events';
import { createReview } from '../../services/api/reviewsApi';

class Form {
    constructor() {
        return this.init();
    }

    getData() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((data) => data.json())
            .then((data) => {
                console.log('EVENT EMITTED');
                observer.state = data;
                observer.notify(DATA_RECEIVED);
            });
    }

    init() {
        return this.render();
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const inputs = [...e.target.elements];
        const data = inputs.reduce((acc, input) => {
            if (input.name) {
                acc[input.name] = input.value;
            }

            return acc;
        }, {});

        createReview(data);
    };

    render() {
        const form = document.createElement('form');
        form.addEventListener('submit', this.handleSubmit);

        form.classList.add('form');

        const name = document.createElement('input');
        const email = document.createElement('input');
        const review = document.createElement('input');
        const button = document.createElement('button');

        name.id = 'name';
        name.name = 'name';
        name.placeholder = 'name';
        email.id = 'email';
        email.name = 'email';
        email.placeholder = 'email';
        review.id = 'review';
        review.name = 'review';
        review.placeholder = 'review';

        button.innerHTML = 'Send request';

        form.appendChild(name);
        form.appendChild(email);
        form.appendChild(review);
        form.appendChild(button);

        return form;
    }
}

export default Form;