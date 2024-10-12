import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiProperty } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Login } from './login.dto';
import { User } from '../user/user.entity'; // Verifique se o caminho está correto

class LoggedUser extends User {
    @ApiProperty()
    token: string;
}

@Controller('auth')
export class AuthController {
    constructor(private readonly service: AuthService) {}

    @Post('login')
    @ApiBody({ type: Login, description: "The user data to be stored." })
    @ApiCreatedResponse({ type: LoggedUser, description: "The logged user with a 'token' property." })
    public async login(@Body() { username, password }: Login): Promise<LoggedUser> {
        return await this.service.signIn(username, password);
    }
}

