import React from 'react'
import { useRef, onMounted } from 'veact'
import { useLoading } from 'veact-use'
import { Row, Col, Card, Statistic, Space, Divider } from 'antd'
import * as Icon from '@ant-design/icons'
import { APP_LAYOUT_GUTTER_SIZE } from '@/config'
import { Statistics, getStatistics } from '@/store/system'

import styles from './style.module.less'

export const StatisticsComponent: React.FC = () => {
  const statistics = useRef<Statistics>({})
  const loading = useLoading()

  const fetchStatistics = () => {
    loading.promise(getStatistics()).then((result) => {
      statistics.value = result
    })
  }

  onMounted(() => {
    fetchStatistics()
  })

  return (
    <Row gutter={APP_LAYOUT_GUTTER_SIZE} className={styles.statistic}>
      <Col span={8}>
        <Card bordered={false} className={styles.statisticCard}>
          <Row>
            <Col span={18}>
              <Space size="middle">
                <Statistic
                  loading={loading.state.value}
                  title="今日阅读"
                  value={statistics.value.todayViews || 0}
                />
                <Divider type="vertical" />
                <Statistic
                  loading={loading.state.value}
                  title="累计文章阅读"
                  value={statistics.value.totalViews || 0}
                />
              </Space>
            </Col>
            <Col span={6} className={styles.icon}>
              <Icon.EyeOutlined />
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={8}>
        <Card bordered={false} className={styles.statisticCard}>
          <Row>
            <Col span={18}>
              <Space size="middle">
                <Statistic
                  loading={loading.state.value}
                  title="累计获得喜欢"
                  value={statistics.value.totalLikes || 0}
                />
                {/* <Divider type="vertical" /> */}
                {/* <Statistic
                  loading={loading.state.value}
                  title="平均情绪反馈"
                  value={statistics.value.averageEmotion || '-'}
                /> */}
              </Space>
            </Col>
            <Col span={6} className={styles.icon}>
              <Icon.HeartOutlined />
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={8}>
        <Card bordered={false} className={styles.statisticCard}>
          <Row>
            <Col span={18}>
              <Space size="middle">
                <Statistic
                  loading={loading.state.value}
                  title="全站评论"
                  value={statistics.value.comments || 0}
                />
                <Divider type="vertical" />
                <Statistic
                  loading={loading.state.value}
                  title="文章"
                  value={statistics.value.articles || 0}
                />
                <Divider type="vertical" />
                <Statistic
                  loading={loading.state.value}
                  title="标签"
                  value={statistics.value.tags || 0}
                />
              </Space>
            </Col>
            <Col span={6} className={styles.icon}>
              <Icon.CoffeeOutlined />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}
