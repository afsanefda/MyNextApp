import React from 'react';
import { Icon, Layout as AntLayout, Menu } from 'antd';
import style from './style.module.scss';
import { Link } from '..';

const { SubMenu } = Menu;
const { Sider } = AntLayout;

const CustomSider = () => (
  <Sider className={style.sidebar} width={200}>
    <Menu
      mode="inline"
      style={{ height: '100%', borderRight: 0 }}
    >
      <SubMenu
        key="hooks"
        title={(
          <span>
            <Icon type="pushpin" />
                React Hooks
          </span>
        )}
      >
        <Menu.Item key="useState"><Link href="/hooks/[hook]" as="/hooks/useState">useState</Link></Menu.Item>
        <Menu.Item key="useEffect"><Link href="/hooks/[hook]" as="/hooks/useEffect">useEffect</Link></Menu.Item>
        <Menu.Item key="useContext"><Link href="/hooks/[hook]" as="/hooks/useContext">useContext</Link></Menu.Item>
        <Menu.Item key="useMemo"><Link href="/hooks/[hook]" as="/hooks/useMemo">useMemo</Link></Menu.Item>
        <Menu.Item key="useReducer"><Link href="/hooks/[hook]" as="/hooks/useReducer">useReducer</Link></Menu.Item>
        <Menu.Item key="useCustomHook"><Link href="/hooks/[hook]" as="/hooks/useCustomHook">useCustomHook</Link></Menu.Item>
      </SubMenu>
      <SubMenu
        key="test"
        title={(
          <span>
            <Icon type="bug" />
                Test
          </span>
        )}
      >
        <Menu.Item key="cypress"><Link href="/test/[type]" as="/test/cypress">Cypress</Link></Menu.Item>
        <Menu.Item key="jest"><Link href="/test/[type]" as="/test/jest">Jest</Link></Menu.Item>
      </SubMenu>
      <SubMenu
        key="websocket"
        title={(
          <span>
            <Icon type="cloud-sync" />
                Web Socket
          </span>
        )}
      >
        <Menu.Item key="weather"><Link href="/weather" as="/weather">Weather API</Link></Menu.Item>
        <Menu.Item key="speed"><Link href="/speed" as="/speed">Simple Speed</Link></Menu.Item>
      </SubMenu>
      <SubMenu
        key="antd"
        title={(
          <span>
            <Icon type="ant-design" />
                Ant Design
          </span>
        )}
      >
        <Menu.Item key="tableSearch"><Link href="/antd/[segment]" as="/antd/tableSearch">Table Header Search</Link></Menu.Item>
      </SubMenu>
      <SubMenu
        key="hoc"
        title={(
          <span>
            <Icon type="coffee" />
                HOC
          </span>
        )}
      >
        <Menu.Item key="counterHoc"><Link href="/hoc" as="/hoc">Counter HOC</Link></Menu.Item>
      </SubMenu>

      <SubMenu
        key="animation"
        title={(
          <span>
            <Icon type="car" />
                Animations in React
          </span>
        )}
      >
        <Menu.Item key="animation"><Link href="/animations" as="/animations">animation</Link></Menu.Item>
      </SubMenu>

      <SubMenu
        key="graphql"
        title={(
          <span>
            <Icon type="radar-chart" />
                Graphql
          </span>
        )}
      >
        <Menu.Item key="github"><Link href="/graphql/github" as="/graphql/github">Github Sample</Link></Menu.Item>
        <Menu.Item key="simple"><Link href="/graphql/simple" as="/graphql/simple">Simple Sample</Link></Menu.Item>
      </SubMenu>

    </Menu>
  </Sider>
);

export default CustomSider;
