(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro-cliente/cadastro-cliente.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro-cliente/cadastro-cliente.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n\r\n<div class=\"tela\">\r\n  <h2>Cadastro de cliente</h2>\r\n  <form [formGroup]=\"formCliente\" (ngSubmit)=\"submitForm(formCliente.value)\">\r\n    <div class=\"form-cadastro\">\r\n      <mat-form-field appearance=\"fill\" class=\"nome\">\r\n        <mat-label>Nome</mat-label>\r\n        <input matInput maxlength=\"30\" placeholder=\"Nome\" formControlName=\"nome\" required>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field appearance=\"fill\" class=\"endereco\">\r\n        <mat-label>Endereço</mat-label>\r\n        <input type=\"text\" maxlength=\"400\" matInput placeholder=\"Endereço\" formControlName=\"endereco\">\r\n      </mat-form-field>\r\n    </div>\r\n    \r\n    <div class=\"form-botoes\">\r\n      <button mat-raised-button type=\"submit\">Salvar</button>\r\n      <button mat-raised-button [routerLink]=\"['/clientes']\">Cancelar</button>\r\n    </div>\r\n  </form>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro-produto/cadastro-produto.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro-produto/cadastro-produto.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n\r\n<div class=\"tela\">\r\n  <h2>Cadastro de produto</h2>\r\n  <form [formGroup]=\"formProduto\" (ngSubmit)=\"submitForm(formProduto.value)\">\r\n    <div class=\"form-cadastro\">\r\n      <mat-form-field appearance=\"fill\" class=\"nome\">\r\n        <mat-label>Nome</mat-label>\r\n        <input matInput maxlength=\"30\" placeholder=\"Nome\" formControlName=\"nome\" required>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field appearance=\"fill\" class=\"descricao\">\r\n        <mat-label>Descrição</mat-label>\r\n        <input type=\"text\" maxlength=\"400\" matInput placeholder=\"Descrição\" formControlName=\"descricao\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"form-qtds\">\r\n      <mat-form-field appearance=\"fill\" class=\"qtd\">\r\n        <mat-label>Quantidade disponível</mat-label>\r\n        <input matInput required maxLength=\"10\" type=\"number\" min=\"0\" placeholder=\"Quantidade disponível\" formControlName=\"quantidadeDisponivel\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field appearance=\"fill\" class=\"alerta-min\">\r\n        <mat-label>Quantidade mínima</mat-label>\r\n        <input matInput type=\"number\" maxLength=\"10\" placeholder=\"Quantidade mínima\" formControlName=\"alertaMinimo\">\r\n        <mat-hint>* para exibição de alerta</mat-hint>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field appearance=\"fill\" class=\"alerta-max\">\r\n        <mat-label>Quantidade máxima</mat-label>\r\n        <input matInput type=\"number\" maxLength=\"10\" placeholder=\"Quantidade máxima\" formControlName=\"alertaMaximo\">\r\n        <mat-hint>* para exibição de alerta</mat-hint>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"form-botoes\">\r\n      <button mat-raised-button type=\"submit\">Salvar</button>\r\n      <button mat-raised-button [routerLink]=\"['/produtos']\">Cancelar</button>\r\n    </div>\r\n  </form>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro-usuario/cadastro-usuario.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro-usuario/cadastro-usuario.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n\r\n<div class=\"tela\">\r\n  <h2>Cadastro de usuário</h2>\r\n  <form [formGroup]=\"formUsuario\" (ngSubmit)=\"submitForm(formUsuario.value)\">\r\n    <div class=\"form-cadastro\">\r\n      <mat-form-field appearance=\"fill\" class=\"nome\">\r\n        <mat-label>Nome</mat-label>\r\n        <input matInput maxlength=\"30\" placeholder=\"Nome\" formControlName=\"nome\" required>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field appearance=\"fill\" class=\"login\">\r\n        <mat-label>Login</mat-label>\r\n        <input type=\"text\" maxlength=\"15\" matInput placeholder=\"Login\" formControlName=\"login\" />\r\n      </mat-form-field>\r\n\r\n      <mat-form-field appearance=\"fill\" class=\"senha\">\r\n        <mat-label>Senha</mat-label>\r\n        <input type=\"password\" maxlength=\"30\" matInput placeholder=\"Senha\" formControlName=\"senha\" />\r\n      </mat-form-field>\r\n\r\n      <mat-form-field appearance=\"fill\" class=\"confirmacaoSenha\">\r\n        <mat-label>Confirme sua senha</mat-label>\r\n        <input type=\"password\" maxlength=\"30\" matInput placeholder=\"Confirme sua senha\" formControlName=\"confirmacaoSenha\" />\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"form-botoes\">\r\n      <button mat-raised-button type=\"submit\">Salvar</button>\r\n      <button mat-raised-button [routerLink]=\"['/clientes']\">Cancelar</button>\r\n    </div>\r\n  </form>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/clientes.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/clientes.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n\r\n<h2>Clientes</h2>\r\n\r\n<button class=\"btnCadastrar\" mat-raised-button [routerLink]=\"['/cadastro-cliente']\">Cadastrar</button>\r\n\r\n<table mat-table [dataSource]=\"clientesPaginados\" class=\"mat-elevation-z8\">\r\n\r\n  <!--- Note that these columns can be defined in any order.\r\n        The actual rendered columns are set as a property on the row definition\" -->\r\n  <!-- Position Column -->\r\n  <mat-text-column name=\"nome\"></mat-text-column>\r\n\r\n  <ng-container matColumnDef=\"endereco\">\r\n    <th mat-header-cell *matHeaderCellDef> Endereço </th>\r\n    <td mat-cell *matCellDef=\"let item\"> {{item.endereco}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"ativo\">\r\n    <th mat-header-cell *matHeaderCellDef> Ativo </th>\r\n    <td mat-cell *matCellDef=\"let item\"> {{ item.ativo ? 'Sim' : 'Não' }} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"controles\">\r\n    <th mat-header-cell *matHeaderCellDef> </th>\r\n    <td mat-cell *matCellDef=\"let item\" class=\"controles\">\r\n      <button mat-mini-fab class=\"btnCadastroUsuario\" (click)=\"usuarios(item.idCliente)\"><mat-icon>people</mat-icon></button>\r\n      <button mat-mini-fab class=\"btnExclusao\" (click)=\"abrirPopUpExclusao(item.idCliente)\"><mat-icon>clear</mat-icon></button>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n<mat-paginator *ngIf=\"clientes\" [length]=\"clientes.length\" [pageSize]=\"5\" (page)=\"paginar($event)\"></mat-paginator>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Hello, world!</h1>\r\n<p>Welcome to your new single-page application, built with:</p>\r\n<ul>\r\n  <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\r\n  <li><a href='https://angular.io/'>Angular</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\r\n  <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\r\n</ul>\r\n<p>To help you get started, we've also set up:</p>\r\n<ul>\r\n  <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\r\n  <li><strong>Angular CLI integration</strong>. In development mode, there's no need to run <code>ng serve</code>. It runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>\r\n  <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration automatically invokes <code>ng build</code> to produce minified, ahead-of-time compiled JavaScript files.</li>\r\n</ul>\r\n<p>The <code>ClientApp</code> subdirectory is a standard Angular CLI application. If you open a command prompt in that directory, you can run any <code>ng</code> command (e.g., <code>ng test</code>), or use <code>npm</code> to install extra packages into it.</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"frmLogin\">\r\n  <form [formGroup]=\"formLogin\" (ngSubmit)=\"submitForm(formLogin.value)\">\r\n    <div class=\"row\">\r\n      <mat-form-field appearance=\"fill\" class=\"login\">\r\n        <mat-label>Login</mat-label>\r\n        <input matInput maxlength=\"30\" placeholder=\"Login\" formControlName=\"login\" required>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"row\">\r\n      <mat-form-field appearance=\"fill\" class=\"senha\">\r\n        <mat-label>Senha</mat-label>\r\n        <input type=\"password\" matInput placeholder=\"Senha\" formControlName=\"senha\" required>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <button type=\"submit\" mat-raised-button>Logar</button>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <nav class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light border-bottom box-shadow mb-3\">\r\n    <div class=\"container\">\r\n      <h2 class=\"text-light\">Controle de Estoque</h2>\r\n      <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\r\n           [ngClass]=\"{ show: isExpanded }\">\r\n        <ul class=\"navbar-nav flex-grow\">\r\n          <li class=\"nav-item\"\r\n              [routerLinkActive]=\"['link-active']\"\r\n              [routerLinkActiveOptions]=\"{ exact: true }\"\r\n              *ngIf=\"usuario.login == 'admin'\">\r\n            <a class=\"nav-link text-light\" (click)=\"redirect('clientes')\">Clientes</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-light\" (click)=\"redirect('produtos')\">Produtos</a>\r\n          </li>\r\n\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-light\" (click)=\"logOff()\">Sair</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pop-up-confirm/pop-up-confirm.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pop-up-confirm/pop-up-confirm.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Exclusão</h1>\r\n<div mat-dialog-content>\r\n  <p>Tem certeza que deseja excluir o {{ data.tipoExclusao }}?</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"clickNao()\">Não</button>\r\n  <button mat-button (click)=\"clickSim()\">Sim</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pop-up/pop-up.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pop-up/pop-up.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>{{data.titulo}}</h1>\r\n<div mat-dialog-content>\r\n  <mat-form-field>\r\n    <mat-label>Quantidade</mat-label>\r\n    <input matInput required type=\"number\" [(ngModel)]=\"quantidade\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <mat-label>Valor total pago</mat-label>\r\n    <input matInput required currencyMask [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',' }\" step=\"any\" [(ngModel)]=\"valor\">\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"cancelar()\">Cancelar</button>\r\n  <button mat-button (click)=\"salvar()\" cdkFocusInitial>Salvar</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/produtos/produtos.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/produtos/produtos.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n\r\n<h2>Produtos</h2>\r\n\r\n<button class=\"btnCadastrar\" mat-raised-button [routerLink]=\"['/cadastro-produto']\">Cadastrar</button>\r\n\r\n<table mat-table [dataSource]=\"produtosPaginados\" class=\"mat-elevation-z8\">\r\n\r\n  <!--- Note that these columns can be defined in any order.\r\n        The actual rendered columns are set as a property on the row definition\" -->\r\n  <!-- Position Column -->\r\n  <mat-text-column name=\"nome\"></mat-text-column>\r\n\r\n  <ng-container matColumnDef=\"descricao\">\r\n    <th mat-header-cell *matHeaderCellDef> Descrição </th>\r\n    <td mat-cell *matCellDef=\"let item\"> {{item.descricao}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"quantidadeDisponivel\">\r\n    <th mat-header-cell *matHeaderCellDef> Quantidade disponível </th>\r\n    <td mat-cell *matCellDef=\"let item\"> {{item.quantidadeDisponivel}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"controles\">\r\n    <th mat-header-cell *matHeaderCellDef> </th>\r\n    <td mat-cell *matCellDef=\"let item\"   class=\"controles\">\r\n      <button tooltip=\"entrada\" mat-mini-fab class=\"btnEntrada\" (click)=\"abrirPopUp(item.idProduto, 'Entrada')\"><mat-icon>add</mat-icon></button>\r\n      <button [disabled]=\"item.quantidadeDisponivel < 1\" tooltip=\"saida\" mat-mini-fab class=\"btnSaida\" (click)=\"abrirPopUp(item.idProduto, 'Saída')\"><mat-icon>remove</mat-icon></button>\r\n      <button tooltip=\"exclusão\" mat-mini-fab class=\"btnExcluir\" (click)=\"abrirPopUpExclusao(item.idProduto)\"><mat-icon>clear</mat-icon></button>\r\n      <!--<button mat-mini-fab class=\"btnEditar\" (click)=\"abrirPopUp(item.idProduto, 'Entrada')\"><mat-icon>edit</mat-icon></button>-->\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n<mat-paginator *ngIf=\"produtos\" [length]=\"produtos.length\" [pageSize]=\"5\" (page)=\"paginar($event)\"></mat-paginator>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/usuarios/usuarios.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usuarios/usuarios.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n\r\n<h2>Usuários</h2>\r\n\r\n<button class=\"btnCadastrar\" mat-raised-button (click)=\"cadastroUsuario()\">Cadastrar</button>\r\n\r\n<table mat-table [dataSource]=\"usuariosPaginados\" class=\"mat-elevation-z8\">\r\n\r\n  <mat-text-column name=\"nome\"></mat-text-column>\r\n  <mat-text-column name=\"login\"></mat-text-column>\r\n  \r\n\r\n  <ng-container matColumnDef=\"controles\">\r\n    <th mat-header-cell *matHeaderCellDef> </th>\r\n    <td mat-cell *matCellDef=\"let item\" class=\"controles\">\r\n      <button tooltip=\"trocar senha\" mat-mini-fab class=\"btnTrocarSenha\" (click)=\"popUpSenha(item.idUsuario)\"><mat-icon>vpn_key</mat-icon></button>\r\n      <button mat-mini-fab class=\"btnExclusao\" (click)=\"abrirPopUpExclusao(item.idUsuario)\"><mat-icon>clear</mat-icon></button>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n<mat-paginator *ngIf=\"usuarios\" [length]=\"usuarios.length\" [pageSize]=\"5\" (page)=\"paginar($event)\"></mat-paginator>\r\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _produtos_produtos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./produtos/produtos.component */ "./src/app/produtos/produtos.component.ts");
/* harmony import */ var _cadastro_produto_cadastro_produto_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cadastro-produto/cadastro-produto.component */ "./src/app/cadastro-produto/cadastro-produto.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pop-up/pop-up.component */ "./src/app/pop-up/pop-up.component.ts");
/* harmony import */ var _pop_up_confirm_pop_up_confirm_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pop-up-confirm/pop-up-confirm.component */ "./src/app/pop-up-confirm/pop-up-confirm.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-currency */ "./node_modules/ngx-currency/fesm2015/ngx-currency.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./clientes/clientes.component */ "./src/app/clientes/clientes.component.ts");
/* harmony import */ var _cadastro_cliente_cadastro_cliente_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cadastro-cliente/cadastro-cliente.component */ "./src/app/cadastro-cliente/cadastro-cliente.component.ts");
/* harmony import */ var _cadastro_usuario_cadastro_usuario_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cadastro-usuario/cadastro-usuario.component */ "./src/app/cadastro-usuario/cadastro-usuario.component.ts");
/* harmony import */ var _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./usuarios/usuarios.component */ "./src/app/usuarios/usuarios.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






















