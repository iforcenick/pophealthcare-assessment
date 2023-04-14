import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Joke} from './model/joke';

@Injectable({
  providedIn: 'root'
})

export class JokeService {
  private jokeUrl: string = "";

  constructor(private http: HttpClient) {

  }

  getJoke() {

    this.jokeUrl = 'https://official-joke-api.appspot.com/jokes/programming/random';
    return this.http.get<Joke[]>(this.jokeUrl);

  }
}
