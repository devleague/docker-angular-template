import { Component } from '@angular/core';
import { BackendService } from './services/backend.service';

interface SmokeTest {
  smoke: string
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'docker-angular-template';
  smokeTest: string;
  users: Object[] = [];
  newUser: { username: string } = { username: '' };

  constructor(private backend: BackendService) {
    this.backend.getSmokeTest()
      .then((res: SmokeTest) => {
        this.smokeTest = res.smoke;
      });

    this.backend.getUsers()
      .then((res: Object[]) => {
        this.users = res;
      });
  }

  createUser() {
    this.backend.createUser(this.newUser)
      .then(() => {
        return this.backend.getUsers();
      })
      .then((res: Object[]) => {
        this.users = res;
      });
  }
}
