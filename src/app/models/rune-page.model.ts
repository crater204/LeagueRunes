import { RuneTree } from './rune-tree.model';

export class RunePage {
    id: number;
    name: string;
    description: string;
    primaryRuneTree: RuneTree;
    secondaryRuneTree: RuneTree;

    constructor() {
        this.id = -1;
        this.name = '';
        this.description = '';
        this.primaryRuneTree = new RuneTree();
        this.secondaryRuneTree = new RuneTree();        
    }
}