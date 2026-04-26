import { Component } from '@angular/core';
import { HeaderProfile } from './header-profile/header-profile';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderProfile, Contact],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {}
