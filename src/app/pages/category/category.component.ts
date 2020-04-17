import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/products.service";
import {Product} from "../../model/product";
import {CartService} from "../../services/cart.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

    public  products: Product[];
    private sub;

    constructor( 
         private Service :ProductService,
         private cartService :CartService,
         private router: Router
    ) { }

    ngOnInit() {
        this.load();
    }
    load = () => {
       this.sub = this.Service.getProducts();
    }
     addToCart = (product) => {
        this.cartService.addToCart({product,qte:1})
    };
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
