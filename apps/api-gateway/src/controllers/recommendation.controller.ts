import { Controller, Get, Post, Body, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ProxyService } from '../services/proxy.service';
import { RecommendationFeedbackDto } from '../dto/recommendation/recommendation-feedback.dto';
import { AuthGuard } from '../guards/auth.guard';

@ApiTags('Recommendation')
@Controller('recommendations')
export class RecommendationController {
  constructor(private readonly proxy: ProxyService) {}

  @Get()
  @ApiOperation({ summary: 'Get recommendations (by userId or tripId)' })
  async list(@Query('userId') userId: string, @Query('tripId') tripId: string) {
    const qs = userId ? `?userId=${encodeURIComponent(userId)}` : tripId ? `?tripId=${encodeURIComponent(tripId)}` : '';
    return this.proxy.recommendationGet(`/recommendations${qs}`);
  }

  @Post('feedback')
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Send feedback about a recommendation' })
  async feedback(@Body() body: RecommendationFeedbackDto) {
    return this.proxy.recommendationPost('/recommendations/feedback', body);
  }
}
