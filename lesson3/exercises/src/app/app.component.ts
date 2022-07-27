import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Exercises: Angular Lesson 3';
  color:string = 'green';
  height:number = 0;
  width:number = 0;
  message:string = 'Space shuttle ready for takeoff!';
  takeOffEnabled:boolean = true;

  handleTakeOff(rocket) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight'
      rocket.style.bottom = '10px';
    }
  }
  handleLand(rocket) {
    let result = window.confirm('Are you sure you wish to land the shuttle?');
    if (result) {
      this.color = 'green';
      this.height = 0;
      this.message = 'The shuttle has landed.';
      rocket.style.bottom = '0px';
    }
  }
  handleAbort(rocket) {
    let result = window.confirm('You truly wish to abort mission? Billions of dollars have been spent on this.');
    if (result) {
      this.color = 'red';
      this.height = 0;
      this.message = 'Mission Aborted. $1.5 billion have been squandered'
      rocket.style.bottom = '0px';
      rocket.style.left = '0px';
    }
  }

  moveRocket(rocket, direction) {
    if (direction === 'right') {
      rocket.style.left = parseInt(rocket.style.left) + 10 + 'px';
      this.width = this.width + 10000;
    } else if (direction === 'left') {
      rocket.style.left = parseInt(rocket.style.left) - 10 + 'px';
      this.width = this.width - 10000;
    } else if (direction === 'up') {
      this.height = this.height + 10000;
      rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + 'px';
    } else if (direction === 'down') {
        if (this.height !== 0) {
          this.height = this.height - 10000;
          rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + 'px';
        } else window.alert('The bird is landed silly.');
    }
  }
  checkEdge () {
    if (this.height === 0) {
      this.color = 'green';
      this.message = 'The bird is landed ;)'
      this.takeOffEnabled = true;
    }else if (this.height===320000 || this.width === -10000 || this.width===460000){
      this.color = 'orange';
      this.message = 'Approaching the edge'
    } else if (this.height===330000 || this.width === -20000 || this.width===470000) {
      this.color = 'crimson';
      this.message = 'Welcome to the danger zone. Do you even have a license to fly that thing?'
    } else {
      this.color = 'blue';
      this.message = 'Bird in the air baby!'
    }
  }
}
