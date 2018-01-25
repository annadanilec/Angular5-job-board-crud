import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidateService } from './../candidate-service/candidate.service';

@Component({
  selector: 'app-candidate-edit',
  templateUrl: './candidate-edit.component.html',
  styleUrls: ['./candidate-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CandidateEditComponent implements OnInit {

  candidate: any = {};
  skills: string[] = [
    'JavaScript',
    'Java',
    'C++',
    'Python',
    'AngularJS',
    'Angular 5',
    'React.js',
    'Vue.js',
  ];

  constructor(private candidateService: CandidateService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCandidate(this.route.snapshot.params['id']);
  }

  getCandidate(id) {
    this.candidateService.getCandidateDetail(id).subscribe(data => {
      this.candidate = data;
    });
  }

  updateCandidate(id) {
    this.candidateService.updateCandidate(id, this.candidate)
      .subscribe(res => {
          const id = res['id'];
          this.router.navigate(['/candidate-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
