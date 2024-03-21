import { expect, test } from 'vitest'

test('usuario consegue fazer uma nova transação', () => {
  const responseStatusCode = 201
  expect(responseStatusCode).toEqual(201)
})
