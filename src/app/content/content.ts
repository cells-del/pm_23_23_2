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
export class Content {
  educations = [
    { title: 'MASTER OF CREATIVE ARTS', place: 'University Name', date: '2018 - Present', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod facilisis.' },
    { title: 'MASTER OF DESIGN',        place: 'University Name', date: '2015 – 2017',   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod facilisis.' },
    { title: 'MARKETING OFFICER',       place: 'University Name', date: '2010 – 2012',   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod facilisis.' },
  ];

  isEducationOpen = false;

  onAccordionToggled(isOpen: boolean) {
    this.isEducationOpen = isOpen;
    console.log('Акордеон:', isOpen ? 'відкритий' : 'закритий');
  }
}
