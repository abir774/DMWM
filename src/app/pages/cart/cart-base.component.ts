import {CartService} from "../../services/cart.service";
import {Cart} from "../../model/cart";
import { ProductService } from "../../services/products.service";


export class CartBaseComponent{


    public cartList:Cart[];
    public totalPrice: number;


    constructor(
         protected cartService: CartService ) {
        this.loadCart();
    }

    loadCart = () => {
        this.cartService.cartListSubject
            .subscribe(res => {
                this.cartList = res;
                let total = 0;
                for(let cart of this.cartList) {
                    total += cart.product.prix * cart.qte;
                }
                this.totalPrice = total;
            })
    };
    removeFromCart = index => {
        this.cartService.removeCart(index);
    };
}