let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__["NavMenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _produtos_produtos_component__WEBPACK_IMPORTED_MODULE_9__["ProdutosComponent"],
            _cadastro_produto_cadastro_produto_component__WEBPACK_IMPORTED_MODULE_10__["CadastroProdutoComponent"],
            _pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_12__["PopUpComponent"],
            _pop_up_confirm_pop_up_confirm_component__WEBPACK_IMPORTED_MODULE_13__["PopUpConfirmComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
            _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_17__["ClientesComponent"],
            _cadastro_cliente_cadastro_cliente_component__WEBPACK_IMPORTED_MODULE_18__["CadastroClienteComponent"],
            _cadastro_usuario_cadastro_usuario_component__WEBPACK_IMPORTED_MODULE_19__["CadastroUsuarioComponent"],
            _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_20__["UsuariosComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"], pathMatch: 'full' },
                { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"] },
                { path: 'produtos', component: _produtos_produtos_component__WEBPACK_IMPORTED_MODULE_9__["ProdutosComponent"] },
                { path: 'cadastro-produto', component: _cadastro_produto_cadastro_produto_component__WEBPACK_IMPORTED_MODULE_10__["CadastroProdutoComponent"] },
                { path: 'clientes', component: _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_17__["ClientesComponent"] },
                { path: 'cadastro-cliente', component: _cadastro_cliente_cadastro_cliente_component__WEBPACK_IMPORTED_MODULE_18__["CadastroClienteComponent"] },
                { path: 'cadastro-usuario', component: _cadastro_usuario_cadastro_usuario_component__WEBPACK_IMPORTED_MODULE_19__["CadastroUsuarioComponent"] },
                { path: 'usuarios', component: _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_20__["UsuariosComponent"] }
            ]),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot(),
            ngx_currency__WEBPACK_IMPORTED_MODULE_15__["NgxCurrencyModule"]
        ],
        providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_21__["CookieService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        entryComponents: [_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_12__["PopUpComponent"], _pop_up_confirm_pop_up_confirm_component__WEBPACK_IMPORTED_MODULE_13__["PopUpConfirmComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/cadastro-cliente/cadastro-cliente.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/cadastro-cliente/cadastro-cliente.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.form-cadastro {\r\n  width: 100%;\r\n  align-self: center;\r\n  display: inline-grid;\r\n  grid-template: \"nome nome nome\" auto \"endereco endereco endereco\" auto / auto auto auto;\r\n  justify-items: start;\r\n}\r\n\r\n.form-botoes {\r\n  width: 30%;\r\n  display: inline-grid;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\nbutton {\r\n  margin-top: 20px;\r\n  width: 70%;\r\n}\r\n\r\nmat-form-field {\r\n  width: 80%;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.nome {\r\n  grid-area: nome;\r\n  width: 40%;\r\n}\r\n\r\n.endereco {\r\n  grid-area: endereco;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FkYXN0cm8tY2xpZW50ZS9jYWRhc3Ryby1jbGllbnRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsdUZBQXVGO0VBQ3ZGLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY2FkYXN0cm8tY2xpZW50ZS9jYWRhc3Ryby1jbGllbnRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm0tY2FkYXN0cm8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlOiBcIm5vbWUgbm9tZSBub21lXCIgYXV0byBcImVuZGVyZWNvIGVuZGVyZWNvIGVuZGVyZWNvXCIgYXV0byAvIGF1dG8gYXV0byBhdXRvO1xyXG4gIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xyXG59XHJcblxyXG4uZm9ybS1ib3RvZXMge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLm5vbWUge1xyXG4gIGdyaWQtYXJlYTogbm9tZTtcclxuICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG4uZW5kZXJlY28ge1xyXG4gIGdyaWQtYXJlYTogZW5kZXJlY287XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/cadastro-cliente/cadastro-cliente.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/cadastro-cliente/cadastro-cliente.component.ts ***!
  \****************************************************************/
/*! exports provided: CadastroClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroClienteComponent", function() { return CadastroClienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _clientes_clientes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clientes/clientes.service */ "./src/app/clientes/clientes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let CadastroClienteComponent = class CadastroClienteComponent {
    constructor(formBuilder, service, route, toastr) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.route = route;
        this.toastr = toastr;
        this.formCliente = this.formBuilder.group({
            nome: '',
            endereco: '',
            idCliente: 0,
            ativo: true
        });
    }
    submitForm(cliente) {
        //Validação
        let erro = false;
        if (cliente.nome == '' || cliente.nome == null) {
            this.toastr.error('Campo nome é obrigatório', 'Nome');
            erro = true;
        }
        if (cliente.endereco == '' || cliente.endereco == null) {
            this.toastr.error('Campo endereço é obrigatório', 'Endereço');
            erro = true;
        }
        if (!erro) {
            this.service.salvarCliente(cliente).subscribe(() => this.route.navigateByUrl('/clientes'));
        }
    }
    voltar() {
        this.route.navigateByUrl('/produtos');
    }
};
CadastroClienteComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _clientes_clientes_service__WEBPACK_IMPORTED_MODULE_2__["ClientesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
CadastroClienteComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-cadastro-cliente',
        template: __importDefault(__webpack_require__(/*! raw-loader!./cadastro-cliente.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro-cliente/cadastro-cliente.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./cadastro-cliente.component.css */ "./src/app/cadastro-cliente/cadastro-cliente.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _clientes_clientes_service__WEBPACK_IMPORTED_MODULE_2__["ClientesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
], CadastroClienteComponent);



/***/ }),

