import { v4 } from "uuid";
export class User {
  id: string;
  name: string;
  email: string;
  password: string;
  role?: string;
  constructor(props: Omit<User, "id">, id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = v4();
    }
  }
}
