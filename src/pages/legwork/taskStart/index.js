import React, { useState, useEffect } from 'react'
import {
  Card,
  WhiteSpace,
  List,
  InputItem,
  WingBlank,
  ImagePicker,
  Button
} from 'antd-mobile'
import styles from './index.module.css'
import { connect } from 'react-redux'
import { legworkBegin } from '@S'

function TaskStart({ list, history }) {
  const [files, setFiles] = useState([])
  const onChange = (files, type, index) => {
    setFiles(files)
  }

  const onStartLegwork = async () => {
    let formdata = new FormData()
    formdata.append('task_ids', list.map(v => v.taskId).join(','))
    formdata.append('begin_address:', '')
    files.forEach(v => {
      formdata.append('files', v.file)
    })
    try {
      await legworkBegin(formdata)
      history.push('/legwork/end')
    } catch (error) {}
  }
  return (
    <div>
      {list.map((item, index) => {
        return (
          <WingBlank key={index}>
            <WhiteSpace size="lg" />
            <Card>
              <Card.Header title={`cesfdsjfdsfjdsjfldsjfld`} />
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
          </WingBlank>
        )
      })}
      <div className={styles.textarea}>
        <textarea placeholder="打卡说明(选填)" />
      </div>
      <WhiteSpace />

      <WingBlank>
        <ImagePicker
          files={files}
          onChange={onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 5}
          multiple
          // onAddImageClick={onAddImageClick}
        />
      </WingBlank>
      <Button className={styles.button} onClick={onStartLegwork}>
        开始打卡
      </Button>
    </div>
  )
}
const mapState = state => ({
  list: state.legwork.taskingList
})

export default connect(mapState)(TaskStart)
