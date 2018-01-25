import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { candidateUrl } from './../config';


@Injectable()
export class CandidateService {

  constructor(private http: HttpClient) {}

  // Loads candidates from API.
  getCandidates() {
    return this.http.get(`${candidateUrl}/candidates`);
  }

  // Gets candidate detail based on id.
  getCandidateDetail(id) {
    return this.http.get(`${candidateUrl}/candidates/` + id);
  }

  // Delete candidate based on id.
  deleteCandidate(id) {
    return this.http.delete(`${candidateUrl}/candidates/` + id);
  }

  // Update candidate based on id.
  updateCandidate(id, data) {
    return this.http.put(`${candidateUrl}/candidates/` +  id, data);
  }

  // Add new candidate.
  addCandidate(data) {
    return this.http.post(`${candidateUrl}/candidates`, data);
  }
}
