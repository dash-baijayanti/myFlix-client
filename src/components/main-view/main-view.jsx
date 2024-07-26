import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      Title: "Dhoom 2",
      Description:
        "Dhoom 2 is an action-packed Bollywood film that takes the genre to new heights.",
      Genre: {
        Name: "Action",
        Description:
          "The action film is a film genre that predominantly features chase sequences, fights, shootouts, explosions, and stunt work",
      },
      Director: {
        Name: "Sanjay Gadhvi",
        Bio: "Gadhvi's career began by assisting Anant Balani with Tu Hi Bataa, which was never released.[3] He made his directorial debut with Tere Liye (2000), which performed poorly.[4] His first film with Yash Raj Films was Mere Yaar Ki Shaadi Hai (2002), which enjoyed moderate success. He first gained attention directing the action thriller Dhoom in 2004, followed by its sequel Dhoom 2.[5] The films starred Abhishek Bachchan, Uday Chopra, and Rimi Sen, with Hrithik Roshan, Aishwarya Rai, and Bipasha Basu joining the cast for the seque",
        BirthYear: "22 November 1965",
        DeathYear: "19 November 2023",
      },
      ReleaseDate: "24 November 2006",
      Cast: " Hrithik Roshan, Aishwarya Rai, Abhishek Bachchan, Bipasha Basu, Uday Chopra",
      ImageUrl:
        "https://www.yashrajfilms.com/images/default-source/Movies/Dhoom-2/dhoom2_mobile.jpg?sfvrsn=7598f5cc_8",
      Featured: true,
    },

    {
      id: 2,
      Title: "3 Idiots",
      Description:
        "3 Idiots has been ranked China's 12th favourite film of all time according to ratings on popular Chinese film review site Douban, with only one domestic Chinese film (Farewell My Concubine) ranked higher.",
      Genre: {
        Name: "comedy-drama",
        Description:
          "This is a form of comedy that merges elements of tragedy and comedy together, often placing dramatic characters in comedic situations, or introducing comedic characters into dramas.",
      },
      Director: {
        Name: "Rajkumar Hirani",
        Bio: "Starting his career as a film editor after passing out from FTII in editing, a bad experience forced him to shift to ad films, where he made several successful ads. His first film as a professional editor was Vidhu Vinod Chopra's action drama Mission Kashmir (2000).",
        BirthYear: "20 November 1962",
        DeathYear: "Waiting😃",
      },
      ReleaseDate: "25 December 2009",
      Cast: " Aamir Khan, R. Madhavan, Sharman Joshi, Kareena Kapoor, Boman Irani",
      ImageUrl:
        "https://www.letsfindmovie.com/wp-content/uploads/2020/04/aFGPUmbgGoAt93WP3WYsAPa0Yv8.jpg",
      Featured: true,
    },

    {
      id: 3,
      Title: "Titanic",
      Description:
        "Cameron's inspiration for the film came from his fascination with shipwrecks. He felt a love story interspersed with the human loss would be essential to convey the emotional impact of the disaster.",
      Genre: {
        Name: "Romantic Film",
        Description:
          "A Romantic storytelling genre that focuses on love and romantic relationships between two or more characters. It typically includes themes of passion, intimacy, and emotional connection between characters, and often explores the complexities of human relationships.",
      },
      Director: {
        Name: "James Cameron",
        Bio: "He is a major figure in the post-New Hollywood era. He often uses novel technologies with a classical filmmaking style. He first gained recognition for writing and directing The Terminator (1984) and found further success with Aliens (1986), The Abyss (1989), Terminator 2: Judgment Day (1991), True Lies (1994), as well as Avatar (2009) and its sequels. He directed, wrote, co-produced, and co-edited Titanic (1997), winning three Academy Awards for Best Picture, Best Director, and Best Film Editing. He is a recipient of various other industry accolades, and three of his films have been selected for preservation in the National Film Registry by the Library of Congress.",
        BirthYear: "August 16 1954",
        DeathYear: "Waiting😃",
      },
      ReleaseDate: "December 19, 1997",
      Cast: "Kate Winslet, Leonardo DiCaprio ",
      ImageUrl: "https://picfiles.alphacoders.com/140/thumb-1920-140026.jpg",
      Featured: true,
    },

    {
      id: 4,
      Title: "Cinderella",
      Description:
        "Cinderella is an ambitious young woman who dreams of establishing her shop, Dresses by Ella. After she catches the eye of Prince Robert in passing, he disguises himself as a commoner and sets out in hopes of meeting her.",
      Genre: {
        Name: "Romantic film",
        Description:
          "A Romantic storytelling genre that focuses on love and romantic relationships between two or more characters. It typically includes themes of passion, intimacy, and emotional connection between characters, and often explores the complexities of human relationships.",
      },
      Director: {
        Name: "Kay Cannon",
        Bio: "She is best known for writing and producing the Pitch Perfect film series (2012–2017). She made her directorial debut with the comedy film Blockers (2018). Cannon was also a writer and producer for the NBC comedy series 30 Rock (2007–2012) and the FOX comedy series New Girl (2012–2014).[2] She created, wrote and produced the short-lived Netflix comedy-drama series Girlboss (2017).",
        BirthYear: "August 21 1974)",
        DeathYear: "Waiting😃",
      },
      ReleaseDate: "August 30 2021",
      Cast: "Camila Cabello, Nicholas Galitzine ",
      ImageUrl:
        "https://cdn.shopify.com/s/files/1/0197/1326/products/CINDERELLA_1200x1200.jpg?v=1629250365",
      Featured: false,
    },

    {
      id: 5,
      Title: "Avatar The Way of Water",
      Description:
        "Avatar: The Way of Water is a movie that follows the story of the Sully family, more than a decade after the events of the first film",
      Genre: {
        Name: "science fiction film",
        Description:
          "Science fiction is a genre of fiction dealing with the impact of imagined innovations in science or technology.",
      },
      Director: {
        Name: "James Cameron",
        Bio: "He is a major figure in the post-New Hollywood era. He often uses novel technologies with a classical filmmaking style. He first gained recognition for writing and directing The Terminator (1984) and found further success with Aliens (1986), The Abyss (1989), Terminator 2: Judgment Day (1991), True Lies (1994), as well as Avatar (2009) and its sequels. He directed, wrote, co-produced, and co-edited Titanic (1997), winning three Academy Awards for Best Picture, Best Director, and Best Film Editing. He is a recipient of various other industry accolades, and three of his films have been selected for preservation in the National Film Registry by the Library of Congress.",
        BirthYear: " August 16 1954",
        DeathYear: "Waiting😃",
      },
      ReleaseDate: "December 6 2022",
      Cast: " Sam Worthington, Zoe Saldaña, Sigourney Weaver",
      ImageUrl:
        "https://content.webtickets.co.za/labia/banner_Avatar-The-Way-Of-Water-Header[1]_20221125_160122.jpg",
      Featured: false,
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState([null]);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>It's empty.</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movieData={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
