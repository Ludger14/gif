import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../giphy.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit {

  constructor(private route: ActivatedRoute, private gifServ: GiphyService) { }

  q: string;
  gif: any = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.q = params['q'];

      this.gifServ.getGif(this.q).subscribe(gif => {
        this.gif = gif;
      });
    });
  }

}
