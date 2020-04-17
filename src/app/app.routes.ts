/**
 * Created by andrew.yang on 7/27/2017.
 */
export const appRoutes=[
    {
        path:'',
        redirectTo:'category',
        pathMatch:'full'
    },
    {
        path:'category',
        loadChildren:() => import('./pages/category/category.module').then(m => m.CategoryModule)
    },
    {
        path:'product',
        loadChildren:() => import('./pages/product/product.module').then(m => m.ProductModule)
    },
    {
        path:'cart',
        loadChildren:() => import('./pages/cart/cart-page.module').then(m => m.CartPageModule)
    },
    {
        path:'**',
        loadChildren:() => import('./pages/category/category.module').then(m => m.CategoryModule)
    }
];