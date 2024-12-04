import { Component, OnInit } from '@angular/core';
  import { FlowbiteService } from './services/flowbite.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'lp_angular';

  constructor(private flowbiteService: FlowbiteService) {}

  dummyData = {
    title: 'My first project',
    content: 'This is my personal angular app proj',
  }

  internalMessage: string = 'This is my internal message app.component';

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }

  receiptMessage($message: string) : void {
    this.internalMessage = $message;
  }

}
