import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';
import { FilterTextComponent, 
  /* FilterService*/ } from '../blocks/filter-text';
import { store, filterCourses } from '../store'

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  // courses: Course[];
  filteredCourses = [];

  constructor(private _courseService: CourseService, /*private _filterService: FilterService*/) {
  }

  filterChanged(searchText: string) {
    console.log('user searched: ', searchText);
    store.dispatch(filterCourses(searchText));
  }

  updateFromState(){
    const allState = store.getState();
    // this.courses = allState.courses;
    this.filteredCourses = allState.filteredCourses;
  }

  ngOnInit() {
    // this.getCourses();
    this.updateFromState();
    store.subscribe(() => {
      this.updateFromState();
    })
    componentHandler.upgradeDom();
  }
}
