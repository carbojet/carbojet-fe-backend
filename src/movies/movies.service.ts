import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class MoviesService{
    constructor(
        private http: HttpService
    ) {}
    /* using httpmodule calling api and then using map operator fetching data */
    /* for popular movies */
    getMovies(): any {
        return this.http.get('https://fwemoviedb.herokuapp.com/3/movie/popular?api_key=e800e93ef4806616964242bbd2619ae1')
        .pipe(
            map(response => response.data)
        )
    }
    /* for movie deails by id */
    getMovieDetails(id): any {
        return this.http.get('https://fwemoviedb.herokuapp.com/3/movie/'+id+'?api_key=e800e93ef4806616964242bbd2619ae1')
        .pipe(
            map(response => response.data)
        )
    }

    /* list of movies by search term */
    fetchMovies(term): any{
        return this.http.get('https://fwemoviedb.herokuapp.com/3/movie?api_key=e800e93ef4806616964242bbd2619ae1&query='+term)
        .pipe(
            map(response => response.data)
        )
    }
}