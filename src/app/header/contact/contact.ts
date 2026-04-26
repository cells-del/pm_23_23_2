import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact{
  contacts = [
    { icon: 'fa-phone',        label: '+4-756-822-556',      type: 'phone'    },
    { icon: 'fa-globe',        label: 'www.yourwebsite.com', type: 'circle'   },
    { icon: 'fa-location-dot', label: '1173 Valley Street',  type: 'circle'   },
  ];
}
