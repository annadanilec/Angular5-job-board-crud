import { Component, OnInit } from '@angular/core';
import { CandidateService } from './../candidate-service/candidate.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  candidates: any;

  constructor(private candidateService: CandidateService) { }

  ngOnInit() {
    this.getCandidates();
  }

  getCandidates() {
    this.candidateService.getCandidates().subscribe(
      data => { this.candidates = data; },
      err => console.error(err),
        () => console.log('Candidates loading')
      );
  }

}
