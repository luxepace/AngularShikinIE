export interface TodoInterface {
  todo: string[] | [];
}

export class AddTodo {
  static readonly type = '[Todo] Add Todo';
  constructor(public todo: string) {}
}
