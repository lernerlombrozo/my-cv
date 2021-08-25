import { Component } from '@angular/core';
import { Job } from '../card/job/job.interface';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  public readonly jobs: Job[] = [
    {
      company: 'Ghostlab Inc.',
      position: 'Intermediate Software Developer',
      startDate: new Date('August 2020'),
      description:
        'designs and develops user-friendly software to dramatically improve the functionality and accessibility of modern financial technology and services. Currently I work as part of a SCRUM team in the technical design of new features as well as developing test driven software and infrastructure.',
      website: 'https://www.ghostlab.ca/',
      linkName: 'Ghostlab',
    },
    {
      company: 'Bitcoin Solutions',
      position: 'Intermediate Software Developer',
      startDate: new Date('January 2020'),
      endDate: new Date('August 2020'),
      description:
        'is the first ever publicly traded Bitcoin ATM company. Besides Bitcoin ATMs, Bitcoin Well offers convenient and secure online and in-person solutions to help buy and sell Bitcoin and other cryptocurrencies. Bitcoin Well was formerly known as Bitcoin Solutions. I worked developing test driven software and infrastructure.',
      website: 'https://bitcoinwell.com/',
      linkName: 'Bitcoin Well',
    },
    {
      company: 'Fitpass',
      position: 'Front End Developer (Mobile App)',
      startDate: new Date('April 2018'),
      description:
        'is an app with over 10,000 paying users which allows them to book fitness classes in over 1,200 studios in Mexico, Chile, Colombia and Peru. I redesigned and programmed the second version of the Android and IOS app (Ionic 3). Currently I make occasional changes and updates.',
      website: 'https://www.fitpass.com/mx',
      linkName: 'Fitpass',
    },
    {
      company: 'Mariappchi',
      position: 'Co-founder and Front end Developer',
      startDate: new Date('June 2017'),
      endDate: new Date('January 2019'),
      description:
        'was an app that connected users with mariachi bands in Mexico City. I programmed the front end for both the mariachi bands and the users (Ionic 3) as well as the website (Angular 4). I also programmed the firebase cloud functions and designed the firebase realtime database structure and rules.',
      website: 'https://mariappchi.mx/',
      linkName: 'Mariappchi',
    },
    {
      company: 'Enermusa SAPI de C.V',
      position: 'Research Intern',
      startDate: new Date('January 2016'),
      endDate: new Date('December 2016'),
      description:
        "is a Mexican oil and gas company founded during Mexico's energetic reform. Enermusa is looking for working interest in oilfields in Mexico and the United States. I was in charge of keeping the meeting minutes, researching the latest relevant news and looking online for opportunities.",
      website: 'http://www.emusa.mx/en/',
      linkName: 'Enermusa',
    },
  ];
}
