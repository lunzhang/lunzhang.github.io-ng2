import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { SearchComponent }   from './swords/search/search.component';
import { SwordComponent }   from './swords/sword.component';
import { KeyboardComponent }   from './keyboard/keyboard.component';
import { RowComponent } from './keyboard/row/row.component';
import { KeyComponent } from './keyboard/key/key.component';
import { routing } from './app.routes';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { GridModule } from 'ng2-grid-component';
import { GridComponent } from './grid/grid.component';
import { BarComponent } from './grid/bar/bar.component';
import { PieComponent } from './grid/pie/pie.component';
import { Notes } from './notes/notes';
import {NgxChartsModule} from '@swimlane/ngx-charts';


@NgModule({
  imports:      [ GridModule,BrowserModule,FormsModule, routing,NgxChartsModule],
  declarations: [ AppComponent,SearchComponent,SwordComponent,
    KeyboardComponent,RowComponent,KeyComponent,GridComponent,Notes,
    BarComponent,PieComponent],
  bootstrap:    [ AppComponent ],
  providers:    [{
    provide: LocationStrategy, useClass: HashLocationStrategy
  }],
  entryComponents :[BarComponent,PieComponent]
})

export class AppModule { }
