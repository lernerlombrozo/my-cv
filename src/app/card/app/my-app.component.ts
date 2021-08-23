import { Component, Input } from '@angular/core';
import { IconType } from '../icons.enum';
import { App } from './app.interface';

@Component({
  selector: 'app-my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.scss'],
})
export class MyAppComponent {
  @Input() public app: App;
  public IconType = IconType;
}
