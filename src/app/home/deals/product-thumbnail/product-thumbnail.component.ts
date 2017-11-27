import { Component, OnInit, Input } from '@angular/core';
import { Deal } from '../shared/deal.model';
import { Router } from '@angular/router';

@Component({
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.scss']
})
export class ProductThumbnailComponent implements OnInit {
  @Input() product: Deal

  detailViewActive: boolean

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.detailViewActive = false
  }

  onProductClick(){
    this.detailViewActive = !this.detailViewActive
  }

  redirect(pagename: string) {    
    this.router.navigate(['/home/deals/view/'+pagename]);
  }

  onAddToCart(){
    //this.cartService.addProductToCart(this.product)
  }

}
