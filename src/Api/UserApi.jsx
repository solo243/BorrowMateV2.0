// import axios from "axios";

import axios from "axios";

// export const createUser = async (name, email) => {
//   try {
//     const url = "http://192.168.1.3:5000/createuser";
//     console.log(url, name, email);

//     const response = await axios.post(url, {
//       name: name,
//       email: email
//     });
//     // const reqest = await fetch(url, {
//     //   method: "POST",
//     //   headers: { "Content-Type": "application/json" },
//     //   body: JSON.stringify({ name, email })
//     // });

//     console.log("Get resposer", response);
//   } catch (error) {
//     console.error(
//       "Error while creating user:",
//       error.response?.data || error.message
//     );
//     console.error("Network Error:", error.message);
//     if (error.response) {
//       console.error("Response Data:", error.response.data);
//     } else {
//       console.error("No response from server. Is it running?");
//     }
//     throw error;
//   }
// };

export const createUser = async (name, email) => {
  try {
    const url = "http://192.168.1.3:5000/createuser";

    const response = await axios.post(url, { name, email });

    console.log("User Created:", response.data);
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
};
