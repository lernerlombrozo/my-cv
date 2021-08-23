import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-subtitle',
  templateUrl: './card-subtitle.component.html',
  styleUrls: ['./card-subtitle.component.scss'],
})
export class CardSubtitleComponent {
  @Input() public icon: string | undefined;
}
