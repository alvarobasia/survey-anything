import { Inject, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { REQUEST } from '@nestjs/core';
import { PrismaService } from 'src/prisma.service';
import { CreateSurveyDto } from './dto/create-survey.dto';

@Injectable()
export class SurveyService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(REQUEST) private request: Request,
  ) {}
  async create(createSurveyDto: CreateSurveyDto) {
    const survey = { ...createSurveyDto };

    survey.user = (this.request as any).user;
    survey.initDate = new Date(createSurveyDto.initDate);
    survey.endDate = new Date(createSurveyDto.endDate);
    survey.options = createSurveyDto.options.map((option: any) => ({
      title: option,
      numberOfVotes: 0,
    }));

    const user = await this.prisma.user.findUnique({
      where: { id: (this.request as any).user.id },
    });

    const surveySaved = await this.prisma.survey.create({
      data: {
        endDate: survey.endDate,
        initDate: survey.initDate,
        options: {
          create: survey.options,
        },
        title: survey.title,
        User: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    return this.prisma.survey.findUnique({
      where: { id: surveySaved.id },
      include: {
        options: true,
        User: true,
      },
    });
  }

  async findAll() {
    return await this.prisma.survey.findMany({
      include: {
        User: true,
        options: {
          include: {
            users: true,
          },
        },
      },
    });
  }

  async findSurveyByUser() {
    return await this.prisma.survey.findMany({
      where: {
        User: {
          id: (this.request as any).user.id,
        },
      },
      include: {
        options: {
          include: {
            users: true,
          },
        },
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.survey.delete({ where: { id: +id } });
  }

  async getVoted() {
    const user = await this.prisma.user.findUnique({
      where: { id: (this.request as any).user.id },
    });

    return await this.prisma.survey.findMany({
      where: {
        options: {
          some: {
            users: {
              some: {
                id: user.id,
              },
            },
          },
        },
      },
      include: {
        options: {
          include: {
            users: true,
          },
        },
      },
    });
  }

  async vote(optionId: number) {
    const option = await this.prisma.option.findUnique({
      where: { id: +optionId },
      include: {
        users: true,
      },
    });

    const user = await this.prisma.user.findUnique({
      where: { id: (this.request as any).user.id },
    });

    option.users = [...option.users, user];

    return await this.prisma.option.update({
      where: { id: +optionId },
      data: {
        numberOfVotes: option.numberOfVotes + 1,
        users: {
          connect: { id: user.id },
        },
      },
      include: {
        users: true,
      },
    });
  }
}
