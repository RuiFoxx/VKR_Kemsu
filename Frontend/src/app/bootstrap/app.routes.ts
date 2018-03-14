import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RouteConstants } from "./app.route.constants";

import { AuthGuard } from "../guards/auth.guard";
import {ListNewsComponent} from "../components/news/list-news/list-news.component";
import {AccountComponent} from "../components/account/account/account.component";
import {LogInComponent} from "../components/account/authentification/login/login.component";
import {RegisterComponent} from "../components/account/authentification/register/register.component";
import {EditorListNewsComponent} from "../components/news/editor-list-news/editor-list-news.component";
import {EditorSingleNewsComponent} from "../components/news/editor-single-news/editor-single-news.component";
import {ListProfessorsComponent} from "../components/professor/list-professors.component";
import {ListPairsProfessorComponent} from "../components/pairs/list-pairs-professor/list-pairs-professor.component";
import {ListPairsDepartmentComponent} from "../components/pairs/list-pairs-department/list-pairs-department.component";
import {EditorSinglePairComponent} from "../components/pairs/editor-single-pair/editor-single-pair.component";
import {ListPairsGroupComponent} from "../components/pairs/list-pairs-group/list-pairs-group.component";
import {EditorListPairsComponent} from "../components/pairs/editor-list-pairs/editor-list-pairs.component";

export const routes: Routes = [
    // {
    //     path: "",
    //     component: ListNewsComponent,
    //     data: { title: "Главная" }
    // },
    // {
    //     path: RouteConstants.News.All,
    //     component: ListNewsComponent,
    //     data: { title: "Главная" }
    // },
    {
        path: "",
        component: ListProfessorsComponent,
        data: { title: "Главная" }
    },
    {
        path: RouteConstants.Professor.All,
        component: ListProfessorsComponent,
        data: { title: "Главная" }
    },

    {
        path: RouteConstants.Professor.GetPairs,
        component: ListPairsProfessorComponent,
        data: { title: "Расписание" }
    },

    {
        path: RouteConstants.Group.GetPairs,
        component: ListPairsGroupComponent,
        data: { title: "Расписание" }
    },

    {
        path: RouteConstants.Department.GetPairs,
        component: ListPairsDepartmentComponent,
        data: { title: "Расписание кафедры" }
    },

    {
        path: RouteConstants.Pair.Create,
        component: EditorSinglePairComponent,
        data: { title: "Создание пары" }
    },

    {
        path: RouteConstants.Pair.Edit,
        component: EditorSinglePairComponent,
        data: { title: "Редактирование пары" }
    },

    {
        path: RouteConstants.Pair.EditList,
        component: EditorListPairsComponent,
        data: { title: "Список пар" }
    },

    {
        path: RouteConstants.News.Edit,
        component: EditorSingleNewsComponent,
        data: { title: "Редактирование статьи" }
    },
    {
        path: RouteConstants.News.EditList,
        component: EditorListNewsComponent,
        data: { title: "Список статей" }
    },
    {
        path: RouteConstants.News.Create,
        component: EditorSingleNewsComponent,
        data: { title: "Создание статьи" }
    },
    {
        path: RouteConstants.Account.Login,
        component: LogInComponent,
        data: { title: "Вход" }
    },
    {
        path: RouteConstants.Account.Register,
        component: RegisterComponent,
        data: { title: "Регистрация" }
    },
    {
        path: RouteConstants.Account.All,
        component: AccountComponent,
        canActivate: [ AuthGuard ],
        data: { title: "Личный кабинет" }
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
