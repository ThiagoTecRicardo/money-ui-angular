import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router,
    private title: Title
    ) { }

  ngOnInit(): void {
    this.title.setTitle('Login')
  }

  login(usuario: string, senha: string) {

    this.auth.login(usuario, senha)
    .then( () => {
      this.router.navigate(['dashboard']);
    })
    .catch( erro => {
      this.errorHandler.handle(erro);
    });

  }
}

