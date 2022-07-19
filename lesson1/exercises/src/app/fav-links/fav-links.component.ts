import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://scp-wiki.wikidot.com/', 'http://www.swgalaxymap.com/']
  constructor() { }

  ngOnInit() {
  }

}
