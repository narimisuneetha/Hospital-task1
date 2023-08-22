const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://3.108.67.31:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application - node',
	    'sonar.projectKey':'NodeJsMithunTechnologies',
	    'sonar.login': 'squ_06069b0cba62a969cad8fa8d5abd4268317d52c7',
	    //'sonar.login': 'admin',
	    //'sonar.password': 'sonar',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
