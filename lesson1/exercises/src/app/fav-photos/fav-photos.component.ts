import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Look at all these photos';
  image1 = 'https://th.bing.com/th/id/OIP.jZiXolTRqRnZY4X-Xm4RZAHaHJ?pid=ImgDet&rs=1';
  image2 = 'https://th.bing.com/th/id/R.868e9e758421edefcb83d8902fe773a4?rik=Fbmz4wBn02Baqw&pid=ImgRaw&r=0';
  image3 = 'https://th.bing.com/th/id/OIP.SBaUr87u5JdtSix0bpbvJAHaHS?pid=ImgDet&rs=1';

  constructor() { }

  ngOnInit() {
  }

}