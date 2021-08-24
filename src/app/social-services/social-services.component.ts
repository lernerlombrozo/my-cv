import { Component, OnInit } from '@angular/core';
import { SocialService } from '../card/social-service/social-service.interface';

@Component({
  selector: 'app-social-services',
  templateUrl: './social-services.component.html',
  styleUrls: ['./social-services.component.scss'],
})
export class SocialServicesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public services: SocialService[] = [
    {
      name: 'Digital Fractal',
      place: 'Digital Fractal',
      description:
        'I did an app to track construction equipment for internal use of the North American Construction Group (NACG).',
    },
    {
      name: 'Computational genomics lab',
      place: 'National Institute of Genomic Medicine',
      description:
        'I worked in a bioinformatics project that tried to find a relationship between different posttranscriptional modifications of histones and RNA expression.',
    },
    {
      name: 'Our Lady Of Kibeho Foundation',
      place: 'Our Lady Of Kibeho Foundation',
      description: 'I designed their website and automatic email delivery system.',
    },
    {
      name: 'Pharmacogenomics lab',
      place: 'National Institute of Psychiatry',
      description:
        'I was a lab assistant in a research entitled “Genetic Study and Clinical Phenotypes of Eating Disorders”. I did molecular biology protocols such as PCR and agarose gel electrophoresis.',
    },
  ];
}
