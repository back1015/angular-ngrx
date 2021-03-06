import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { counterReducer } from './redux/reducer/counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';

@NgModule({
  declarations: [	AppComponent,
      MyCounterComponent
   ],
  imports: [BrowserModule, StoreModule.forRoot({ count: counterReducer })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
