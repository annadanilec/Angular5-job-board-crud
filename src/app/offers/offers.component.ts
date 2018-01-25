import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OffersService } from './../offers-service/offers.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OffersComponent implements OnInit {

  public offers: any;

  constructor(private offersService: OffersService) { }

  ngOnInit() {
    this.getOffers();
  }

  getOffers() {
    this.offersService.getOffers().subscribe(
      data => { this.offers = data; },
      err => console.error(err),
        () => console.log('Offers loading')
      );
  }
}
