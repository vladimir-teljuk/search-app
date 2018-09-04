import {Component, OnInit} from '@angular/core';
import {SearchSystem} from '../Interfaces/searchSystem';


@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {

    public choiceSystem = 'Выберите поисковую систему';

    public searchRequest: string;

    public searchSystems: SearchSystem[] = [
        {name: 'Google', url: 'https://www.google.com/search?q='},
        {name: 'Bing', url: 'https://www.bing.com/search?q='},
        {name: 'Ask.com', url: 'https://ask.com/web?q='}
    ];

    constructor() {
    }

    ngOnInit() {
    }

    public search(): void {
        const url = this.searchSystems.filter(system => (system['name'] === this.choiceSystem))[0]['url'];
        window.open(url + encodeURIComponent(this.searchRequest));
    }

}
