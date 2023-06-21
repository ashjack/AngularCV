import { Component, ElementRef, HostListener } from '@angular/core';
import { Job } from '../../models';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
  history: Job[] = [];
  selectedJob?: Job;

  constructor(private http: HttpClient, private elRef: ElementRef, private modalService: NgbModal) { }

  ngOnInit(): void {
    //Fill out the history array with JSON data from assets/history.json
    this.http.get('assets/history.json').subscribe(data => {
      console.log(data);
      this.history = data as Job[];
    });
  }

  //Open a model with the job details
  openModal(content: any, job: Job): void {
    if (job) {
      this.selectedJob = job;
      this.modalService.open(content, { size: 'lg', centered: true });
    }
  }

  closeModal(modal: any): void {
    modal.close('Close click');
    this.selectedJob = undefined;
  }

  //Checks if the circle attached to the job is visible, and if so, adds the animation class
  @HostListener('window:scroll')
  checkScroll(): void {
    const elements = this.elRef.nativeElement.querySelectorAll('.circle');
    elements.forEach((element: HTMLElement) => {
      const rect = element.getBoundingClientRect();

      // Circle is visible in the viewport, add animation class
      if (rect.top < window.innerHeight && rect.bottom >= 0)
      {
        const jobText = element.querySelector('.job-text') as HTMLElement;
        jobText.classList.add('fade-slide-in');
      }

      // Circle is not visible, remove animation class
      else
      {
        const jobText = element.querySelector('.job-text') as HTMLElement;
        jobText.classList.remove('fade-slide-in');
      }
    });
  }
}
