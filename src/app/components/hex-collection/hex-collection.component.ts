import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../../models';


@Component({
  selector: 'hex-collection',
  templateUrl: './hex-collection.component.html',
  styleUrls: ['./hex-collection.component.css']
})
export class HexCollectionComponent {

  projects: Project[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //Fill out the project array with JSON data from assets/projects.json

    this.http.get('assets/projects.json').subscribe(data => {
      console.log(data);  
      this.projects = data as Project[];
    });
  }
}
