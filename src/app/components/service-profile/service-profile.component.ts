import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { AdUnit } from '../service/AdUnit';
import { AdunitService } from 'src/app/adunit.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: "service-profile",
  templateUrl: "./service-profile.component.html",
 
})
export class serviceprofileComponent implements OnInit {
  adunit: Observable<Object>;
 
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adunitservice:AdunitService  ) {}
    ngOnInit() {
    this.adunit = this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
        this.adunitservice.editAdUnit(params.get('fname')))
    );
  
  
  
 
  }
}
 
    
 
