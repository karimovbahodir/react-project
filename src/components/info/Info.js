import './Info.css';
import cacke from '../../resources/img/cacke.jpg';


const Info = () => {
	return (
		<div className="char__info">
			<div className="char__basics">
				<img src={cacke} alt="abyss" />
				<div>
					<div className="char__info-name">Шоколадный 
					<br/>
					торт</div>
					<div className="char__btns">
						<a href="#" className="button button__main">
							<div className="inner">главная</div>
						</a>
						<a href="#" className="button button__secondary">
							<div className="inner">подобнее</div>
						</a>
					</div>
				</div>
			</div>
			<div className="char__descr">
			Для бисквита, используя водяную баню, взбиваем сахарный песок и яйца. Всыпаем муку, соль и осторожно смешиваем. В отдельной ёмкости растопим и охладим масло. Туда же постепенно добавляем мучную... 
			</div>
			<div className="char__comics">Састав:</div>
			<ul className="char__comics-list">
				<li className="char__comics-item">
				Мука – 350 г,
				</li>
				<li className="char__comics-item">
				Сахар – 200 г,
				</li>
				<li className="char__comics-item">
				Яйца – 6 штук,
				</li>
				<li className="char__comics-item">
				Масло (сливочное) – 150 г,
				</li>
				<li className="char__comics-item">
				Какао-порошок – 50 г,
				</li>
				<li className="char__comics-item">
				Соль – половина чайной ложки.
				</li>
				<li className="char__comics-item">
				Шоколад (чёрный) – 200 г,
				</li>
				<li className="char__comics-item">
				Сливки (жирные) – 450 мл,
				</li>
				<li className="char__comics-item">
				Желатин – чайная ложка с горкой.
				</li>
				<li className="char__comics-item">
				Шоколад (чёрный) – 100 г (плитка),
				</li>
			</ul>
		</div>
	)
}

export default Info;
