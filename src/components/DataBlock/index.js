import { getAllReviews, deleteReview } from '../../services/api/reviewsApi';

class DataBlock {
    constructor(container) {
        this.init(container);
    }

    async init(container) {
        const data = await getAllReviews();
        this.render(container, data);
    }

    render(container, data) {
        const ul = document.createElement('ul');

        data.forEach((element) => {
            const li = document.createElement('li');

            const name = document.createElement('h1');
            const email = document.createElement('h2');
            const review = document.createElement('p');
            const button = document.createElement('button');

            name.innerHTML = element.name;
            email.innerHTML = element.email;
            review.innerHTML = element.review;
            button.innerHTML = 'x';
            button.id = element.id;

            li.appendChild(name);
            li.appendChild(email);
            li.appendChild(review);
            li.appendChild(button);

            ul.appendChild(li);
        });

        ul.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                deleteReview(e.target.id);
            }

            return;
        });

        container.appendChild(ul);
    }
}

export default DataBlock;