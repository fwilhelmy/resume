import {Component} from '@angular/core';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'app-component',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html',
})
export class AppComponent {
  public resume = bob;

  getCodePenUrl(codepenid) {
    return 'https://codepen.io/FelixWilhelmy/embed/' + codepenid + '?height=275&theme-id=default&default-tab=result';
  }
}

const bob = {
	"name": "Felix Wilhelmy",
	"linkedin": "/felix-wilhelmy",
	"email": "fwilhelmy@hotmail.com",
	"phone": "(438) 888-4218",
	"education": 
	[
		{
			"title": "BAC GÉNIE LOGICIEL",
			"school": "École de technologie supérieure",
			"date": "Autumn 2018 (Ongoing)",
			"location": "Quebec, Canada",
		},
		{
			"title": "DEC COMPUTER SCIENCES",
			"school": "Collège Montmorency",
			"date": "2013 to 2016",
			"location": "Quebec, Canada",
		},
		{
			"title": "ENGLISH IMMERSION PROGRAM",
			"school": "Global Village English Centre",
			"date": "Summer 2015",
			"location": "Alberta, Canada",
		}
	],
	"work": 
	[
		{
			"type": "Professional",
			"experiances":
			[
				{
					"internship": true,
					"title": "Full Stack Developper",
					"employer": "Air Transat",
					"date": "Summer 2019",
					"location": "Quebec, Canada",
					"description": 
					[
						"sf",
						"fsa"
					],
					"achievements":
					[
						"dfa",
						"sfadea"
					]
				},
				{
					"internship": true,
					"title": "Research & Development",
					"employer": "National Film Board",
					"date": "Winter 2016",
					"location": "Montreal, Quebec",
					"description": 
					[
						"Worked on the project of developing an OCR artificial intelligence",
						"Developed training algorithms in python for the deep learning machine",
						"Assisted senior researchers towards implementing my work"
					],
					"achievements":
					[
					]
				},
				{
					"internship": true,
					"title": "IT Support Specialist",
					"employer": "Moment Factory",
					"date": "May to August 2014",
					"location": "Montreal, Quebec",
					"description": 
					[
						"Programmed tools for the employees (Mostly in Python and JavaScript)",
						"Helped customers in ensuring the functioning of the technologies",
						"Deployed technologies such as computers and servers"
					]
				},
			]
		},
		{
			"type": "Other",
			"experiances":
			[
				{
					"internship": false,
					"title": "Professional Esports coach in Overwatch",
					"employer": "National Film Board",
					"date": "Winter 2016",
					"location": "Montreal, Quebec",
					"description": 
					[
						"Worked for international Esports teams (South Korea, France, Denmark, etc.)",
						"Developed a strong perseverance, leadership and maturity",
						"Coached players who became some of the best in the world"
					],
					"achievements":
					[
					]
				},
				{
					"internship": false,
					"title": "Research & Development",
					"employer": "National Film Board",
					"date": "Winter 2016",
					"location": "Montreal, Quebec",
					"description": 
					[
						"Support au responsable d'une classe d'adolescent."
					]
				}
			]
		},
	],
	"projects": 
	[		
		{
			"type": "School",
			"experiances":
			[
				{
					"title": "Robotic Club",
					"related": "Collège Montmorency",
					"date": "2013 - 2014",
					"description": 
					[
						"Robot won the prize for the best programming",
						"Made the website of the team"
					],
					"achievements":
					[
					]
				},
			]
		},
		{
			"type": "Other",
			"experiances":
			[
				{
					"title": "Dungeons & Dragons",
					"related": "Collège Montmorency",
					"date": "2014 - 2016",
					"description": 
					[
						"I was the Dungeon Master of my group",
						"The system we used was entirely designed by me"
					],
					"achievements":
					[
					]
				},
			]
		},
		{
			"type": "Hobbies",
			"experiances":
			[
				{
					"title": "Chess",
					"date": "Since 2017",
					"description": 
					[
						"Strong and constant focus on a task",
						"Ability to quickly analyze complicated situations"
					],
					"achievements":
					[
					]
				},
				{
					"title": "Piano",
					"date": "Since 2016",
					"description": 
					[
						"Self discipline to learn by myself"
					]
				},
			]
		}
	],
"codes":
	[
		{
			"title": "Gravity Simulator",
			"codepen": "QeZBJQ",
			"date": "2019",
			"description": 
			[
				"Simulate gravity"
			],
			"achievements":
			[
			]
		},
		{
			"title": "Life Simulator",
			"codepen": "KKPyowe",
			"date": "2019",
			"description": 
			[
				"Simulate gravity"
			],
			"achievements":
			[
			]
		},
		{
			"title": "Hexagon Show",
			"codepen": "eYOeMJx",
			"date": "2019",
			"description": 
			[
				"Simulate gravity"
			],
			"achievements":
			[
			]
		},
	],
	"knowledge": 
	[
		{
			"type": "Top",
			"skills":
			[
				{
					"name": "Data Structures",
					"level": 0.9
				},
				{
					"name": "Algorithms",
					"level": 0.85
				},
				{
					"name": "Problem analysis",
					"level": 0.85
				},
				{
					"name": "Mathematics",
					"level": 0.8
				}
			]
		},
		{
			"type": "Programming",
			"skills":
			[
				{
					"name": "JavaScript",
					"level": 0.7
				},
				{
					"name": "Java",
					"level": 0.85
				},
				{
					"name": "C#",
					"level": 0.7
				},
				{
					"name": "Python",
					"level": 0.8
				},
				{
					"name": "SQL",
					"level": 0.75
				},
			]
		},
		{
			"type": "Software",
			"skills":
			[
				{
					"name": "Visual Studio",
					"level": 0.85
				},
				{
					"name": "After Effects",
					"level": 0.85
				},
				{
					"name": "Photoshop",
					"level": 0.8
				},
				{
					"name": "Wireshark",
					"level": 0.65
				},
				{
					"name": "Windows Server",
					"level": 0.6
				},
			]
		},
	],
	"languages": 
	[
		{
			"name": "French",
			"description": "Native",
			"level": 1
		},
		{
			"name": "English",
			"description": "Professional",
			"level": 0.9
		},
	],
};