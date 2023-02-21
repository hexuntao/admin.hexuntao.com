/**
 * @file Article constant
 *
 */

import { GeneralKeyValue } from '../general'
import { PublishState } from '../publish'
import { Category } from '../category'
import { Tag } from '../tag'
import { ArticleOrigin } from './origin'
import { ArticlePublic } from './public'
import { ArticleLanguage } from './language'

export type ArticleId = string | number

/** 文章 */
export interface Article {
  id?: number
  _id?: string
  slug: string | null
  title: string
  content?: string
  description: string
  keywords: string[]
  thumb?: string
  tag: Array<Tag>
  category: Array<Category>
  origin: ArticleOrigin
  public: ArticlePublic
  state: PublishState
  lang: ArticleLanguage
  disabled_comment: boolean
  meta?: {
    likes: number
    views: number
    comments: number
  }
  update_at?: string
  create_at?: string
  extends: Array<GeneralKeyValue>
}
