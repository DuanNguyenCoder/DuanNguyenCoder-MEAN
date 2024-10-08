import { Component } from '@angular/core';
import { ShareService } from '../../services/share.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  title = 'client';

  public theme!: boolean;

  public countItemCart!: number;

  constructor(private themeStatus: ShareService, private cartSer: CartService) {
    this.cartSer
      .getQuantityItem()
      .subscribe((res) => (this.countItemCart = res));
    this.themeStatus.themeService.subscribe((res) => {
      this.theme = res;
      console.log(this.theme);
    });
  }

  changeTheme(event: MatSlideToggleChange) {
    this.themeStatus.themeService.next(event.checked);
  }
}
