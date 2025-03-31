import axios from "axios";
const BASE_URL = "http://192.168.1.3:5000/";

export const getPosts = async () => {
  const fetcho = await fetch();
  const convert = await fetcho.json();
  const data = convert;
  return data.posts;
};

// export const createUser = async () => {
//     try{
//         const response = await axios.post(`${BASE_URL}/create/${uid}`, {
//             uid: ui
//             name: name,
//             email: email,
//             pass: pass,
//           });

//           console.log("Response",response.data);
//     }
// catch(e) {
//     console.log("Error postin data",e);
// }
// };
