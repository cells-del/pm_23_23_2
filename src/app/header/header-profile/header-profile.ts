import { Component } from '@angular/core';

@Component({
  selector: 'app-header-profile',
  standalone: true,
  imports: [],
  templateUrl: './header-profile.html',
  styleUrl: './header-profile.scss'
})
export class HeaderProfile {
  greeting = 'Hello.';
  intro = "I'm";
  firstName = 'John';
  middleName = 'A.';
  lastName = 'Doe';

  subtitle = ['And', 'I', 'am', 'A', 'Graphic', 'Designer'];

  aboutText1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.';
  aboutText2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ip Lorem ipsum dolor sit amet, consectetur adipiscing aliqua. Quis ip';
}
