export const FILTER_COURSES = 'course/FILTER'
export function filterCourses(searchText : string){
    return {
        type :FILTER_COURSES,
        searchText,
    }
}