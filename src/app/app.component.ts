import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  show = false;
  selectedIndex: number;

  constructor(private cdRef: ChangeDetectorRef) {}

  onShow() {
    this.show = true;

    setTimeout(() => {
      this.selectedIndex = 1;
      this.cdRef.markForCheck();
    }, 1000);
  }
}
