import 'virtual:uno.css'
import './main.css'

const form = document.querySelector('#qr-code-form')
const urlInput = document.querySelector('#url')
const colorInput = document.querySelector('#color')
const qrCode = document.querySelector('#qr-code')

form.addEventListener('submit', e => {
	e.preventDefault()

	const imageUrl = new URL(
		'https://api.qrserver.com/v1/create-qr-code/?size=600x600&color=black&bgcolor=white&data=loremIpsum',
	)
	imageUrl.searchParams.set('data', urlInput.value)
	imageUrl.searchParams.set('color', colorInput.value.replace(/^#/, ''))

	qrCode.src = imageUrl.href
})
