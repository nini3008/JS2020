const fetchData = async searchTerms => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "63f09449",
      s: searchTerms
    }
  });
  if (response.data.Error) {
    return [];
  }
  return response.data.Search;
};

const root = document.querySelector(".autocomplete");
root.innerHTML = `
<label><b>Search For a Movie</b></label>
<input class="input" />
<div class="dropdown">
<div class="dropdown-menu">
  <div class="dropdown-content results">
  </div>
</div>
</div>
`;

const input = document.querySelector("input");
const dropdown = document.querySelector(".dropdown");
const resultsWrapper = document.querySelector(".results");

const onInput = async event => {
  const movies = await fetchData(event.target.value);
  if (!movies.length) {
    dropdown.classList.remove("is-active");
    return;
  }
  resultsWrapper.innerHTML = "";
  dropdown.classList.add("is-active");

  for (let movie of movies) {
    const option = document.createElement("a");
    option.classList.add("dropdown-item");
    const imgSRC = movie.Poster === "N/A" ? "" : movie.Poster;
    option.innerHTML = `
      <img src="${imgSRC}" />
      ${movie.Title}
    `;
    resultsWrapper.appendChild(option);
  }
};

input.addEventListener("input", debounce(onInput, 500));

document.addEventListener("click", event => {
  if (!root.contains(event.target)) {
    dropdown.classList.remove("is-active");
  }
});
