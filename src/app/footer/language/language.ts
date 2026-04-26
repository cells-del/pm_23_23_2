import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [],
  templateUrl: './language.html',
  styleUrl: './language.scss',
  encapsulation: ViewEncapsulation.None
})
export class Language {
  languages = [
    { first: 'Spanish',  second: 'French',      percent: 65 },
    { first: 'German',   second: 'Japanese',    percent: 70 },
    { first: 'English',  second: 'Portuguese',  percent: 85 },
    { first: 'Persian',  second: 'Quechua',     percent: 68 },
  ];
}
