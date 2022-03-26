import './List.css';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import useService from '../../services/Service';

const List = (props) => {

	const [charList, setCharList] = useState([]);
	const [newItemLoading, setNewItemLoading] = useState(false);
	const [offset, setOffset] = useState(16);
	const [charEnded, setCharEnded] = useState(false);

	const { loading, error, getAllCakes } = useService();

	useEffect(() => {
		onRequest(offset, true);
	}, [])

	const onRequest = (offset, initial) => {
		initial ? setNewItemLoading(false) : setNewItemLoading(true);

		getAllCakes(offset)
			.then(onCharListLoaded)
	}

	const onCharListLoaded = (newCharList) => {
		let ended = false;
		if (newCharList.length < 6) {
			ended = true;
		}

		setCharList(charList => [...charList, ...newCharList]);
		setNewItemLoading(newItemLoading => false);
		setOffset(offset => offset + 3);
		setCharEnded(charEnded => ended);
	}

	const itemRefs = useRef([]);



	const focusOnItem = (id) => {

		itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
		itemRefs.current[id].classList.add('char__item_selected');
		itemRefs.current[id].focus();
	}


	function renderItems(arr) {
		const items = arr.map((item, i) => {

			return (
				<li
					className="char__item"
					tabIndex={0}
					ref={el => itemRefs.current[i] = el}
					key={item.id}
					onClick={() => {
						props.onCharSelected(item.id);
						focusOnItem(i);
					}}
					onKeyPress={(e) => {
						if (e.key === ' ' || e.key === "Enter") {
							props.onCharSelected(item.id);
							focusOnItem(i);
						}
					}}>
					<img src={item.thumbnail} alt={item.name} />
					<div className="char__name">{item.name}</div>
				</li>
			)
		});
		
		return (
			<ul className="char__grid">
				{items}
			</ul>
		)
	}





	const items = renderItems(charList);



	const errorMessage = error ? <ErrorMessage /> : null;
	const spinner = loading && !newItemLoading ? <Spinner /> : null;

	return (
		<div className="char__list">
			{errorMessage}
			{spinner}
			{items}
			<button
				className="button button__main button__long"
				disabled={newItemLoading}
				style={{ 'display': charEnded ? 'none' : 'block' }}
				onClick={() => onRequest(offset)}>
				<div className="inner">load more</div>
			</button>
		</div>
	)
}

List.propTypes = {
	onCharSelected: PropTypes.func.isRequired
}

export default List;