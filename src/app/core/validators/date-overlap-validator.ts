import { FormGroup } from '@angular/forms'

export function DateOverlap(startDateControl: string, endDateControl: string) {
  return (formGroup: FormGroup) => {
    const startControl = formGroup.controls[startDateControl]
    const endControl = formGroup.controls[endDateControl]

    if (startControl.value == null || endControl.value == null) {
      if (startControl.pristine || endControl.pristine) {
        startControl.setErrors(null)
        endControl.setErrors(null)
      }
    }
    if (startControl.value && endControl.value) {
      const startDate = new Date(startControl.value)
      const endDate = new Date(endControl.value)
      if (startDate.getTime() > endDate.getTime()) {
        endControl.setErrors({ overlap: true })
      } else {
        endControl.setErrors(null)
      }
    }
    return
  }
}
