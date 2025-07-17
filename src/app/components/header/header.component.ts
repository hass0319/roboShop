import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Catalog', path: '/catalog' },
    { label: 'Cart', path: '/cart' }
  ];
  showMenu: boolean = false;

  constructor(
    public cartService: CartService,
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    this.cartService.cartCount$.subscribe(
      val => console.log('Cart Count:', val));
  }

  logout() {
    this.auth.logout();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  closeMenu() {
    this.showMenu = false;
  }

  getActiveLinkLabel() {
    const active = this.navLinks.find(link =>
      this.router.url === link.path || this.router.url.startsWith(link.path + '/')
    );
    return active ? active.label : 'Menu';
  }
}
