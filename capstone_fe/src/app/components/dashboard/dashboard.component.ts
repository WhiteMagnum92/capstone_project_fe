import { Component } from '@angular/core';
import { Personaggio } from 'src/app/interfaces/personaggio';
import { AuthData, AuthService } from '../auth/auth.service';
import { PersonaggiService } from 'src/app/services/personaggi.service';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  user!: AuthData | null;
  sub!: Subscription;
  personaggiArr!: Personaggio[];

  constructor(private authServ: AuthService, private ps: PersonaggiService){}

  ngOnInit(): void {
    this.authServ.user$.subscribe((user) => (this.user = user));
    this.caricaPersonaggi(this.user?.username);
  }

  caricaPersonaggi(username: string | undefined) {
    username = this.user?.username;
    this.sub = this.ps.getPersonaggi(username).subscribe((ris) => {
      this.personaggiArr = ris;
    });
  }
}
