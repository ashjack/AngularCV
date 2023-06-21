import { Component, Input } from '@angular/core';
import { Project } from '../../models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'hex-button',
  templateUrl: './hex-button.component.html',
  styleUrls: ['./hex-button.component.css']
})
export class HexButtonComponent {

  constructor(private modalService: NgbModal) { }

  @Input() project!: Project;

  //Ideally this would open the project in a separate page, but due to time constraints and
  //because the brief said to copy CV text, I'm just opening a modal from ng-bootstrap
  openProject(content: any) {
    if (this.project) {
      this.modalService.open(content, { size: 'lg', centered: true });
    }
  }
}
