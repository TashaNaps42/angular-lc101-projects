import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [];
   finishedChores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries', 'kiss wife'];

   targetImage = 'https://c.tenor.com/wjbQa4SfUtwAAAAC/relax.gif';

   constructor() { }

   ngOnInit() {
   }

}
