import { Component, OnInit } from '@angular/core';

import { RuneTree } from '../../models/rune-tree.model';
import { RunePage } from '../../models/rune-page.model';
import { RuneDetailsService } from '../../services/rune_details.service';

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
        let runePage: RunePage = this.runeDetailsService.getRunePage(0);
        this.name = runePage.name;
        this.description = runePage.description;
        this.primaryRuneTree = runePage.primaryRuneTree;
        this.secondaryRuneTree = runePage.secondaryRuneTree;
    }
    
}
