import { Component, OnInit } from '@angular/core';
import { DonutAPIService } from '../donut-api.service';
import { Donuts, Donut } from '../interfaces/donuts';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.scss']
})
export class DonutsComponent implements OnInit {
  donuts:Donuts;

  constructor(private donutService:DonutAPIService) { }

  async ngOnInit() {
    this.donuts = await this.donutService.getDonuts()
    

  }

}
