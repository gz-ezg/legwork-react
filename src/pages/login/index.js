import React, { useState } from 'react'
import { List, InputItem, Button, Toast } from 'antd-mobile'
import styles from './index.module.css'
import { userLogin } from '../../services'
import { put } from '@U/localstorage'
import Logo from '../../assets/images/logo.png'

function Login({ history }) {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  // 登录判断
  const login = async () => {
    if (!userName) return Toast.fail('请输入账号', 1)
    if (!password) return Toast.fail('请输入密码', 1)

    try {
      setLoading(true)
      const resp = await userLogin({ username: userName, password })
      put('user', resp)
      history.push('/')
    } catch (error) {
      setLoading(false)
    }
  }
  return (
    <div className={styles.login}>
      <img className={styles.logo} src={Logo} alt="logo" />
      <List>
        <InputItem
          type="text"
          placeholder="请输入账号"
          value={userName}
          onChange={setUserName}
        >
          账号
        </InputItem>
        <InputItem
          type="text"
          placeholder="请输入密码"
          value={password}
          onChange={setPassword}
        >
          密码
        </InputItem>
      </List>
      <Button
        type="warning"
        loading={loading}
        onClick={login}
        className={styles.button}
      >
        登录
      </Button>
    </div>
  )
}

export default Login
