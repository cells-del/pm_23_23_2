import { Component } from '@angular/core';
import { Education } from './education/education';
import { Experience } from './experience/experience';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [Education, Experience],
  templateUrl: './content.html',
  styleUrl: './content.scss'
})
export class Content {}
