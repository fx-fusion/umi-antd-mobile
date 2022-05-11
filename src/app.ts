import 'antd-mobile/es/global';
import './theme.less';
/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<any> {
  console.log('[getInitialState]');
  return {};
}
