import { Component } from '@angular/core';
import { Header } from './header/header';
import { Content } from './content/content';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Content, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {}
