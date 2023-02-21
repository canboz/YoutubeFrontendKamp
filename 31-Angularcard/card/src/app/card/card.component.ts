import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() titleChild: string = '';
  @Input() imageUrlChild: string = '';
  @Input() usernameChild: string = '';
  @Input() contentChild: string = '';
}
