import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OffersService } from './../offers-service/offers.service';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OfferDetailComponent implements OnInit {

  offer: any = {};
  tags: any = [];
  suggestedCandidates: any = {};

  constructor(private router: Router, private route: ActivatedRoute, private offerService: OffersService) { }

  ngOnInit() {
    this.getOfferDetail(this.route.snapshot.params['id']);
    this.getOfferTags(this.route.snapshot.params['id']);
  }

  getOfferDetail(id) {
    this.offerService.getOfferDetail(id).subscribe(
      data => { this.offer = data; },
      err => console.error(err),
        () => console.log('Offer detail loading')
    );
  }

  deleteOffer(id) {
    this.offerService.deleteOffer(id).subscribe(
      res => { this.router.navigate(['/offers']); },
      (err) => {console.log(err); }
    );
  }
}
