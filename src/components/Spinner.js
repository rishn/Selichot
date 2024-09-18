import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin, Flex } from 'antd'; 

const Spinner = () => {
  return (
    <Flex>
      <Spin indicator={<LoadingOutlined style={{ fontSize: '200px', color: '#FFF', align: 'center' }} spin />} />
    </Flex>
  );
};

export default Spinner; // Ensure 'default' export
