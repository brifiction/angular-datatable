// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'angular-datatable';
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  

  rows = [
    { name: 'John Smith', gender: 'Male', company: 'Deloitte' },
    { name: 'Jane Smith', gender: 'Female', company: 'PWC' },
    { name: 'Molly', gender: 'Female', company: 'Ernst & Young' },
  ];
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];
}