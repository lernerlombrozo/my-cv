import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.scss'],
})
export class JobDescriptionComponent {
  @Input() public link: string | undefined;
  @Input() public name: string | undefined;
}