/***/ "./src/app/cadastro-produto/cadastro-produto.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/cadastro-produto/cadastro-produto.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.form-cadastro {\r\n  width: 100%;\r\n  align-self: center;\r\n  display: inline-grid;\r\n  grid-template: \"nome nome nome\" auto \"descricao descricao descricao\" auto / auto auto auto;\r\n  justify-items: start;\r\n}\r\n\r\n.form-qtds {\r\n  width: 100%;\r\n  align-self: center;\r\n  display: inline-grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  justify-items: start;\r\n}\r\n\r\n.form-botoes {\r\n  width: 30%;\r\n  display: inline-grid;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\nbutton {\r\n  margin-top: 20px;\r\n  width: 70%;\r\n}\r\n\r\nmat-form-field {\r\n  width: 80%;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.nome {\r\n  grid-area: nome;\r\n  width: 40%;\r\n}\r\n\r\n.descricao {\r\n  grid-area: descricao;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FkYXN0cm8tcHJvZHV0by9jYWRhc3Ryby1wcm9kdXRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsMEZBQTBGO0VBQzFGLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLHFDQUFxQztFQUNyQyxvQkFBb0I7QUFDdEI7O0FBR0E7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NhZGFzdHJvLXByb2R1dG8vY2FkYXN0cm8tcHJvZHV0by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWNhZGFzdHJvIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZTogXCJub21lIG5vbWUgbm9tZVwiIGF1dG8gXCJkZXNjcmljYW8gZGVzY3JpY2FvIGRlc2NyaWNhb1wiIGF1dG8gLyBhdXRvIGF1dG8gYXV0bztcclxuICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcclxufVxyXG5cclxuLmZvcm0tcXRkcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1ib3RvZXMge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLm5vbWUge1xyXG4gIGdyaWQtYXJlYTogbm9tZTtcclxuICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG4uZGVzY3JpY2FvIHtcclxuICBncmlkLWFyZWE6IGRlc2NyaWNhbztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/cadastro-produto/cadastro-produto.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/cadastro-produto/cadastro-produto.component.ts ***!
  \****************************************************************/
