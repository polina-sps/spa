 import { avatarka } from './modules/avatarka';
 import { infoBio } from './modules/infoBio';
 import { infoWorker } from './modules/infoWorker';
 import { dateSign } from './modules/dateSign';
 import "./style/style.css";


 export const wrapper = document.createElement(`div`);
 document.body.appendChild(wrapper);
 wrapper.classList.add(`wrapper`);

 export const imgAndInfoWrapper = document.createElement('div');
 wrapper.appendChild(imgAndInfoWrapper);
 imgAndInfoWrapper.classList.add(`imgAndInfoWrapper`);

 export const dateAndSignWrapper = document.createElement('div');
 wrapper.appendChild(dateAndSignWrapper);
 dateAndSignWrapper.classList.add(`dateAndSignWrapper`);

 class Resume {
     constructor(container) {
         return this.init(container);
     }

     init(container) {
         return this.render(container);
     }
     render(container) {
         avatarka.createAvatarka(container);
         infoWorker.createInfoWorker(container);
         infoBio.createInfoBio(container);
         dateSign.createDateSign(container);
     }
 }
 export default Resume;