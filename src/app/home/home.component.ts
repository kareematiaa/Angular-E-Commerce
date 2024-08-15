import { Component, OnInit } from '@angular/core';
import { TryService } from '../try.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _TryService: TryService) { }

  filterData: object = {}

  showData() {
    this._TryService.getDoctors(this.filterData).subscribe((response) => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  ngOnInit(): void {
    this.showData()
  }

}
