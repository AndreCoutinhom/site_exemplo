<img width="1895" height="937" alt="image" src="https://github.com/user-attachments/assets/a191db0a-78db-439c-bc33-3507920d0e67" />

# SiteExemplo

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.17.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Most Important Commands

### Install npm commands with
`npm install -g npm@11.1.0`

### Install Angular with
`npm install -g @angular/cli`

### Create new project with
`npx ng new project_name`

### Generate new components with
`npx ng generate component component_name`

### Run your project with
`npx ng serve --open`

## Creating a data base

### Go inside the project and create a data base folder with a json archive

### Inside the data base run the server with
`npx json-server data_base.json`

### Inside the project, create a service for databases with
`npx ng generate service core/services/data_base_component`

### Inside the folder `core` create another folder named `types` and then a typescript file inside this one named `type.ts`
`cd core`
`mkdir types`
`type nul > types.ts`

### You must place each type according to their nature inside this file. Example:

``` typescript
export interface Farmacia {
    codigo: number;
    nome: string;
    fabricante: string;
    data_fabricacao: number;
    data_validade: number;
    preco: number;
}
```

After that, you must alter the typescript file generated in the `services` folder. Add every function and import needed and place the endpoint of the database as the component class. Example:

``` typescript
@Injectable({
  providedIn: 'root'
})
export class FarmaciaComponent {
  
  private readonly API = 'http://localhost:3000/medicamentos';

}
```

The rest will depend on what kind of application you want to run.

## When commiting project

### Log in to git with
`git config --global user.email "email@gmail.com"`
`git config --global user.name "Name"`

### Commit and syncronize through VS code interface

### Clone afterwards with
`git clone URL`

### Download every dependance necessary
`npm i`

## Modifying site from zero

Angular has a default website appearence. To start from scratch you must go to `app.html` or `app.component.html` file and leave only the following structure:

``` html
<router-outlet />

```

You can then organize how you want each interface component to show up on default page:


``` html
<app-cabecalho></app-cabecalho>
<app-rodape></app-rodape>
<app-principal></app-principal>
<router-outlet />

```

Now you can edit the html file for each component in order to build your website.
