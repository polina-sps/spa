import { MAIN_LABEL } from './consts';

import './styles';

class AboutBlock {
    constructor() {
        return this.init();
    }

    init() {
        return this.render();
    }

    render() {
        const article = document.createElement('article');
        article.classList.add('article');
        article.innerHTML = MAIN_LABEL;

        return article;
    }
}

export default AboutBlock;