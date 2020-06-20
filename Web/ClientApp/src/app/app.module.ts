import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { MatInputModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, MatButtonModule, MatIconModule, MatCardModule, MatDialogModule } from '@angular/material';
import { PopUpComponent } from './pop-up/pop-up.component';
import { PopUpConfirmComponent } from './pop-up-confirm/pop-up-confirm.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxCurrencyModule } from 'ngx-currency';
import { LoginComponent } from './login/login.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ProdutosComponent,
    CadastroProdutoComponent,
    PopUpComponent,
    PopUpConfirmComponent,
    LoginComponent,
    ClientesComponent,
    CadastroClienteComponent,
    CadastroUsuarioComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'produtos', component: ProdutosComponent },
      { path: 'cadastro-produto', component: CadastroProdutoComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'cadastro-cliente', component: CadastroClienteComponent },
      { path: 'cadastro-usuario', component: CadastroUsuarioComponent },
      { path: 'usuarios', component: UsuariosComponent }
    ]),
    ToastrModule.forRoot(),
    NgxCurrencyModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  entryComponents: [PopUpComponent, PopUpConfirmComponent]
})
export class AppModule { }
