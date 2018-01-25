import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { OffersService } from './../offers-service/offers.service';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateOfferComponent implements OnInit {

  offer: any = {};
  tags: string[] = [
    'JavaScript',
    'Java',
    'C++',
    'Python',
    'AngularJS',
    'Angular 5',
    'React.js',
    'Vue.js',
  ];

  constructor(private offerService: OffersService, private router: Router) { }

  ngOnInit() {
  }

  saveOffer() {
    this.offerService.addOffer(this.offer)
      .subscribe(res => {
          const id = res['id'];
          this.router.navigate(['/offer-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
