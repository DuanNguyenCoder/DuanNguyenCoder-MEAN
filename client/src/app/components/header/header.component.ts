import { Component } from '@angular/core';
import { ShareService } from '../../services/share.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  title = 'client';

  theme!: boolean;

  constructor(private themeStatus: ShareService) {
    this.themeStatus.themeService.subscribe((res) => {
      this.theme = res;
      console.log(this.theme);
    });
  }

  changeTheme(event: MatSlideToggleChange) {
    this.themeStatus.themeService.next(event.checked);
  }
}