/*! exports provided: CadastroProdutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroProdutoComponent", function() { return CadastroProdutoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _produtos_produtos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../produtos/produtos.service */ "./src/app/produtos/produtos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let CadastroProdutoComponent = class CadastroProdutoComponent {
    constructor(formBuilder, service, route, toastr) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.route = route;
        this.toastr = toastr;
        this.formProduto = this.formBuilder.group({
            nome: '',
            descricao: '',
            quantidadeDisponivel: null,
            alertaMinimo: null,
            alertaMaximo: null,
            idCliente: 1,
            idProduto: 0
        });
    }
    submitForm(produto) {
        //Validação
        let erro = false;
        if (produto.quantidadeDisponivel == null || produto.quantidadeDisponivel < 0) {
            this.toastr.error('Campo não pode ser vazio nem negativo', 'Quantidade disponível');
            erro = true;
        }
        if (produto.nome == '' || produto.nome == null) {
            this.toastr.error('Campo nome é obrigatório', 'Nome');
            erro = true;
        }
        if (!erro) {
            this.service.salvarProduto(produto).subscribe(() => this.route.navigateByUrl('/produtos'));
        }
    }
    voltar() {
        this.route.navigateByUrl('/produtos');
    }
};
CadastroProdutoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _produtos_produtos_service__WEBPACK_IMPORTED_MODULE_2__["ProdutosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
CadastroProdutoComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-cadastro-produto',
        template: __importDefault(__webpack_require__(/*! raw-loader!./cadastro-produto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro-produto/cadastro-produto.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./cadastro-produto.component.css */ "./src/app/cadastro-produto/cadastro-produto.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _produtos_produtos_service__WEBPACK_IMPORTED_MODULE_2__["ProdutosService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
], CadastroProdutoComponent);



/***/ }),

/***/ "./src/app/cadastro-usuario/cadastro-usuario.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/cadastro-usuario/cadastro-usuario.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.form-cadastro {\r\n  width: 100%;\r\n  align-self: center;\r\n  display: inline-grid;\r\n  grid-template: \"nome nome .\" auto \"login senha confirmacaoSenha\" auto / auto auto auto;\r\n  justify-items: start;\r\n}\r\n\r\n.form-botoes {\r\n  width: 30%;\r\n  display: inline-grid;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\nbutton {\r\n  margin-top: 20px;\r\n  width: 70%;\r\n}\r\n\r\nmat-form-field {\r\n  width: 80%;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.nome {\r\n  grid-area: nome;\r\n}\r\n\r\n.login {\r\n  grid-area: login;\r\n}\r\n\r\n.senha{\r\n  grid-area: senha;\r\n}\r\n\r\n.confirmacaoSenha {\r\n  grid-area: confirmacaoSenha;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FkYXN0cm8tdXN1YXJpby9jYWRhc3Ryby11c3VhcmlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsc0ZBQXNGO0VBQ3RGLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvY2FkYXN0cm8tdXN1YXJpby9jYWRhc3Ryby11c3VhcmlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm0tY2FkYXN0cm8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlOiBcIm5vbWUgbm9tZSAuXCIgYXV0byBcImxvZ2luIHNlbmhhIGNvbmZpcm1hY2FvU2VuaGFcIiBhdXRvIC8gYXV0byBhdXRvIGF1dG87XHJcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XHJcbn1cclxuXHJcbi5mb3JtLWJvdG9lcyB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ubm9tZSB7XHJcbiAgZ3JpZC1hcmVhOiBub21lO1xyXG59XHJcblxyXG4ubG9naW4ge1xyXG4gIGdyaWQtYXJlYTogbG9naW47XHJcbn1cclxuXHJcbi5zZW5oYXtcclxuICBncmlkLWFyZWE6IHNlbmhhO1xyXG59XHJcblxyXG4uY29uZmlybWFjYW9TZW5oYSB7XHJcbiAgZ3JpZC1hcmVhOiBjb25maXJtYWNhb1NlbmhhO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/cadastro-usuario/cadastro-usuario.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/cadastro-usuario/cadastro-usuario.component.ts ***!
  \****************************************************************/
