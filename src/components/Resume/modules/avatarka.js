import img from "../img/img";
import { imgAndInfoWrapper } from '../index';
import '../style/style.css';

class Avatarka {
    createAvatarka() {
        const avatarka = document.createElement('img');
        avatarka.src = img;
        avatarka.classList.add(`avatarka`);
        imgAndInfoWrapper.appendChild(avatarka);
    }
}

export const avatarka = new Avatarka();