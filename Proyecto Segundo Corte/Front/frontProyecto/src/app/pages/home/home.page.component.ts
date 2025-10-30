import { Component } from '@angular/core';
import { ClientTemplateComponent } from '../../templates/client-template/client-template.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ClientTemplateComponent],
  templateUrl: './home.page.component.html',
  styleUrl: './home.page.component.css'
})
export class HomePageComponent {

}
