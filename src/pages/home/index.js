import React from 'react'
import { Grid } from 'antd-mobile'
import { Header } from '../../components'
import { remove } from '@U/localstorage'
import styles from './index.module.css'
import legwork from '../../assets/svg/daka.svg'
import system from '../../assets/svg/system.svg'
import book from '../../assets/svg/book.svg'

const data = [
  {
    icon: legwork,
    text: `外勤打卡`
  },
  {
    icon: book,
    text: `资料管理`
  },
  {
    icon: system,
    text: `退出系统`
  }
]

function Home({ history }) {
  const navigator = (value, index) => {
    switch (index) {
      case 0:
        history.push('/legwork')
        break
      case 2:
        remove('user')
        history.push('/login')
        break
      default:
        break
    }
  }

  return (
    <div className={styles.home}>
      <Header>亿账柜</Header>
      <Grid onClick={navigator} data={data} columnNum={3} hasLine={false} />
    </div>
  )
}

export default Home
