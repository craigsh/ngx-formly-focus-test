import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  title = 'formly-test';
  show = false;

  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      focus: true,
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
        focus: () => {
          console.log('got focus');
        },
        blur: () => {
          console.log('blurred');
        },
      },
    },
  ];

  constructor() {}

  onSubmit() {
    console.log(this.model);
  }

  ngAfterViewInit() {}

  onShow() {
    this.show = true;
  }
}
