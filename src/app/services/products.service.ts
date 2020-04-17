

import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import { Product } from "../model/product";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

  
    
    constructor(private http:HttpClient ) { }

    getProducts(){
    
        
    }

    addProduct(product){


    }
 
    // ajout au panier
}