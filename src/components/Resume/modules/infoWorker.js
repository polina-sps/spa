import { imgAndInfoWrapper } from '../index';
import '../style/style.css';

class InfoWorker {
    createInfoWorker() {
        const infoWorker = document.createElement('div');
        infoWorker.classList.add(`infoWorker`);
        const infoName = document.createElement('p');
        //infoWorker.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum explicabo delectus laudantium ea consequatur nesciunt accusamus ab quam quae a esse amet dicta numquam totam aut, deleniti cupiditate voluptates similique ducimus perspiciatis repellat, debitis aliquid. Itaque officiis esse omnis praesentium numquam perferendis nesciunt magnam pariatur obcaecati, temporibus adipisci? Reprehenderit quasi vitae quibusdam voluptatem minima aliquam quos fugit velit. Exercitationem?'
        infoName.textContent = 'ФИО: Петрова Мария Вячеславовна';
        infoName.classList.add(`infoName`);
        infoWorker.appendChild(infoName);
        const infoDate = document.createElement('p');
        infoDate.textContent = 'Дата рождения: 28 февраля 1996 года';
        infoDate.classList.add(`infoDate`);
        infoWorker.appendChild(infoDate);
        const infoCity = document.createElement('p');
        infoCity.textContent = 'Город проживания: Минск';
        infoCity.classList.add(`infoCity`);
        infoWorker.appendChild(infoCity);
        const infoStatus = document.createElement('p');
        infoStatus.textContent = 'Семейное положение: не замужем';
        infoStatus.classList.add(`infoStatus`);
        infoWorker.appendChild(infoStatus);
        const infoPhone = document.createElement('p');
        infoPhone.textContent = 'Телефон: +375(ХХ)-ХХ-ХХ-ХХ';
        infoPhone.classList.add(`infoPhone`);
        infoWorker.appendChild(infoPhone);
        imgAndInfoWrapper.appendChild(infoWorker);

    }
}

export const infoWorker = new InfoWorker();