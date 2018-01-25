import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidateService } from './../candidate-service/candidate.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CandidateDetailComponent implements OnInit {

  candidate: any = {};

  constructor(private router: Router, private route: ActivatedRoute, private candidateService: CandidateService) { }

  ngOnInit() {
    this.getCandidateDetail(this.route.snapshot.params['id']);
  }

  getCandidateDetail(id) {
    this.candidateService.getCandidateDetail(id).subscribe(data => {
      this.candidate = data;
    });
  }

  deleteCandidate(id) {
    this.candidateService.deleteCandidate(id)
      .subscribe(res => {
          this.router.navigate(['/candidates']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
