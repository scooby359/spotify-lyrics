import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyPanelComponent } from './spotify-panel.component';

describe('SpotifyPanelComponent', () => {
  let component: SpotifyPanelComponent;
  let fixture: ComponentFixture<SpotifyPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
