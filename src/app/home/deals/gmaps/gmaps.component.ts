import { Component , Input} from '@angular/core';

@Component({
  selector: 'ngx-gmaps',
  styleUrls: ['./gmaps.component.scss'],
  template: `    
        <agm-map [latitude]="latValue" [longitude]="lngValue">
          <agm-marker [latitude]="latValue" [longitude]="lngValue"></agm-marker>
        </agm-map>      
  `,
})
export class GmapsComponent {
  @Input() latValue;
  @Input() lngValue;
}
