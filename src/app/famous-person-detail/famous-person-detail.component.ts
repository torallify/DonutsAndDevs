import { Component, OnInit, Input } from '@angular/core';
import { CompuSciAPIService } from '../compu-sci-api.service';
import { Person } from '../interfaces/famousPeople';

@Component({
  selector: 'app-famous-person-detail',
  templateUrl: './famous-person-detail.component.html',
  styleUrls: ['./famous-person-detail.component.scss']
})
export class FamousPersonDetailComponent implements OnInit {
  @Input() myPeople:Person;

  constructor() { }

  ngOnInit(): void {
  }

}
