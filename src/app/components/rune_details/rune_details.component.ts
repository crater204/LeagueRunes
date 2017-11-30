import { Component, OnInit } from '@angular/core';

import { RuneTree } from '../../models/rune-tree.model';
import { RunePage } from '../../models/rune-page.model';
import { RuneDetailsService } from '../../services/rune_details.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'rune-details',
  templateUrl: './rune_details.component.html',
  styleUrls: ['./rune_details.component.css']
})
export class RuneDetailsComponent implements OnInit{

    name: string;
    description: string;
    primaryRuneTree: RuneTree;
    secondaryRuneTree: RuneTree;
    
    constructor(private runeDetailsService: RuneDetailsService) {}

    ngOnInit() {
        this.runeDetailsService.getRunePage(0).subscribe( (value) => {
            this.name = value.name;
            this.description = value.description;
            this.primaryRuneTree = value.primaryRuneTree;
            this.secondaryRuneTree = value.secondaryRuneTree;
        }) 
        
        
        
        /*
        
        
        ((runePage)=> {
            console.log(runePage);
            this.name = runePage.name;
            this.description = runePage.description;
            this.primaryRuneTree = runePage.primaryRuneTree;
            this.secondaryRuneTree = runePage.secondaryRuneTree;
        });

        */
        
    }
    
}
