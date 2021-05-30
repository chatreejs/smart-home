import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FoodsDetailComponent } from './foods-detail.component'

describe('FoodsDetailComponent', () => {
  let component: FoodsDetailComponent
  let fixture: ComponentFixture<FoodsDetailComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodsDetailComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodsDetailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