/*! exports provided: CadastroUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroUsuarioComponent", function() { return CadastroUsuarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../usuario.service */ "./src/app/usuario.service.ts");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let CadastroUsuarioComponent = class CadastroUsuarioComponent {
    constructor(formBuilder, service, route, toastr) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.route = route;
        this.toastr = toastr;
        this.idCliente = this.route.getCurrentNavigation().extras.state.idCliente;
        this.formUsuario = this.formBuilder.group({
            idUsuario: 0,
            nome: '',
            login: '',
            senha: '',
            confirmacaoSenha: '',
            idCliente: this.idCliente
        });
    }
    ngOnInit() {
    }
    submitForm(usuario) {
        //Validação
        usuario.idCliente = this.idCliente;
        let erro = false;
        if (usuario.senha != usuario.confirmacaoSenha) {
            this.toastr.error('Confirmação de senha incorreta', 'Confirmação de senha');
            erro = true;
        }
        if (usuario.confirmacaoSenha == '') {
            this.toastr.error('Campo de confirmação da senha é obrigatório', 'Confirmação de senha');
            erro = true;
        }
        if (usuario.senha == '') {
            this.toastr.error('Campo senha é obrigatório', 'Senha');
            erro = true;
        }
        if (usuario.login == '' || usuario.login == null) {
            this.toastr.error('Campo login é obrigatório', 'Login');
            erro = true;
        }
        if (usuario.nome == '' || usuario.nome == null) {
            this.toastr.error('Campo nome é obrigatório', 'Nome');
            erro = true;
        }
        usuario.senha = crypto_js__WEBPACK_IMPORTED_MODULE_5__["SHA256"](usuario.senha).toString();
        if (!erro) {
            this.service.salvarUsuario(usuario).subscribe(() => this.route.navigateByUrl('/clientes'));
        }
    }
    voltar() {
        this.route.navigate(['/clientes'], { state: { idCliente: this.idCliente } });
    }
};
CadastroUsuarioComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
CadastroUsuarioComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-cadastro-usuario',
        template: __importDefault(__webpack_require__(/*! raw-loader!./cadastro-usuario.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro-usuario/cadastro-usuario.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./cadastro-usuario.component.css */ "./src/app/cadastro-usuario/cadastro-usuario.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
], CadastroUsuarioComponent);



/***/ }),

/***/ "./src/app/clientes/clientes.component.css":
/*!*************************************************!*\
  !*** ./src/app/clientes/clientes.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n  width: 100%;\r\n}\r\n\r\n.btnCadastrar {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.controles {\r\n  align-items: center;\r\n  text-align: center;\r\n  -webkit-padding-end: unset;\r\n          padding-inline-end: unset;\r\n}\r\n\r\n.mat-column-nome {\r\n  width: 30%;\r\n}\r\n\r\n.mat-column-endereco{\r\n  width: 50%;\r\n  max-width: 50rem;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n}\r\n\r\n.mat-header-cell, .mat-column-ativo {\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50ZXMvY2xpZW50ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsMEJBQXlCO1VBQXpCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRlcy9jbGllbnRlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnRuQ2FkYXN0cmFyIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY29udHJvbGVzIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWlubGluZS1lbmQ6IHVuc2V0O1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1ub21lIHtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1lbmRlcmVjb3tcclxuICB3aWR0aDogNTAlO1xyXG4gIG1heC13aWR0aDogNTByZW07XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1jZWxsLCAubWF0LWNvbHVtbi1hdGl2byB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/clientes/clientes.component.ts":
/*!************************************************!*\
  !*** ./src/app/clientes/clientes.component.ts ***!
  \************************************************/
