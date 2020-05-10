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
  editName:string;
  editCal:number;
  editUrl:string;

  constructor(
    private donutService:DonutAPIService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit(){
    this.route.params.subscribe(param => {
      this.id = +param['id'];
    });

    this.donut = await this.donutService.getDonutById(this.id)
    this.editName = this.donut.name;
    this.editCal = this.donut.calories;
    this.editUrl = this.donut.photo || "";
  }

  async updateDonut()
  {
    this.donutService.updateDonut(this.id, {name:this.editName, calories:this.editCal, photo: this.editUrl})
    
    this.donut = await this.donutService.getDonutById(this.id)
  }
}
