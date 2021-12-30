import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  HttpCode,
  Request,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthService } from 'src/auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('new')
  create(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @HttpCode(200)
  async login(@Request() req) {
    const token = await this.authService.login(req.user);
    return { ...req.user, ...token };
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
}
