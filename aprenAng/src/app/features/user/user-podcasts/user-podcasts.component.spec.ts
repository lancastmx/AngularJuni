import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPodcastsComponent } from './user-podcasts.component';

describe('UserPodcastsComponent', () => {
  let component: UserPodcastsComponent;
  let fixture: ComponentFixture<UserPodcastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPodcastsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserPodcastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
