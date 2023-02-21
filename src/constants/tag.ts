/**
 * @file Tag interface
 *
 */

import { GeneralKeyValue } from './general'

/** 标签数据 */
export interface Tag {
  id?: number
  _id?: string
  name: string
  slug: string
  description: string
  update_at: string
  create_at: string
  extends: Array<GeneralKeyValue>
  articles_count?: number
}
