/* global monogatari */

// Define the messages used in the game.
monogatari.action('message').messages({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action('notification').notifications({
	'Welcome': {
		title: 'Bem-vindo',
		body: 'Esta é uma VN em JavaScript',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action('particles').particles({

});

// Define the canvas objects used in the game
monogatari.action('canvas').objects({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets('gallery', {

});

// Define the music used in the game.
monogatari.assets('music', {
	'routine': 'x-2.ogg'
});

// Define the voice files used in the game.
monogatari.assets('voices', {

});

// Define the sounds used in the game.
monogatari.assets('sounds', {

});

// Define the videos used in the game.
monogatari.assets('videos', {

});

// Define the images used in the game.
monogatari.assets('images', {
	'home': 'DDLC.jpg'
});

// Define the backgrounds for each scene.
monogatari.assets('scenes', {
	'house': 'house_rain.png'
});


// Define the Characters
monogatari.characters({
	's': {
		name: 'Sayori',
		color: '#5bcaff',
		directory: 'sayori',
		sprites: {
			Confused: 'confused.png',
			Sad: 'sad.png'
		}
	},

	'Mc': {
		name: '{{player.name}}',
		color: '#00bff'
	}
});


monogatari.script({
	// The game starts here.
	'Start': [
		'show scene house with fadeIn',
		'play music routine with loop',
		'show notification Welcome',
		{
			'Input': {
				'Text': 'Qual é o seu nome?',
				'Validation': function (input) {
					return input.trim().length > 0;
				},
				'Save': function (input) {
					this.storage({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'Você deve digitar um nome!'
			}
		},
		'É um dia extremamente chuvoso.',
		'Eu fui a casa de um amigo assistir anime e acabei voltando tarde... ',
		'Sinceramente... onde é que vou parar?',
		'"Na rua". Me diz um pensamento vago e duvidoso.',
		's {{player.name}} ?',
		'show character s Confused',
		's É você?',
		'Mc Sa-Sayori?...',
		'Esta é Sayori, minha amiga de infância, costumávamos ir juntos para a escola todos os dias',
		`Bem... <b>COSTUMÁVAMOS</b>`,
		'Depois do Fundamental 1, ela começou a se atrasar para a escola, e isso passou a ser cada vez mais frequente',
		'No início, eu até esperava por ela, mas depois me cansei e comecei a ir sozinho',
		'Mc Já faz tanto tempo né? Você está bem?',
		's Eu estou, mas não sei você...',
		'Sayori está me olhando de cima abaixo, talvez ela esteja pensando no porque de eu ter saído nessa chuva...',
		'A verdade é que eu não tenho feito nada de útil nesses últimos anos',
		'Minha vida se resume a: Acordar, ir a escola, comer, assistir anime e dormir',
		'Mc Estou bem, não se preocupe. Fui na casa de um amigo e na hora de voltar, acabei pegando essa chuva',
		'show character s Sad',
		's É que você parece meio abatido {{player.name}}...',
		'Abatido? o que ela quis dizer com isso?',
		'Mc Abatido? Como assim Sayori?',
		's Não sei como explicar {{player.name}}... é como se alguém tivesse te ferido...',
		'Ela não pode estar falando sério né ?',
		'Ta de bricadeira...',
		'E-ela... soube?'
	]
});

monogatari.configuration('credits', {
	"Desenvolvedores": {
		"Dev": `<a href="https://github.com/kayqueprogram" target="_blank">Kayque</a>`,
		"Roteirista": `<a href="https://github.com/kayqueprogram" target="_blank">Kayque</a>`,
	},

	"Agradecimentos especiais": {

		"Meus parentes": ["A Minha vó Neuza", "A meu Vô Jaime"],
		"Meus Professores": ["Iolanda", "Roseane", "Margarete"],
		"Meus Amigos": ["Derik", "Felipe", "Maria", "Alisson", "Miki Shirogane"],

	}

});