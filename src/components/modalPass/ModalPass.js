import { useState, useEffect } from 'react';
import './ModalPass.css'

const ModalPass = ({ closeModal, email, emailError, onChangeEmail }) => {

	const [confirmPasswordDirty, setConfirmPasswordDirty] = useState(false);
	const [formValid, setFormValid] = useState(false);

	useEffect(() => {
		if (emailError) {
			setFormValid(false)
		} else {
			setFormValid(true)
		}
	}, [emailError])


	const blurHandler = (e) => {
		if (e.target.name==="email") {
				setConfirmPasswordDirty(true)
		}
	}

		return (
			<div className="modalPass">
				<div className="modalPass__container">
					<div className="form">
						<p>Пожалуйста, введите ваш адрес электронной почты, на который мы отправим ссылку для восстановления пароля</p>
						<div className="input-form">
							{(confirmPasswordDirty && emailError) && <div style={{ color: "red" }}>{emailError}</div>}
							<input type="text" name='confirmPassword' placeholder='Введите свой email'
								value={email}
								onChange={e => onChangeEmail(e)}
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