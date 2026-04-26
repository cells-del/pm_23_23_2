import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class Education {
  isOpen = false;

  educations = [
    { title: 'MASTER OF CREATIVE ARTS', place: 'University Name', date: '2018 - Present', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod facilisis.' },
    { title: 'MASTER OF DESIGN', place: 'University Name', date: '2015 – 2017', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod facilisis.' },
    { title: 'MARKETING OFFICER', place: 'University Name', date: '2010 – 2012', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod facilisis.' },
  ];

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
