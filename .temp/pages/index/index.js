import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View, Text } from '@tarojs/components';
import './index.less';

class Index extends Taro.Component {
  config = {
    navigationBarTitleText: '首页'
  };

  render() {
    return <View className="index">
      <Text>首页</Text>
    </View>;
  }

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}

Index.config = { navigationBarTitleText: '首页' };
export default Index;