import { Component, OnInit } from '@angular/core';
import { CompuSciAPIService } from '../compu-sci-api.service';
import { FamousPeople} from '../interfaces/famousPeople';

@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.scss']
})
export class FamousPeopleComponent implements OnInit {
  famousPeople:FamousPeople;

  constructor(private compuSciService:CompuSciAPIService) { }

  ngOnInit(): void {
    this.compuSciService.getFamousPeople().subscribe(
      (data: FamousPeople) => this.famousPeople = { ...data }, 
      error => console.error(error)
    );
  }

}
