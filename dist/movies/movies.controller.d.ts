import { MoviesService } from './movies.service';
export declare class MoviesController {
    private readonly moviesService;
    constructor(moviesService: MoviesService);
    getAllMovies(): any;
    getMovieDetails(movieid: any): any;
    searchMovies(searchterm: any): any;
}
