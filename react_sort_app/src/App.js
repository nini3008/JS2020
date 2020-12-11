import React, { useState } from 'react';
import './App.css';

import Articles from './Components/Articles';

const title = "Sorting Articles";

function App({articles}) {
  const [articlesList, setArticlesList] = useState(articles);

  const sortByUpvotes = () => {
    var NewArticles = []
    Object.assign(NewArticles, articlesList);
    NewArticles.sort((a, b) => {
      if(a.upvotes > b.upvotes){
        return -1
      }
      if (a.upvotes < b.upvotes){
        return 1;
      }
        return 0

    })
    setArticlesList(NewArticles);
  }

  const sortByDates = () => {

    var NewArticles = [];
    Object.assign(NewArticles, articlesList);
    NewArticles.sort((a,b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      if(aDate > bDate){
        return -1
      }

      if(aDate < bDate){
        return 1
      }
      return 0
    })

    setArticlesList(NewArticles);

  }

  return (
    <div className="App">
        <h1>{title}</h1>
        <div className="">
                <label className="">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={() => sortByUpvotes()}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={() => sortByDates()}>Most Recent</button>
          </div>
        <Articles articles={articlesList}/>
    </div>
  );
}

export default App;
