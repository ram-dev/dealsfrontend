import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/product.model'

@Component({
  selector: 'showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  @Input() products: Product[]

  constructor() {

  }

  ngOnInit() {
  }
}
