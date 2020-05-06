import { Component, OnInit, Input } from '@angular/core';
import { DonutAPIService } from '../donut-api.service';
import { Donut } from '../interfaces/donuts';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.scss']
})
export class DonutDetailComponent implements OnInit {
  @Input() myDonut:Donut;

  constructor() { }

  ngOnInit(): void {
  }

}
