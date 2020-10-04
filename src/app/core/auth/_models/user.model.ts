export class User {
  id: number;
  last_name: string;
  password: string;
  email: string;
  is_company: boolean;
  accessToken: string;
  refreshToken: string;
  roles: number[];
  avatar: string;
  first_name: string;
  occupation: string;
  company: string;
  settings: string;
  currency_id: string;
  tel_1: string;
  tel_1_verified: boolean;
  tel_2: string;
  tel_2_verified: boolean;
  address: '';


  clear(): void {
    this.id = undefined;
    this.first_name = '';
    this.last_name = '';
    this.password = '';
    this.email = '';
    this.roles = [];
    this.first_name = '';
    this.accessToken = 'access-token-' + Math.random();
    this.refreshToken = 'access-token-' + Math.random();
    this.avatar = './assets/media/users/default.jpg';
    this.occupation = '';
    this.company = '';
    this.is_company = false;
    this.tel_1 = '';
    this.tel_1_verified = false;
    this.tel_2 = '';
    this.tel_2_verified = false;
    this.address = '';
  }
}
