/* global monogatari */

// Define the messages used in the game.
monogatari.component('loading-screen').template(() => {
	return `
<div>Carregando o jogo...</div>
<div data-content="wrapper"> 

                <h2 data-string="Loading" data-content="title">Carregando...</h2>
                <progress value="0" max="100" data-content="progress"></progress>
                <small data-string="LoadingMessage" data-content="message">Aguarde enquanto os recursos são carregados.</small>
            </div>
   `;
});

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
	'routine': 'x-2.ogg',
	'confession': 'x-10.ogg'
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
			Sad: 'sad.png',
			Sad02: 'sad02.png',
			Sad03: 'sad03.png',
			Sad04: 'sad04.png',
			Afraid: 'afraid.png',
			CalmingDown: 'calming down.png'
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
		'play music confession with loop',
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
		'show character s Confused biggercharachter Slidein',
		's É você?',
		'Mc Sa-Sayori?...',
		'Esta é Sayori, minha amiga de infância, costumávamos ir juntos para a escola todos os dias',
		`Bem... <b>COSTUMÁVAMOS</b>`,
		'Depois do Fundamental 1, ela começou a se atrasar para a escola, e isso passou a ser cada vez mais frequente',
		'No início, eu até esperava por ela, mas depois me cansei e comecei a ir sozinho',
		'Mc Já faz tanto tempo né? Você está bem?',
		's Eu estou, mas não sei você...',
		'Sayori está me olhando de cima a baixo, talvez ela esteja pensando no porque de eu ter saído nessa chuva...',
		'A verdade é que eu não tenho feito nada de útil nesses últimos anos',
		'Minha vida se resume a: Acordar, ir a escola, comer, assistir anime e dormir',
		'Mc Estou bem, não se preocupe. Fui na casa de um amigo e na hora de voltar, acabei pegando essa chuva',
		'show character s Sad biggercharachter',
		's É que você parece meio abatido {{player.name}}...',
		'Abatido? o que ela quis dizer com isso?',
		'Mc Abatido? Como assim Sayori?',
		's Não sei como explicar {{player.name}}... é como se alguém tivesse te ferido...',
		'Ela não pode estar falando sério né ?',
		'Ta de bricadeira...',
		'E-ela... soube?',
		'Ah, mas é claro que soube. Rumores correm rápido',
		'Mc Sayori... não precisa disfarçar... você soube, não é?',
		'show character s Afraid biggercharachter',
		's ...',
		's B-bem.. mais ou menos...',
		'Mc O que te disseram?',
		's Que você foi rejeitado e humilhado na frente de todos da sua sala quando se declarou pra quem gostava',
		'Mc Que cruel...',
		'Mc Pena que foi assim mesmo',
		'show character s Sad02 biggercharachter',
		's S-sinto muito por você {{player.name}}...',
		'Mc Tudo bem Sayori',
		'Isso... Sayori, você ta chorando?...',
		'Mc Não foi grande coisa no final das contas...',
		'show character s Sad04',
		's Foi sim!',
		'Mc Calma Sayori, está tudo bem, sério...',
		'show character s Sad03',
		'Me aproximo dela e a abraço. Sayori sempre foi assim tão emotiva? Não, acho que não, é diferente desta vez...',
		'Ela se importa tanto assim comigo? Bem... acho que nunca percebi isso..',
		'Talvez porque realmente eu nunca prestei muita atenção nela, embora ela fosse minha melhor amiga',
		'Mc Hey Sayori... está tudo bem, aquilo já passou. ',
		'Mc Nem me importo mais com isso, se quer saber',
		'show character s CalmingDown biggercharachter',
		'Me afasto um pouco e sorrio gentilmente para ela',
		'Aos poucos, Sayori se acalma e percebe o que estava fazendo'
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