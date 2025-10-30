import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css'
})
export class LinkComponent {
  @Input() id!: string;
  @Input() className?: string;
  @Input() url!: string;
  @Input() text!: string;
}