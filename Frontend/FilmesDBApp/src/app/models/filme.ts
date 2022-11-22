import { Genero } from "./genero";

export interface Filme {
  filmeId?: number;
  nome: string;
  ano: number;
  generoId: number;
  genero?: Genero;
  criadoEm?: Date;
 }