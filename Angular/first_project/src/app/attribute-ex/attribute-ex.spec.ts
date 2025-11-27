import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeEX } from './attribute-ex';

describe('AttributeEX', () => {
  let component: AttributeEX;
  let fixture: ComponentFixture<AttributeEX>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributeEX]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeEX);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
