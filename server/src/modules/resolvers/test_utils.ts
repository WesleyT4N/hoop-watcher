import { ApolloError } from "apollo-server-express";

type Resolver = (parent: any, args: any, context?: any) => Promise<any> | any;

export const expectRetrievedMatchesExpected = async (
  retrieveByArgs: object,
  retrieve: Resolver,
  expected: object
) => {
  expect.assertions(1);
  const result = await retrieve({}, retrieveByArgs);
  expect(result).toMatchObject(expected);
};

export const expectApolloErrorThrown = async (
  retrieveArgs: object,
  retrieve: Resolver
) => {
  await expect(retrieve({}, retrieveArgs)).rejects.toBeInstanceOf(ApolloError);
};
