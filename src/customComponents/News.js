import React, { Component } from "react";
import Loadinglogic from "./Loadinglogic";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";




export default class News extends Component {
    static defaultProps ={
        country:"us",
        noOfPages:12,
        category:"general"
    }
    static propTypes ={
        country: PropTypes.string,
        noOfPages: PropTypes.number,
        category:PropTypes.string
    }


  articles = [
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Ivan Nechepurenko",
      title:
        "Brittney Griner Verdict and Sentencing: Live Updates - The New York Times",
      description:
        "The American basketball star’s case has been caught up in the deep crisis between Moscow and Washington over Russia’s invasion of Ukraine.",
      url: "https://www.nytimes.com/live/2022/08/04/world/brittney-griner-trial-verdict-russia",
      urlToImage:
        "https://static01.nyt.com/images/2022/08/04/multimedia/04griner-blog-promo-1230pm/04vid-judge-verdict-cover-facebookJumbo.jpg",
      publishedAt: "2022-08-04T16:42:39Z",
      content:
        "Britney Griners conviction and nine-year sentence leaves Biden officials in a difficult position.They can hope that Moscow will change its position and accept a U.S. proposal to free Ms. Griner by tr… [+2914 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Bank of England warns the UK will fall into recession this year - BBC",
      description:
        "The Bank of England warns inflation will rise over 13% and the economy is set to shrink for over a year.",
      url: "https://www.bbc.com/news/business-62405037",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/161AC/production/_126204509_mediaitem126204508.jpg",
      publishedAt: "2022-08-04T16:29:10Z",
      content:
        "By Dearbail Jordan &amp; Michael RaceBusiness reporters, BBC News\r\nMedia caption, Andrew Bailey says interest rates need to rise to control soaring inflation.\r\nThe Bank of England has warned the UK w… [+6350 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Andrew E. Kramer",
      title:
        "Latest Russia-Ukraine War News: Live Updates - The New York Times",
      description:
        "Ukraine’s strong defensive positions have slowed the Russian Army’s advance to a crawl. Russia’s forces have also been diverting to the south to fend off a Ukrainian counteroffensive there.",
      url: "https://www.nytimes.com/live/2022/08/04/world/ukraine-russia-news-war",
      urlToImage:
        "https://static01.nyt.com/images/2022/08/04/multimedia/04ukraine-briefing-carousel-10am/04ukraine-briefing-carousel-10am-facebookJumbo.jpg",
      publishedAt: "2022-08-04T16:19:26Z",
      content:
        "Ukrainian soldiers along frontline trenches near Barvinkove in eastern Ukraine on Monday.Credit...David Guttenfelder for The New York Times\r\nDRUZHKIVKA, Ukraine Longstanding strongpoints of Ukraines … [+4281 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Eliott C. McLaughlin, Sonia Moghe and Hannah Rabinowitz, CNN",
      title:
        "Four current, former Louisville police officers federally charged in Breonna Taylor's death - CNN",
      description:
        "Four current and former Louisville police officers involved in the deadly raid on Breonna Taylor's home -- including detectives who worked on the search warrant and the ex-officer accused of firing blindly into her home -- were arrested and charged Thursday w…",
      url: "https://www.cnn.com/2022/08/04/us/breonna-taylor-federal-charges/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/201029192002-breonna-taylor-photo-super-tease.jpg",
      publishedAt: "2022-08-04T16:18:00Z",
      content:
        "(CNN)Four current and former Louisville police officers involved in the deadly raid on Breonna Taylor's home -- including detectives who worked on the search warrant and the ex-officer accused of fir… [+6412 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Brad Lendon, CNN",
      title:
        "China fires missiles near Taiwan in live-fire drills as PLA encircles island - CNN",
      description:
        "China fired multiple missiles toward waters near northeastern and southwestern Taiwan on Thursday, the island's Defense Ministry said, as Beijing makes good on its promise that Taipei will pay a price for hosting US House Speaker Nancy Pelosi.",
      url: "https://www.cnn.com/2022/08/04/asia/china-taiwan-military-exercises-intl-hnk-ml/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220804014311-01-china-taiwan-080422-super-tease.jpg",
      publishedAt: "2022-08-04T16:09:00Z",
      content:
        "(CNN)China fired multiple missiles toward waters near northeastern and southwestern Taiwan on Thursday, the island's Defense Ministry said, as Beijing makes good on its promise that Taipei will pay a… [+9283 chars]",
    },
    {
      source: {
        id: null,
        name: "Austin American-Statesman",
      },
      author: ", Austin American-Statesman",
      title:
        "Alex Jones trial: Jury deliberations underway in Sandy Hook case - Austin American-Statesman",
      description:
        "Jurors have begun determining how much money Alex Jones must pay to the parents of 6-year-old Sandy Hook shooting victim, Jesse Lewis, for defamation.",
      url: "https://www.statesman.com/story/news/local/2022/08/04/alex-jones-trial-jury-deliberations-underway-in-sandy-hook-case/65391779007/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2022/08/03/NAAS/ca4186af-1631-4a4c-bfc7-b6fdd2611a5e-Alex_Jones_BSA_149.JPG?auto=webp&crop=2431,1368,x0,y123&format=pjpg&width=1200",
      publishedAt: "2022-08-04T15:56:15Z",
      content:
        "After hearing seven days of evidence and a range of witnesses, jurors have begun deliberations to determine how much money InfoWars host Alex Jones must pay to the parents of 6-year-old Sandy Hook sh… [+3671 chars]",
    },
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: "Rick Rouan and Marek Mazurek, USA TODAY",
      title:
        "Jackie Walorski, Indiana congresswoman, dies in car crash - USA TODAY",
      description:
        "On Thursday, law enforcement in Indiana said the vehicle in which Rep. Jackie Walorski was traveling caused the fatal crash.",
      url: "https://www.usatoday.com/story/news/politics/2022/08/03/indiana-congresswoman-jackie-walorski-killed-car-crash/10229189002/",
      urlToImage:
        "https://www.gannett-cdn.com/-mm-/58ef0e5d3cdac522ca222a07e2e85784a2e428d5/c=0-183-4663-2817/local/-/media/USATODAY/None/2014/11/05/635507922082275973-AP-Senate-Indiana.jpg?auto=webp&format=pjpg&width=1200",
      publishedAt: "2022-08-04T15:56:15Z",
      content:
        "Indiana Republican Rep. Jackie Walorski, R-Ind., was killed Wednesday in a car crash in her home state of Indiana.\r\nThe vehicle Walorski was riding in caused the crash that killed her, two staffers a… [+4302 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Peter Stone",
      title:
        "MyPillow chief spends tens of millions in fresh crusade to push Trump’s big lie - The Guardian US",
      description:
        "Mike Lindell says he has poured up to $40m into wave of lawsuits and a new movie as US experts warn of threat to democracy",
      url: "https://amp.theguardian.com/us-news/2022/aug/04/mypillow-mike-lindell-trump-big-lie-election-fraud",
      urlToImage:
        "https://i.guim.co.uk/img/media/c12a78ba5e3115aa195856970073c35b6c0c3aad/0_518_6336_3803/master/6336.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=cb88324bb2e0671a9c94009c04bb466d",
      publishedAt: "2022-08-04T15:54:00Z",
      content:
        "The MyPillow chief executive, Mike Lindell, a fervent Donald Trump ally, says he has poured $35-40m into a wide crusade a wave of lawsuits to get rid of voting machines that he faults for Trumps defe… [+11103 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "DeSantis suspends state attorney for refusing to enforce laws on abortion, transgender surgery - The Hill",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMijwFodHRwczovL3RoZWhpbGwuY29tL2hvbWVuZXdzL3N0YXRlLXdhdGNoLzM1ODc4MTEtZGVzYW50aXMtc3VzcGVuZHMtc3RhdGUtYXR0b3JuZXktZm9yLXJlZnVzaW5nLXRvLWVuZm9yY2UtbGF3cy1vbi1hYm9ydGlvbi10cmFuc2dlbmRlci1zdXJnZXJ5L9IBkwFodHRwczovL3RoZWhpbGwuY29tL2hvbWVuZXdzL3N0YXRlLXdhdGNoLzM1ODc4MTEtZGVzYW50aXMtc3VzcGVuZHMtc3RhdGUtYXR0b3JuZXktZm9yLXJlZnVzaW5nLXRvLWVuZm9yY2UtbGF3cy1vbi1hYm9ydGlvbi10cmFuc2dlbmRlci1zdXJnZXJ5L2FtcC8?oc=5",
      urlToImage: null,
      publishedAt: "2022-08-04T15:09:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "NBCSports.com",
      },
      author: "Mike Florio",
      title:
        "Source: Roger Goodell will not handle the Deshaun Watson appeal - NBC Sports",
      description:
        "Commissioner Roger Goodell has the power to personally handle the Deshaun Watson appeal hearing. He will not be exercising it.Per a source with knowledge of the situation, Goodell will not be handling the Watson appeal. He will designate the matter to someone…",
      url: "https://profootballtalk.nbcsports.com/2022/08/04/source-roger-goodell-will-not-handle-the-deshaun-watson-appeal/",
      urlToImage:
        "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2022/05/USATSI_18170858-e1653750845980.jpg",
      publishedAt: "2022-08-04T14:45:00Z",
      content:
        "Commissioner Roger Goodell has the power to personally handle the Deshaun Watson appeal hearing. He will not be exercising it.\r\nPer a source with knowledge of the situation, Goodell will not be handl… [+1389 chars]",
    },
    {
      source: {
        id: null,
        name: "MarketWatch",
      },
      author: "Lawrence G. McMillan",
      title:
        "The S&P 500 is so close to crossing this crucial level and challenging the bear market's trend line - MarketWatch",
      description:
        "A second bullish sign for the stock market: the trend of VIX is changing",
      url: "https://www.marketwatch.com/story/the-s-p-500-is-so-close-to-crossing-this-crucial-level-and-challenging-the-bear-markets-trend-line-01659622869",
      urlToImage: "https://images.mktw.net/im-471261/social",
      publishedAt: "2022-08-04T14:21:00Z",
      content:
        "The S&amp;P 500 index may be about to secure two major bullish \r\n SPX,\r\n -0.27%\r\nmilestones.First, the S&amp;P has rallied from that mid-June low right up to the major resistance at 4170. A two-day c… [+8188 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Exclusive: Tencent seeks bigger stake in 'Assassin's Creed' maker Ubisoft - sources - Reuters",
      description:
        'Tencent Holdings Ltd <a href="https://www.reuters.com/companies/0700.HK" target="_blank">(0700.HK)</a> plans to raise its stake in French video game group Ubisoft Entertainment SA <a href="https://www.reuters.com/companies/UBIP.PA" target="_blank">(UBIP.PA)</…',
      url: "https://www.reuters.com/markets/europe/exclusive-tencent-plans-raise-stake-assassins-creed-maker-ubisoft-sources-2022-08-04/",
      urlToImage:
        "https://www.reuters.com/resizer/_NtA_izh1M_5Ptq9KNwEWfb-xFY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2XDPLA7PCZIIHBTJVUBKTXYOBQ.jpg",
      publishedAt: "2022-08-04T14:04:00Z",
      content:
        "HONG KONG, Aug 4 (Reuters) - Tencent Holdings Ltd (0700.HK) plans to raise its stake in French video game group Ubisoft Entertainment SA (UBIP.PA) as the Chinese gaming giant pivots to the global gam… [+4604 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "World leader who pushed sinister message shares video of Trump meeting - CNN",
      description:
        "The Conservative Political Action Conference (CPAC) is taking place in Texas and in attendance will be authoritarian Hungarian Prime Minister Viktor Orbán, w...",
      url: "https://www.youtube.com/watch?v=MNK1xPI04L0",
      urlToImage: "https://i.ytimg.com/vi/MNK1xPI04L0/hqdefault.jpg",
      publishedAt: "2022-08-04T14:02:45Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Deadline",
      },
      author: "Rosy Cordero",
      title:
        "‘Outlander’ Prequel Series Confirmed In The Works At Starz; Title, Details Revealed - Deadline",
      description:
        "Starz officially confirmed the Outlander prequel series titled Blood of My Blood is in development. The writers’ room has officially opened on the new drama series that will follow the love story of Jamie Fraser’s (Sam Heughan) parents, Ellen MacKenzie and Br…",
      url: "https://deadline.com/2022/08/outlander-prequel-series-blood-of-my-blood-confirmed-starz-1235084826/",
      urlToImage:
        "https://deadline.com/wp-content/uploads/2022/08/sam-heughan-jamie-fraser-outlander-312.jpg?w=1024",
      publishedAt: "2022-08-04T14:00:00Z",
      content:
        "Starz officially confirmed the Outlanderprequel series titled Blood of My Blood is in development. The writers’ room has officially opened on the new drama series that will follow the love story of J… [+1473 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Sofia Pitt",
      title:
        "Gadget season is here — new folding phones, watches and earbuds are coming - CNBC",
      description:
        "Over the next few weeks, major tech companies including Apple, Samsung, and Google are expected to announced new products ranging from watches, to smartphones.",
      url: "https://www.cnbc.com/2022/08/04/apple-google-amazon-set-to-launch-new-gadgets-what-to-expect.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/106946987-1632492948282-gettyimages-1235461238-dsc00549.jpeg?v=1659545214&w=1920&h=1080",
      publishedAt: "2022-08-04T13:57:12Z",
      content:
        "Apple launches the iPhone 13 in the UK\r\nApple, Google, Amazon, Samsung and other firms are teeing up for a busy fall filled with lots of new gadget launches.\r\nIt's like clockwork. Big tech companies … [+7040 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "María Luisa Paúl",
      title:
        "Lawyers for Parkland shooter Nikolas Cruz cry during sentencing trial - The Washington Post",
      description:
        "Parkland families have relayed heartbreak after heartbreak — touching even those fighting to save Nikolas Cruz's life.",
      url: "https://www.washingtonpost.com/nation/2022/08/04/parkland-shooting-trial-attorney-cry/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/XWAW2PAR5EI63BECA3A4QTHI6I.jpg&w=1440",
      publishedAt: "2022-08-04T13:48:00Z",
      content:
        "Comment on this story\r\nThe last thing Fred Guttenberg told his 14-year-old daughter was that it was time for her to go, that she was going to be late. Hours after rushing his two children to school t… [+4313 chars]",
    },
    {
      source: {
        id: null,
        name: "Variety",
      },
      author: "Jennifer Maas",
      title:
        "‘Fixer Upper’ and Other Magnolia Network Shows Coming to HBO Max in September (EXCLUSIVE) - Variety",
      description:
        "Popular on Variety Chip and Joanna Gaines’ Magnolia Network lineup, including all five seasons of HGTV’s “Fixer Upper,” will begin streaming on HBO Max in September, Variety has learned exclusively. According to a WarnerMedia source, “select” titles from Magn…",
      url: "https://variety.com/2022/tv/news/fixer-upper-chip-joanna-gaines-magnolia-hbo-max-1235332338/",
      urlToImage:
        "https://variety.com/wp-content/uploads/2022/08/Magnolia-Network-Chip-and-Joanna-Gaines.jpg?w=1000",
      publishedAt: "2022-08-04T13:45:00Z",
      content:
        "Chip and Joanna Gaines’ Magnolia Network lineup, including all five seasons of HGTV’s “Fixer Upper,” will begin streaming on HBO Max in September, Variety has learned exclusively.\r\nAccording to a War… [+2431 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Michael Wayland",
      title:
        "Lordstown Motors expects limited production and deliveries of electric pickup in 2022 - CNBC",
      description:
        "Lordstown said production of its Endurance electric pickup will be slow and largely reliant on capital availability.",
      url: "https://www.cnbc.com/2022/08/04/lordstown-motors-ride-q2-2022-earnings-and-production.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/106901002-1624387841928-IMG-5251.jpg?v=1628713215&w=1920&h=1080",
      publishedAt: "2022-08-04T13:11:25Z",
      content:
        "Embattled electric truck startup Lordstown Motors on Thursday reaffirmed plans to begin commercial production of its first vehicle this quarter and roll out the first customer deliveries by the end o… [+2905 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "John Rosevear",
      title:
        "Nikola's revenue tops expectations on delivery of 48 electric trucks - CNBC",
      description:
        "Nikola's second-quarter revenue beat Wall Street's expectations as it shipped 48 trucks and confirmed its full-year guidance",
      url: "https://www.cnbc.com/2022/08/04/nikola-nkla-q2-2022-earnings.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/106587108-1592834759853nikola_tre5a.jpg?v=1592835117&w=1920&h=1080",
      publishedAt: "2022-08-04T13:06:19Z",
      content:
        "Nikola on Thursday reported revenue for the second quarter that beat Wall Street expectations as it delivered 48 of its electric heavy trucks. The company also reported a smaller-than-expected loss f… [+2503 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Taiwan tensions: China condemns 'manic' visit as Pelosi continues tour - BBC",
      description:
        "\"Manic, irresponsible and irrational\": China's foreign minister reacts to Nancy Pelosi's Taiwan visit.",
      url: "https://www.bbc.com/news/world-asia-62419855",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/12B87/production/_126197667_gettyimages-1242294957.jpg",
      publishedAt: "2022-08-04T12:41:54Z",
      content:
        "By Alys DaviesBBC News\r\nChina's foreign minister has called US House Speaker Nancy Pelosi's visit to Taiwan \"manic, irresponsible and irrational\".\r\nAt a meeting of Southeast Asian countries, Wang Yi … [+3267 chars]",
    },
  ];

  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      articles: [],
      loading: true,
      totalResults: this.articles.totalResults,
      pageno: 1,
      country:"us",
      fetchedResults:0
    };
  }

  
  
  updateData= async ()=>{
    this.props.setProgress(20);
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.state.country}&apiKey=${this.props.apiKey}&${this.state.pageno}&pageSize=${this.props.noOfPages}`;
    this.setState({loading:true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parseData = await data.json();
    console.log(parseData);
    this.props.setProgress(70);
    console.log(parseData.totalResults);
    this.setState({ articles: this.state.articles.concat(parseData.articles), loading:false, fetchedResults: this.state.fetchedResults+this.props.noOfPages});
    document.title="JNN - " + this.props.category;
    this.props.setProgress(100);
    console.log(this.state.fetchedResults);
  }
  
  
  componentDidMount() {
  console.log("component did mount");
  this.updateData();
  }







// previous and next click handlers
  // handlerPrevBtn =  () => {
  //   console.log("prev");
  //   this.setState({pageno: this.state.pageno - 1});
  //   this.updateData();
  // };
  // handlerNextBtn =  () => {
  //   console.log("next");
  //   this.setState({pageno: this.state.pageno + 1});
  //   this.updateData();
  // };



  fetchMoreData = () => {
    this.setState({pageno: this.state.pageno+1})
    this.updateData();
  };




  render() {
    return (
      <div>

        {console.log("render")}

        <div className="container text-center ">
          <h1>News Headlines</h1>
          
        </div>
  {/* /infinite scroll */}
  <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<loadinglogic/>}
        >

        <div className="container my-3">
          <div className="row">
          
          
        
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url + Math.random()}>
                  <NewsItem
                    title={element.title.slice(0, 50) + "..."}
                    description={
                      element.description &&
                      element.description.slice(0, 80) + "..."
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://scx2.b-cdn.net/gfx/news/2022/apple-was-accused-by-c.jpg"
                      }
                      newsUrl={element.url}
                      author={element.author}
                      publishedDate={element.publishedAt}
                      />
                  {this.state.loading && <Loadinglogic/>}
                </div>
              );
            })}
            
          </div>
        </div>
        </InfiniteScroll>
        




        {/* // previous and next buttons */}
        {/* <div className="d-flex justify-content-between mx-5 my-3">
          <button
            disabled={this.state.pageno <= 1}
            type="button"
            className="btn btn-primary btn-sm"
            onClick={this.handlerPrevBtn}
            style={{ backgroundColor: "black" }}
          >
            &#8592;Prev
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={this.handlerNextBtn}
            style={{ backgroundColor: "black" }}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}
