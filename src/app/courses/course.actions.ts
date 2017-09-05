import {NgRedux} from 'ng2-redux'
import {IAppState} from './../store'
export const FILTER_COURSES = 'course/FILTER'
export const REQUEST_COURSES = 'course/REQUEST_COURSES'
import {Injectable} from '@angular/core'

import {CourseService} from './course.service'

@Injectable()
export class CourseActions{
    constructor(private ngRedux:NgRedux<IAppState>,
    private courseService:CourseService){

    }

    getCourses(){
        this.courseService.getCourses().subscribe(courses => {
            this.ngRedux.dispatch({
                type:REQUEST_COURSES,
                courses
            })
        });
    }
    filterCourses(searchText : string){
        this.ngRedux.dispatch( {
            type :FILTER_COURSES,
            searchText,
        });
    }
}