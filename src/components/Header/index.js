import React, { useState } from 'react'
import { NavBar, Popover, Icon } from 'antd-mobile'
import { remove } from '@U/localstorage'
import styles from './index.module.css'
import { withRouter } from 'react-router-dom'
import poweroff from '../../assets/svg/poweroff.svg'
import smile from '../../assets/svg/smile.svg'
const Item = Popover.Item

function Header(props) {
  const [visible, setVisible] = useState(false)
  const handleSelect = ({ key }) => {
    if (key === '0') {
      props.history.replace('/')
    } else if (key === '1') {
      remove('user')
      props.history.push('/login')
    }
  }
  return (
    <NavBar
      icon={props.hasLeft ? <Icon type="left" /> : null}
      onLeftClick={() => props.hasLeft && props.history.goBack()}
      mode="dark"
      className={styles.navbar}
      rightContent={
        <Popover
          mask
          overlayClassName="fortest"
          overlayStyle={{ color: 'currentColor' }}
          visible={visible}
          onSelect={handleSelect}
          overlay={[
            <Item
              key="0"
              icon={<img src={smile} alt="" />}
              value="scan"
              data-seed="logId"
            >
              回到首页
            </Item>,
            <Item
              key="1"
              value="special"
              icon={<img src={poweroff} alt="" />}
              style={{ whiteSpace: 'nowrap' }}
            >
              退出系统
            </Item>
          ]}
          align={{
            overflow: { adjustY: 0, adjustX: 0 },
            offset: [-10, 0]
          }}
          onVisibleChange={() => setVisible(true)}
        >
          <div
            style={{
              height: '100%',
              padding: '0 15px',
              marginRight: '-15px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Icon type="ellipsis" />
          </div>
        </Popover>
      }
    >
      {props.children}
    </NavBar>
  )
}
export default withRouter(Header)
