import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'career-profile',
  templateUrl: './career-profile.component.html',
  styleUrls: ['./career-profile.component.css']
})
export class CareerProfileComponent {

  fullProfile: string = "";
  displayedProfile: string = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //Fill out the profile text with text data from assets/career-profile.txt
    this.http.get('assets/profile.txt', { responseType: 'text' })
      .subscribe(data => {
        console.log(data)
        this.fullProfile = data;
        setTimeout(() => {
          this.displayProfile();
        }, 500);
      });
    
  }

  //Function to put the full profile text into the displayed profile text word-by-word every 50ms
  displayProfile(): void {
    if (this.fullProfile.length > 0) {
      this.displayedProfile += this.fullProfile[0];
      this.fullProfile = this.fullProfile.substr(1);
      setTimeout(() => {
        this.displayProfile();
      }, 5);
    }
  }
}
