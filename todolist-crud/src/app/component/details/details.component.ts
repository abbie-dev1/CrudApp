import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Form = new FormGroup({
    name: new FormControl('Sammy'),
    email: new FormControl(''),
    message: new FormControl('')
  });
}
