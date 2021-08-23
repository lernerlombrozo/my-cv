import { Component, Input } from '@angular/core';
import { SocialService } from './social-service.interface';

@Component({
  selector: 'app-social-service',
  templateUrl: './social-service.component.html',
  styleUrls: ['./social-service.component.scss'],
})
export class SocialServiceComponent {
  @Input() public socialService: SocialService;
}
