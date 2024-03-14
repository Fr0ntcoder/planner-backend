import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { TimerController } from 'src/timer/timer.controller'
import { TimerService } from 'src/timer/timer.service'

@Module({
	controllers: [TimerController],
	providers: [TimerService, PrismaService],
	exports: [TimerService]
})
export class TimerModule {}
