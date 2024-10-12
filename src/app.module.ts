import { Module } from '@nestjs/common';

import { PerfilModule } from './perfil/perfil.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PerfilModule,
    UserModule,
    AuthModule
  ],

})
export class AppModule {}
