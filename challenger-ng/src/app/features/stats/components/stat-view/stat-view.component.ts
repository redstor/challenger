import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-stat-view',
  templateUrl: './stat-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatViewComponent {
  @Input() title!: string;
  @Input() amount!: number;
}
