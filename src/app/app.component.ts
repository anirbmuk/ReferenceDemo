import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public toolbarConfig: { label: string, class: string, handler: any }[];

  ngOnInit(): void {
    this.toolbarConfig = [
      { label: 'Create', class: 'primary', handler: 'createHandler' },
      { label: 'Edit', class: 'accent', handler: 'editHandler' },
      { label: 'Delete', class: 'warn', handler: this.customDeleteHandler.bind(this) }
    ];
  }

  private customDeleteHandler(): void {
    console.log('Executing custom deleteHandler');
  }
}
