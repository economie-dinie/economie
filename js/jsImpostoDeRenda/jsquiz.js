var questions = [{
	tamanhoPorcento: "10%",
	numQuestao: "1/10",
	numQuestao2: "Questão 1",
	question: "O que é imposto de renda?",
	choices: ["Se trata de um tributo federal sobre a renda", "Uma taxa de juros cobrada anualmente encima dos imposto mensais", "Imposto cobrado encima de taxa de juros "],
	correctAnswer: 0
}, {
	tamanhoPorcento: "20%",
	numQuestao: "2/10",
	numQuestao2: "Questão 2",
	question: "Posso atualizar o valor do meu imóvel no impsto de renda?",
	choices: ["Sim, posso para manter atualizado a receita federal", "Sim, porém só após 2 anos de compra", "Não, deve-se informar sempre o valor de compra do bem"],
	correctAnswer: 2
}, {
	tamanhoPorcento: "30%",
	numQuestao: "3/10",
	numQuestao2: "Questão 3",
	question: "O que deve ser declarado no imposto de renda? ",
	choices: ["Tudo que ganhei", "Tudo que ganhei e paguei", "Tudo que comprou"],
	correctAnswer: 1
}, {
	tamanhoPorcento: "40%",
	numQuestao: "4/10",
	numQuestao2: "Questão 4",
	question: "O que não devo declarar no imposto de renda?",
	choices: ["Seus gasto ", "Não tributos", "Bens que foram vendidas "],
	correctAnswer: 1
}, {
	tamanhoPorcento: "50%",
	numQuestao: "5/10",
	numQuestao2: "Questão 5",
	question: "O que é FGTS?",
	choices: ["Fundo de garantia ao trabalhador ", "Fundo de Garantia do Tempo de Serviço","Fundo de garatia temporal"],
	correctAnswer: 1
}, {
	tamanhoPorcento: "60%",
	numQuestao: "6/10",
	numQuestao2: "Questão 6",
	question: "Quem pode ser incluido como dependente",
	choices: ["Filhos, conjuge ou pessoa incapaz desde que seja tutor legal","Apenas os fihos com idade até 18 nos", "Filhos com idade maxima de 25 anos"],
	correctAnswer: 0

}, {
	tamanhoPorcento: "70%",
	numQuestao: "7/10",
	numQuestao2: "Questão 7",
	question: "Qual dessas depesas não entram na lista de gastos de instrução do imposto de renda?",
	choices: ["Aluguel e fatura de cartão de credito", "Aulas de dança e informatica ", "Gastos em lojas e restaurantes"],
	correctAnswer: 1
}, {
	tamanhoPorcento: "80%",
	numQuestao: "8/10",
	numQuestao2: "Questão 8",
	question: "A patir de qual valor devo declarar imposto de renda?",
	choices: ["15 mil reais em rendimentos tributáveis","30.200,45 mil reais em rendimento tributáveis", "28.559,70 mil reais em direitos tributáveis"],
	correctAnswer: 2
}, {
	tamanhoPorcento: "90%",
	numQuestao: "9/10",
	numQuestao2: "Questão 9",
	question: "Qual a diferença entre pessoa jurídica e física?",
	choices: ["Física, remete a todo ser humano com vida, Jurídica remete País, estados e municípios, empresas, associações, igrejas e partidos políticos.", "Jurídica, remete a todo ser humano com vida, Física remete País, estados e municípios, empresas, associações, igrejas e partidos políticos."],
	correctAnswer: 0

}, {
	tamanhoPorcento: "100%",
	numQuestao: "10/10",
	numQuestao2: "Questão 10",
	question: "Quantas vezes eu preciso declarar o imposto de renda no ano?",
	choices: ["1 vez a cada semestre ", "1 vez por ano", "2 vezes ao ano "],
	correctAnswer: 1

}];

var porcentagemQuestao = 0;

