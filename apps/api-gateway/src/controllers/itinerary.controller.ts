import { Controller, Post, Get, Param, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ProxyService } from '../services/proxy.service';
import { CreateItineraryDto } from '../dto/itinerary/create-itinerary.dto';
import { AuthGuard } from '../guards/auth.guard';

@ApiTags('Itinerary')
@Controller('itineraries')
export class ItineraryController {
  constructor(private readonly proxy: ProxyService) {}

  @Post()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Create itinerary (proxied to itinerary-service)' })
  async create(@Body() body: CreateItineraryDto) {
    return this.proxy.itineraryPost('/itineraries', body);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get itinerary by id' })
  async get(@Param('id') id: string) {
    return this.proxy.itineraryGet(`/itineraries/${id}`);
  }

  @Post(':id/items')
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Add itinerary item' })
  async addItem(@Param('id') id: string, @Body() body: any) {
    return this.proxy.itineraryPost(`/itineraries/${id}/items`, body);
  }
}
