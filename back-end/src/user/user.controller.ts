import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  HttpCode,
  Request,
  Get,
  Inject,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthService } from 'src/auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { REQUEST } from '@nestjs/core';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
    @Inject(REQUEST) private request: Request,
  ) {}
  @UseGuards(AuthGuard('local'))
  @Post('login')
  @HttpCode(200)
  async login(@Request() req) {
    const token = await this.authService.login(req.user);
    return { ...req.user, ...token };
  }
  @Post('new')
  create(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id')
  update(@Param('id') id: number, @Body() user: UpdateUserDto) {
    return this.userService.update(id, user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id) {
    return this.userService.remove(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/info')
  info() {
    return (this.request as any).user;
  }
}
