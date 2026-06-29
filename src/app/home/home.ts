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
  chiSono = [
    'Benvenuto nel mio sito. Sono uno <strong>Psicologo e Psicoterapeuta</strong> appassionato di benessere, crescita personale e potenziale umano.',
    `La mia formazione si è consolidata presso lo <strong>IACP (Istituto dell'Approccio Centrato sulla Persona)</strong>, fondato in Italia nel 1979 da Alberto Zucconi, Charles Devonshire e Carl Rogers. Qui ho potuto trasformare i miei valori personali in competenze cliniche concrete e validate, da poter mettere al servizio dei miei clienti in “scienza e coscienza”.`,
    'Credo fermamente che ogni persona possieda una naturale capacità di autocomprensione, autoregolazione e autodirezione.',
    'Nella relazione terapeutica mi presento come persona reale e trasparente. Ritengo che solo un incontro autentico "da persona a persona" possa generare un vero cambiamento, nel rispetto dei ruoli e dei confini garantiti dall’etica professionale.',
  ];

  approccio = [
    'Il mio modello terapeutico si fonda sull’<strong>Approccio Centrato sulla Persona</strong>, sviluppato dallo psicologo americano Carl Rogers. Si tratta di una psicoterapia di stampo umanistico-esistenziale, che mette al centro la <em>persona</em> e non il sintomo.',
    'Questo approccio si basa sull’idea che ognuno di noi, in quanto organismo vivente, sia guidato da una <strong>tendenza attualizzante</strong>: una spinta innata verso la crescita, l’autonomia e la piena realizzazione di sé. La persona in cerca di aiuto è dunque considerata il maggior esperto della propria esperienza, e non è accolta come un “paziente” dipendente, bensì come un “cliente” responsabile.',
    'La tendenza attualizzante può essere ostacolata, ma mai completamente distrutta, essendo espressione della vita stessa. Per far sì che questa forza innata si sblocchi, mi impegno a creare insieme a te un clima relazionale sufficientemente accogliente, caloroso e non giudicante, basato su tre pilastri fondamentali:',
  ];

  pilastri = [
    {
      titolo: 'Empatia',
      testo:
        'riflette l’intenzione di cogliere il mondo interno del cliente, così come lo stesso lo percepisce, per facilitare una comprensione dei propri sentimenti e significati personali.',
    },
    {
      titolo: 'Considerazione positiva incondizionata',
      testo:
        'rappresenta la disponibilità del terapeuta a incontrare la persona per quello che realmente è in quel momento, con un atteggiamento di rispetto profondo e di stima positiva.',
    },
    {
      titolo: 'Congruenza',
      testo:
        'indica l’autenticità del terapeuta, che è disponibile e consapevole dei propri sentimenti, capace di viverli e, quando opportuno, di comunicarli al cliente.',
    },
  ];

  aiuto = [
    'Ci sono momenti nella vita in cui il naturale processo di crescita si inceppa o prende direzioni insoddisfacenti. L’esperienza di sé può diventare confusa, angosciante o troppo dolorosa, per molteplici ragioni (ad es. un cambiamento improvviso, una perdita, periodi di forte stress, la sensazione di aver smarrito la propria direzione ecc.)',
    'In questi momenti, <strong>chiedere aiuto non è un segno di fragilità, ma un atto di grande coraggio e responsabilità personale.</strong> Sulla base della tua motivazione e dei tuoi bisogni, possiamo delineare degli obiettivi su cui lavorare insieme e costruire così uno spazio cucito su misura, che possa risultare per te significativo.',
    'In generale, la sfida non è soltanto quella di ritrovare un buon modo di funzionare, ma di dare valore, profondità e dignità alla tua esistenza. Attraverso <strong>percorsi di sostegno psicologico o psicoterapia</strong>, posso facilitarti nel:',
  ];

  aiutoPunti = [
    'Ripristinare il tuo senso di benessere, fiducia e sicurezza.',
    'Recuperare un contatto profondo con i tuoi bisogni reali e con il potere di esprimerli liberamente.',
    'Dare parole, voce e profondità al tuo mondo emotivo.',
    'Re-imparare a vivere pienamente, in prima persona, le tue esperienze e le tue relazioni.',
    'Trovare l’orientamento e la forza per muoverti autenticamente verso i tuoi scopi.',
  ];

  rogersBreve = '“Ciò che sono è sufficiente, se solo riesco a esserlo.” – Carl Rogers';

  rogersLungo =
    '“È così facile curarsi degli altri per ciò che io penso che siano, o vorrei che fossero, o sento che dovrebbero essere. Curarsi di una persona per quello che è, lasciando cadere le aspettative ci ciò che essa dovrebbe essere per me, lasciando cadere il desiderio modificare questa persona in armonia con le mie esigenze, è la via più difficile, ma anche la più maturante, verso una relazione intima più soddisfacente.” – Carl Rogers';

  citazioneLaoTse =
    '“È come se egli ascoltasse\ne un ascolto come il suo ci avvolge in un silenzio\nin cui infine cominciamo a udire\nciò che siamo destinati a essere.”';
}
