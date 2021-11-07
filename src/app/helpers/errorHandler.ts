/**
 * NOTE:
 *
 * errorHandler yang ditempatkan di sini bukanlah merupakan best practice.
 * Namun saya contohkan di sini agar kalian paham mengenai konsep DRY.
 * Konsep DRY ini, kita gunakan pada function errorHandler ini di
 * berbagai service yang memerlukan.
 */

import { HttpErrorResponse } from "@angular/common/http"
import { throwError } from "rxjs"

export function errorHandler (err: HttpErrorResponse) {
  console.log(err)
  if(err.status < 500)
    return throwError(err.error.message)
  else
    return throwError(`Server-side error code: ${err.status}\nMessage: ${err.message}`)
}
