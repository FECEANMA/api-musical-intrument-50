import { Component, OnInit } from '@angular/core';
import { InstrumentComponent } from '../../instrument/instrument.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [InstrumentComponent],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
