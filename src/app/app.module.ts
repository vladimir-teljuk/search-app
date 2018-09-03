import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {SearchFormComponent} from './search-form/search-form.component';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
    declarations: [
        AppComponent,
        SearchFormComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
