var commands = [
{
	input: 'tail /etc/motd',
	output: "Hi. I'm Kaio Oliveira, Computer Science undergraduate student at Federal University of Campina Grande. How can i help you?<br>"
},{
	input: 'tail /etc/info&location',
	output: "Live in Campina Grande - Paraiba - Brazil <br>" + 
	"Sports and Handball fan :D <br>"
},{
	input: 'cat /etc/experience',
	output: "[ + ] PET Computação<br>"+
	"[ + ] Guardians<br>"
},{
	input: 'tail -f ./programming_skills.txt',
	output: 'Scripting and programming language <br><br>'+
	'&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp| BEGINNER | FAMILIAR | PROFICIENT | EXPERT | MASTER <br>'+
	'&nbsp Python &nbsp | &nbsp &nbsp * &nbsp &nbsp|&nbsp &nbsp &nbsp*&nbsp &nbsp |&nbsp &nbsp &nbsp * &nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp | <br>'+
	'&nbsp &nbspJava&nbsp &nbsp | &nbsp &nbsp * &nbsp &nbsp|&nbsp &nbsp &nbsp*&nbsp &nbsp |&nbsp &nbsp &nbsp * &nbsp &nbsp |&nbsp &nbsp * &nbsp | <br>'+
	' &nbsp &nbsp C# &nbsp &nbsp |&nbsp &nbsp &nbsp*&nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp | <br>'+
	'&nbsp &nbspRuby &nbsp &nbsp|&nbsp &nbsp &nbsp*&nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp | <br>'+
	'&nbsp &nbspHTML5&nbsp &nbsp|&nbsp &nbsp &nbsp*&nbsp &nbsp |&nbsp &nbsp &nbsp*&nbsp &nbsp |&nbsp &nbsp &nbsp * &nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp | <br>'+
	'&nbsp &nbspCSS3&nbsp &nbsp |&nbsp &nbsp &nbsp*&nbsp &nbsp |&nbsp &nbsp &nbsp*&nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp | <br>'+
	'JavaScript |&nbsp &nbsp &nbsp*&nbsp &nbsp |&nbsp &nbsp &nbsp*&nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp | <br>'
},{
	input: 'tail -f ./technologies.txt',
	output: 'Frameworks and technologies <br><br>'+
	'&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp| BEGINNER | FAMILIAR | PROFICIENT | EXPERT | MASTER <br>'+
	'&nbsp NodeJS&nbsp &nbsp|&nbsp &nbsp &nbsp*&nbsp &nbsp |&nbsp &nbsp &nbsp*&nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp | <br>'+
	'&nbsp Grails &nbsp |&nbsp &nbsp &nbsp*&nbsp &nbsp |&nbsp &nbsp &nbsp*&nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp | <br>'+
	' AngularJS |&nbsp &nbsp &nbsp*&nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp | <br>'+
	'&nbsp JQuery &nbsp |&nbsp &nbsp &nbsp*&nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp | <br>'+
	'&nbspBootstrap |&nbsp &nbsp &nbsp*&nbsp &nbsp |&nbsp &nbsp &nbsp*&nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp | <br>'+
	' Spring Boot|&nbsp &nbsp &nbsp*&nbsp &nbsp |&nbsp &nbsp &nbsp*&nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp | <br>'
},{
	input: 'tail -f ./general_skills.txt',
	output: 'General skills <br><br>'+
	'&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp| BEGINNER | FAMILIAR | PROFICIENT | EXPERT | MASTER <br>'+
	'&nbsp &nbspShell&nbsp &nbsp|&nbsp &nbsp &nbsp*&nbsp &nbsp |&nbsp &nbsp &nbsp*&nbsp &nbsp |&nbsp &nbsp &nbsp * &nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp | <br>'+
	'&nbsp &nbspLinux&nbsp &nbsp|&nbsp &nbsp &nbsp*&nbsp &nbsp |&nbsp &nbsp &nbsp*&nbsp &nbsp |&nbsp &nbsp &nbsp * &nbsp &nbsp |&nbsp &nbsp * &nbsp | <br>'+
	'&nbsp &nbsp GIT &nbsp &nbsp|&nbsp &nbsp &nbsp*&nbsp &nbsp |&nbsp &nbsp &nbsp*&nbsp &nbsp |&nbsp &nbsp &nbsp * &nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp | <br>'+
	'&nbsp &nbspDocker&nbsp |&nbsp &nbsp &nbsp*&nbsp &nbsp |&nbsp &nbsp &nbsp*&nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp | <br>'+
	'&nbsp Android &nbsp|&nbsp &nbsp &nbsp*&nbsp &nbsp |&nbsp &nbsp &nbsp*&nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp |&nbsp &nbsp &nbsp &nbsp | <br>'
},{
	input: 'ls ./interests',
	output: "Web development, Distributed Systems, System administration, Software engineering <br>"
},{
	input: 'ls ./resume',
	output: '<a target="_blank" href="http://github.com/kaiokassiano">github</a> <br>'+
	'<a target="_blank" href="http://lattes.cnpq.br/2823303331057543">lattes</a> <br>'+
	'<a target="_blank" href="http://www.linkedin.com/in/kaiokassiano">linkedin</a> <br>'

},{
	input: 'service --status-all',
	output: '[ + ] studying <br>'+
	'[ + ] system-administration <br>'+
	'[ + ] research <br>'
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
	
	$(document).ready(function(){
		$('body,html').animate({scrollTop: 500}, 500); 
	});

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
