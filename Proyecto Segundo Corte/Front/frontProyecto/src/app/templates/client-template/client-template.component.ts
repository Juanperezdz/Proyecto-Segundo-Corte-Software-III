import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/organisms/header/header.component';

@Component({
  selector: 'app-client-template',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './client-template.component.html',
  styleUrl: './client-template.component.css'
})
export class ClientTemplateComponent {

}
