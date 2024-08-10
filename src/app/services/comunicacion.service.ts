import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComunicacionService {
  constructor() {}

  getMessage = (): string => {
    return 'Mensaje de Comunicacion';
  };

  saveData = (key: string, value: any): void => {
    localStorage.setItem(key, value);
  };

  getData = (key: string): any => {
    return localStorage.getItem(key);
  };

  clearData = (key: string): void => {
    localStorage.removeItem(key);
  };

  clearAllData = (): void => {
    localStorage.clear();
  };
}
