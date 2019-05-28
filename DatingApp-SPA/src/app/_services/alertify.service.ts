import { Injectable } from '@angular/core';
// We'll get error if we won't declare this here despite it being imported via angular.json
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService 
{

  constructor() { }

  confirm(message: string, okCallback: () => any)
  {
    alertify.confirm(message, function(e) // e represents user clicking OK button
    {
      if(e)
      {
          okCallback();
      }
    })
  }

  success(message: string)
  {
    alertify.success(message);
  }

  error(message: string)
  {
    alertify.error(message);
  }

  warning(message: string)
  {
    alertify.warning(message);
  }

  message(message: any)
  {
    alertify.message(message);
  }

}
