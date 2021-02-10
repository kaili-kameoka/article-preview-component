const closeShare = e => {
	const article = e.target.closest('.article');
	const button = article.querySelector('.meta__actions .button--close');
	const share = article.querySelector('.share');
	const meta = article.querySelector('.meta--hidden');

	share.classList.add('share--hidden');
	share.classList.remove('share');

	meta.classList.add('meta');
	meta.classList.remove('meta--hidden');
	
	button.classList.toggle('button');
	button.classList.toggle('button--close');
}

const toggleShare = e => {
	console.log("toggleShare");
	const article = e.target.closest('.article');
	const button = article.querySelector('.button, .button--close');
	const share = article.querySelector('.share--hidden, .share');
	const meta = article.querySelector('.meta, .meta--hidden');

	share.classList.toggle('share')
	share.classList.toggle('share--hidden');

	meta.classList.toggle('meta');
	meta.classList.toggle('meta--hidden');

	button.classList.toggle('button');
	button.classList.toggle('button--close');
	
}