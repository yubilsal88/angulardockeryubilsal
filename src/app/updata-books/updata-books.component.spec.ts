import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdataBooksComponent } from './updata-books.component';

describe('UpdataBooksComponent', () => {
  let component: UpdataBooksComponent;
  let fixture: ComponentFixture<UpdataBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdataBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdataBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
