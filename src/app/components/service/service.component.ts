import { Component ,OnInit} from '@angular/core';
import { AdunitService } from 'src/app/adunit.service';
import { AdUnit } from './AdUnit';

@Component({
  selector: 'service',
  templateUrl: './service.component.html'
  
})
export class serviceComponent  implements OnInit{

  
  adunits: AdUnit[];

  constructor(private adunitservice: AdunitService) { }
  ngOnInit(){
    this.adunitservice
    .getAdUnits()
    .subscribe((data: AdUnit[]) => {
    this.adunits = data;
  });
}

   

   
}