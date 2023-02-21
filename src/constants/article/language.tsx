/**
 * @file Article language
 *
 */

import React from 'react'
import * as Icon from '@ant-design/icons'

/** 文章语言 */
export enum ArticleLanguage {
  English = 'en', // English
  Chinese = 'zh', // 简体中文
}

const articleLanguageMap = new Map(
  [
    {
      id: ArticleLanguage.Chinese,
      name: '中文',
      icon: <Icon.GlobalOutlined />,
      color: '#ee1c25',
    },
    {
      id: ArticleLanguage.English,
      name: 'English',
      icon: <Icon.GlobalOutlined />,
      color: '#002164',
    },
  ].map((item) => [item.id, item])
)

export const al = (language: ArticleLanguage) => {
  return articleLanguageMap.get(language)!
}
export const articleLanguages = Array.from<ReturnType<typeof al>>(articleLanguageMap.values())
