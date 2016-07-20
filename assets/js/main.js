var commands = [
	{
		input: 'tail /etc/info',
		output: "Hi. I'm Kaio Oliveira, Computer Science undergraduate student at Federal University of Campina Grande. How can i help you?<br>"
	},{
		input: 'tail /etc/location',
		output: "Live in Campina Grande - Paraiba - Brazil <br>" + 
				"Sports and Handball fan. :D <br>"
	},{
		input: 'cat -b ./experience',
		output: "1 PET Computação<br>"+
				"2 Guardians<br>"
	},{
		input: 'tail -f ./programming_skills',
		output: 'Scripting and programming language <br><br>'+
				'           | BEGINNER | FAMILIAR | PROFICIENT | EXPERT | MASTER <br>'+
				'  Python   |     *    |     *    |      *     |        |        <br>'+
				'   Java    |     *    |     *    |      *     |    *   |        <br>'+
				'    C#     |     *    |     *    |            |        |        <br>'+
				'   Ruby    |     *    |     *    |            |        |        <br>'
	},{
		input: 'tail -f ./web_skills',
		output: 'Web development <br><br>'+
				'           | BEGINNER | FAMILIAR | PROFICIENT | EXPERT | MASTER <br>'+
				'   HTML5   |     *    |     *    |      *     |        |        <br>'+
				'   CSS3    |     *    |     *    |            |        |        <br>'+
				'Javascript |     *    |          |            |        |        <br>'+
				' AngularJS |     *    |          |            |        |        <br>'+
				'  JQuery   |     *    |          |            |        |        <br>'
	},{
		input: 'tail -f ./general_skills',
		output: 'General skills <br><br>'+
				'           | BEGINNER | FAMILIAR | PROFICIENT | EXPERT | MASTER <br>'+
				'   Shell   |     *    |     *    |      *     |        |        <br>'+
				'   Linux   |     *    |     *    |      *     |        |        <br>'+
				'    GIT    |     *    |     *    |      *     |    *   |        <br>'+
				'   Docker  |     *    |     *    |            |        |        <br>'
	},{
		input: 'ls ./interests',
		output: "Web development, System administration, Software engineering, Teaching <br>"
	},{
		input: 'ls ./resume',
		output: '<a target="_blank" href="http://github.com/kaiokassiano">github</a> <br>'+
				'<a target="_blank" href="http://lattes.cnpq.br/2823303331057543">lattes</a> <br>'+
				'<a target="_blank" href="http://www.linkedin.com/in/kaiokassiano">linkedin</a> <br>'

	},{
		input: 'service --status-all',
		output: '',
		timedOutput: [
				'[ + ]  studying ',
				'[ + ]  system-administration ',
				'[ + ]  research '
		]

	},{
		input: 'ls -l ./contact',
		output: '<a target="_blank" href="mailto:kaio.kassiano.oliveira@ccc.ufcg.edu.br">email</a><br> '
	}

]
var commandIndex = 0;
function terminal(){
	inputCommand()
}
function inputCommand(){
	var cmd = commands[commandIndex]
	charIndex = 0
	lineIndex = 0
	$el = $('.prompt')
	$el.append('resume@kaio:~$ ').addClass('active');

	var typeText = function(){
		setTimeout(function(){
			console.log(cmd);
			var char = cmd.input[charIndex]
			if (char == undefined) {
				
				$el.append('<br/><span class="output">' + cmd.output + '</span><br/>');
      			$el.removeClass('active');
      			setTimeout(function(){
					if (cmd.hasOwnProperty('timedOutput')) {
						typeTimedText()
					}else{
						inputCommand(++commandIndex)
					}
					
      			}, 1000)
				return
			}
			
			$el.append(char)
			charIndex++
			typeText()

			
		}, Math.round(Math.random() * 150) + 25)
	}
	var typeTimedText = function(){

		setTimeout(function(){
			text = cmd.timedOutput[lineIndex]
			if (text == undefined) {
				$el.append('<br>')
				inputCommand(++commandIndex)

				return
			}
			$el.append('<span class="output">' + text + '</span><br/>');
      		$el.removeClass('active');
      		lineIndex++;
      		typeTimedText();

		}, Math.round(Math.random() * 550) + 25)
		return
	}
	typeText()
}
terminal();