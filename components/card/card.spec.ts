import { BidiModule, Dir, Direction } from '@angular/cdk/bidi';
import { Component, NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { EditOutline, EllipsisOutline, SettingOutline } from '@ant-design/icons-angular/icons';

import { NzSizeDSType } from 'ng-zorro-antd/core/types';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { NzCardComponent } from './card.component';
import { NzCardModule } from './card.module';
import { NzDemoCardBasicComponent } from './demo/basic';
import { NzDemoCardBorderLessComponent } from './demo/border-less';
import { NzDemoCardFlexibleContentComponent } from './demo/flexible-content';
import { NzDemoCardGridCardComponent } from './demo/grid-card';
import { NzDemoCardInColumnComponent } from './demo/in-column';
import { NzDemoCardInnerComponent } from './demo/inner';
import { NzDemoCardLoadingComponent } from './demo/loading';
import { NzDemoCardMetaComponent } from './demo/meta';
import { NzDemoCardSimpleComponent } from './demo/simple';
import { NzDemoCardTabsComponent } from './demo/tabs';

describe('card', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        BidiModule,
        NzCardModule,
        NoopAnimationsModule,
        NzIconModule.forRoot([SettingOutline, EditOutline, EllipsisOutline])
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    TestBed.compileComponents();
  }));
  it('should basic work', () => {
    const fixture = TestBed.createComponent(NzDemoCardBasicComponent);
    const card = fixture.debugElement.query(By.directive(NzCardComponent));
    fixture.detectChanges();
    expect(card.nativeElement.classList).toContain('ant-card');
    expect(card.nativeElement.classList).toContain('ant-card-bordered');
    expect(card.nativeElement.querySelector('.ant-card-head-title').innerText).toBe('Card title');
    expect(card.nativeElement.querySelector('.ant-card-extra').innerText).toBe('More');
  });
  it('should border-less work', () => {
    const fixture = TestBed.createComponent(NzDemoCardBorderLessComponent);
    const card = fixture.debugElement.query(By.directive(NzCardComponent));
    fixture.detectChanges();
    expect(card.nativeElement.classList).toContain('ant-card');
    expect(card.nativeElement.classList).not.toContain('ant-card-bordered');
  });
  it('should simple work', () => {
    const fixture = TestBed.createComponent(NzDemoCardSimpleComponent);
    const card = fixture.debugElement.query(By.directive(NzCardComponent));
    fixture.detectChanges();
    expect(card.nativeElement.firstElementChild!.classList).toContain('ant-card-body');
  });
  it('should flexible content work', () => {
    const fixture = TestBed.createComponent(NzDemoCardFlexibleContentComponent);
    const card = fixture.debugElement.query(By.directive(NzCardComponent));
    fixture.detectChanges();
    expect(card.nativeElement.classList).toContain('ant-card-hoverable');
    expect(card.nativeElement.firstElementChild!.classList).toContain('ant-card-cover');
    expect(card.nativeElement.querySelector('.ant-card-meta-title').innerText).toBe('Europe Street beat');
    expect(card.nativeElement.querySelector('.ant-card-meta-description').innerText).toBe('www.instagram.com');
  });
  it('should in column work', () => {
    const fixture = TestBed.createComponent(NzDemoCardInColumnComponent);
    const card = fixture.debugElement.query(By.directive(NzCardComponent));
    fixture.detectChanges();
    expect(card.nativeElement.classList).toContain('ant-card');
  });
  it('should loading work', () => {
    const fixture = TestBed.createComponent(NzDemoCardLoadingComponent);
    const card = fixture.debugElement.query(By.directive(NzCardComponent));
    fixture.detectChanges();
    expect(card.nativeElement.classList).toContain('ant-card-loading');
    const skeleton = card.nativeElement.querySelector('nz-skeleton');
    expect(skeleton).toBeTruthy();
    expect(skeleton.classList).toContain('ant-skeleton-active');
  });
  it('should grid work', () => {
    const fixture = TestBed.createComponent(NzDemoCardGridCardComponent);
    const card = fixture.debugElement.query(By.directive(NzCardComponent));
    fixture.detectChanges();
    expect(card.nativeElement.classList).toContain('ant-card-contain-grid');
    expect(card.nativeElement.querySelector('.ant-card-body').firstElementChild!.classList).toContain('ant-card-grid');
  });
  it('should inner work', () => {
    const fixture = TestBed.createComponent(NzDemoCardInnerComponent);
    const card = fixture.debugElement.query(By.directive(NzCardComponent));
    fixture.detectChanges();
    expect(card.nativeElement.classList).not.toContain('ant-card-type-inner');
    expect(card.nativeElement.querySelectorAll('.ant-card-type-inner').length).toBe(2);
  });
  it('should card work', () => {
    const fixture = TestBed.createComponent(NzDemoCardTabsComponent);
    const cards = fixture.debugElement.queryAll(By.directive(NzCardComponent));
    fixture.detectChanges();
    expect(cards[0].nativeElement.classList).toContain('ant-card-contain-tabs');
    expect(cards[0].nativeElement.firstElementChild.firstElementChild!.classList).toContain('ant-card-head-wrapper');
    expect(cards[1].nativeElement.classList).toContain('ant-card-contain-tabs');
    expect(cards[1].nativeElement.firstElementChild.firstElementChild!.classList).toContain('ant-card-head-wrapper');
  });
  it('should meta work', () => {
    const fixture = TestBed.createComponent(NzDemoCardMetaComponent);
    const card = fixture.debugElement.query(By.directive(NzCardComponent));
    fixture.detectChanges();
    expect(card.nativeElement.querySelector('.ant-card-actions').children.length).toBe(3);
  });
  it('should size work', () => {
    const fixture = TestBed.createComponent(TestCardSizeComponent);
    const card = fixture.debugElement.query(By.directive(NzCardComponent));
    fixture.detectChanges();
    expect(card.nativeElement.classList).not.toContain('ant-card-small');
    fixture.componentInstance.size = 'small';
    fixture.detectChanges();
    expect(card.nativeElement.classList).toContain('ant-card-small');
  });

  describe('RTL', () => {
    it('should card className correct on dir change', () => {
      const fixture = TestBed.createComponent(NzTestCardRtlComponent);
      const card = fixture.debugElement.query(By.directive(NzCardComponent));
      fixture.detectChanges();
      expect(card.nativeElement.classList).toContain('ant-card-rtl');

      fixture.componentInstance.direction = 'ltr';
      fixture.detectChanges();
      expect(card.nativeElement.classList).not.toContain('ant-card-rtl');
    });
  });
});

@Component({
  standalone: true,
  imports: [NzCardModule],
  template: `
    <nz-card [nzSize]="size">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </nz-card>
  `
})
class TestCardSizeComponent {
  size: NzSizeDSType = 'default';
}

@Component({
  standalone: true,
  imports: [NzCardModule],
  template: `
    <div [dir]="direction">
      <nz-card>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </nz-card>
    </div>
  `
})
export class NzTestCardRtlComponent {
  @ViewChild(Dir) dir!: Dir;
  direction: Direction = 'rtl';
}