var numeroQuestao = 0;
var numeroQuestao2 = 0;
var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {

	// Display the first question
	displayCurrentQuestion();
	$(this).find(".quizMessage").hide();

	// On clicking next, display the next question
	$(this).find(".nextButton").on("click", function () {
		if (!quizOver) {

			value = $("input[type='radio']:checked").val();

			if (value == undefined) {
				$(document).find(".quizMessage").text("Por favor, selecione uma resposta!");
				$(document).find(".quizMessage").show();
			} else {
				// TODO: Remove any message -> not sure if this is efficient to call this each time....
				$(document).find(".quizMessage").hide();

				if (value == questions[currentQuestion].correctAnswer) {
					correctAnswers++;
				}

				porcentagemQuestao++;
				currentQuestion++; // Since we have already displayed the first question on DOM ready
				numeroQuestao++;
				numeroQuestao2++;

				if (currentQuestion < questions.length) {
					displayCurrentQuestion();
				} else {
					displayScore();
					//                    $(document).find(".nextButton").toggle();
					//                    $(document).find(".playAgainButton").toggle();
					// Change the text in the next button to ask if user wants to play again
					$(document).find(".nextButton").text("Repetir");
					quizOver = true;
				}
			}
		} else { // quiz is over and clicked the next button (which now displays 'Play Again?'
			quizOver = false;
			$(document).find(".nextButton").text("Próximo");
			resetQuiz();
			displayCurrentQuestion();
			hideScore();
		}
	});

	if (document.createElement('svg').getAttributeNS) {

		function createSVGEl(def) {
			var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			if (def) {
				svg.setAttributeNS(null, 'viewBox', def.viewBox);
				svg.setAttributeNS(null, 'preserveAspectRatio', def.preserveAspectRatio);
			} else {
				svg.setAttributeNS(null, 'viewBox', '0 0 100 100');
			}
			svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
			return svg;
		}

		function controlCheckbox(el, type, svgDef) {
			var svg = createSVGEl(svgDef);
			el.parentNode.appendChild(svg);

			el.addEventListener('change', function () {
				if (el.checked) {
					draw(el, type);
				} else {
					reset(el);
				}
			});
		}

		function controlRadiobox(el, type) {
			var svg = createSVGEl();
			el.parentNode.appendChild(svg);
			el.addEventListener('change', function () {
				resetRadio(el);
				draw(el, type);
			});
		}

		checkbxsCross.forEach(function (el, i) {
			controlCheckbox(el, 'cross');
		});
		radiobxsFill.forEach(function (el, i) {
			controlRadiobox(el, 'fill');
		});
		checkbxsCheckmark.forEach(function (el, i) {
			controlCheckbox(el, 'checkmark');
		});
		radiobxsCircle.forEach(function (el, i) {
			controlRadiobox(el, 'circle');
		});
		checkbxsBoxfill.forEach(function (el, i) {
			controlCheckbox(el, 'boxfill');
		});
		radiobxsSwirl.forEach(function (el, i) {
			controlRadiobox(el, 'swirl');
		});
		checkbxsDiagonal.forEach(function (el, i) {
			controlCheckbox(el, 'diagonal');
		});
		checkbxsList.forEach(function (el) {
			controlCheckbox(el, 'list', {
				viewBox: '0 0 300 100',
				preserveAspectRatio: 'none'
			});
		});

		function draw(el, type) {
			var paths = [],
				pathDef,
				animDef,
				svg = el.parentNode.querySelector('svg');

			switch (type) {
				case 'cross':
					pathDef = pathDefs.cross;
					animDef = animDefs.cross;
					break;
				case 'fill':
					pathDef = pathDefs.fill;
					animDef = animDefs.fill;
					break;
				case 'checkmark':
					pathDef = pathDefs.checkmark;
					animDef = animDefs.checkmark;
					break;
				case 'circle':
					pathDef = pathDefs.circle;
					animDef = animDefs.circle;
					break;
				case 'boxfill':
					pathDef = pathDefs.boxfill;
					animDef = animDefs.boxfill;
					break;
				case 'swirl':
					pathDef = pathDefs.swirl;
					animDef = animDefs.swirl;
					break;
				case 'diagonal':
					pathDef = pathDefs.diagonal;
					animDef = animDefs.diagonal;
					break;
				case 'list':
					pathDef = pathDefs.list;
					animDef = animDefs.list;
					break;
			};

			paths.push(document.createElementNS('http://www.w3.org/2000/svg', 'path'));

			if (type === 'cross' || type === 'list') {
				paths.push(document.createElementNS('http://www.w3.org/2000/svg', 'path'));
			}

			for (var i = 0, len = paths.length; i < len; ++i) {
				var path = paths[i];
				svg.appendChild(path);

				path.setAttributeNS(null, 'd', pathDef[i]);

				var length = path.getTotalLength();
				// Clear any previous transition
				//path.style.transition = path.style.WebkitTransition = path.style.MozTransition = 'none';
				// Set up the starting positions
				path.style.strokeDasharray = length + ' ' + length;
				if (i === 0) {
					path.style.strokeDashoffset = Math.floor(length) - 1;
				} else path.style.strokeDashoffset = length;
				// Trigger a layout so styles are calculated & the browser
				// picks up the starting position before animating
				path.getBoundingClientRect();
				// Define our transition
				path.style.transition = path.style.WebkitTransition = path.style.MozTransition = 'stroke-dashoffset ' + animDef.speed + 's ' + animDef.easing + ' ' + i * animDef.speed + 's';
				// Go!
				path.style.strokeDashoffset = '0';
			}
		}

		function reset(el) {
			Array.prototype.slice.call(el.parentNode.querySelectorAll('svg > path')).forEach(function (el) {
				el.parentNode.removeChild(el);
			});
		}

		function resetRadio(el) {
			Array.prototype.slice.call(document.querySelectorAll('input[type="radio"][name="' + el.getAttribute('name') + '"]')).forEach(function (el) {
				var path = el.parentNode.querySelector('svg > path');
				if (path) {
					path.parentNode.removeChild(path);
				}
			});
		}

	}

});

