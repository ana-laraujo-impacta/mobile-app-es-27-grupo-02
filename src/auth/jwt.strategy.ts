import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from '../user/user.service'; // Importar o UserService
import { User } from '../user/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'secret', // Recomenda-se usar uma variável de ambiente para segurança
            ignoreExpiration: false,
        });
    }

    public async validate(payload: { username: string }) {
        // Aqui você pode buscar o usuário no banco de dados, se necessário
        const user = await this.userService.getByUsername(payload.username);
        if (!user) {
            throw new UnauthorizedException(); // Lança um erro se o usuário não existir
        }
        return user; // Retorna o usuário se a validação for bem-sucedida
    }
}
