import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/products.service";
import {Product} from "../../model/product";
import {CartService} from "../../services/cart.service";
import {Cart} from "../../model/cart";

import 'rxjs/add/operator/map';
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    private sub;
    public product:Product;
    quantity: number = 1;
    cart : Cart ;
    products : Product[] ;
    
    
    constructor(private route: ActivatedRoute,
                private Service:ProductService,
                private cartService:CartService
    ) { }

    ngOnInit() {
         this.Service.getProducts();
    }
   
    changeQuantity = (newQuantity:number) => {
        this.quantity = newQuantity;
    };

    addToCart  = (cart) => {
       this.cartService.addToCart(this.cart) ;
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
