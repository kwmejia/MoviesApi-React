const consultApi = async (title) => {
  const key = "fad503ce";
  const url = `http://www.omdbapi.com/?s=${title}&page=1&apikey=${key}`;
  const response = await fetch(url);
  let data = await response.json();
  if (data.Error) data = [];
  // console.log(data);
  return data.Search;
};

export default consultApi;
