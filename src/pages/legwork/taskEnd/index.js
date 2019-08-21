import React, { useState, useEffect } from 'react'
import { Card, WhiteSpace, WingBlank, ImagePicker, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import {
  checkStatus,
  getTaskPropertyDetailByTaskId,
  imgUpload,
  legworkEnd
} from '../../../services'
import styles from './index.module.css'

function TaskEnd({ list, history }) {
  const [filesList, setFilesList] = useState([])
  const [legworklist, setLegworklist] = useState([])
  const [legworkId, setLegworkId] = useState('')

  useEffect(() => {
    const getList = async () => {
      const resp = await checkStatus()
      setLegworkId(resp.id)
      setLegworklist(resp.details)
    }
    getList()
  }, [])
  // 结束打卡
  const onEndLegwork = async () => {
    let arr = []
    filesList.forEach((item, index) => {
      Array.isArray(item) &&
        item.forEach(data => {
          arr.push(
            new Promise((resolve, reject) => {
              let formdata = new FormData()
              formdata.append(
                'legwork_task_id',
                legworklist[index].legwork_task_id
              )
              formdata.append('legwork_id', legworkId)
              formdata.append('files', data.file)
              imgUpload(formdata)
                .then(v => resolve(v))
                .catch(v => reject(v))
            })
          )
        })
    })
    try {
      await Promise.all(arr)

      legworkEnd({
        legwork_id: legworkId,
        end_address: '暂无',
        legwork_task_json: [
          { legwork_task_id: 263, memo: '', finish_status: 'youxiao' }
        ]
      })
    } catch (error) {
      console.log(error)
    }
  }

  const onChange = (index, files) => {
    filesList[index] = files
    setFilesList([...filesList])
  }
  return (
    <>
      <div style={{ marginBottom: '50px' }}>
        {legworklist.map((item, index) => {
          return (
            <WingBlank key={index}>
              <WhiteSpace size="lg" />
              <Card>
                <Card.Header title={`cesfdsjfdsfjdsjfldsjfld`} />
                <Card.Body>
                  <div>{item.task_content}</div>
                  <ImagePicker
                    length="6"
                    files={filesList[index]}
                    onChange={files => {
                      onChange(index, files)
                    }}
                    onImageClick={(index, fs) => console.log(index, fs)}
                    selectable={filesList[index] && filesList[index].length < 5}
                    multiple
                    // onAddImageClick={onAddImageClick}
                  />
                </Card.Body>
                {/* <Card.Footer
                content={item.taskKind}
                extra={
                  item.follow_result_name
                    ? item.follow_result_name
                    : item.taskKindName
                }
              /> */}
              </Card>
            </WingBlank>
          )
        })}
      </div>
      <Button className={styles.button} onClick={onEndLegwork}>
        结束打卡
      </Button>
    </>
  )
}
const mapState = state => ({
  list: state.legwork.taskingList
})

export default connect(mapState)(TaskEnd)
