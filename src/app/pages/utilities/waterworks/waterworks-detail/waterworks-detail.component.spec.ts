import { ComponentFixture, TestBed } from '@angular/core/testing'

import { WaterworksDetailComponent } from './waterworks-detail.component'

describe('WaterworksDetailComponent', () => {
  let component: WaterworksDetailComponent
  let fixture: ComponentFixture<WaterworksDetailComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaterworksDetailComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterworksDetailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
