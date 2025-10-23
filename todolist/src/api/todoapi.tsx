import axios from "axios"

export const addItem = async (item: string) : Promise<Todo> => {
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/todos`, item, {
    headers: {
      'Content-Type': 'application/json'
    },
  });

  return response.data;
}