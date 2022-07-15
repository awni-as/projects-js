export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d2647ae732msh2b000bb6574d5c2p117e00jsnd7d799a68e0e",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
