import { Controller, Post, Get, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ProxyService } from '../services/proxy.service';
import { CreateTripDto } from '../dto/trip/create-trip.dto';
import { UpdateTripDto } from '../dto/trip/update-trip.dto';
import { AuthGuard } from '../guards/auth.guard';

@ApiTags('Trip')
@Controller('trips')
export class TripController {
  constructor(private readonly proxy: ProxyService) {}

  @Post()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Create trip (proxied to trip-service)' })
  async create(@Body() body: CreateTripDto) {
    return this.proxy.tripPost('/trips', body);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get trip by id' })
  async get(@Param('id') id: string) {
    return this.proxy.tripGet(`/trips/${id}`);
  }

  @Get()
  @ApiOperation({ summary: 'List trips (filter by userId)' })
  async list(@Query('userId') userId: string) {
    const path = userId ? `/trips?userId=${encodeURIComponent(userId)}` : '/trips';
    return this.proxy.tripGet(path);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Update trip' })
  async update(@Param('id') id: string, @Body() body: UpdateTripDto) {
    return this.proxy.tripPut(`/trips/${id}`, body);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Delete trip' })
  async remove(@Param('id') id: string) {
    return this.proxy.tripDelete(`/trips/${id}`);
  }
}
