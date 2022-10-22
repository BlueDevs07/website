import axios from "axios";

export const getMacro = async (food) => {
  await axios
    .get(
      `https://api.spoonacular.com/recipes/guessNutrition?apiKey=53183c7f95624e0b8ab7f2fdb302fab9&title=${food}`
    )
    .then((res) => {
      return res.data;
    });
};

export const gerMacroMore = async (food) => {
  const options = {
    method: "GET",
    url: "https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition",
    params: { query: food },
    headers: {
      "X-RapidAPI-Key": "59cd76b86emshecab81e15bd3916p10e59cjsnb4316be59509",
      "X-RapidAPI-Host": "nutrition-by-api-ninjas.p.rapidapi.com",
    },
  };

  await axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
};
