import React from "react";
import NewsArticle from '../components/NewsArticle'

export default class News extends React.Component {
  render() {
    const Articles = [
      <NewsArticle key={1} title={"News Title 1"} textContent={"Experience the mystery behind 3 warring factions and their dark past. Step into the shoes of Indra on his journey of self-discovery and his pursuit of truth and justice as you complete the quests. Immerse yourself in an interactive tale of love and loss."}/>,
      <NewsArticle key={2} title={"News Title 2"} textContent={"Experience the mystery behind 3 warring factions and their dark past. Step into the shoes of Indra on his journey of self-discovery and his pursuit of truth and justice as you complete the quests. Immerse yourself in an interactive tale of love and loss."}/>,
    ];
    return (
      <div>
          <div className="row">{Articles}</div>
      </div>
    );
  }
}
