import { Controller, Get,Param } from '@nestjs/common'
import { MoviesService } from './movies.service';

@Controller()
export class MoviesController {
    constructor(
        private readonly moviesService: MoviesService,
    ) {}
    
    /* get popular movies and tv series list */
    @Get('list')
    getAllMovies(){
        return this.moviesService.getMovies()
    }

    /* search movie by id and get details*/
    @Get('details/:id')
    getMovieDetails(@Param('id') movieid){
        return this.moviesService.getMovieDetails(movieid)
    }

    /* search movies by title or description get list of movies */
    @Get('search/:term')
    searchMovies(@Param('term') searchterm){
        return this.moviesService.fetchMovies(searchterm)
    }
}