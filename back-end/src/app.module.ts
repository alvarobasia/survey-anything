import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { SurveyModule } from './survey/survey.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, SurveyModule, AuthModule],
})
export class AppModule {}
