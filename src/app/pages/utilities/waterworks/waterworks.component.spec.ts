import { ComponentFixture, TestBed } from '@angular/core/testing'

import { WaterworksComponent } from './waterworks.component'

describe('WaterworksComponent', () => {
  let component: WaterworksComponent
  let fixture: ComponentFixture<WaterworksComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaterworksComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterworksComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
