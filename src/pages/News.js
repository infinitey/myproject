import React from "react";
import NewsArticle from '../components/NewsArticle'

export default class News extends React.Component {
  render() {
    const Articles = [
      <NewsArticle key={1} title={"News Title 1"} textContent={"Experience the mystery behind 3 warring factions and their dark past. Step into the shoes of Indra on his journey of self-discovery and his pursuit of truth and justice as you complete the quests. Immerse yourself in an interactive tale of love and loss."}/>,
      <NewsArticle key={2} title={"News Title 2"} textContent={"Experience the mystery behind 3 warring factions and their dark past. Step into the shoes of Indra on his journey of self-discovery and his pursuit of truth and justice as you complete the quests. Immerse yourself in an interactive tale of love and loss."}/>,
      <NewsArticle key={3} title={"News Title 3"} textContent={"Experience the mystery behind 3 warring factions and their dark past. Step into the shoes of Indra on his journey of self-discovery and his pursuit of truth and justice as you complete the quests. Immerse yourself in an interactive tale of love and loss."}/>,
      <NewsArticle key={4} title={"News Title 4"} textContent={"Experience the mystery behind 3 warring factions and their dark past. Step into the shoes of Indra on his journey of self-discovery and his pursuit of truth and justice as you complete the quests. Immerse yourself in an interactive tale of love and loss."}/>,
      <NewsArticle key={5} title={"News Title 5"} textContent={"Experience the mystery behind 3 warring factions and their dark past. Step into the shoes of Indra on his journey of self-discovery and his pursuit of truth and justice as you complete the quests. Immerse yourself in an interactive tale of love and loss."}/>,
      <NewsArticle key={6} title={"News Title 6"} textContent={"Experience the mystery behind 3 warring factions and their dark past. Step into the shoes of Indra on his journey of self-discovery and his pursuit of truth and justice as you complete the quests. Immerse yourself in an interactive tale of love and loss."}/>,
      <NewsArticle key={7} title={"News Title 7"} textContent={"Experience the mystery behind 3 warring factions and their dark past. Step into the shoes of Indra on his journey of self-discovery and his pursuit of truth and justice as you complete the quests. Immerse yourself in an interactive tale of love and loss."}/>,
      <NewsArticle key={8} title={"News Title 8"} textContent={"Experience the mystery behind 3 warring factions and their dark past. Step into the shoes of Indra on his journey of self-discovery and his pursuit of truth and justice as you complete the quests. Immerse yourself in an interactive tale of love and loss."}/>,
      <NewsArticle key={9} title={"News Title 9"} textContent={"Experience the mystery behind 3 warring factions and their dark past. Step into the shoes of Indra on his journey of self-discovery and his pursuit of truth and justice as you complete the quests. Immerse yourself in an interactive tale of love and loss."}/>,
      <NewsArticle key={10} title={"News Title 10"} textContent={"Experience the mystery behind 3 warring factions and their dark past. Step into the shoes of Indra on his journey of self-discovery and his pursuit of truth and justice as you complete the quests. Immerse yourself in an interactive tale of love and loss."}/>,
      <NewsArticle key={11} title={"News Title 11"} textContent={"Experience the mystery behind 3 warring factions and their dark past. Step into the shoes of Indra on his journey of self-discovery and his pursuit of truth and justice as you complete the quests. Immerse yourself in an interactive tale of love and loss."}/>
    ];
    return (
      <div>
          <div className="row">{Articles}</div>
      </div>
    );
  }
}
