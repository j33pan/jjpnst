/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getJJPOrder = /* GraphQL */ `
  query GetJJPOrder($id: ID!) {
    getJJPOrder(id: $id) {
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
export const listJJPOrders = /* GraphQL */ `
  query ListJJPOrders(
    $filter: ModelJJPOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJJPOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        code
        payable
        address
        email
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getJJPOrderProduct = /* GraphQL */ `
  query GetJJPOrderProduct($id: ID!) {
    getJJPOrderProduct(id: $id) {
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
        url
        createdAt
        updatedAt
      }
      owner
    }
  }
`;
export const listJJPOrderProducts = /* GraphQL */ `
  query ListJJPOrderProducts(
    $filter: ModelJJPOrderProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJJPOrderProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderid
        productid
        amount
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getJJPFavorate = /* GraphQL */ `
  query GetJJPFavorate($id: ID!) {
    getJJPFavorate(id: $id) {
      id
      productid
      createdAt
      updatedAt
      product {
        id
        name
        price
        url
        createdAt
        updatedAt
      }
      owner
    }
  }
`;
export const listJJPFavorates = /* GraphQL */ `
  query ListJJPFavorates(
    $filter: ModelJJPFavorateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJJPFavorates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productid
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getJJPTest = /* GraphQL */ `
  query GetJJPTest($id: ID!) {
    getJJPTest(id: $id) {
      id
      note
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listJJPTests = /* GraphQL */ `
  query ListJJPTests(
    $filter: ModelJJPTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJJPTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        note
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const listJJPProducts = /* GraphQL */ `
  query ListJJPProducts(
    $filter: ModelJJPProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJJPProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
        url
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getJJPProduct = /* GraphQL */ `
  query GetJJPProduct($id: ID!) {
    getJJPProduct(id: $id) {
      id
      name
      price
      url
      orders {
        nextToken
      }
      createdAt
      updatedAt
      comments {
        nextToken
      }
    }
  }
`;
export const getJJPComment = /* GraphQL */ `
  query GetJJPComment($id: ID!) {
    getJJPComment(id: $id) {
      id
      productid
      content
      createdAt
      updatedAt
    }
  }
`;
export const listJJPComments = /* GraphQL */ `
  query ListJJPComments(
    $filter: ModelJJPCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJJPComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productid
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
