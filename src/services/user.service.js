import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com"
const BASE_USER = "/users"

const usersService = {
    getUsers: async (users) => {
      const response = await axios.get(
        `${BASE_URL}${BASE_USER}`,
        users
      );
      return response?.data;
    },
  };
  
export default usersService;
