import { Routes } from '@angular/router';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { AlterarComponent } from './pages/alterar/alterar.component';
import { ConsultarComponent } from './pages/consultar/consultar.component';
import { ExcluirComponent } from './pages/excluir/excluir.component';
import { ListarComponent } from './pages/listar/listar.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {path:'', component: MainComponent},
    {path: 'cadastrar', component: CadastrarComponent, title: 'Cadastro'},
    {path: 'alterar', component: AlterarComponent, title: 'Alteração'},
    {path: 'consultar', component: ConsultarComponent, title: 'Consulta'},
    {path: 'excluir', component: ExcluirComponent, title: 'Exclusão'},
    {path: 'listar', component: ListarComponent, title: 'Listagem'},
    {path:'**', redirectTo:''} //se o link for quebrado abra o componente de listagem

];
