import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'gastolist',     title: 'Gasto',              icon:'nc-bank',       class: '' },
    { path: '/admin/gastocategorialist',         title: 'Gasto Categoria',    icon:'nc-diamond',    class: '' },
    { path: '/admin/fontederendalist',          title: 'Fonte de Renda',     icon:'nc-pin-3',      class: '' },
    { path: '/admin/creditocartaolist', title: 'Cartão de Crédito',  icon:'nc-bell-55',    class: '' },
    { path: '/admin/financiamentolist',          title: 'Financiamento',      icon:'nc-single-02',  class: '' },
    { path: '/admin/usuariodetrail',         title: 'Usuario',            icon:'nc-tile-56',    class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
