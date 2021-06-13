/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const jjpprocessorder = /* GraphQL */ `
  mutation Jjpprocessorder($input: JJPPO!) {
    jjpprocessorder(input: $input)
  }
`;
export const createJJPProduct = /* GraphQL */ `
  mutation CreateJJPProduct(
    $input: CreateJJPProductInput!
    $condition: ModelJJPProductConditionInput
  ) {
    createJJPProduct(input: $input, condition: $condition) {
      id
      name
      price
      orders {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateJJPProduct = /* GraphQL */ `
  mutation UpdateJJPProduct(
    $input: UpdateJJPProductInput!
    $condition: ModelJJPProductConditionInput
  ) {
    updateJJPProduct(input: $input, condition: $condition) {
      id
      name
      price
      orders {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteJJPProduct = /* GraphQL */ `
  mutation DeleteJJPProduct(
    $input: DeleteJJPProductInput!
    $condition: ModelJJPProductConditionInput
  ) {
    deleteJJPProduct(input: $input, condition: $condition) {
      id
      name
      price
      orders {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createJJPOrder = /* GraphQL */ `
  mutation CreateJJPOrder(
    $input: CreateJJPOrderInput!
    $condition: ModelJJPOrderConditionInput
  ) {
    createJJPOrder(input: $input, condition: $condition) {
      id
      code
      payable
      address
      email
      products {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateJJPOrder = /* GraphQL */ `
  mutation UpdateJJPOrder(
    $input: UpdateJJPOrderInput!
    $condition: ModelJJPOrderConditionInput
  ) {
    updateJJPOrder(input: $input, condition: $condition) {
      id
      code
      payable
      address
      email
      products {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteJJPOrder = /* GraphQL */ `
  mutation DeleteJJPOrder(
    $input: DeleteJJPOrderInput!
    $condition: ModelJJPOrderConditionInput
  ) {
    deleteJJPOrder(input: $input, condition: $condition) {
      id
      code
      payable
      address
      email
      products {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createJJPOrderProduct = /* GraphQL */ `
  mutation CreateJJPOrderProduct(
    $input: CreateJJPOrderProductInput!
    $condition: ModelJJPOrderProductConditionInput
  ) {
    createJJPOrderProduct(input: $input, condition: $condition) {
      id
      orderid
      productid
      amount
      order {
        id
        code
        payable
        address
        email
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      product {
        id
        name
        price
        createdAt
        updatedAt
      }
      owner
    }
  }
`;
export const updateJJPOrderProduct = /* GraphQL */ `
  mutation UpdateJJPOrderProduct(
    $input: UpdateJJPOrderProductInput!
    $condition: ModelJJPOrderProductConditionInput
  ) {
    updateJJPOrderProduct(input: $input, condition: $condition) {
      id
      orderid
      productid
      amount
      order {
        id
        code
        payable
        address
        email
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      product {
        id
        name
        price
        createdAt
        updatedAt
      }
      owner
    }
  }
`;
export const deleteJJPOrderProduct = /* GraphQL */ `
  mutation DeleteJJPOrderProduct(
    $input: DeleteJJPOrderProductInput!
    $condition: ModelJJPOrderProductConditionInput
  ) {
    deleteJJPOrderProduct(input: $input, condition: $condition) {
      id
      orderid
      productid
      amount
      order {
        id
        code
        payable
        address
        email
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      product {
        id
        name
        price
        createdAt
        updatedAt
      }
      owner
    }
  }
`;
export const createJJPFavorate = /* GraphQL */ `
  mutation CreateJJPFavorate(
    $input: CreateJJPFavorateInput!
    $condition: ModelJJPFavorateConditionInput
  ) {
    createJJPFavorate(input: $input, condition: $condition) {
      id
      productid
      createdAt
      updatedAt
      product {
        id
        name
        price
        createdAt
        updatedAt
      }
      owner
    }
  }
`;
export const updateJJPFavorate = /* GraphQL */ `
  mutation UpdateJJPFavorate(
    $input: UpdateJJPFavorateInput!
    $condition: ModelJJPFavorateConditionInput
  ) {
    updateJJPFavorate(input: $input, condition: $condition) {
      id
      productid
      createdAt
      updatedAt
      product {
        id
        name
        price
        createdAt
        updatedAt
      }
      owner
    }
  }
`;
export const deleteJJPFavorate = /* GraphQL */ `
  mutation DeleteJJPFavorate(
    $input: DeleteJJPFavorateInput!
    $condition: ModelJJPFavorateConditionInput
  ) {
    deleteJJPFavorate(input: $input, condition: $condition) {
      id
      productid
      createdAt
      updatedAt
      product {
        id
        name
        price
        createdAt
        updatedAt
      }
      owner
    }
  }
`;
export const createJJPTest = /* GraphQL */ `
  mutation CreateJJPTest(
    $input: CreateJJPTestInput!
    $condition: ModelJJPTestConditionInput
  ) {
    createJJPTest(input: $input, condition: $condition) {
      id
      note
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateJJPTest = /* GraphQL */ `
  mutation UpdateJJPTest(
    $input: UpdateJJPTestInput!
    $condition: ModelJJPTestConditionInput
  ) {
    updateJJPTest(input: $input, condition: $condition) {
      id
      note
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteJJPTest = /* GraphQL */ `
  mutation DeleteJJPTest(
    $input: DeleteJJPTestInput!
    $condition: ModelJJPTestConditionInput
  ) {
    deleteJJPTest(input: $input, condition: $condition) {
      id
      note
      createdAt
      updatedAt
      owner
    }
  }
`;
