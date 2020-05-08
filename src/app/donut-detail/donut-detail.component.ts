import { Component, OnInit, Input } from '@angular/core';
import { DonutAPIService } from '../donut-api.service';
import { Donut } from '../interfaces/donuts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.scss']
})
export class DonutDetailComponent implements OnInit {
  donut: Donut;
  id: number;

  constructor(
    private donutService:DonutAPIService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.id = +param['id'];
    });

    this.donutService.getDonutById(this.id).subscribe(
      (data: Donut) => this.donut = { ...data },
      error => console.error(error)
    );
  }
}
