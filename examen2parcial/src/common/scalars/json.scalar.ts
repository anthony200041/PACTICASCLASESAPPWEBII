import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

@Scalar('JSON')
export class JSONScalar implements CustomScalar<string, any> {
  description = 'JSON custom scalar type';

  parseValue(value: string): any {
    return JSON.parse(value); // value from the client input variables
  }

  serialize(value: any): string {
    return JSON.stringify(value); // value sent to the client
  }

  parseLiteral(ast: ValueNode): any {
    if (ast.kind === Kind.STRING) {
      return JSON.parse(ast.value); // value from the client query
    }
    return null;
  }
}