/*! exports provided: ClientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesComponent", function() { return ClientesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _clientes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientes.service */ "./src/app/clientes/clientes.service.ts");
/* harmony import */ var _pop_up_confirm_pop_up_confirm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pop-up-confirm/pop-up-confirm.component */ "./src/app/pop-up-confirm/pop-up-confirm.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let ClientesComponent = class ClientesComponent {
    constructor(clientesService, dialog, router) {
        this.clientesService = clientesService;
        this.dialog = dialog;
        this.router = router;
        this.isMobile = document.body.clientWidth < 670;
    }
    ngOnInit() {
        this.paginar(null);
        this.verificaColunas();
    }
    onResize(event) {
        this.isMobile = event.target.innerWidth < 670;
        this.verificaColunas();
    }
    ngOnChanges() {
        this.paginar(null);
        this.verificaColunas();
    }
    abrirPopUpExclusao(idCliente) {
        const dialogRef = this.dialog.open(_pop_up_confirm_pop_up_confirm_component__WEBPACK_IMPORTED_MODULE_2__["PopUpConfirmComponent"], { width: '250px', data: { idCliente, tipoExclusao: 'cliente' } });
        dialogRef.afterClosed().subscribe(() => this.paginar(null));
    }
    paginar(event) {
        let inicial;
        let final;
        if (event == null) {
            inicial == 1;
            final = 5;
        }
        else {
            inicial = ((event.pageIndex + 1) * event.pageSize) - event.pageSize;
            final = ((event.pageIndex + 1) * event.pageSize);
        }
        this.clientesService.consultarClientes().subscribe((data) => {
            this.clientes = data;
            this.clientesPaginados = data.slice(inicial, final);
        });
    }
    verificaColunas() {
        if (this.isMobile)
            this.displayedColumns = ['nome', 'ativo', 'controles'];
        else
            this.displayedColumns = ['nome', 'endereco', 'ativo', 'controles'];
    }
    usuarios(idCliente) {
        this.router.navigate(['/usuarios'], { state: { idCliente } });
    }
};
ClientesComponent.ctorParameters = () => [
    { type: _clientes_service__WEBPACK_IMPORTED_MODULE_1__["ClientesService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
    __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
], ClientesComponent.prototype, "paginador", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientesComponent.prototype, "onResize", null);
ClientesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-clientes',
        template: __importDefault(__webpack_require__(/*! raw-loader!./clientes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/clientes.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./clientes.component.css */ "./src/app/clientes/clientes.component.css")).default]
    }),
    __metadata("design:paramtypes", [_clientes_service__WEBPACK_IMPORTED_MODULE_1__["ClientesService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ClientesComponent);



/***/ }),

/***/ "./src/app/clientes/clientes.service.ts":
/*!**********************************************!*\
  !*** ./src/app/clientes/clientes.service.ts ***!
  \**********************************************/
/*! exports provided: ClientesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesService", function() { return ClientesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let ClientesService = class ClientesService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'https://' + window.location.host + '/api/clientes/';
    }
    consultarClientes() {
        return this.http.get(this.baseUrl + 'ConsultarClientes');
    }
    salvarCliente(cliente) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"];
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + 'SalvarCliente', cliente, { headers: headers });
    }
    excluir(idCliente) {
        return this.http.get(this.baseUrl + 'ExcluirCliente', { params: { 'idCliente': idCliente.toString() }, responseType: 'json' });
    }
};
ClientesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ClientesService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ClientesService);



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let HomeComponent = class HomeComponent {
};
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".frmLogin {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZybUxvZ2luIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../usuario.service */ "./src/app/usuario.service.ts");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let LoginComponent = class LoginComponent {
    constructor(formBuilder, usuarioService, router, toastr, cookie) {
        this.formBuilder = formBuilder;
        this.usuarioService = usuarioService;
        this.router = router;
        this.toastr = toastr;
        this.cookie = cookie;
        this.formLogin = this.formBuilder.group({
            login: '',
            senha: ''
        });
    }
    ngOnInit() {
    }
    submitForm(login) {
        let erro = false;
        if (login.login == null || login.login == '') {
            this.toastr.error('Informe o login');
            erro = true;
        }
        if (login.senha == null || login.senha == '') {
            this.toastr.error('Informe a senha');
            erro = true;
        }
        login.senha = crypto_js__WEBPACK_IMPORTED_MODULE_5__["SHA256"](login.senha).toString(crypto_js__WEBPACK_IMPORTED_MODULE_5__["Base64"]);
        if (!erro) {
            this.usuarioService.logar(login).subscribe((data) => {
                this.cookie.set('usuario', JSON.stringify(data));
                this.router.navigateByUrl('/produtos', { state: { idCliente: data.idCliente } });
            });
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgaHRtbCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let NavMenuComponent = class NavMenuComponent {
    constructor(cookie, router) {
        this.cookie = cookie;
        this.router = router;
        this.isExpanded = false;
        this.usuario = JSON.parse(cookie.get('usuario'));
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
    redirect(url) {
        this.router.navigate(['/' + url], { state: { idCliente: this.usuario.idCliente } });
    }
    logOff() {
        this.cookie.delete('usuario');
        this.router.navigateByUrl('/login');
    }
};
NavMenuComponent.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
NavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nav-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")).default]
    }),
    __metadata("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], NavMenuComponent);



/***/ }),

/***/ "./src/app/pop-up-confirm/pop-up-confirm.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pop-up-confirm/pop-up-confirm.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcC11cC1jb25maXJtL3BvcC11cC1jb25maXJtLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pop-up-confirm/pop-up-confirm.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pop-up-confirm/pop-up-confirm.component.ts ***!
  \************************************************************/
/*! exports provided: PopUpConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopUpConfirmComponent", function() { return PopUpConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _produtos_produtos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../produtos/produtos.service */ "./src/app/produtos/produtos.service.ts");
/* harmony import */ var _clientes_clientes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../clientes/clientes.service */ "./src/app/clientes/clientes.service.ts");
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../usuario.service */ "./src/app/usuario.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let PopUpConfirmComponent = class PopUpConfirmComponent {
    constructor(data, dialogRef, produtosService, clienteService, usuarioService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.produtosService = produtosService;
        this.clienteService = clienteService;
        this.usuarioService = usuarioService;
    }
    ngOnInit() {
    }
    clickSim() {
        debugger;
        switch (this.data.tipoExclusao) {
            case 'produto':
                this.produtosService.excluir(this.data.idProduto).subscribe(() => this.dialogRef.close());
                break;
            case 'cliente':
                this.clienteService.excluir(this.data.idCliente).subscribe(() => this.dialogRef.close());
                break;
            case 'usuario':
                this.usuarioService.excluir(this.data.idUsuario).subscribe(() => this.dialogRef.close());
                break;
        }
    }
    clickNao() {
        this.dialogRef.close();
    }
};
PopUpConfirmComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
    { type: _produtos_produtos_service__WEBPACK_IMPORTED_MODULE_2__["ProdutosService"] },
    { type: _clientes_clientes_service__WEBPACK_IMPORTED_MODULE_3__["ClientesService"] },
    { type: _usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] }
];
PopUpConfirmComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-pop-up-confirm',
        template: __importDefault(__webpack_require__(/*! raw-loader!./pop-up-confirm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pop-up-confirm/pop-up-confirm.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./pop-up-confirm.component.css */ "./src/app/pop-up-confirm/pop-up-confirm.component.css")).default]
    }),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
    __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
        _produtos_produtos_service__WEBPACK_IMPORTED_MODULE_2__["ProdutosService"], _clientes_clientes_service__WEBPACK_IMPORTED_MODULE_3__["ClientesService"], _usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]])
], PopUpConfirmComponent);



/***/ }),

/***/ "./src/app/pop-up/pop-up.component.css":
/*!*********************************************!*\
  !*** ./src/app/pop-up/pop-up.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcC11cC9wb3AtdXAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pop-up/pop-up.component.ts":
/*!********************************************!*\
  !*** ./src/app/pop-up/pop-up.component.ts ***!
  \********************************************/
/*! exports provided: PopUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopUpComponent", function() { return PopUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _produtos_produtos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../produtos/produtos.service */ "./src/app/produtos/produtos.service.ts");
/* harmony import */ var _shared_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/model */ "./src/shared/model.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let PopUpComponent = class PopUpComponent {
    constructor(data, dialogRef, produtosService, toastr) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.produtosService = produtosService;
        this.toastr = toastr;
    }
    ngOnInit() {
    }
    cancelar() {
        this.dialogRef.close();
    }
    salvar() {
        debugger;
        //Validação
        let erro = false;
        if (this.quantidade == null || this.quantidade < 1) {
            this.toastr.error('Quantidade deve ser maior que 0');
            erro = true;
        }
        if (this.valor == null || this.valor <= 0) {
            this.toastr.error('Valor total pago deve ser maior que 0');
            erro = true;
        }
        if (!erro) {
            if (this.data.titulo == 'Entrada') {
                let entrada = new _shared_model__WEBPACK_IMPORTED_MODULE_3__["Entrada"];
                entrada.idEntrada = 0;
                entrada.valorUnitario = 0;
                entrada.idProduto = this.data.idProduto;
                entrada.quantidade = this.quantidade;
                entrada.valorTotal = this.valor;
                this.produtosService.entrada(entrada).subscribe(() => {
                    this.toastr.success('Sucesso', 'Entrada cadastrada com sucesso');
                    this.dialogRef.close();
                });
            }
            else if (this.data.titulo == 'Saída') {
                let saida = new _shared_model__WEBPACK_IMPORTED_MODULE_3__["Saida"];
                saida.idProduto = this.data.idProduto;
                saida.quantidade = this.quantidade;
                saida.valorTotal = this.valor;
                this.produtosService.saida(saida).subscribe(() => {
                    this.toastr.success('Sucesso', 'Saída cadastrada com sucesso');
                    this.dialogRef.close();
                });
            }
        }
    }
};
PopUpComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
    { type: _produtos_produtos_service__WEBPACK_IMPORTED_MODULE_2__["ProdutosService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
PopUpComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-pop-up',
        template: __importDefault(__webpack_require__(/*! raw-loader!./pop-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pop-up/pop-up.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./pop-up.component.css */ "./src/app/pop-up/pop-up.component.css")).default]
    }),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
    __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
        _produtos_produtos_service__WEBPACK_IMPORTED_MODULE_2__["ProdutosService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
], PopUpComponent);



