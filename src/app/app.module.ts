import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { CandidateComponent } from './candidate/candidate.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { CandidateCreateComponent } from './candidate-create/candidate-create.component';
import { CandidateEditComponent } from './candidate-edit/candidate-edit.component';
import { MenuComponent } from './menu/menu.component';
import { OffersComponent } from './offers/offers.component';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { OfferDetailComponent } from './offer-detail/offer-detail.component';
import { OfferEditComponent } from './offer-edit/offer-edit.component';

import { OffersService } from './offers-service/offers.service';
import { CandidateService } from './candidate-service/candidate.service';

import { SearchPipe } from './search-pipe/search.pipe';

const appRoutes: Routes = [
  {
    path: 'offer-edit/:id',
    component: OfferEditComponent,
    data: { title: 'Edit Offer' }
  },
  {
    path: 'offer-details/:id',
    component: OfferDetailComponent,
    data: { title: 'Offer Details' }
  },
  {
    path: 'offer-create',
    component: CreateOfferComponent,
    data: { title: 'Create Offer' }
  },
  {
    path: 'offers',
    component: OffersComponent,
    data: { title: 'Offers List' }
  },
  {
    path: 'candidates',
    component: CandidateComponent,
    data: { title: 'Candidates List' }
  },
  {
    path: 'candidate-details/:id',
    component: CandidateDetailComponent,
    data: { title: 'Candidate Details' }
  },
  {
    path: 'candidate-create',
    component: CandidateCreateComponent,
    data: { title: 'Create Candidate' }
  },
  {
    path: 'candidate-edit/:id',
    component: CandidateEditComponent,
    data: { title: 'Edit Candidate' }
  },
  { path: '',
    redirectTo: '/candidates',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    CandidateDetailComponent,
    CandidateCreateComponent,
    CandidateEditComponent,
    MenuComponent,
    OffersComponent,
    CreateOfferComponent,
    OfferDetailComponent,
    OfferEditComponent,
    SearchPipe
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [OffersService, CandidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
