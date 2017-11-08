import { Injectable } from '@angular/core';

@Injectable()
export class DealsListService {

  data = [{
    id: 1,    
    startDate:"12-10-2017",
    endDate :"23-10-2017",
    category:"SPA",
    currentBalance:"1000",
    createDate:"06-10-2017",
    previewDeal:'<a href="#">Sample One</a>',
    status:"Inactive",
    action:1

  }, {
    id: 2,
    startDate:"12-10-2017",
    endDate :"23-10-2017",
    category:"SPA",
    currentBalance:"4500",
    createDate:"06-10-2017",
    previewDeal:'<a href="#">Sample two</a>',
    status:"active",
    action:2
  }, {
    id: 3,
    startDate:"12-10-2017",
    endDate :"23-10-2017",
    category:"SPA",
    currentBalance:"600",
    createDate:"06-10-2017",
    previewDeal:'<a href="#">Sample 3</a>',
    status:"Inactive",
    action:3
  }];

  getData() {
    return this.data;
  }
}
