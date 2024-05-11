import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { CartService } from 'src/app/services/cart.service';
import { Cart, CartItem } from 'src/app/types/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent {
  cart: Cart = {
    items: [{
      id: 1,
      name: 'snickers',
      price: 150,
      quantity: 1,
      product: 'http://via.placeholder.com/150',
    },
    {
      id: 1,
      name: 'snickers',
      price: 150,
      quantity: 2,
      product: 'http://via.placeholder.com/150',
    },]
  };
  dataSource: Array<CartItem> = []
  displayedColumuns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ]


  constructor(private cartService: CartService, private http: HttpClient) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart
      this.dataSource = this.cart.items;
    });
  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  onCheckout() {
    this.http.post('http://localhost:4242/checkout', {
      items: this.cart.items
    }).subscribe(async (res: any) => {
      let stripe = await loadStripe('pk_test_51NIXNVKUo9bOvdN7l2bei0epxpd06TEHCGMyGSQN8OM9P7XIn8bnnbGNU9Ois2oZqxSFrE2pSZgAZjN73QWiz6iK0092KlfxAW');
      stripe?.redirectToCheckout({
        sessionId: res.id
      })
    })
  }
}
