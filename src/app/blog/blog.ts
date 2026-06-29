import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  imports: [CommonModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  posts = [
    {
      id: 'approccio-centrato-persona',
      categoria: 'Approccio terapeutico',
      titolo: "L'Approccio Centrato sulla Persona (ACP)",
      paragrafi: [
        "Il mio modello terapeutico si fonda sull'Approccio Centrato sulla Persona, sviluppato dallo psicologo americano Carl Rogers. Si tratta di una psicoterapia di stampo umanistico-esistenziale, che mette al centro la persona e non il sintomo.",
        'Questo approccio si basa sull\'idea che ognuno di noi, in quanto organismo vivente, sia guidato da una tendenza attualizzante: una spinta innata verso la crescita, l\'autonomia e la piena realizzazione di sé. La persona in cerca di aiuto è dunque considerata il maggior esperto della propria esperienza, e non è accolta come un "paziente" dipendente, bensì come un "cliente" responsabile.',
      ],
    },
    {
      id: 'tre-pilastri',
      categoria: 'Relazione terapeutica',
      titolo: 'I tre pilastri della relazione',
      paragrafi: [
        'La tendenza attualizzante può essere ostacolata, ma mai completamente distrutta, essendo espressione della vita stessa. Per far sì che questa forza innata si sblocchi, mi impegno a creare insieme a te un clima relazionale sufficientemente accogliente, caloroso e non giudicante, basato su tre pilastri fondamentali.',
        "Empatia: riflette l'intenzione di cogliere il mondo interno del cliente, così come lo stesso lo percepisce, per facilitare una comprensione dei propri sentimenti e significati personali.",
        'Considerazione positiva incondizionata: rappresenta la disponibilità del terapeuta a incontrare la persona per quello che realmente è in quel momento, con un atteggiamento di rispetto profondo e di stima positiva.',
        "Congruenza: indica l'autenticità del terapeuta, che è disponibile e consapevole dei propri sentimenti, capace di viverli e, quando opportuno, di comunicarli al cliente.",
      ],
    },
    {
      id: 'come-posso-aiutarti',
      categoria: 'Percorso',
      titolo: 'Come posso aiutarti?',
      paragrafi: [
        "Ci sono momenti nella vita in cui il naturale processo di crescita si inceppa o prende direzioni insoddisfacenti. L'esperienza di sé può diventare confusa, angosciante o troppo dolorosa, per molteplici ragioni.",
        'In questi momenti, chiedere aiuto non è un segno di fragilità, ma un atto di grande coraggio e responsabilità personale. Sulla base della tua motivazione e dei tuoi bisogni, possiamo delineare degli obiettivi su cui lavorare insieme e costruire così uno spazio cucito su misura, che possa risultare per te significativo.',
        "In generale, la sfida non è soltanto quella di ritrovare un buon modo di funzionare, ma di dare valore, profondità e dignità alla tua esistenza.",
      ],
    },
  ];
}
