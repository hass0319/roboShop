import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public cartService: CartService,
    public auth: AuthService
  ) { }

  ngOnInit(): void {}

  logout() {
    this.auth.logout();
  }
}
