import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AdduserComponent } from './adduser/adduser.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<AdduserComponent> {
  canDeactivate(component:AdduserComponent){
    if(component.username.dirty){
      return window.confirm('you have unsaved changes, Are you sure to navigate');
  }else{
    return true;
  }

  }
}
