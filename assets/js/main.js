var commands = [
	{
		input: 'cat /etc/info.txt',
		output: "Olá. Sou Kaio Oliveira, estudante de Ciência da Computação na Universidade Federal de Campina Grande. "
	},{
		input: 'cat -b ./experience',
		output: "1 PET Computação<br> " +
				"2 Guardians<br> "

	},{

		input: 'cat -b ./skills.txt',
		output: "1 Python, Java, C# <br> " +
				"2 HTML5, CSS3, Javascript <br> " +
				"3 Linux, GIT, Docker <br> "
	},{
		input: 'cat ./interests.txt',
		output: "Web development, System administration, Software engineering, Teaching<br> "
	},{
		input: "ls ./resume",
		output: "<a target='_blank' href='http://github.com/kaiokassiano'>github</a><br> " + 
				"<a target='_blank' href='http://lattes.cnpq.br/2823303331057543'>lattes</a><br> " +
				"<a target='_blank' href='http://www.linkedin.com/in/kaiokassiano'>linkedin</a><br> "
	},{
		input: "service --status-all",
		output: "",
		timedOutput: [
			'[ + ] studying ',
			'[ + ] system-administration ',
			'[ + ] research '
		]
	},{
		input: "ls -l ./contact",
		output: "<a target='_blank' href='mailto:kaio.kassiano.oliveira@ccc.ufcg.edu.br'>email</a><br> "
	},{
		input: "ls -l ./webpages",
		output: "<a target='_blank' href='http://www.dsc.ufcg.edu.br/~pet/integrantes.html'>pet</a><br> " + 
				"<a target='_blank' href='http://lcc.ufcg.edu.br'>guardians</a><br> "
	}
]