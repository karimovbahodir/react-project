import { useEffect, useState } from 'react';
import './ModalSigin.css';


const ModalSigin = ({handlerPass, handlerReg, checkOut, email, emailError, onChangeEmail}) => {
	const [pass, setPass] = useState('');
	const [emailDirty, setEmailDirty] = useState(false);
	const [passDirty, setPassDirty] = useState(false);
	const [passError, setPassError] = useState('Пароль не может быть пустым');
	const [formValid, setFormValid]=useState(false);

	useEffect (()=>{
		if( emailError || passError){
			setFormValid(false)
		}else{
			setFormValid(true)
		}
	}, [emailError, passError])

	const blurHandler = (e) => {
		switch (e.target.name) {
			case "email":
				setEmailDirty(true)
				break
			case "pass":
				setPassDirty(true)
				break
		}
	}

	

	
	

	const onChangePass = (e) => {
		setPass(e.target.value)
		if(e.target.value.length<3 || e.target.value.length > 8){
			setPassError("Пароль должен быть длиннее 3 и меньше 8")
			if(!e.target.value){
				setPassError("Пароль не может быть пустым")
			}
		}else{
			setPassError('')
		}
	}


	return (<>

		<div className="input-form">
			{(emailDirty && emailError) && <div style={{ color: "red" }}>{emailError}</div>}
			<input 
				placeholder='Введите номер телефона или email'
				neme="email" type="text"
				velue={email}
				onChange={e => onChangeEmail(e)}
				onBlur={e => blurHandler(e)}/>
		</div>
		<div className="input-form">
			{(passDirty && passError) && <div style={{ color: "red" }}>{passError}</div>}
			<input
				onChange={e => onChangePass(e)}
				onBlur={e => blurHandler(e)}
				name="pass" type="password"
				velue={pass}
				placeholder='Пароль' />
		</div>

		<button className="button button__main"  disabled={!formValid} onClick={checkOut}><div className='inner sigin'>Войти</div></button>
		<div className="submit">
			<a href='#' className='forget'
				onClick={handlerPass}>Забыли пароль?</a>
			<a href='#' className='reg'
				onClick={handlerReg}>Создать аккаунт</a>
		</div>
	</>
	)
}


export default ModalSigin;