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
  image4 = 'https://th.bing.com/th/id/R.854cd3e5b357654e3fe0c5ab479d8ac6?rik=NVtf2np5atlcxg&riu=http%3a%2f%2fmedia.giphy.com%2fmedia%2fdbtDDSvWErdf2%2fgiphy.gif&ehk=lxbTtWbvkb8NU3h%2fp7lheTlAcXBrFMjNb6%2fR94lu6WQ%3d&risl=&pid=ImgRaw&r=0';
  constructor() { }

  ngOnInit() {
  }

}