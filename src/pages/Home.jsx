import { NavLink } from "react-router-dom";
import { HeroSlide } from "../components/hero-slide/HeroSlide";
import { MovieList } from "../components/movie-list/MovieList";
import { category, movieType } from "../api/tmdbApi";

function Home() {
  return (
    <div className="Home">
      <HeroSlide />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header">
            <h2>Trending Movies</h2>
            <NavLink to={`/${category.movie}`}>
              Show more
            </NavLink>
          </div>
          <MovieList
            movieType={movieType.trending}
            category={category.movie}
          />
        </div>
        <div className="section mb-3">
          <div className="section__header">
            <h2>Upcomming</h2>
            <NavLink to={`/${category.movie}`}>
              Show more
            </NavLink>
          </div>
          <MovieList
            movieType={movieType.upcoming}
            category={category.movie}
          />
        </div>
        <div className="section mb-3">
          <div className="section__header">
            <h2>Top Rated</h2>
            <NavLink to={`/${category.movie}`}>
              Show more
            </NavLink>
          </div>
          <MovieList
            movieType={movieType.top_rated}
            category={category.movie}
          />
        </div>
        <div className="section mb-3">
          <div className="section__header">
            <h2>TV Trending</h2>
            <NavLink to={`/${category.tv}`}>
              Show more
            </NavLink>
          </div>
          <MovieList
            movieType={movieType.trending}
            category={category.tv}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
