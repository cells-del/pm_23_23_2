import { Component } from '@angular/core';
import { Skills } from './skills/skills';
import { Language } from './language/language';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [Skills, Language],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  skills = [
    { name: 'Graphic Designing', value: 85 },
    { name: 'Web Designing',     value: 70 },
    { name: 'Microsoft Word',    value: 60 },
    { name: 'Affinity Designer', value: 75 },
    { name: 'MS Powerpoint',     value: 50 },
    { name: 'Corel | Draw',      value: 65 },
  ];

  languages = [
    { first: 'Spanish',  second: 'French',      percent: 65 },
    { first: 'German',   second: 'Japanese',    percent: 70 },
    { first: 'English',  second: 'Portuguese',  percent: 85 },
    { first: 'Persian',  second: 'Quechua',     percent: 68 },
  ];
}
