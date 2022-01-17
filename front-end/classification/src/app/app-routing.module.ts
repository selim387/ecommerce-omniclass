import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DataResolverService } from './resolver/data-resolver.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  {
    path:'about-us',
    loadChildren:()=>import('./pages/about-us/about-us.module').then(m=>m.AboutUsPageModule)
  },
  {
    path:'shopgrid3',
    loadChildren :()=>import('./pages/shopgrid3/shopgrid3.module').then(m=>m.Shopgrid3PageModule)
  },
   
  {
    path: 'index',
    loadChildren: () => import('./pages/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'post',
    loadChildren: () => import('./pages/post/post.module').then( m => m.PostPageModule)
  },
  {
    path: 'post-without-sidebar',
    loadChildren: () => import('./pages/post-without-sidebar/post-without-sidebar.module').then( m => m.PostWithoutSidebarPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./pages/product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'product-alt',
    loadChildren: () => import('./pages/product-alt/product-alt.module').then( m => m.ProductAltPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./pages/test/test.module').then( m => m.TestPageModule)
  },
  

  {
    path: 'test/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./pages/test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule)
  },

  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  
  {
    path: 'trackorder',
    loadChildren: () => import('./pages/trackorder/trackorder.module').then( m => m.TrackorderPageModule)
  },
  {
    path: 'blog-list',
    loadChildren: () => import('./pages/blog-list/blog-list.module').then( m => m.BlogListPageModule)
  },
  {
    path: 'terms-conditions',
    loadChildren: () => import('./pages/terms-conditions/terms-conditions.module').then( m => m.TermsConditionsPageModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./pages/wishlist/wishlist.module').then( m => m.WishlistPageModule)
  },
  {
    path: 'language-popover',
    loadChildren: () => import('./pages/language-popover/language-popover.module').then( m => m.LanguagePopoverPageModule)
  },  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
