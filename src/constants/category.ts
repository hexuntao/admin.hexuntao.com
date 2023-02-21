/**
 * @file Category constant
 *
 */

import { GeneralKeyValue } from './general'

/** 分类 */
export interface Category {
  id?: number
  _id?: string
  pid?: string | null
  name: string
  slug: string
  description: string
  update_at: string
  create_at: string
  children?: Array<Category>
  extends: Array<GeneralKeyValue>
  articles_count?: number
}
