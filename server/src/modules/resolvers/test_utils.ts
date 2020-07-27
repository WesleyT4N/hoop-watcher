import { ApolloError } from "apollo-server-express";

type Resolver = (parent: any, args: any, context?: any) => Promise<any> | any;

export const expectRetrievedMatchesExpected = async (
  retrieveByArgs: object,
  retrieve: Resolver,
  expected: any,
  retrieveParent: object = {}
) => {
  expect.assertions(1);
  const result = await retrieve(retrieveParent, retrieveByArgs);
  if (typeof expected === "string") {
    expect(result).toEqual(expected);
  } else {
    expect(result).toMatchObject(expected);
  }
};

export const expectApolloErrorThrown = async (
  retrieveArgs: object,
  retrieve: Resolver,
  retrieveParent: object = {}
) => {
  await expect(retrieve(retrieveParent, retrieveArgs)).rejects.toBeInstanceOf(
    ApolloError
  );
};
