const DIRECTION = {
	40: 0,
	37: 1,
	39: 2,
	38: 3
}

const token = sessionStorage.getItem('token');
const DUREE_ANIMATION = 3;
const DUREE_DEPLACEMENT = 9;

export function drawCharacter(context) {
	let state = this.state;
	let frame = 1; // Numéro de l'image à prendre pour l'animation
	let decalageX = 0, decalageY = 0; // Décalage à appliquer à la position du personnage
    if(state.etatAnimation >= 0) {
	// On calcule l'image (frame) de l'animation à afficher
		frame = Math.floor(state.etatAnimation / DUREE_ANIMATION);
		if(frame > 2) frame %= 3;
	// Nombre de pixels restant à parcourir entre les deux cases
		var pixelsAParcourir = 32 - (32 * (state.etatAnimation / DUREE_DEPLACEMENT));
	
	// À partir de ce nombre, on définit le décalage en x et y.
	// NOTE : Si vous connaissez une manière plus élégante que ces quatre conditions, je suis preneur
		if(state.direction === 3) decalageY = pixelsAParcourir;
		else if(state.direction === 0) decalageY = -pixelsAParcourir;
		else if(state.direction === 1) decalageX = pixelsAParcourir;
	 	else if(state.direction === 2) decalageX = -pixelsAParcourir;
	
		$.post('/animation', {token});
	}

 // * Si aucune des deux conditions n'est vraie, c'est qu'on est immobile, 
 // * donc il nous suffit de garder les valeurs 0 pour les variables 
 // * frame, decalageX et decalageY
 	context.drawImage(
		this.image,
		frame*this.width, state.direction*this.height,
		this.width, this.height,
		(state.x * 32) + decalageX, (state.y * 32) + decalageY,
		this.width, this.height,
	);
}