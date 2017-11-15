import { Component, OnInit, Input } from '@angular/core';
import { Deal } from '../shared/deal.model'

@Component({
  selector: 'showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  @Input() products: Deal[]

  constructor() {

  }

  ngOnInit() {
  }
}
