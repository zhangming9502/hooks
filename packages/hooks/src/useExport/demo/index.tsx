/**
 * title: Basic usage
 * desc: The function is a simple export.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 导出文件。
 */

import { useExport } from 'ahooks';
import { Button } from 'antd';
import React from 'react';

export default () => {
  const { loading, exportFile } = useExport();

  return (
    <Button
      loading={loading}
      onClick={() => {
        exportFile('https://codeload.github.com/alibaba/hooks/zip/refs/tags/v3.7.2', {});
      }}
    >
      导出ahooks压缩包
    </Button>
  );
};