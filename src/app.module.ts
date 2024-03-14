import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TaskModule } from 'src/task/task.module'
import { TimeBlockModule } from 'src/time-block/time-block.module'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'

@Module({
	imports: [
		ConfigModule.forRoot(),
		AuthModule,
		UserModule,
		TaskModule,
		TimeBlockModule
	]
})
export class AppModule {}
