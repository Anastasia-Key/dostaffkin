import { Component } from '@angular/core';
import { Header } from '../../header/header';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-track',
  imports: [Header, RouterLink],
  templateUrl: './track.html',
  styleUrl: './track.css',
})
export class Track {

}
