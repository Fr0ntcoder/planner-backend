import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { TaskController } from 'src/task/task.controller'
import { TaskService } from 'src/task/task.service'

@Module({
	controllers: [TaskController],
	providers: [TaskService, PrismaService],
	exports: [TaskService]
})
export class TaskModule {}