/***/ }),

/***/ "./src/app/produtos/produtos.component.css":
/*!*************************************************!*\
  !*** ./src/app/produtos/produtos.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n  width: 100%;\r\n}\r\n\r\n.btnCadastrar {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.controles {\r\n  /*display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-template-rows: auto;*/\r\n  align-items: center;\r\n  text-align: center;\r\n  -webkit-padding-end: unset;\r\n          padding-inline-end: unset;\r\n}\r\n\r\n.mat-column-descricao {\r\n  max-width: 22rem;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n}\r\n\r\n.mat-column-quantidadeDisponivel {\r\n  text-align: center;\r\n}\r\n\r\n.mat-header-cell {\r\n  text-align: center;\r\n}\r\n\r\n.btnEntrada {\r\n  background-color: #89ed19;\r\n  margin-right: 0.75rem;\r\n}\r\n\r\n.btnSaida {\r\n  background-color: #f8b618;\r\n  margin-right: 0.75rem;\r\n}\r\n\r\n.btnExcluir {\r\n  background-color: #f62020;\r\n}\r\n\r\n.btnEditar {\r\n  background-color: #f5e31a;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHV0b3MvcHJvZHV0b3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFOzs0QkFFMEI7RUFDMUIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiwwQkFBeUI7VUFBekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9wcm9kdXRvcy9wcm9kdXRvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnRuQ2FkYXN0cmFyIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY29udHJvbGVzIHtcclxuICAvKmRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87Ki9cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWlubGluZS1lbmQ6IHVuc2V0O1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1kZXNjcmljYW8ge1xyXG4gIG1heC13aWR0aDogMjJyZW07XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1xdWFudGlkYWRlRGlzcG9uaXZlbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1jZWxsIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG5FbnRyYWRhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODllZDE5O1xyXG4gIG1hcmdpbi1yaWdodDogMC43NXJlbTtcclxufVxyXG5cclxuLmJ0blNhaWRhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhiNjE4O1xyXG4gIG1hcmdpbi1yaWdodDogMC43NXJlbTtcclxufVxyXG5cclxuLmJ0bkV4Y2x1aXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNjIwMjA7XHJcbn1cclxuXHJcbi5idG5FZGl0YXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWUzMWE7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/produtos/produtos.component.ts":
/*!************************************************!*\
  !*** ./src/app/produtos/produtos.component.ts ***!
  \************************************************/
/*! exports provided: ProdutosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosComponent", function() { return ProdutosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _produtos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./produtos.service */ "./src/app/produtos/produtos.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pop-up/pop-up.component */ "./src/app/pop-up/pop-up.component.ts");
/* harmony import */ var _pop_up_confirm_pop_up_confirm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pop-up-confirm/pop-up-confirm.component */ "./src/app/pop-up-confirm/pop-up-confirm.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let ProdutosComponent = class ProdutosComponent {
    constructor(service, dialog, route) {
        this.service = service;
        this.dialog = dialog;
        this.route = route;
        this.isMobile = document.body.clientWidth < 670;
        this.idCliente = this.route.getCurrentNavigation().extras.state.idCliente;
    }
    abrirPopUp(idProduto, tituloPopUp) {
        const dialogRef = this.dialog.open(_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_3__["PopUpComponent"], { width: '250px', data: { titulo: tituloPopUp, idProduto } });
        dialogRef.afterClosed().subscribe(() => {
            this.paginar(null);
        });
    }
    abrirPopUpExclusao(idProduto) {
        const dialogRef = this.dialog.open(_pop_up_confirm_pop_up_confirm_component__WEBPACK_IMPORTED_MODULE_4__["PopUpConfirmComponent"], { width: '250px', data: { idProduto, tipoExclusao: 'produto' } });
        dialogRef.afterClosed().subscribe(() => this.paginar(null));
    }
    onResize(event) {
        this.isMobile = event.target.innerWidth < 670;
        this.verificaColunas();
    }
    ngOnChanges() {
        this.paginar(null);
        this.verificaColunas();
    }
    ngOnInit() {
        this.paginar(null);
        this.verificaColunas();
    }
    paginar(event) {
        let inicial;
        let final;
        if (event == null) {
            inicial == 1;
            final = 5;
        }
        else {
            inicial = ((event.pageIndex + 1) * event.pageSize) - event.pageSize;
            final = ((event.pageIndex + 1) * event.pageSize);
        }
        this.service.consultarProdutos(this.idCliente).subscribe((data) => {
            this.produtos = data;
            this.produtosPaginados = data.slice(inicial, final);
        });
    }
    verificaColunas() {
        if (this.isMobile)
            this.displayedColumns = ['nome', 'controles'];
        else
            this.displayedColumns = ['nome', 'descricao', 'quantidadeDisponivel', 'controles'];
    }
};
ProdutosComponent.ctorParameters = () => [
    { type: _produtos_service__WEBPACK_IMPORTED_MODULE_1__["ProdutosService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
    __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], ProdutosComponent.prototype, "paginador", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProdutosComponent.prototype, "onResize", null);
ProdutosComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-produtos',
        template: __importDefault(__webpack_require__(/*! raw-loader!./produtos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/produtos/produtos.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./produtos.component.css */ "./src/app/produtos/produtos.component.css")).default]
    }),
    __metadata("design:paramtypes", [_produtos_service__WEBPACK_IMPORTED_MODULE_1__["ProdutosService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], ProdutosComponent);



/***/ }),

/***/ "./src/app/produtos/produtos.service.ts":
/*!**********************************************!*\
  !*** ./src/app/produtos/produtos.service.ts ***!
  \**********************************************/
/*! exports provided: ProdutosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosService", function() { return ProdutosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let ProdutosService = class ProdutosService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'https://' + window.location.host + '/api/produtos/';
    }
    consultarProdutos(idCliente) {
        return this.http.get(this.baseUrl + 'ConsultarProdutos', { params: { 'idCliente': idCliente.toString() }, responseType: 'json' });
    }
    salvarProduto(produto) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.set('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + 'Salvar', produto, { headers: headers });
    }
    excluir(idProduto) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.set('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + 'Excluir', idProduto, { headers: headers });
    }
    entrada(entrada) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.set('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + 'Entrada', entrada, { headers: headers });
    }
    saida(saida) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this.http.post(this.baseUrl + 'Saida', saida, { headers: headers });
    }
};
ProdutosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ProdutosService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ProdutosService);



/***/ }),

