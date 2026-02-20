import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-player-mobile',
  standalone: true,
  imports: [],
  templateUrl: './add-player-mobile.component.html',
  styleUrl: './add-player-mobile.component.scss'
})
export class AddPlayerMobileComponent implements OnInit {
  @Input() name: string = '';
  @Input() image = 'man.png';
  @Input() playerActive: boolean = false;
  constructor() { }
  ngOnInit(): void { }
}
