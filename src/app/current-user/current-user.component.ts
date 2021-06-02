import { Component, OnInit } from '@angular/core'

const listOfAvatarColor = [
  '#FFB900',
  '#D83B01',
  '#B50E0E',
  '#E81123',
  '#B4009E',
  '#5C2D91',
  '#0078D7',
  '#00B4FF',
  '#008272',
  '#107C10',
]

@Component({
  selector: 'app-current-user',
  template: `
    <div class="current-user">
      <div class="current-user__item">
        <button
          class="current-user__item-button"
          nz-button
          nzType="default"
          nzShape="round"
          nz-dropdown
          nzTrigger="click"
          [nzDropdownMenu]="currentUserDropdown"
        >
          <nz-avatar
            [nzText]="avatarName"
            [ngStyle]="{ 'background-color': avatarColor }"
            nzSize="large"
            style="vertical-align: middle; margin-right: 8px"
          >
          </nz-avatar>
          <span *ngIf="user">{{ user.firstName }} {{ user.lastName }}</span>
          <nz-dropdown-menu #currentUserDropdown="nzDropdownMenu">
            <ul nz-menu>
              <li nz-menu-item><i nz-icon nzType="home" nzTheme="outline"></i>หน้าหลัก</li>
              <li nz-menu-item><i nz-icon nzType="logout" nzTheme="outline"></i>ออกจากระบบ</li>
            </ul>
          </nz-dropdown-menu>
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      .current-user {
        display: flex;
        float: right;
        height: inherit;
        margin-left: auto;
        overflow: hidden;
      }

      .current-user__item {
        padding: 0 8px;
      }

      .current-user__item-button {
        height: calc(100% - 12px);
      }

      .ant-avatar {
        font-size: 18px;
      }
    `,
  ],
})
export class CurrentUserComponent implements OnInit {
  public user: any
  public avatarName: string
  public avatarColor: string

  public constructor() {
    this.avatarName = ''
    this.avatarColor = ''
  }

  public ngOnInit(): void {
    // fake
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
    }
    this.avatarName = this.calculateAvatarName(this.user.firstName, this.user.lastName)
    this.avatarColor = this.calculateAvatarColor(this.user.firstName)
  }

  private calculateAvatarName(firstName: string, lastName: string): string {
    const firstLetter = firstName.substr(0, 1)
    const lastLetter = lastName.substr(0, 1)
    return firstLetter + lastLetter
  }

  private calculateAvatarColor(firstName: string): string {
    let sum = 0
    for (let i = 0; i < firstName.length; i++) {
      sum += firstName.charCodeAt(i)
    }
    let colorId = sum % listOfAvatarColor.length
    return listOfAvatarColor[colorId]
  }
}
