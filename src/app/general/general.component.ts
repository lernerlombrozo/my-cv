import { Component } from '@angular/core';
import { App } from '../card/app/app.interface';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent {
  public readonly skills = [
    'HTML',
    'JS',
    'TS',
    'CSS',
    'SCSS',
    'Angular 2+',
    'Jest',
    'Karma-Jasmine',
    'Ionic 2+',
    'Vue.js',
    'Node.js',
    'Express.js',
    'Nest.js',
    'D3.js',
    'GIT',
    'APIs',
    'MongoDB',
    'Postgres',
    'Mongoose',
    'Firebase',
    'Heroku',
    'a bit of AWS',
    'Docker',
    'java',
    'MATLAB',
    'R',
  ];

  public readonly apps: App[] = [
    {
      name: 'Fitpass',
      icons: [
        {
          name: 'logo-android',
          link: 'https://play.google.com/store/apps/details?id=com.fitpass.fitpassapp',
        },
        {
          name: 'logo-apple',
          link: 'https://apps.apple.com/mx/app/fitpass-m%C3%A9xico/id1125584170',
        },
        {
          name: 'logo-ionic',
          link: 'https://fitpass.app/',
        },
      ],
    },
    {
      name: 'Mariappchi',
      icons: [
        {
          name: 'logo-android',
          link: 'https://play.google.com/store/apps/details?id=io.mariappchi.client',
        },
        {
          name: 'logo-apple',
          link: 'https://apps.apple.com/us/app/mariappchi/id1135749867',
        },
        {
          name: 'logo-ionic',
        },
        {
          name: 'logo-angular',
          link: 'https://mariappchi.mx/',
        },
        {
          name: 'logo-firebase',
        },
      ],
    },
    {
      name: 'Pongline',
      icons: [
        {
          name: 'logo-android',
          link: 'https://play.google.com/store/apps/details?id=free.pong.line&hl=en',
        },
        {
          name: 'logo-ionic',
        },
        {
          name: 'logo-firebase',
        },
      ],
    },
    {
      name: 'Petbell',
      icons: [
        {
          name: 'logo-android',
          link: 'https://play.google.com/store/apps/details?id=io.pet.bell&hl=en',
        },
        {
          name: 'logo-ionic',
        },
        {
          name: 'logo-firebase',
        },
      ],
    },
    {
      name: 'Secret Hitman',
      icons: [
        {
          name: 'logo-angular',
          link: 'https://sec-hit.web.app/login',
        },
        {
          name: 'logo-nodejs',
        },
      ],
    },
  ];

  public readonly medias: App[] = [
    {
      name: 'Github',
      icons: [
        {
          name: 'logo-github',
          link: 'https://github.com/lernerlombrozo',
        },
      ],
    },
    {
      name: 'Linkedin',
      icons: [
        {
          name: 'logo-linkedin',
          link: 'https://www.linkedin.com/in/david-lerner-96a072107/',
        },
      ],
    },
  ];
}
