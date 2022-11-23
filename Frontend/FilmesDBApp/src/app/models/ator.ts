import { Filme } from "./filme";
import { Genero } from "./genero";

export interface Ator {
  atorId?: number;
  nome: string;
  filmeId: number;
  filme?: Filme;
  generoId: number;
  genero?: Genero;
 }