import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { jwtModuleConfig } from '../../configs/jwt-module.config';
import { CourseEntity } from './entities/course.entity';
import { CourseCategoriesEntity } from './entities/course-categories.entity';
import { CourseSectionsEntity } from './entities/course-sections.entity';
import { CourseLessonsEntity } from './entities/course-lessons.entity';
import { CourseReviewsEntity } from './entities/course-reviews.entity';
import { CourseLikedEntity } from './entities/course-liked.entity';
import { CoursePurchasedEntity } from './entities/course-purchased.entity';
import { UserLessonEntity } from './entities/user-lessons.entity';
import { CourseService } from './services/course.service';
import { CourseCategoryService } from './services/course-category.service';
import { CourseSectionService } from './services/course-section.service';
import { CourseLessonService } from './services/course-lesson.service';
import { CourseReviewService } from './services/course-review.service';
import { CourseLikeService } from './services/course-like.service';
import { CoursePurchasedService } from './services/course-purchased.service';
import { UserLessonService } from './services/user-lesson.service';
import { CourseController } from './controllers/course.controller';
import { CourseCategoryController } from './controllers/course-category.controller';
import { CourseSectionController } from './controllers/course-section.controller';
import { CourseLessonController } from './controllers/course-lesson.controller';
import { CourseReviewController } from './controllers/course-review.controller';
import { CourseLikeController } from './controllers/course-like.controller';
import { CoursePurchasedController } from './controllers/course-purchased.controller';
import { UserLessonController } from './controllers/user-lesson.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            CourseEntity,
            CourseCategoriesEntity,
            CourseSectionsEntity,
            CourseLessonsEntity,
            CourseReviewsEntity,
            CourseLikedEntity,
            CoursePurchasedEntity,
            UserLessonEntity,
        ]),
        JwtModule.register(jwtModuleConfig),
    ],
    controllers: [
        CourseController,
        CourseCategoryController,
        CourseSectionController,
        CourseLessonController,
        CourseReviewController,
        CourseLikeController,
        CoursePurchasedController,
        UserLessonController,
    ],
    providers: [
        CourseService,
        CourseCategoryService,
        CourseSectionService,
        CourseLessonService,
        CourseReviewService,
        CourseLikeService,
        CoursePurchasedService,
        UserLessonService,
    ],
})
export class CoursesModule {}
