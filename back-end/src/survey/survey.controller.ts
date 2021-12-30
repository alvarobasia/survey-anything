import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SurveyService } from './survey.service';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Survey } from '@prisma/client';

@Controller('survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @UseGuards(JwtAuthGuard)
  @Post('new')
  create(@Body() createSurveyDto: CreateSurveyDto) {
    return this.surveyService.create(createSurveyDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.surveyService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/user')
  findOneByUser() {
    return this.surveyService.findSurveyByUser();
  }
  @UseGuards(JwtAuthGuard)
  @Get('/voted')
  voted() {
    return this.surveyService.getVoted();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  vote(@Param('id') id: string) {
    return this.surveyService.vote(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.surveyService.remove(+id);
  }
}
