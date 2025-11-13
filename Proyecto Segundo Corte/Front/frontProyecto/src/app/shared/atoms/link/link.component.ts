import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css'
})
export class LinkComponent {
  @Input() id!: string;
  @Input() className?: string;
  @Input() redireccion?: string;
  @Input() url?: string;
  @Input() text!: string;
}