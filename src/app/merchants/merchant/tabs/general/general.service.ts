import { Injectable } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';

export class generalService {
    getCategory(ids): TreeviewItem[] {
        const foodBeveragesCategory =  new TreeviewItem({
            text: 'FOOD & BEVERAGES', value: "5a290b2d539eb0b14cd91d0c", checked : true, collapsed: true, children: [
                { text: 'Fine Dine', value: "5a2919f13fee7034a0fad59f", checked : false },
                { text: 'Bar / Pub / Lounge', value: "5a2919f13fee7034a0fad59e", checked : false },
                { text: 'Bakery / Fast Food', value: "5a2919f13fee7034a0fad59d" , checked : false},
                { text :"Cafe / Confectionery", value: "5a2919f13fee7034a0fad59c", checked : false}
            ]
        });

        const wellnessCategory =  new TreeviewItem({
            text: 'WELLNESS', value: "5a290b84539eb0b14cd91d1a", collapsed: true, children: [
                { text: 'Salon', value: "5a2919f13fee7034a0fad5a2" , checked : false},
                { text: 'Health & Fitness', value: "5a2919f13fee7034a0fad5a0", children:[
                    {
                        text: 'Zumba / Yoga / Aerobics', value: "5a2919f13fee7034a0fad5a1", checked : false
                    }
                    ]
                }                
            ]
        });

        const spaCategory =  new TreeviewItem({
            text: 'SPA', value: "5a290b84539eb0b14cd91d1a", collapsed: true, children: [
                { text: 'SPA Services', value: "5a2919f13fee7034a0fad5a0", children:[
                    {
                        text: 'eShopping', value: "5a2919f13fee7034a0fad5a1", checked : false
                    }
                    ]
                }                
            ]
        });

        const entertainmentCategory =  new TreeviewItem({
            text: 'ENTERTAINMENT', value: "5a290b84539eb0b14cd91d1a", collapsed: true, children: [
                { text: 'Theatre / Movies', value: "5a2919f13fee7034a0fad5a0", checked : false},
                { text: 'Games / Live Events / Concerts', value: "5a2919f13fee7034a0fad5a0", checked : false},
                { text: 'Amusement Park', value: "5a2919f13fee7034a0fad5a0", checked : false}                 
            ]
        });

        const travelCategory =  new TreeviewItem({
            text: 'TRAVEL', value: "5a290b84539eb0b14cd91d1a", collapsed: true, children: [
                { text: 'Domestic', value: "5a2919f13fee7034a0fad5a0", checked : false, children: [
                    {text: 'Hotels', value: "5a2919f13fee7034a0fad5a0", checked : false},
                    {text: 'Holiday Packages', value: "5a2919f13fee7034a0fad5a0", checked : false},
                    {text: 'Airfare / Tickets', value: "5a2919f13fee7034a0fad5a0", checked : false}
                ]},
                { text: 'International', value: "5a2919f13fee7034a0fad5a0", checked : false, children: [
                    {text: 'Hotels', value: "5a2919f13fee7034a0fad5a0", checked : false},
                    {text: 'Holiday Packages', value: "5a2919f13fee7034a0fad5a0", checked : false},
                    {text: 'Airfare / Tickets', value: "5a2919f13fee7034a0fad5a0", checked : false}
                ]}                                 
            ]
        });

        const eShoppingCategory =  new TreeviewItem({
            text: 'E-SHOPPING', value: "5a290b84539eb0b14cd91d1a", collapsed: true, children: [
                { text: 'E-Com /Online Services', value: "5a2919f13fee7034a0fad5a0", checked : false}                             
            ]
        });

        const othersCategory = new TreeviewItem({
            text: 'SERVICES', value: "5a290b84539eb0b14cd91d1a", collapsed: true, children: [
                { text: 'Car Wash', value: "5a2919f13fee7034a0fad5a0", checked : false},
                {text: 'Pest Control', value: "5a2919f13fee7034a0fad5a0", checked : false},
                {text: 'Astrology', value: "5a2919f13fee7034a0fad5a0", checked : false},
                {text: 'Photography / Printing', value: "5a2919f13fee7034a0fad5a0", checked : false},
                {text: 'Music / Dance Classes', value: "5a2919f13fee7034a0fad5a0", checked : false},
                {text: 'Flower / Cake Delivery', value: "5a2919f13fee7034a0fad5a0", checked : false},
                {text: 'Training / Coaching Classes', value: "5a2919f13fee7034a0fad5a0", checked : false}                             
            ]
        });

        return [
            foodBeveragesCategory, 
            wellnessCategory, 
            spaCategory, 
            entertainmentCategory, 
            travelCategory, 
            eShoppingCategory,
            othersCategory
        ];
    }
}