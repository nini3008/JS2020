const fetchData = async searchTerms => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "63f09449",
      s: searchTerms
    }
  });
  console.log(response.data);
};

const input = document.querySelector("input");

const debounce = (func, delay) => {
  let timeoutID;
  return (...args) => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    timeoutID = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

const onInput = event => {
  fetchData(event.target.value);
};

input.addEventListener("input", debounce(onInput, 500));
