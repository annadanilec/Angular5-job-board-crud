import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OffersService } from './../offers-service/offers.service';

@Component({
  selector: 'app-offer-edit',
  templateUrl: './offer-edit.component.html',
  styleUrls: ['./offer-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OfferEditComponent implements OnInit {

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

  constructor(private offerService: OffersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getOffer(this.route.snapshot.params['id']);
  }

  getOffer(id) {
    this.offerService.getOfferDetail(id).subscribe(
      data => { this.offer = data; },
      err => console.error(err),
      () => console.log('Offer detail loading')
    );
  }

  updateOffer(id) {
    this.offerService.updateOffer(id, this.offer).subscribe(
      res => {
        const id = res['id'];
        this.router.navigate(['/offer-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
