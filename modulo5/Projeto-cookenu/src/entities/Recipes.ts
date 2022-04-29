export class Recipes {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly description: string,
    readonly creationDate: Date = new Date()
  ) {
    if (typeof id !== "string")
      throw new Error("O type do 'id' tem que ser do tipo 'string' ");
    if (typeof title !== "string")
      throw new Error("O type do 'titulo' tem que ser do tipo 'string' ");
    if (typeof description !== "string")
      throw new Error("O type do 'description' tem que ser do tipo 'string' ");
    if (typeof creationDate !== "string")
      throw new Error("O type do 'creationDate' tem que ser do tipo 'Date' ");
  }
}
