import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    private readonly logger = new Logger(AuthService.name);

    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }

    public async signIn(username: string, password: string) {
        this.logger.log(`Tentativa de login: username=${username}`);
        const user = await this.userService.getByUsername(username);

        if (!user || !(await bcrypt.compare(password, user.password))) {
            this.logger.warn(`Falha de login: usuário não encontrado ou senha inválida`);
            throw new UnauthorizedException('Invalid login!');
        }

        this.logger.log(`Login bem-sucedido: ${JSON.stringify(user)}`);
        return {
            id: user.id,
            name: user.name,
            username: user.username,
            roles: user.roles,
            token: this.jwtService.sign(this.userService.removePassword(user))
        };
    }
}
