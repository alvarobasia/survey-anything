import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { SurveyModule } from './survey/survey.module';

@Module({
  imports: [UserModule, SurveyModule],
})
export class AppModule {}
