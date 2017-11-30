import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { RunePage } from '../models/rune-page.model';

@Injectable()
export class RuneDetailsService {

    runePages: BehaviorSubject<RunePage[]>;
    currentRunePage: BehaviorSubject<RunePage>;
    currentRunePageId: number;

    constructor(private http: Http) { 
        this.runePages = new BehaviorSubject([]);
        this.currentRunePage = new BehaviorSubject(new RunePage());
        this.currentRunePageId = -1;
        this.loadRunePages();
    }

    loadRunePages() {
        this.loadRunePagesWithCallback(()=> {});
    }

    loadRunePagesWithCallback(callback: Function) {
        this.http.get('http://localhost:4200/assets/champion.json')
        .map((res)=> { 
            return res.json();
        })
        .subscribe((success) =>  {
            console.log(success);
            this.runePages.next(success);
            callback();
        });
    }

    getRunePage(id: number): Observable<RunePage> {
        console.log('Rune Pages Here!!!!!')
        console.log(this.runePages);
        this.currentRunePageId = id;
        if(this.runePages.getValue().length === 0) {
            this.loadRunePagesWithCallback(()=>{
                console.log('Hi from the callback');
                let pages = this.runePages.getValue();
               // if(pages.length <= this.currentRunePageId - 1) { 
                    console.log('Rune Page Id: ' + this.currentRunePageId);
                    this.currentRunePage.next(pages[this.currentRunePageId]);
                    console.log(this.currentRunePage.getValue());
               // }
            });
        } 
        return this.currentRunePage;       
    }



}