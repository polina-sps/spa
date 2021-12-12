import {
    getAllComments,
    getSingleComment,
} from '../../services/api/commentsApi';

class DataBlock {
    constructor(container) {
        this.init(container);
    }

    async init(container) {
        this.render(container);

        const data = await getAllComments();
        data.splice(30);

        console.log(data); // - отрисовать список
        // renderList(data); // - отрисовать список
    }

    renderButton(container, id) {
        const button = document.createElement('button');
        button.innerHTML = 'Fetch details';
        button.id = id;

        button.addEventListener('click', async(e) => {
            const data = await getSingleComment(e.target.id);

            console.log(data);
        });

        container.appendChild(button);
    }

    render(container) {
        const article = document.createElement('article');
        article.innerHTML = 'DATA BLOCK';

        this.renderButton(article, 3);

        container.appendChild(article);
    }
}

export default DataBlock;