// Generated by https://quicktype.io

import { INavData } from "@coreui/angular";
import { User } from "./user.interface";

export interface LoginResponse {
  user:  User;
  token: string;
  menu: INavData[];
}
