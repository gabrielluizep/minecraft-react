export type texture = 'dirt' | 'grass' | 'glass' | 'wood' | 'log';

export type Cube = {
  key: string;
  pos: [number, number, number];
  texture: texture;
};
