const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "63f09449",
      s: "avengers"
    }
  });
  console.log(response.data);
};
fetchData();
