/**
 * @desc Universal text
 *
 */

import React from 'react'
import { Typography, Space } from 'antd'
import { BaseType } from 'antd/lib/typography/Base'
import { Placeholder, PlaceholderProps } from '../Placeholder'

export interface UniversalTextProps {
  text: any
  type?: BaseType
  className?: string
  copyable?: boolean
  prefix?: React.ReactChild
  suffix?: React.ReactChild
  placeholder?: PlaceholderProps['placeholder']
}

export const UniversalText: React.FC<UniversalTextProps> = (props) => {
  return (
    <Space size="small" className={props.className}>
      {props.prefix}
      <Placeholder data={props.text} placeholder={props.placeholder}>
        {(text) => (
          <Typography.Text copyable={props.copyable} type={props.type}>
            {text}
          </Typography.Text>
        )}
      </Placeholder>
      {props.suffix}
    </Space>
  )
}
