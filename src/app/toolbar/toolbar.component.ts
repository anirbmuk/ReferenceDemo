import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() toolbarConfig: { label: string, class: string, handler: any }[];

  constructor() { }

  ngOnInit() { }

  public toolbarAction(handler: any) {
    if (typeof handler === 'string') {
      this.actionHandler(handler);
    } else if (typeof handler === 'function') {
      handler();
    }
  }

  private actionHandler(action: string) {
    console.log(`Executing default ${action}...`);
  }

}
