import { Injectable } from '@angular/core';

import { RunePage } from '../models/rune-page.model';

@Injectable()
export class RuneDetailsService {

    runePages: RunePage[] = [
        {
            id: 0,
            name: 'Leona Support',
            description: 'Just fucking go in already. You got this! Your fucking Leona remember!',
            primaryRuneTree: {
                name: 'Resolve',
                runes: [
                    'Aftershock',
                    'Unflinching',
                    'Conditioning',
                    'Second Wind'
                ]
            },
            secondaryRuneTree: {
                name: 'Domination',
                runes: [
                    'Cheap Shot',
                    'Ghost Poro'
                ]
            }
        }
    ];

    constructor() { }

    getRunePage(id: number): RunePage {
        return this.runePages[0];
    }

}