import { HttpService } from '@nestjs/common';
export declare class MoviesService {
    private http;
    constructor(http: HttpService);
    getMovies(): any;
    getMovieDetails(id: any): any;
    fetchMovies(term: any): any;
}
