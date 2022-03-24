import './Random.css';
import Service from '../../services/Service';
import ErrorMessage from '../errorMessage/ErrorMessage';
import capckec from '../../resources/img/капкейк.jpg';
import { useEffect, useState } from 'react';
import Spinner from '../spinner/Spinner';

const Random = () => {
	const [char, setChar] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false)


	const service = new Service();

	useEffect(() => {
		upDate();
		const timerId = setInterval(upDate, 60000);

		return () => {
			clearInterval(timerId)
		}
	}, [])


	const onError = () => {
		setError(true);
		setLoading(false);
	}

	const onCharLoaded = (char) => {
		setLoading(false);
		setChar(char);
	}

	const onCharLoading = () => {
		setLoading(true);
	}


	const upDate = () => {
		const id = Math.floor(Math.random() * (17 - 1) + 1);
		onCharLoading();
		service
			.getCake(id)
			.then(onCharLoaded )
			.catch(onError);
	}




	const errorMessage = error ? <ErrorMessage /> : null;
	const spinner = loading ? <Spinner /> : null;
	const content = !(loading || error || !char) ? <View char={char} /> : null;

	return (
		<div className="randomchar">
			{errorMessage}
			{spinner}
			{content}
			<div className="randomchar__static">
				<p className="randomchar__title">
					Случайный десерт на сегодня!<br />
					Вы хотите узнать рецепт?
				</p>
				<p className="randomchar__title">
					Или выберите другой
				</p>
				<button onClick={upDate} className="button button__main">
					<div className="inner" >Случайный десерт</div>
				</button>
				<img src={capckec} alt="capckec" className="randomchar__decoration" />
			</div>
		</div>
	)

}
const View = ({ char }) => {
	const { name, description, thumbnail } = char;

	return (
		<div className="randomchar__block">
			<img src={thumbnail} alt="Random character" className="randomchar__img" />
			<div className="randomchar__info">
				<p className="randomchar__name">{name}</p>
				<p className="randomchar__descr">
					{description.length > 200 ? description.slice(0, 200) + '...' : description}
				</p>
			</div>
		</div>
	)
}

export default Random;