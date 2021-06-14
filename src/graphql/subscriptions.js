/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateJJPOrder = /* GraphQL */ `
  subscription OnCreateJJPOrder($owner: String) {
    onCreateJJPOrder(owner: $owner) {
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
export const onUpdateJJPOrder = /* GraphQL */ `
  subscription OnUpdateJJPOrder($owner: String) {
    onUpdateJJPOrder(owner: $owner) {
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
export const onDeleteJJPOrder = /* GraphQL */ `
  subscription OnDeleteJJPOrder($owner: String) {
    onDeleteJJPOrder(owner: $owner) {
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
export const onCreateJJPOrderProduct = /* GraphQL */ `
  subscription OnCreateJJPOrderProduct($owner: String) {
    onCreateJJPOrderProduct(owner: $owner) {
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
export const onUpdateJJPOrderProduct = /* GraphQL */ `
  subscription OnUpdateJJPOrderProduct($owner: String) {
    onUpdateJJPOrderProduct(owner: $owner) {
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
export const onDeleteJJPOrderProduct = /* GraphQL */ `
  subscription OnDeleteJJPOrderProduct($owner: String) {
    onDeleteJJPOrderProduct(owner: $owner) {
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
export const onCreateJJPFavorate = /* GraphQL */ `
  subscription OnCreateJJPFavorate($owner: String!) {
    onCreateJJPFavorate(owner: $owner) {
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
export const onUpdateJJPFavorate = /* GraphQL */ `
  subscription OnUpdateJJPFavorate($owner: String!) {
    onUpdateJJPFavorate(owner: $owner) {
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
export const onDeleteJJPFavorate = /* GraphQL */ `
  subscription OnDeleteJJPFavorate($owner: String!) {
    onDeleteJJPFavorate(owner: $owner) {
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
export const onCreateJJPTest = /* GraphQL */ `
  subscription OnCreateJJPTest($owner: String!) {
    onCreateJJPTest(owner: $owner) {
      id
      note
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateJJPTest = /* GraphQL */ `
  subscription OnUpdateJJPTest($owner: String!) {
    onUpdateJJPTest(owner: $owner) {
      id
      note
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteJJPTest = /* GraphQL */ `
  subscription OnDeleteJJPTest($owner: String!) {
    onDeleteJJPTest(owner: $owner) {
      id
      note
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateJJPProduct = /* GraphQL */ `
  subscription OnCreateJJPProduct {
    onCreateJJPProduct {
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
export const onUpdateJJPProduct = /* GraphQL */ `
  subscription OnUpdateJJPProduct {
    onUpdateJJPProduct {
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
export const onDeleteJJPProduct = /* GraphQL */ `
  subscription OnDeleteJJPProduct {
    onDeleteJJPProduct {
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
export const onCreateJJPComment = /* GraphQL */ `
  subscription OnCreateJJPComment {
    onCreateJJPComment {
      id
      productid
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateJJPComment = /* GraphQL */ `
  subscription OnUpdateJJPComment {
    onUpdateJJPComment {
      id
      productid
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteJJPComment = /* GraphQL */ `
  subscription OnDeleteJJPComment {
    onDeleteJJPComment {
      id
      productid
      content
      createdAt
      updatedAt
    }
  }
`;
