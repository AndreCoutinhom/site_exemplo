import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootnoteComponent } from './footnote.component';

describe('FootnoteComponent', () => {
  let component: FootnoteComponent;
  let fixture: ComponentFixture<FootnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootnoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
