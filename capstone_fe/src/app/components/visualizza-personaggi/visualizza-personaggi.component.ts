import { Component } from '@angular/core';
import { Personaggio } from 'src/app/interfaces/personaggio';
import { Subscription} from 'rxjs';
import { AuthData, AuthService } from '../auth/auth.service';
import { PersonaggiService } from 'src/app/services/personaggi.service';

@Component({
  selector: 'app-visualizza-personaggi',
  templateUrl: './visualizza-personaggi.component.html',
  styleUrls: ['./visualizza-personaggi.component.scss']
})
export class VisualizzaPersonaggiComponent {
  user!: AuthData | null;
  sub!: Subscription;
  personaggi!: Personaggio[];

  constructor(private authServ: AuthService, private ps: PersonaggiService) {}

  ngOnInit() {
    this.authServ.user$.subscribe((user) => (this.user = user));
    this.caricaPersonaggi(this.user?.username);
  }

  caricaPersonaggi(username: string | undefined) {
    username = this.user?.username;
    this.sub = this.ps.getPersonaggi(username).subscribe((ris) => {
      this.personaggi = ris;
    });
  }
}
