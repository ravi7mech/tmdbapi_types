import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigAPI, ConfigCountries, ConfigLanguages, Trending, Genre, Genres } from './tmdbapi.models';
import { HttpClient } from '@angular/common/http';
declare var Error: any;

export abstract class TmdbApiService {
  protected abstract tmdbApiUrl: string;
  protected abstract tmdbApiKey: string;

  constructor(private http: HttpClient) {
  }

  private checkFields() {
    if (!this.tmdbApiUrl || !this.tmdbApiKey) {
      throw new Error('Please provide valid apikey and url! For more info visit https://www.themoviedb.org/documentation/api');
    }
  }

  getConfigAPI(): Observable<ConfigAPI> {
    this.checkFields();
    const url = `${this.tmdbApiUrl}/configuration?api_key=${this.tmdbApiKey}`;
    return this.http.get<ConfigAPI>(url);
  }

  getConfigCountries(): Observable<ConfigCountries> {
    this.checkFields();
    const url = `${this.tmdbApiUrl}/configuration/countries?api_key=${this.tmdbApiKey}`;
    return this.http.get<ConfigCountries>(url);
  }

  getConfigLanguages(): Observable<ConfigLanguages> {
    this.checkFields();
    const url = `${this.tmdbApiUrl}/configuration/languages?api_key=${this.tmdbApiKey}`;
    return this.http.get<ConfigLanguages>(url);
  }

  getTrending(media_type: string, time_window: string): Observable<Trending> {
    this.checkFields();
    const url = `${this.tmdbApiUrl}/trending/${media_type}/${time_window}?api_key=${this.tmdbApiKey}`;
    return this.http.get<Trending>(url);
  }

  /**
   * @method GET
   * @param media_type movie | tv
   * @description Get the list of official genres for Movie | TV shows.
   */
  getGenres(media_type: string): Observable<Genres> {
    this.checkFields();
    const url = `${this.tmdbApiUrl}/genre/${media_type}/list?api_key=${this.tmdbApiKey}`;
    return this.http.get<Genres>(url);
  }

}
