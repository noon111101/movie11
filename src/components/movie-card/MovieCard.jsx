import './movie-card.scss'
import { NavLink } from 'react-router-dom'
import { category } from '../../api/tmdbApi'
import playbutton from '../../asset/playbutton.png';
export function MovieCard(props) {
      const item = props.item
      const link = `/${props.category}/${item.id}`
      return (
            <NavLink to={link} reloadDocument={true}>
                  <div className={`movie-card ${props.classname}`} style={{backgroundImage: `url(${props.image})`}}>
                        <img src={playbutton} alt="" />
                  </div>
                  <p className={`movie-card-title`}>{props.title}</p>
            </NavLink>
      )
}