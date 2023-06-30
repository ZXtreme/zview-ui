export declare const isOutBounds: (val: number, min: number, max: number) => boolean;
export declare const cutChunk: (extent: number, step: number, maxTotal: number) => number[];
declare type Location = "start" | "end";
export declare const judgeLocation: (val: number, start: number, end: number) => Location;
export {};
