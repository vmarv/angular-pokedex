import { Component } from '@angular/core';
import {PokeApiService} from "../../service/poke-api.service";

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent {

    public getAllPokemons: any;
    private setAllPokemons: any;

    constructor(
       private PokeApiService: PokeApiService
    ) {}

    ngOnInit(): void {
        this.PokeApiService.apiListAllPokemons.subscribe(
            res => {
                this.setAllPokemons = res.results;
                this.getAllPokemons = this.setAllPokemons;
            }
        );
    }

    getSearch(value: string) {
        const filter = this.setAllPokemons.filter((res: any) => {
            return !res.name.indexOf(value.toLowerCase());
        });

        this.getAllPokemons = filter;
    }

}
