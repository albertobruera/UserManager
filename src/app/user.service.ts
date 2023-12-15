import { Injectable } from "@angular/core";

@Injectable({
  providedIn : 'root'
})
export class UserService {
  static getUsers(){
    return [
      {
        name: 'Alberto',
        lastname: 'Bruera',
        fiscalcode: 'BRRLRT72R30E758J',
        email: 'alberto.bruera72@gmail.com',
        phone: '+393381195546',
        province: 'CUNEO',
        Age: '51'
      },
      {
        name: 'Pippo',
        lastname: 'Bruera',
        fiscalcode: 'PPPLRT72R30E758J',
        email: 'pippo.bruera72@gmail.com',
        phone: '+393381195546',
        province: 'CUNEO',
        Age: '51'
      },
      {
        name: 'Pluto',
        lastname: 'Bruera',
        fiscalcode: 'PPPLRT72R30E758J',
        email: 'pluto.bruera72@gmail.com',
        phone: '+393381195546',
        province: 'CUNEO',
        Age: '51'
      }
    ]
  }
}
