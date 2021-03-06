﻿import { CommonModule } from "@angular/common";
import { NgModule, enableProdMode } from "@angular/core";
import { UrlSerializer } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpModule, RequestOptions } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { TranslationModule, TranslationService } from "angular-l10n";
import { ToastrModule } from "ngx-toastr";
import { Ng2AutoCompleteModule } from "ng2-auto-complete";
import { AutoCompleteModule } from 'primeng/components/autocomplete/autocomplete';

// custom
import { routing } from "./app.routes";
import { LowerCaseUrlSerializer } from "../providers/router";
import { EnumKeysPipe } from "../pipes/enum.keys";

// http
import { HttpClientModule, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { GlobalHttpOptions } from "../http/globalHttpOptions";
import { ServiceHttpInterceptor } from "../http/serviceHttpInterceptor";

// components
import { AppComponent } from "./app.component";
import { AccountComponent } from "../components/account/account/account.component";
import { NewsDispatcherComponent } from "../components/account/account/news-dispatcher/news-dispatcher.component";
import { DocumentComponent } from "../components/account/account/documents/document.component";
import { RegisterComponent } from "../components/account/authentification/register/register.component";
import { LogInComponent } from "../components/account/authentification/login/login.component";
import { SingleNewsComponent } from "../components/news/single-news/single-news.component";
import { EditorSingleNewsComponent } from "../components/news/editor-single-news/editor-single-news.component";
import { EditorListNewsComponent } from "../components/news/editor-list-news/editor-list-news.component";
import { ListNewsComponent } from "../components/news/list-news/list-news.component";
import { NotFoundComponent } from "../components/notfound/notfound.component";
import {ListProfessorsComponent} from "../components/professor/list-professors.component";
import {SinglePairProfessorComponent} from "../components/pairs/list-pairs-professor/single-pair-professor.component";
import {ListPairsProfessorComponent} from "../components/pairs/list-pairs-professor/list-pairs-professor.component";
import {ListPairsGroupComponent} from "../components/pairs/list-pairs-group/list-pairs-group.component";
import {SinglePairGroupComponent} from "../components/pairs/list-pairs-group/single-pair-group.component";

// services
import { NewsService } from "../services/news.service";
import { IssueService } from "../services/issues.service";
import { AuthenticationService } from "../services/authService";
import {ProfessorService} from "../services/professor.service";
import {GroupService} from "../services/group.service";

// guards
import { AuthGuard } from "../guards/auth.guard";
import {HeaderComponent} from "../components/header/header";
import {DialogModule} from "primeng/components/dialog/dialog";
import {GrowlModule} from "primeng/components/growl/growl";
import {ConfirmDialogModule} from "primeng/components/confirmdialog/confirmdialog";
import {MessageService} from "primeng/components/common/messageservice";
import {ConfirmationService} from "primeng/primeng";
import {AccountService} from "../services/accountService";








@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({ preventDuplicates: true }),
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        Ng2AutoCompleteModule,
        routing,
        TranslationModule.forRoot(),
        DialogModule,
        GrowlModule,
        AutoCompleteModule,
        ConfirmDialogModule
    ],
    declarations: [
        AppComponent,
        AccountComponent,
        NewsDispatcherComponent,
        DocumentComponent,
        LogInComponent,
        RegisterComponent,
        SingleNewsComponent,
        ListNewsComponent,
        HeaderComponent,
        EditorSingleNewsComponent,
        EditorListNewsComponent,
        NotFoundComponent,
        EnumKeysPipe,
        ListProfessorsComponent,
        SinglePairProfessorComponent,
        ListPairsProfessorComponent,
        ListPairsGroupComponent,
        SinglePairGroupComponent
    ],
    providers: [
        { provide: RequestOptions, useClass: GlobalHttpOptions },
        { provide: UrlSerializer, useClass: LowerCaseUrlSerializer },
        { provide: HTTP_INTERCEPTORS, useClass: ServiceHttpInterceptor, multi: true },
        TranslationService,
        AuthenticationService,
        IssueService,
        NewsService,
        MessageService,
        AccountService,
        ConfirmationService,
        AuthGuard,
        ProfessorService,
        GroupService
    ],
    entryComponents: [
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }