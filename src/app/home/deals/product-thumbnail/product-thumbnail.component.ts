import { Component, OnInit, Input } from '@angular/core';
import { Deal } from '../shared/deal.model';

@Component({
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.scss']
})
export class ProductThumbnailComponent implements OnInit {
  @Input() product: Deal

  detailViewActive: boolean

  constructor() {

  }

  ngOnInit() {
    this.detailViewActive = false
  }

  onProductClick(){
    this.detailViewActive = !this.detailViewActive
  }

  onAddToCart(){
    //this.cartService.addProductToCart(this.product)
  }

}
