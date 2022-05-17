import { v4 } from "uuid";
export class Uuid {
  gerationId = (): string => {
    return v4();
  };
}
