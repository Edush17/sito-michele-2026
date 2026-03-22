import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  isVisible_1=true;
  isVisible_2=true;
  isVisible_3=true;


  text_footer_1 ="Contatti"
  text_footer_2 ="Questo è il testo del div 2"
  text_footer_3 ="Questo è il testo del div 3"

}
