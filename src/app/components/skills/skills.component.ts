import { Component } from '@angular/core';
import { SkillCategory, Skill } from '../../models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {

  skillCats: SkillCategory[] = [];
  showCorrectValues: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //Fill out the skillCats array with JSON data from assets/skills.json
    this.http.get('assets/skills.json').subscribe(data => {
      console.log(data);
      this.skillCats = data as SkillCategory[];
    });

    setTimeout(() => {
      this.showCorrectValues = true;
    }, 500);
  }

  //Returns the percentage for the progress bar for years. 8 years is 100%. This is done to animate the bars on page load
  getSkillYears(skill: Skill): number {
    return this.showCorrectValues ? skill.years * 12.5 : 0;
  }
}
