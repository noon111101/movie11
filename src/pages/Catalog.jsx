import { HeaderPage } from "../components/header-page/HeaderPage";
import { MovieGrid } from "../components/movie-grid/MovieGrid";
import { category, movieType } from "../api/tmdbApi";
import { useLocation, useParams } from "react-router-dom";

function Catalog() {
  const cateParam = useParams()
  return (
    <div className="Catalog">
      <HeaderPage
        classname = {cateParam}
        cate = {cateParam.category === category.movie ? "Movies" : "Tv Series" }
      />
      <MovieGrid
        category = {cateParam.category}
      />

    </div>
  );
}

export default Catalog;
