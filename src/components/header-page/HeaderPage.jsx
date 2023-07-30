import './header-page.scss'
import bg from '../../asset/footer.jpg';

export function HeaderPage(props) {
      return (
            <div className="container mb-3 header-page">
                  <h1>{props.cate}</h1>
            </div>
      )
}