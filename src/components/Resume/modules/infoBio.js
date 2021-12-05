import { dateAndSignWrapper } from "../index";
import { wrapper } from "../index";
import '../style/style.css';

class InfoBio {
    createInfoBio() {
        const infoBio = document.createElement('p');
        infoBio.textContent = 'Yhhvfgjf ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum explicabo delectus laudantium ea consequatur nesciunt accusamus ab quam quae a esse amet dicta numquam totam aut, deleniti cupiditate voluptates similique ducimus perspiciatis repellat, debitis aliquid. Itaque officiis esse omnis praesentium numquam perferendis nesciunt magnam pariatur obcaecati, temporibus adipisci? Reprehenderit quasi vitae quibusdam voluptatem minima aliquam quos fugit velit. Exercitationem?'
        infoBio.classList.add(`infoBio`);
        wrapper.insertBefore(infoBio, dateAndSignWrapper);
    }
}

export const infoBio = new InfoBio();