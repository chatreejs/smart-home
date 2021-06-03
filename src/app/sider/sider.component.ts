import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss'],
})
export class SiderComponent implements OnInit {
  private _isCollapsed: boolean

  @Input()
  set isCollapsed(value: boolean) {
    this._isCollapsed = value
    this.isCollapsedChange.emit(value)
  }

  get isCollapsed(): boolean {
    return this._isCollapsed
  }

  @Output()
  public isCollapsedChange: EventEmitter<boolean> = new EventEmitter<boolean>()

  @Input()
  public innerWidth: number

  public constructor() {
    this._isCollapsed = false
    this.innerWidth = 0
  }

  public ngOnInit(): void {}
}
