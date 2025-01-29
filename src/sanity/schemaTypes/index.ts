import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './products'
import { Category } from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema,Category],
}
