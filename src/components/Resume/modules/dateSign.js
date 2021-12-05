import { dateAndSignWrapper } from "../index";
import '../style/style.css';

class DateSign {
    createDateSign() {
        const date = document.createElement('p');
        date.classList.add('date');
        date.textContent = 'Дата:';
        dateAndSignWrapper.appendChild(date);
        const sign = document.createElement('p');
        sign.classList.add('sign');
        sign.textContent = 'Подпись:';
        dateAndSignWrapper.appendChild(sign);

    }
}

export const dateSign = new DateSign();