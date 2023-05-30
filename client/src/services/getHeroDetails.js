import axios from "axios";

export const getHeroDetails = async (id) => {
  try {
    const result = await axios.get(`/hero/${id}`);

    return result.data.data;
  } catch (error) {
    return console.log(error);
  }
};
