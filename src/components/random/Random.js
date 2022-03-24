import './Random.css';
import cacke from '../../resources/img/cacke.jpg';
import capckec from '../../resources/img/капкейк.jpg'

const Random = () => {
	return (
		<div className="randomchar">
			<div className="randomchar__block">
				<img src={cacke} alt="Random character" className="randomchar__img" />
				<div className="randomchar__info">
					<p className="randomchar__name">шоколадный торт</p>
					<p className="randomchar__descr">
						Для бисквита, используя водяную баню, взбиваем сахарный песок и яйца. Всыпаем муку, соль и осторожно смешиваем. В отдельной ёмкости растопим и охладим масло. Туда же постепенно добавляем мучную... 
					</p>
					<div className="randomchar__btns">
						<a href="#" className="button button__main">
							<div className="inner">главная</div>
						</a>
						<a href="#" className="button button__secondary">
							<div className="inner">Подробнее</div>
						</a>
					</div>
				</div>
			</div>
			<div className="randomchar__static">
				<p className="randomchar__title">
					Случайный дисерт на сегодня!<br />
					Вы хотите узнать рецепт?
				</p>
				<p className="randomchar__title">
					Или выберите другой
				</p>
				<button className="button button__main">
					<div className="inner">Случайный дисерт</div>
				</button>
				<img src={capckec} alt="mjolnir" className="randomchar__decoration" />
			</div>
		</div>
	)
}

export default Random;