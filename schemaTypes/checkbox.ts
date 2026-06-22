import {defineField, defineType} from 'sanity'

export const checkbox = defineType({
  name: 'checkbox',
  title: 'Checkbox',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})