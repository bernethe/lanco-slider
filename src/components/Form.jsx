import React from 'react'
import {FaImage, FaUndo} from 'react-icons/fa'

const Form = () => {

	const handleBgImg = e => {
		const file = document.querySelector('#bgimage_input').files[0];
		document.getElementById('bg_img').style.backgroundImage = `url(${URL.createObjectURL(file)})`;
	}

	const handleContImg = e => {
		const file = document.querySelector('#contimage_input').files[0];
		document.getElementById('content_img').src = URL.createObjectURL(file);
	}

	const handleReset = () => {
		document.getElementById('bg_img').style.backgroundImage = 'none'
		document.getElementById('content_img').src = '';
	}

	return <div className='container my'>
		<form className='mx-auto'>
			<label>
				<strong><FaImage /> Imagen de Fondo (JPG - 1920px × 400px)</strong><br />
				<input type='file' accept='image/*' id='bgimage_input' onChange={ handleBgImg } />
			</label>
			<label>
				<strong><FaImage /> Imagen de Contenido (PNG - 1170px × 400px)</strong><br />
				<input type='file' accept='image/*' id='contimage_input' onChange={ handleContImg } />
			</label>
			<button type='reset' onClick={ handleReset }>
				<FaUndo /> Reset
			</button>
		</form>
	</div>
}

export default Form