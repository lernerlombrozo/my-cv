import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-dates',
  templateUrl: './job-dates.component.html',
  styleUrls: ['./job-dates.component.scss'],
})
export class JobDatesComponent {
  @Input() public startDate: Date | undefined;
  @Input() public endDate: Date | undefined;
}
