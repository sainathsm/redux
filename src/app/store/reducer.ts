import {Course} from '../courses/course'
import {IAppState} from './IAppState'
import {FILTER_COURSES} from './../courses/course.actions'

import {REQUEST_COURSES} from './../courses/course.actions'


const courses =[]
const intiialState: IAppState = {
    courses ,
    filteredCourses : courses
}
function filterCourses(state,action) : IAppState{
    return Object.assign({}, state,{
        filteredCourses :  state.courses.filter(c => c.name.toLowerCase().indexOf(action.searchText.toLowerCase()) > -1 )
    })
}

function storeCourses(state,action) : IAppState{
    return Object.assign({}, state,{
        courses :action.courses,
        filteredCourses:action.courses
    })
}
 
export function reducer(state = intiialState, action){
    switch(action.type) {
        case FILTER_COURSES : return filterCourses(state,action)
        case REQUEST_COURSES : return storeCourses(state,action)
        // break;
        default : return state;
    }
} 