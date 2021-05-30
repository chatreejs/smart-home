import { ComponentFixture, TestBed } from '@angular/core/testing'

import { InventoriesDetailComponent } from './inventories-detail.component'

describe('InventoriesDetailComponent', () => {
  let component: InventoriesDetailComponent
  let fixture: ComponentFixture<InventoriesDetailComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventoriesDetailComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoriesDetailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
