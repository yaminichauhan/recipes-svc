import IQueryEntity from "./IQueryEntity";

export default interface IQueryBaseCreate extends IQueryEntity {
  id?: string;
  name: string;
  code?: string;
}