// This displays the current question AND the choices
function displayCurrentQuestion() {

	console.log("In display current Question");
	
	var tamanhoPorcento = questions[porcentagemQuestao].tamanhoPorcento;
	var tamanhoPorcentoClass = $(document).find(".quizContainer > #porcentagem");

	var numQuestao = questions[numeroQuestao].numQuestao;
	var numQuestaoClass = $(document).find(".quizContainer > .numQuestion");
	var numQuestao2 = questions[numeroQuestao2].numQuestao2;
	var numQuestaoClass2 = $(document).find(".quizContainer > .numQuestion2");
	var question = questions[currentQuestion].question;
	var questionClass = $(document).find(".quizContainer > .question");
	var choiceList = $(document).find(".quizContainer > .choiceList");
	var numChoices = questions[currentQuestion].choices.length;


	$(tamanhoPorcentoClass).text(tamanhoPorcento);
	
	switch (porcentagemQuestao) {
		case 0:
			
			document.getElementById("porcentagem").style.width = "5%";

			break;
		
		case 1:
			
			 document.getElementById("porcentagem").style.width = "15%";
			break;
		
		case 2:
			
			 document.getElementById("porcentagem").style.width = "25%";

			break;

		case 3:
			
			 document.getElementById("porcentagem").style.width = "35%";

			break;

		case 4:
			
			 document.getElementById("porcentagem").style.width = "45%";

			break;

		case 5:
			
			 document.getElementById("porcentagem").style.width = "55%";

			break;
		
		case 6:
			
			 document.getElementById("porcentagem").style.width = "65%";

			break;

		case 7:
			
			 document.getElementById("porcentagem").style.width = "75%";

			break;

		case 8:
			
			 document.getElementById("porcentagem").style.width = "85%";

			break;

		case 9:
			
			 document.getElementById("porcentagem").style.width = "100%";

			break;
	
		default:
			break;
	};


	// Set the questionClass text to the current question
	$(numQuestaoClass).text(numQuestao);

	// Set the questionClass text to the current question
	$(numQuestaoClass2).text(numQuestao2);

	// Set the questionClass text to the current question
	$(questionClass).text(question);


	$(document).find(".finalizar-quiz").hide();

	// Remove all current <li> elements (if any)
	$(choiceList).find("li").remove();

	var choice;
	for (i = 0; i < numChoices; i++) {
		choice = questions[currentQuestion].choices[i];
		$('<li><input type="radio" value=' + i + ' id="dynradio' + i + '" name="dynradio" /><label for="dynradio' + i + '">' + choice + '</label></li>').appendTo(choiceList);
	}
}

function resetQuiz() {
	porcentagemQuestao = 0;
	numeroQuestao = 0;
	numeroQuestao2 = 0;
	currentQuestion = 0;
	correctAnswers = 0;
	$(document).find(".quizContainer > .numQuestion").show();
	$(document).find(".quizContainer > .numQuestion2").show();
	$(document).find(".question").show();
	$(document).find(".question").show();
	$(document).find(".choiceList").show();
	$(document).find(".voltar-inicio").show();
	$(document).find('.fim').hide();
	hideScore();
	
}

function displayScore() {
	$(document).find(".quizContainer > .numQuestion").hide();
	$(document).find(".quizContainer > .numQuestion2").hide();
	$(document).find(".question").hide();
	$(document).find(".quizContainer > .result").text("Você acertou " + correctAnswers + " de " + questions.length);
	$(document).find(".quizContainer > .result").show();
	$(document).find('.fim').show();
	$(document).find('.fim').text("Fim");
	$(document).find(".choiceList").hide();
	$(document).find(".voltar-inicio").hide();
	$(document).find(".finalizar-quiz").show();
}

function hideScore() {
	$(document).find(".result").hide();
}