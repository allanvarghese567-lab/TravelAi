import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ProxyService } from '../services/proxy.service';

@ApiTags('Location')
@Controller('locations')
export class LocationController {
  constructor(private readonly proxy: ProxyService) {}

  @Get()
  @ApiOperation({ summary: 'Search locations (proxied to location-service)' })
  async search(@Query('query') q: string) {
    const path = q ? `/locations?query=${encodeURIComponent(q)}` : '/locations';
    return this.proxy.locationGet(path);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get location by id (proxied to location-service)' })
  async getById(@Query('id') id: string) {
    // Note: Nest param decorator not used to keep simple proxying; path built manually
    return this.proxy.locationGet(`/locations/${id}`);
  }
}
