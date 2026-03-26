import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contatti',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contatti.html',
  styleUrl: './contatti.css'
})
export class Contatti {
  // Dati del modulo
  nome: string = '';
  email: string = '';
  messaggio: string = '';

  inviaMessaggio() {
    console.log('Messaggio inviato da:', this.nome);
    console.log('Email:', this.email);
    console.log('Testo:', this.messaggio);
    alert('Grazie ' + this.nome + ', il tuo messaggio è stato ricevuto (simulazione).');
    
    // Reset del form
    this.nome = '';
    this.email = '';
    this.messaggio = '';
  }
}