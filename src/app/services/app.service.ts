import { Injectable } from '@angular/core';
import { IDropdown } from '../interfaces/app.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  getState() {
    let dropDown: IDropdown[] = [];
    let _stateGa = <IDropdown>{
      displayValue: 'GA',
      internalValue: 'GA',
    };
    dropDown.push(_stateGa);

    let _stateMi = <IDropdown>{
      displayValue: 'MI',
      internalValue: 'MI',
    };
    dropDown.push(_stateMi);
    let _stateTx = <IDropdown>{
      displayValue: 'TX',
      internalValue: 'TX',
    };
    dropDown.push(_stateTx);
    return dropDown;
  }
}
