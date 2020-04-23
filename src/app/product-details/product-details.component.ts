import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
// Defining a property
      product;

  constructor(
      // By injecting the ActivatedRoute, you are configuring the component to use a service
      private route: ActivatedRoute,
      private cartService: CartService,
  ) { }

  ngOnInit(){
    // subscribe to route parameters and fetch the product based on the productId.
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });


  }

}
