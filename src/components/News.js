import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  articles = [
    {
      "source": {
        "id": "bbc-sport",
        "name": "BBC Sport"
      },
      "author": null,
      "title": "Champions Trophy LIVE: South Africa vs England, Karachi – cricket score, radio commentary, video highlights & updates",
      "description": "South Africa face England in the Champions in Karachi - follow live cricket scores, text updates, in-play video clips and radio commentary.",
      "url": "http://www.bbc.co.uk/sport/cricket/live/c4g3903q3z3t",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/42ff/live/9b854370-f5c1-11ef-9e61-71ee71f26eb1.jpg",
      "publishedAt": "2025-03-01T09:07:22.5627302Z",
      "content": "Tristan Stubbs and Heinrich Klaasen come into South Africa's XI, with Tony de Zorzi and Temba Bavuma absent through illness. \r\nSouth Africa: Ryan Rickelton, Tristan Stubbs, Rassie van der Dussen, Aid… [+379 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]

  constructor(){
    super();
    console.log("hello from constructor");
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsApp - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
            <NewsItem
              title={element.title.slice(0,45)}
              description={element.description.slice(0,88)}
              imageUrl={element.urlToImage}
              newsUrl={element.url}
            />
              </div>
        })}
        </div>
      </div>
    );
  }
}

export default News;
