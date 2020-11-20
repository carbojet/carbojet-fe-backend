"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesService = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let MoviesService = class MoviesService {
    constructor(http) {
        this.http = http;
    }
    getMovies() {
        return this.http.get('https://fwemoviedb.herokuapp.com/3/movie/popular?api_key=e800e93ef4806616964242bbd2619ae1')
            .pipe(operators_1.map(response => response.data));
    }
    getMovieDetails(id) {
        return this.http.get('https://fwemoviedb.herokuapp.com/3/movie/' + id + '?api_key=e800e93ef4806616964242bbd2619ae1')
            .pipe(operators_1.map(response => response.data));
    }
    fetchMovies(term) {
        return this.http.get('https://fwemoviedb.herokuapp.com/3/movie?api_key=e800e93ef4806616964242bbd2619ae1&query=' + term)
            .pipe(operators_1.map(response => response.data));
    }
};
MoviesService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], MoviesService);
exports.MoviesService = MoviesService;
//# sourceMappingURL=movies.service.js.map