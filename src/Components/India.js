import React, { Component } from 'react';
import Header from './Header/index';
import TopPicks from './Picks';
import Collections from './Collections';
import Download from './Download';
import Media from './Media';
import Footer from './footer';
import ExperienceCard from './ExperienceCard';
import './Styles/india.css';

class NewYork extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="new-york-wrapper">
        <Header
          backgroundImagesData={backgroundImagesData}
          history={this.props.history}
          selectedCity={'India'}
          navigationData={NewYorkNavigationData}
        />
        {/* <TopPicks
          headline={'Top Experiences in India'}
          pickedData={NewYorkData}
        /> */}
        <Collections collectionsData={collectionsData} />
        {AllNewYorkCityData &&
          AllNewYorkCityData.map(
            ({ id, headline, description, sectionData }) => (
              <CitySection
                key={id}
                headline={headline}
                description={description}
                cardsData={sectionData}
              />
            )
          )}
        <Download />
        <Media />
        <Footer />
      </div>
    );
  }
}

const CitySection = ({ headline, description, cardsData }) => (
  <div className="city-section-wrapper">
    <h2
      style={{
        textAlign: 'left'
      }}
    >
      {headline}
    </h2>
    <hr
      style={{
        backgroundColor: '#ffbb58',
        width: '75px',
        height: '2px',
        border: 'none',
        marginTop: '0px',
        marginLeft: '0px',
        marginBottom: '10px'
      }}
    />
    <p
      style={{
        color: '#545454',
        fontSize: '15.3px',
        marginTop: '0px',
        textAlign: 'left',
        lineHeight: '20px'
      }}
    >
      {description}
    </p>
    <div className="travel-card-wrapper">
      {cardsData &&
        cardsData.map(
          ({
            id,
            city,
            url,
            description,
            currency,
            currentPrice,
            ratings,
            stars,
            discount,
            cashback,
            lastPrice,
            about,
            showMore,
            highlight
          }) => (
            <ExperienceCard
              key={id}
              city={city}
              about={about}
              url={url}
              description={description}
              currency={currency}
              price={currentPrice}
              ratings={ratings}
              stars={stars}
              discount={discount}
              cashback={cashback}
              lastPrice={lastPrice}
              showMore={showMore}
              highlight={highlight}
            />
          )
        )}
    </div>
  </div>
);

// New York Caraousel Images

const backgroundImagesData = [
  {
    id: 1,
    url:
      'https://lp-cms-production.imgix.net/2023-02/LPT0410_042.jpg?auto=format&q=75&w=1024'},
  {
    id: 2,
    url:'https://lp-cms-production.imgix.net/2023-02/LPT1013_087.jpg?auto=format&q=75&w=1024'
},
  {
    id: 3,
    url:'https://media.nomadicmatt.com/indiafaves006.jpg'
       },
  {
    id: 4,
    url:'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/PTV-India-Cover-Final.png'
      },
  {
    id: 5,
    url:'https://images.moneycontrol.com/static-mcnews/2023/04/pexels-ankur-bagai-6440428.jpg?impolicy=website&width=1600&height=900'
      },
 
];

// New York Navigation Data

const NewYorkNavigationData = [
  {
    id: 1,
    name: 'Things to do in india'
  },
  {
    id: 2,
    name: 'Best Sellers'
  },
  {
    id: 3,
    name: 'Broadway Show Tickets'
  },
  {
    id: 4,
    name: 'City Walks'
  },
  {
    id: 5,
    name: 'Food and Drinks'
  }
];

// All New York City Sections Data ~ nested ( Dynamically Rendering )

