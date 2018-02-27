import { appSettings } from './app.environment';

export const BaseApiUrl = appSettings.BaseApiUrl;

export const RouteConstants = {
    News: {
        All: "news",
        Create: "news/create",
        Edit: "news/:id/edit",
        EditList: "news/editList"
    },
    Account: {
        All: "account",
        Login: "account/login",
        Register: "account/register"
    },
    Professor: {
        All: "professors",
        GetPairs: "professor/:id/pairs"
    },
    NotFound: "404"
}

//Для запросов в сервисах
export const ApiRouteConstants = {
    Account: {
        FindUsersByName: "account/FindUsersByName/:req"
    },
    Authentication: {
        Login: "account/login",
        Registration: "account/registration",
        Role: "account/role",
        User: "account/user"
    },
    News: {
        All: "news/all",
        Last: "news/last",
        Get: "news/get/:id",
        Delete: "news/delete/:id",
        Save: "news/save"
    },
    Professor: {
        All: "professors",
        //GetPairs:"professors/:id"//???
        GetChetPairs:"professor/:id/pairs/even",
        GetNechetPairs:"professor/:id/pairs/odd"
},
    Issue: {
        All: "issue/list",
        Create: "issue/create",
        Update: "issue/update",
        Get: "issue/get/:id",
        Delete: "issue/delete/:id"
    }
}