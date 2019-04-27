import { Component } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent {
  pageTitle: string = 'Product List!';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = 'cart';
  products: any[] = [
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "https://images.homedepot-static.com/productImages/420a9288-cca7-4248-8f22-bd8664220d34/svn/pure-garden-wheelbarrows-hw1500113-64_1000.jpg"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "https://images.homedepot-static.com/productImages/c275d0bb-5e98-412c-b1b1-8726fd1f1477/svn/dewalt-claw-hammers-dwht51054-64_1000.jpg"
    }
  ];
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
}
