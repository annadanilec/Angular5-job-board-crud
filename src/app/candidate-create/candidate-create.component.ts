import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateService } from './../candidate-service/candidate.service';


@Component({
  selector: 'app-candidate-create',
  templateUrl: './candidate-create.component.html',
  styleUrls: ['./candidate-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CandidateCreateComponent implements OnInit {

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

  constructor(private candidateService: CandidateService, private router: Router) { }

  ngOnInit() {
  }

  saveCandidate() {
    this.candidateService.addCandidate(this.candidate)
      .subscribe(res => {
          const id = res['id'];
          this.router.navigate(['/candidate-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
