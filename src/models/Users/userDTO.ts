import { IsString, IsEmail, Length, IsEnum } from "class-validator";

// Define possible roles as an enum for better type safety
export enum UserRole {
  ADMIN = "admin",
  TEACHER = "teacher",
  STUDENT = "student",
}

export class UserDTO {
  @IsString()
  @Length(1, 50)
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(UserRole)
  role: UserRole;

  constructor(name: string, email: string, role: UserRole) {
    this.name = name;
    this.email = email;
    this.role = role;
  }
}
