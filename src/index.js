import App from './App';
import "./styles/style";

const app = new App(document.getElementById('main'));

// const readFile = (fn) => {
//   // NODE API
//   try {
//     const data = readFileFromApi('./');
//     fn(null, data);
//   } catch (e) {
//     fn(e);
//   }
// };

// readFile((err, data) => {
//   if (err) {
//     return new Error();
//   } else {
//     return data.map((item) => ({ item }));
//   }
// });

// const readFileComntroller = () => {
//   return new Promise((resolve, reject) => {
//     readFile((err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// function init() {
//   readFileComntroller()
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// const init1 = async () => {
//   const data = await readFileComntroller();

//   return data;
// };