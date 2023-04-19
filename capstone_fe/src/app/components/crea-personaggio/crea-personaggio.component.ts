import { AuthData, AuthService } from './../auth/auth.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonaggiService } from 'src/app/services/personaggi.service';

@Component({
  selector: 'app-crea-personaggio',
  templateUrl: './crea-personaggio.component.html',
  styleUrls: ['./crea-personaggio.component.scss']
})
export class CreaPersonaggioComponent {
  user!: AuthData | null;
  sub!: Subscription;
  nomePg = '';

  constructor(private authService: AuthService, private ps: PersonaggiService) { }

  ngOnInit() {
    this.authService.user$.subscribe((user) => (this.user = user));
  }

  creaPersonaggio(nomePg: string, username:string | undefined) {
    username = this.user?.username;
    this.sub = this.ps.creaPersonaggio(nomePg, username).subscribe((res) => {
      console.log(res);
    });

  }

}