const AllNewYorkCityData = [
  {
    id: 1,
    headline: 'Things to do in india',
    description:
      'Stay up to date on the season’s hottest shows and score amazing discounts and offers for the most popular entertainment attraction in the world.',
    sectionData: [
      {
        id: 1,
        currentPrice: 62.5,
        currency: '$',
        stars: 4.6,
        ratings: 564,
        cashback: 10,
        about: 'one of the wonder',
        description: 'tajmahal',
        url:'https://www.planetware.com/wpimages/2022/07/india-top-15-things-to-do-tour-taj-mahal-in-agra.jpg'
          },
      {
        id: 2,
        currentPrice: 29,
        lastPrice: null,
        currency: '$',
        stars: 4.6,
        ratings: 681,
        cashback: 10,
        about: 'traditional Dance Show',
        description: `Ghoomar Dance`,
        url:
          'https://static.prepp.in/public/image/aca8faf063938152b52c004a50239f62.jpeg?tr=w-480,h-330,c-force' },
      {
        id: 3,
        currentPrice: 40.5,
        lastPrice: 79,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        discount: 49,
        about: 'Celebrate Holi',
        description: `festival of colors`,
        url:'https://trendingonlinenow.in/wp-content/uploads/2018/03/Holi-2-min-768x432.jpg'
         },
      {
        id: 4,
        currentPrice: 99,
        lastPrice: null,
        currency: '$',
        stars: 4.7,
        ratings: 347,
        cashback: 10,
        about: 'Jodhpur',
        description: `Explore the Blue City of Jodhpur`,
        url:
          'https://explorersaway.com/wp-content/uploads/2022/12/best-things-to-do-in-india.png.webp' },
      {
        id: 5,
        currentPrice: 89,
        lastPrice: null,
        currency: '$',
        stars: 4.6,
        ratings: 561,
        cashback: 10,
        about: 'Golden Temple',
        description: `Visit the Golden Temple in Amritsar`,
        url:
          'https://www.fodors.com/wp-content/uploads/2019/02/06_Ultimate_India_GoldenTemple_shutterstock_604512275.jpg'},
      {
        id: 6,
        currentPrice: 49,
        lastPrice: 79,
        currency: '$',
        stars: 4.6,
        ratings: 322,
        cashback: 15,
        discount: 50,
        about: 'Varansi',
        description: `Ghats to visit in varansi`,
        url:
          'https://t4.ftcdn.net/jpg/04/08/25/05/360_F_408250543_MVaEVGeWxb4FiFy7mEGKj8nfYkwoAZON.jpg'},
      {
        id: 7,
        currentPrice: 69,
        lastPrice: 79,
        currency: '$',
        stars: 4.6,
        ratings: 274,
        cashback: 10,
        discount: 46,
        about: 'Goa',
        description: `explore Beaches`,
        url:
          'https://media.nomadicmatt.com/indiafaves006.jpg'},
      {
        id: 8,
        showMore: true,
        currentPrice: null,
        lastPrice: null,
        currency: null,
        stars: null,
        ratings: null,
        cashback: null,
        discount: null,
        about: null,
        description: null,
        url: null
      }
    ]
  },
  {
    id: 2,
    headline: 'Places to visit in India',
    description:
      'Stay up to date on the season’s hottest shows and score amazing discounts and offers for the most popular entertainment attraction in the world.',
    sectionData: [
      {
        id: 1,
        currentPrice: 62.5,
        currency: '$',
        stars: 4.6,
        ratings: 564,
        cashback: 10,
        about: 'one of the wonder',
        description: 'tajmahal',
        url:'https://www.planetware.com/wpimages/2022/07/india-top-15-things-to-do-tour-taj-mahal-in-agra.jpg'
          },
      {
        id: 2,
        currentPrice: 29,
        lastPrice: null,
        currency: '$',
        stars: 4.6,
        ratings: 681,
        cashback: 10,
        about: 'traditional Dance Show',
        description: `Ghoomar Dance`,
        url:
          'https://static.prepp.in/public/image/aca8faf063938152b52c004a50239f62.jpeg?tr=w-480,h-330,c-force' },
      {
        id: 3,
        currentPrice: 40.5,
        lastPrice: 79,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        discount: 49,
        about: 'Celebrate Holi',
        description: `festival of colors`,
        url:'https://trendingonlinenow.in/wp-content/uploads/2018/03/Holi-2-min-768x432.jpg'
         },
      {
        id: 4,
        currentPrice: 99,
        lastPrice: null,
        currency: '$',
        stars: 4.7,
        ratings: 347,
        cashback: 10,
        about: 'Jodhpur',
        description: `Explore the Blue City of Jodhpur`,
        url:
          'https://explorersaway.com/wp-content/uploads/2022/12/best-things-to-do-in-india.png.webp' },
      {
        id: 5,
        currentPrice: 89,
        lastPrice: null,
        currency: '$',
        stars: 4.6,
        ratings: 561,
        cashback: 10,
        about: 'Golden Temple',
        description: `Visit the Golden Temple in Amritsar`,
        url:
          'https://www.fodors.com/wp-content/uploads/2019/02/06_Ultimate_India_GoldenTemple_shutterstock_604512275.jpg'},
      {
        id: 6,
        currentPrice: 49,
        lastPrice: 79,
        currency: '$',
        stars: 4.6,
        ratings: 322,
        cashback: 15,
        discount: 50,
        about: 'Varansi',
        description: `Ghats to visit in varansi`,
        url:
          'https://t4.ftcdn.net/jpg/04/08/25/05/360_F_408250543_MVaEVGeWxb4FiFy7mEGKj8nfYkwoAZON.jpg'},
      {
        id: 7,
        currentPrice: 69,
        lastPrice: 79,
        currency: '$',
        stars: 4.6,
        ratings: 274,
        cashback: 10,
        discount: 46,
        about: 'Goa',
        description: `explore Beaches`,
        url:
          'https://media.nomadicmatt.com/indiafaves006.jpg'},
      {
        id: 8,
        showMore: true,
        currentPrice: null,
        lastPrice: null,
        currency: null,
        stars: null,
        ratings: null,
        cashback: null,
        discount: null,
        about: null,
        description: null,
        url: null
      }
    ]
  },
  
  {
    id: 3,
    headline: 'Ticket for Tajmahal',
    description:
      'Stay up to date on the season’s hottest shows and score amazing discounts and offers for the most popular entertainment attraction in the world.',
    sectionData: [
      {
        id: 1,
        currentPrice: 62.5,
        currency: '$',
        stars: 4.6,
        ratings: 564,
        cashback: 10,
        about: 'one of the wonder',
        description: 'tajmahal',
        url:'https://www.planetware.com/wpimages/2022/07/india-top-15-things-to-do-tour-taj-mahal-in-agra.jpg'
          },
      {
        id: 2,
        currentPrice: 29,
        lastPrice: null,
        currency: '$',
        stars: 4.6,
        ratings: 681,
        cashback: 10,
        about: 'traditional Dance Show',
        description: `Ghoomar Dance`,
        url:
          'https://static.prepp.in/public/image/aca8faf063938152b52c004a50239f62.jpeg?tr=w-480,h-330,c-force' },
      {
        id: 3,
        currentPrice: 40.5,
        lastPrice: 79,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        discount: 49,
        about: 'Celebrate Holi',
        description: `festival of colors`,
        url:'https://trendingonlinenow.in/wp-content/uploads/2018/03/Holi-2-min-768x432.jpg'
         },
      {
        id: 4,
        currentPrice: 99,
        lastPrice: null,
        currency: '$',
        stars: 4.7,
        ratings: 347,
        cashback: 10,
        about: 'Jodhpur',
        description: `Explore the Blue City of Jodhpur`,
        url:
          'https://explorersaway.com/wp-content/uploads/2022/12/best-things-to-do-in-india.png.webp' },
      {
        id: 5,
        currentPrice: 89,
        lastPrice: null,
        currency: '$',
        stars: 4.6,
        ratings: 561,
        cashback: 10,
        about: 'Golden Temple',
        description: `Visit the Golden Temple in Amritsar`,
        url:
          'https://www.fodors.com/wp-content/uploads/2019/02/06_Ultimate_India_GoldenTemple_shutterstock_604512275.jpg'},
      {
        id: 6,
        currentPrice: 49,
        lastPrice: 79,
        currency: '$',
        stars: 4.6,
        ratings: 322,
        cashback: 15,
        discount: 50,
        about: 'Varansi',
        description: `Ghats to visit in varansi`,
        url:
          'https://t4.ftcdn.net/jpg/04/08/25/05/360_F_408250543_MVaEVGeWxb4FiFy7mEGKj8nfYkwoAZON.jpg'},
      {
        id: 7,
        currentPrice: 69,
        lastPrice: 79,
        currency: '$',
        stars: 4.6,
        ratings: 274,
        cashback: 10,
        discount: 46,
        about: 'Goa',
        description: `explore Beaches`,
        url:
          'https://media.nomadicmatt.com/indiafaves006.jpg'},
      {
        id: 8,
        showMore: true,
        currentPrice: null,
        lastPrice: null,
        currency: null,
        stars: null,
        ratings: null,
        cashback: null,
        discount: null,
        about: null,
        description: null,
        url: null
      }
    ]
  },
  {
    id: 4,
    headline: 'Ticket for Tajmahal',
    description:
      'Stay up to date on the season’s hottest shows and score amazing discounts and offers for the most popular entertainment attraction in the world.',
    sectionData: [
      {
        id: 1,
        currentPrice: 62.5,
        currency: '$',
        stars: 4.6,
        ratings: 564,
        cashback: 10,
        about: 'one of the wonder',
        description: 'tajmahal',
        url:'https://www.planetware.com/wpimages/2022/07/india-top-15-things-to-do-tour-taj-mahal-in-agra.jpg'
          },
      {
        id: 2,
        currentPrice: 29,
        lastPrice: null,
        currency: '$',
        stars: 4.6,
        ratings: 681,
        cashback: 10,
        about: 'traditional Dance Show',
        description: `Ghoomar Dance`,
        url:
          'https://static.prepp.in/public/image/aca8faf063938152b52c004a50239f62.jpeg?tr=w-480,h-330,c-force' },
      {
        id: 3,
        currentPrice: 40.5,
        lastPrice: 79,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        discount: 49,
        about: 'Celebrate Holi',
        description: `festival of colors`,
        url:'https://trendingonlinenow.in/wp-content/uploads/2018/03/Holi-2-min-768x432.jpg'
         },
      {
        id: 4,
        currentPrice: 99,
        lastPrice: null,
        currency: '$',
        stars: 4.7,
        ratings: 347,
        cashback: 10,
        about: 'Jodhpur',
        description: `Explore the Blue City of Jodhpur`,
        url:
          'https://explorersaway.com/wp-content/uploads/2022/12/best-things-to-do-in-india.png.webp' },
      {
        id: 5,
        currentPrice: 89,
        lastPrice: null,
        currency: '$',
        stars: 4.6,
        ratings: 561,
        cashback: 10,
        about: 'Golden Temple',
        description: `Visit the Golden Temple in Amritsar`,
        url:
          'https://www.fodors.com/wp-content/uploads/2019/02/06_Ultimate_India_GoldenTemple_shutterstock_604512275.jpg'},
      {
        id: 6,
        currentPrice: 49,
        lastPrice: 79,
        currency: '$',
        stars: 4.6,
        ratings: 322,
        cashback: 15,
        discount: 50,
        about: 'Varansi',
        description: `Ghats to visit in varansi`,
        url:
          'https://t4.ftcdn.net/jpg/04/08/25/05/360_F_408250543_MVaEVGeWxb4FiFy7mEGKj8nfYkwoAZON.jpg'},
      {
        id: 7,
        currentPrice: 69,
        lastPrice: 79,
        currency: '$',
        stars: 4.6,
        ratings: 274,
        cashback: 10,
        discount: 46,
        about: 'Goa',
        description: `explore Beaches`,
        url:
          'https://media.nomadicmatt.com/indiafaves006.jpg'},
      {
        id: 8,
        showMore: true,
        currentPrice: null,
        lastPrice: null,
        currency: null,
        stars: null,
        ratings: null,
        cashback: null,
        discount: null,
        about: null,
        description: null,
        url: null
      }
    ]
  },
];

