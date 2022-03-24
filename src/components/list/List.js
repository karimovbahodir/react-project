import './List.css';
import all from '../../resources/img/cacke.jpg'

const List = () => {
	return (
		<div className="char__list"> 
			<ul className="char__grid">
				<li className="char__item">
					<img src={all} alt="abyss" />
					<div className="char__name">tort</div>
				</li>
				<li className="char__item char__item_selected">
					<img src={all} alt="abyss" />
					<div className="char__name">Торт</div>
				</li>
				<li className="char__item">
					<img src={all} alt="abyss" />
					<div className="char__name">Торт</div>
				</li>
				<li className="char__item">
					<img src={all} alt="abyss" />
					<div className="char__name">Торт</div>
				</li>
				<li className="char__item">
					<img src={all} alt="abyss" />
					<div className="char__name">Торт</div>
				</li>
				<li className="char__item">
					<img src={all} alt="abyss" />
					<div className="char__name">Торт</div>
				</li>
				<li className="char__item">
					<img src={all} alt="abyss" />
					<div className="char__name">Торт</div>
				</li>
				<li className="char__item">
					<img src={all} alt="abyss" />
					<div className="char__name">Торт</div>
				</li>
				<li className="char__item">
					<img src={all} alt="abyss" />
					<div className="char__name">Торт</div>
				</li>
			</ul>
			<button className="button button__main button__long">
				<div className="inner">Больше</div>
			</button>
		</div>
	)
}

export default List;