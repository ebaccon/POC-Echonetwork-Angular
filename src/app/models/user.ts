import { BaseEntity } from "./base-entity";

export interface User extends BaseEntity {
    firstName: string;
    lastName: string;
    age: number;
}
