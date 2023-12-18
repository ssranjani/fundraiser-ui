import { Component, OnInit } from '@angular/core';
import { FundService } from 'src/app/services/fund.service';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css']
})
export class FundComponent implements OnInit {
  protected amount:number = 0;

  constructor(private service: FundService) { }

  ngOnInit(): void {
    this.service.getFunds().subscribe({
      next:(data)=> {
        this.amount = data;
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }

}
