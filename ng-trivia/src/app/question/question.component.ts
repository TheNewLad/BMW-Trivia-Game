import { Component, OnInit } from '@angular/core';
import { Question } from './question.model';
import { Answer } from '../answer/answer.model';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions: Question[] = [
    new Question("What is the name of BMW's Vehicle App?",
      [
        new Answer("BMW Connected", true),
        new Answer("BMW ConnectedDrive", false),
        new Answer("BMW ConnectedApp", false),
        new Answer("BMW Connected Drive", true)
      ]
    ),
    new Question("What is the traffic service BMW provides?",
      [
        new Answer("ARTHUR", false),
        new Answer("ARTIE", false),
        new Answer("ARTTI", true),
        new Answer("ARTIST", false)
      ]
    ),
    new Question("What field did BMW begin manufacturing in?",
      [
        new Answer("Automobiles", false),
        new Answer("Boats/Ships", false),
        new Answer("Airplanes", true),
        new Answer("Agriculture", false)
      ]
    ),
    new Question("When did BMW release their first electrical vehicle?",
      [
        new Answer("2017", false),
        new Answer("1999", false),
        new Answer("1983", false),
        new Answer("1972", true)
      ]
    ),
    new Question("What color is not a BMW color?",
      [
        new Answer("Bavarian Racing Green II", true),
        new Answer("Austin Yellow Metallic", false),
        new Answer("Yas Marina Blue Metallic", false),
        new Answer("Sakhir Orange II Metallic", false)
      ]
    )
  ];
  
  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.counterService.setMaxCount(this.questions.length);
  }

}
