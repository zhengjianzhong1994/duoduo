import { Rule } from "@midwayjs/validate";
import { IsNull } from "typeorm";

export class UserLoginDTO {
    @Rule(IsNull)
    username: string;

    @Rule(IsNull)
    password: string;
}