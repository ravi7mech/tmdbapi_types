import { NgModule } from '@angular/core';
import { TmdbApiComponent } from './tmdbapi.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TmdbApiComponent],
  imports: [
    HttpClientModule
  ],
  exports: [TmdbApiComponent]
})
export class TmdbApiModule { }
