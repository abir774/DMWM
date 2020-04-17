import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject} from "rxjs";
import { Cart} from "../model/cart";

@Injectable()
export class CartService {

    public cartListSubject = new BehaviorSubject([]);
    public toggleCartSubject = new BehaviorSubject(false);

    

    paniers : Cart[];
    cart : Cart;

    constructor(private http:HttpClient ) { }

     getPaniers(){
        
     }

    toggleCart = () => {
        this.toggleCartSubject.next(!this.toggleCartSubject.getValue());
    };


    addToCart = (cart:Cart) => {
       
        };
        
    reloadCart = (cartList) => {
        this.cartListSubject.next(cartList);
    };
    removeCart = index => {
        let current = this.cartListSubject.getValue();
        current.splice(index,1);
        this.cartListSubject.next(current);
    };
}