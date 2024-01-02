import axios from 'axios';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class MovieService {

  API_KEY = '5af1455d';

  API_BASE_URL = 'http://www.omdbapi.com/?apikey=';

  fetchMovieList = async (searchQuery: any) => {
    try {

      const params = new URLSearchParams();

      Object.keys(searchQuery).forEach((key) => {
        if (searchQuery[key]) {
          params.append(key, searchQuery[key]);
        }
      });

      const url = `${this.API_BASE_URL}${this.API_KEY}&${params.toString()}`;

      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching movie list:', error);
      throw error;
    }
  };

  fetchMovieByName = async (searchQuery: string) => {
    try {
      const url = `${this.API_BASE_URL}/movies/movies-by-name?title=${encodeURIComponent(searchQuery)}`;

      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching movie list:', error);
      throw error;
    }
  };

}
