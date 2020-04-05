import Taro, { useState, useCallback } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import createSocket from '../../socket'
import './index.less'

const Index = () => {
  const [url, setUrl] = useState('ws://192.168.43.135:3005')
  const [socket, setSocket] = useState<Taro.SocketTask>()
  const connectSocket = useCallback(async () => {
    setSocket(createSocket(url))
  }, [url])
  const handleClick = () => {
    connectSocket()
    // Taro.scanCode({
    //   onlyFromCamera: true,
    //   success: (res) => {
    //     setUrl(res.result)
    //   },
    //   fail: (err) => {
    //     console.log(err)
    //   }
    // })
  }
  const handleClickUp = () => {
    socket && socket.send({
      data: 'up'
    })
  }
  const handleClickDown = () => {
    socket && socket.send({
      data: 'down'
    })
  }
  return (
    <View className='index'>
      <Text>ip: {url}</Text>
      <Button size='mini' onClick={handleClick} >按钮</Button>
      <Button size='mini' onClick={handleClickUp} >上</Button>
      <Button size='mini' onClick={handleClickDown} >下</Button>
    </View>
  )
}
Index.config = {
  navigationBarTitleText: '首页'
}
export default Index