import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  introduzione = `Sono uno Psicologo appassionato di ben-essere, e considero l'essere umano naturalmente dotato di capacità di autocomprensione, autoregolazione e autodirezione. Mi sono specializzato in Psicoterapia nell'Istituto dell'Approccio Centrato sulla Persona di Carl Rogers, dove ho potuto mettere i miei valori al servizio di competenze per facilitare e promuovere il potenziale umano.`;

  filosofia = `Ci sono momenti della vita in cui il naturale processo di cambiamento e di crescita può essere insoddisfacente, confuso o troppo doloroso, per molteplici ragioni. La relazione terapeutica assume le caratteristiche di un incontro da persona a persona, di una collaborazione intesa a prendersi cura dell'unicità e della diversità di ognuno. Un clima relazionale e di ascolto sufficientemente empatico, rispettoso, non giudicante e autentico permettono il dispiegarsi della tendenza innata verso l'autorealizzazione.`;

  metodo = `In uno spazio sicuro, accogliente e facilitante, la persona può tornare a vivere pienamente e in prima persona le proprie esperienze, recuperando un contatto profondo con i propri bisogni e il potere personale per orientarsi autenticamente verso i propri scopi. Come suggerisce Rogers "Ciò che sono è sufficiente, se solo riesco a esserlo".`;

  citazioneLaoTse = `È come se egli ascoltasse / e un ascolto come il suo ci avvolge in un silenzio / in cui infine cominciamo a udire / ciò che siamo destinati a essere.`;
}