// New York Collections Data

// Collection Data

const collectionsData = [
  
  {
    id: 1,
    description: 'Markets',
    url:
      'https://as2.ftcdn.net/v2/jpg/03/37/62/21/1000_F_337622177_Kxg4kB4PVnzYEhPrKLAHiUEm4woMmAGx.jpg'},
  {
        id: 2,
        description: 'Indian parade',
        url:
    'https://im.indiatimes.in/content/2023/Jul/Bastille-Day-2023-Indan-Army-AMP_64b1335edf6b5.jpg?w=1200&h=900&cc=1'},

{
        id: 3,
        description: 'Malls',
        url:
          'https://theinternetstud.com/wp-content/uploads/2023/04/Top-10-Biggest-Malls-In-India.jpg'},
  {
    id: 4,
    description: 'Ram Leela',
    url:
      'https://assamtimes.org/sites/default/files/field/image/IMG_2097.JPG'},
  {
    id: 5,
    description: 'Entertainment',
    url:
      'https://m.economictimes.com/thumb/msid-61658858,width-640,height-480,resizemode-7/vibrant-india-heres-how-to-experience-the-best-of-luxury-entertainment-food-music-and-nightlife.jpg'},
  
  {
    id: 6,
    description: 'Foods and Drinks',
    url:
      'https://assets.vogue.com/photos/63d169f727f1d528635b4287/16:9/w_3631,h_2042,c_limit/GettyImages-1292563627.jpg'},
  {
    id: 7,
    description: 'Mumbai',
    url:
      'https://cdn-imgix.headout.com/category/20/image/50dd86bd-0af8-4fef-a334-94a699d3a67c-NYC101.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 8,
    description: 'Cruises',
    url:
      'https://yourplatform.in/wp-content/uploads/2022/10/The-Goa-Cruise.jpg' }
];

export default NewYork;
