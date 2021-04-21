import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private http: HttpClient) { }

  private url = 'https://api.giphy.com/v1/gifs/search';
  private api_key = 'X7lPfFWYt7dzHRJXxTSgKIezSatmjz3i';
  private limit = '24';

  getGif(q) {
    let url = `${this.url}?api_key=${this.api_key}&q=${q}&limit=${this.limit}`

    return this.http.get(url);
  }
}
