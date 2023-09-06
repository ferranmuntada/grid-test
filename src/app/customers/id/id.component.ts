import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css']
})
export class IdComponent {
  @Input() data: any;
}
