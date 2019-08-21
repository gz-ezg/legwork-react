import React, { useEffect, useState } from 'react'
import {
  Tabs,
  Badge,
  Card,
  Result,
  WhiteSpace,
  WingBlank,
  Switch,
  Button,
  Drawer,
  List
} from 'antd-mobile'
import {
  getToDoTaskListByUserId,
  getFinishedLegworkTask,
  checkStatus
} from '@S'
import { formatDate } from '@U'
import smile from '../../../assets/svg/smile.svg'
import styles from './index.module.css'
import { connect } from 'react-redux'
import { setTaskingList, setLegworkList } from '../../../actions/legwork'

const Item = List.Item
function Legwork({ history, setTaskingList }) {
  const [remainList, setRemainList] = useState([])
  const [finishedList, setFinishedList] = useState([])
  const [openDetail, onOpenChange] = useState(false)
  const [detail, setDetail] = useState({})
  const getRemainList = async () => {
    const resp = await getToDoTaskListByUserId({
      date: formatDate(undefined, 'yyyy-MM-dd')
    })

    setRemainList(resp)
  }
  const getFinishedList = async () => {
    const resp = await getFinishedLegworkTask({
      date: formatDate(undefined, 'yyyy-MM-dd')
    })

    setFinishedList(resp)
  }

  const changeChecked = index => {
    remainList[index].checked = !remainList[index].checked
    setRemainList([...remainList])
  }

  const sidebar = (
    <List renderHeader={() => '外勤任务详情'} className="my-list">
      <Item extra={detail.companyName}>任务对象</Item>
      <Item extra={detail.taskContent}>任务详情</Item>
      <Item extra={detail.finishState}>任务状态</Item>
      <Item extra={detail.taskKindName}>任务类型</Item>
      <Item extra={detail.executorName}>执行者</Item>
      <Item extra={detail.taskArea}>公司地点</Item>
      <Item extra={detail.taskPlace}>计划时间</Item>
    </List>
  )
  const openLegwork = () => {
    const startList = remainList.filter(v => v.checked)
    setTaskingList(startList)
    history.push({
      pathname: '/legwork/start',
      state: {
        id: startList.map(v => v.taskId).join(',')
      }
    })
  }
  const tabs = [
    { title: <Badge text={remainList.length || '0'}>今日剩余</Badge> },
    { title: <Badge text={finishedList.length || '0'}>今日完成任务</Badge> }
  ]

  useEffect(() => {
    const checkHasTasking = async () => {
      const resp = await checkStatus()
      if (!resp) {
        getRemainList()
        getFinishedList()
      } else {
        history.push('/legwork/end')
      }
    }
    console.log()
    checkHasTasking()
  }, [history])

  return (
    <div>
      <Drawer
        style={{
          minHeight: document.documentElement.clientHeight
        }}
        contentStyle={{
          paddingTop: 42
        }}
        sidebarStyle={{
          background: '#fff',
          width: '80vw'
        }}
        sidebar={sidebar}
        open={openDetail}
        onOpenChange={() => {
          onOpenChange(!openDetail)
        }}
      >
        <Button
          className={
            remainList.filter(v => v.checked).length ? styles.show : styles.hide
          }
          onClick={openLegwork}
        >
          开始任务
        </Button>
        <Tabs
          tabs={tabs}
          initialPage={0}
          tabBarActiveTextColor="#d32640"
          tabBarUnderlineStyle={{ border: '1px #d32640 solid' }}
        >
          <div
            style={{
              backgroundColor: '#fff'
            }}
          >
            {remainList.length ? (
              <WhiteSpace size="lg" />
            ) : (
              <Result imgUrl={smile} message="您暂无任务" />
            )}
            {remainList.map((item, index) => {
              return (
                <WingBlank key={index}>
                  <Card onClick={() => changeChecked(index)}>
                    <Card.Header
                      title={`${item.taskKindName}`}
                      thumb={<Switch checked={item.checked} />}
                      extra={
                        <Button
                          size="small"
                          inline
                          onClick={e => {
                            e.stopPropagation()
                            setDetail(item)
                            onOpenChange(!openDetail)
                          }}
                        >
                          查看详情
                        </Button>
                      }
                    />
                    <Card.Body>
                      <div>{item.companyName}</div>
                    </Card.Body>
                    <Card.Footer
                      content={item.taskKind}
                      extra={
                        item.follow_result_name
                          ? item.follow_result_name
                          : item.taskKindName
                      }
                    />
                  </Card>
                  <WhiteSpace size="lg" />
                </WingBlank>
              )
            })}
          </div>
          <div
            style={{
              backgroundColor: '#fff'
            }}
          >
            {finishedList.length ? (
              <WhiteSpace size="lg" />
            ) : (
              <Result imgUrl={smile} message="今日没有已完成的任务" />
            )}
            {finishedList.map((item, index) => {
              return (
                <WingBlank key={index}>
                  <Card>
                    <Card.Header
                      title="This is title"
                      thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                      extra={<span>this is extra</span>}
                    />
                    <Card.Body>
                      <div>This is content of `Card`</div>
                    </Card.Body>
                    <Card.Footer
                      content="footer content"
                      extra={<div>extra footer content</div>}
                    />
                  </Card>
                  <WhiteSpace size="lg" />
                </WingBlank>
              )
            })}
          </div>
        </Tabs>
      </Drawer>
    </div>
  )
}

export default connect(
  state => state,
  { setTaskingList, setLegworkList }
)(Legwork)