/***/ "./src/app/usuario.service.ts":
/*!************************************!*\
  !*** ./src/app/usuario.service.ts ***!
  \************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let UsuarioService = class UsuarioService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json');
        this.baseUrl = 'https://' + window.location.host + '/api/Usuario/';
    }
    logar(login) {
        return this.http.post(this.baseUrl + 'Logar', login, { headers: this.headers });
    }
    salvarUsuario(usuario) {
        return this.http.post(this.baseUrl + 'CadastroUsuario', usuario, { headers: this.headers });
    }
    consultarUsuario(idCliente) {
        return this.http.get(this.baseUrl + 'ConsultarUsuarios', {
            params: { idCliente: idCliente.toString() }, responseType: 'json'
        });
    }
    excluir(idUsuario) {
        return this.http.get(this.baseUrl + 'ExcluirUsuario', { params: { 'idUsuario': idUsuario.toString() }, responseType: 'json' });
    }
};
UsuarioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UsuarioService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], UsuarioService);



/***/ }),

/***/ "./src/app/usuarios/usuarios.component.css":
/*!*************************************************!*\
  !*** ./src/app/usuarios/usuarios.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n  width: 100%;\r\n}\r\n\r\n.btnCadastrar {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.controles {\r\n  align-items: center;\r\n  text-align: center;\r\n  -webkit-padding-end: unset;\r\n          padding-inline-end: unset;\r\n}\r\n\r\n.mat-column-nome {\r\n  width: 30%;\r\n}\r\n\r\n.mat-column-endereco {\r\n  width: 50%;\r\n  max-width: 50rem;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n}\r\n\r\n.mat-header-cell, .mat-column-ativo {\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXN1YXJpb3MvdXN1YXJpb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsMEJBQXlCO1VBQXpCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC91c3Vhcmlvcy91c3Vhcmlvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnRuQ2FkYXN0cmFyIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY29udHJvbGVzIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWlubGluZS1lbmQ6IHVuc2V0O1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1ub21lIHtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1lbmRlcmVjbyB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXgtd2lkdGg6IDUwcmVtO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm1hdC1oZWFkZXItY2VsbCwgLm1hdC1jb2x1bW4tYXRpdm8ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/usuarios/usuarios.component.ts":
/*!************************************************!*\
  !*** ./src/app/usuarios/usuarios.component.ts ***!
  \************************************************/
/*! exports provided: UsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosComponent", function() { return UsuariosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _pop_up_confirm_pop_up_confirm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pop-up-confirm/pop-up-confirm.component */ "./src/app/pop-up-confirm/pop-up-confirm.component.ts");
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../usuario.service */ "./src/app/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let UsuariosComponent = class UsuariosComponent {
    constructor(usuarioService, dialog, router) {
        this.usuarioService = usuarioService;
        this.dialog = dialog;
        this.router = router;
        this.isMobile = document.body.clientWidth < 670;
        this.idCliente = this.router.getCurrentNavigation().extras.state.idCliente;
    }
    ngOnInit() {
        this.paginar(null);
        this.verificaColunas();
    }
    onResize(event) {
        this.isMobile = event.target.innerWidth < 670;
        this.verificaColunas();
    }
    ngOnChanges() {
        this.paginar(null);
        this.verificaColunas();
    }
    abrirPopUpExclusao(idUsuario) {
        const dialogRef = this.dialog.open(_pop_up_confirm_pop_up_confirm_component__WEBPACK_IMPORTED_MODULE_2__["PopUpConfirmComponent"], { width: '250px', data: { idUsuario, tipoExclusao: 'usuario' } });
        dialogRef.afterClosed().subscribe(() => this.paginar(null));
    }
    paginar(event) {
        let inicial;
        let final;
        if (event == null) {
            inicial == 1;
            final = 5;
        }
        else {
            inicial = ((event.pageIndex + 1) * event.pageSize) - event.pageSize;
            final = ((event.pageIndex + 1) * event.pageSize);
        }
        this.usuarioService.consultarUsuario(this.idCliente).subscribe((data) => {
            console.log(data);
            this.usuarios = data;
            this.usuariosPaginados = data.slice(inicial, final);
        });
    }
    verificaColunas() {
        if (this.isMobile)
            this.displayedColumns = ['nome', 'login', 'controles'];
        else
            this.displayedColumns = ['nome', 'login', 'controles'];
    }
    cadastroUsuario() {
        this.router.navigate(['/cadastro-usuario'], { state: { idCliente: this.idCliente } });
    }
};
UsuariosComponent.ctorParameters = () => [
    { type: _usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }),
    __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
], UsuariosComponent.prototype, "paginador", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsuariosComponent.prototype, "onResize", null);
UsuariosComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-usuarios',
        template: __importDefault(__webpack_require__(/*! raw-loader!./usuarios.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/usuarios/usuarios.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./usuarios.component.css */ "./src/app/usuarios/usuarios.component.css")).default]
    }),
    __metadata("design:paramtypes", [_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], UsuariosComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "./src/shared/model.ts":
/*!*****************************!*\
  !*** ./src/shared/model.ts ***!
  \*****************************/
/*! exports provided: Produto, Entrada, Saida, Login, Usuario, Cliente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Produto", function() { return Produto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entrada", function() { return Entrada; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Saida", function() { return Saida; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cliente", function() { return Cliente; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
class Produto {
}
class Entrada {
}
class Saida {
}
class Login {
}
class Usuario {
}
class Cliente {
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\andre\Documents\Projetos\GitHub\Adega\Web\ClientApp\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map