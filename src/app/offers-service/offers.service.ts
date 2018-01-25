import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { offersUrl } from './../config';

@Injectable()
export class OffersService {

  constructor(private http: HttpClient) {}

  // Loads offers from API.
  getOffers() {
    return this.http.get(`${offersUrl}/offers`);
  }

  // Gets offer detail based on id.
  getOfferDetail(id) {
    return this.http.get(`${offersUrl}/offers/` + id);
  }

  // Delete offer based on id.
  deleteOffer(id) {
    return this.http.delete(`${offersUrl}/offers/` + id);
  }

  // Update offer based on id.
  updateOffer(id, data) {
    return this.http.put(`${offersUrl}/offers/` +  id, data);
  }

  // Add offer.
  addOffer(data) {
    return this.http.post(`${offersUrl}/offers`, data);
  }
}
