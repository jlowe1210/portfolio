import { Component } from '@angular/core';
import Project from './models/Project.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public projects: Project[] = [
    {
      name: 'Simple Chat app',
      description:
        'real time chat app with both react and angular connecting to the same node backend, so no matter which front end you choose you will able to see the other front end messages',
      imgSrc: 'assets/chatapp.png',
      links: [
        'https://simplechatapp.com/angular',
        'https://simplechatapp.com/react',
      ],
      githubLink: [
        'https://github.com/jlowe1210/chatapp-frontend-angular',
        'https://github.com/jlowe1210/chat-app-react',
      ],
      techUsed: ['socket io, react, angular, node js, mysql, sequelize'],
    },
    {
      name: 'hangman',
      description:
        'simple hangman game, but incase you dont know what hangman is, its a game a player tries to guess the letters of a word, and failed attempts are recorded by drawing a gallows and someone hanging on it, line by line.',
      imgSrc: 'assets/hangmanapp.png',
      links: [
        'https://jlowe1210.github.io/hangmanangular/',
        'https://hangmanreact.com/',
      ],
      githubLink: [
        'https://github.com/jlowe1210/hangmanangular',
        'https://github.com/jlowe1210/hangmanreact',
      ],
      techUsed: ['react', 'angular'],
    },
    {
      name: 'weatherapp',
      description:
        'weather app, yes i know what you are think another weather app... but i believe my weather app is different. In my app i render the globe and you are able to get the weather from any place you clicked on the globe, you may also type the location too',
      imgSrc: 'assets/weatherapp.png',
      links: [
        'https://jlowe1210.github.io/angular-weather-app-v2/',
        'https://jlowe1210.github.io/weather_app_react_v2/',
      ],
      githubLink: [
        'https://github.com/jlowe1210/angular-weather-app-v2',
        'https://github.com/jlowe1210/weather_app_react_v2',
      ],
      techUsed: ['MapBox api', 'open weather api', 'react', 'angular'],
    },
    {
      name: 'Online poll App',
      description:
        'Online Poll app with real time voting, create polls and share them with facebook or twitter, TEST ACCOUNT username: test password: test123',
      imgSrc: 'assets/pollingapp.png',
      links: ['https://iipoll.com/', 'https://www.iipollreact.com/'],
      githubLink: [
        'https://github.com/jlowe1210/realtime_poll_angular',
        'https://github.com/jlowe1210/realtime_poll_react',
      ],
      techUsed: [
        'socket io',
        'react',
        'react-hook-form',
        'angular',
        'mysql',
        'node js',
        'sequelize',
      ],
    },
    {
      name: 'Shalewevent',
      description: 'web site for event planner located in NYC',
      imgSrc: 'assets/shaleweventsapp.png',
      links: [
        'https://shalewevent.com/',
        'https://shalewbackend-production.up.railway.app/',
      ],

      githubLink: [
        'https://github.com/jlowe1210/shalewfrontendangular',
        'https://github.com/jlowe1210/shalewfrontendreact',
      ],
      techUsed: [
        'react',
        'react-hook-form',
        'angular',
        'mysql',
        'node js',
        'sequelize',
        'google maps',
      ],
    },
    {
      name: 'The Insurance Lady',
      description: 'web site for insurance broker located in atlanta',
      imgSrc: 'assets/insuranceladyapp.png',
      links: [
        'https://theinsuranceladyofatlanta.com',
        'https://insuranceladyreactbackend-production.up.railway.app/',
      ],
      githubLink: [
        'https://github.com/jlowe1210/insurance_lady_angular',
        'https://github.com/jlowe1210/insurance_lady_react',
      ],
      techUsed: [
        'react',
        'react-hook-form',
        'angular',
        'mysql',
        'node js',
        'sequelize',
        'google maps',
      ],
    },
  ];
}
