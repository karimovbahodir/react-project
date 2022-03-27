import { useState, useEffect } from 'react';
import './ModalPass.css'

const ModalPass = ({ closeModal }) => {

	const [confirmPassword, setConfirmPassword] = useState('');
	const [confirmPasswordDirty, setConfirmPasswordDirty] = useState(false);
	const [confirmPasswordError, setConfirmPasswordError] = useState('Email не может быть пустым');
	const [formValid, setFormValid] = useState(false);

	useEffect(() => {
		if (confirmPasswordError) {
			setFormValid(false)
		} else {
			setFormValid(true)
		}
	}, [confirmPasswordError])

	const onChangeCon = (e) => {
		setConfirmPassword(e.target.value)
		const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if (!re.test(String(e.target.value).toLowerCase())) {
			setConfirmPasswordError('Некорректный email');
		} else {
			setConfirmPasswordError("")
		}
	}

	const blurHandler = (e) => {
		switch (e.target.name) {
			case "confirmPassword":
				setConfirmPasswordDirty(true)
				break
		}
	}

		return (
			<div className="modalPass">
				<div className="modalPass__container">
					<div className="form">
						<p>Пожалуйста, введите ваш адрес электронной почты, на который мы отправим ссылку для восстановления пароля</p>
						<div className="input-form">
							{(confirmPasswordDirty && confirmPasswordError) && <div style={{ color: "red" }}>{confirmPasswordError}</div>}
							<input type="text" name='confirmPassword' placeholder='Введите свой email'
								value={confirmPassword}
								onChange={e => onChangeCon(e)}
								onBlur={e => blurHandler(e)}
							/>
						</div>

						<button className="button button__main button__main-inner" disabled={!formValid} onClick={closeModal}><div className='inner pass'>Отправить</div></button>
					</div>
				</div>
			</div>
		)
	}

	export default ModalPass;