import { RuneTree } from './rune-tree.model';

export class RunePage {
    id: number;
    name: string;
    description: string;
    primaryRuneTree: RuneTree;
    secondaryRuneTree: RuneTree;
}