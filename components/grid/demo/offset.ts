import { Component } from '@angular/core';

import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'nz-demo-grid-offset',
  imports: [NzGridModule],
  template: `
    <div nz-row>
      <div nz-col nzSpan="8">col-8</div>
      <div nz-col nzSpan="8" nzOffset="8">col-8</div>
    </div>
    <div nz-row>
      <div nz-col nzSpan="6" nzOffset="6">col-6 col-offset-6</div>
      <div nz-col nzSpan="6" nzOffset="6">col-6 col-offset-6</div>
    </div>
    <div nz-row>
      <div nz-col nzSpan="12" nzOffset="6">col-12 col-offset-6</div>
    </div>
  `
})
export class NzDemoGridOffsetComponent {}
