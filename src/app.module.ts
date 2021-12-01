import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { SpaAuthModule } from '@app/spa-auth.module';
import { AuthController } from '@app/auth.controller';

@Module({
  imports: [
    SpaAuthModule.register({
      useAccessToken: {
        jwtAccessSecretKey: 'some_secret_key',
        jwtAccessActivationPeriod: '5 minutes',
      },
      useRefreshToken: {
        jwtRefreshSecretKey: 'jwt_refresh',
        jwtRefreshActivationPeriod: '15 days',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AppService],
})
export class AppModule {}
