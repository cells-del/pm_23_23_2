import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  encapsulation: ViewEncapsulation.None
})
export class Skills {
  skills = [
    { name: 'Graphic Designing', value: 85 },
    { name: 'Web Designing',     value: 70 },
    { name: 'Microsoft Word',    value: 60 },
    { name: 'Affinity Designer', value: 75 },
    { name: 'MS Powerpoint',     value: 50 },
    { name: 'Corel | Draw',      value: 65 },
  ];
}
