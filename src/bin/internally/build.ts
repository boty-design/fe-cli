/*
 * @Author: Cookie
 * @Description: 构建相关
 */

import { buildWebpack, buildRollup, devServerWebpack } from '@/index'

/**
 * @description: webpack 构建
 * @param {*}
 * @return {*}
 */

export const webpackDevCommand = {
  version: '0.1.0',
  description: 'start webpack build',
  command: 'start',
  action: () => {
    devServerWebpack()
  }
}

export const webpackBuildCommand = {
  version: '0.1.0',
  description: 'start webpack build',
  command: 'build',
  action: () => {
    buildWebpack()
  }
}

/**
* @description: rollup 构建
* @param {*}
* @return {*}
*/
export const rollupCommand = {
  version: '0.1.0',
  description: 'start rollup build',
  command: 'rollup:dev',
  action: () => buildRollup()
}

export default [
  webpackDevCommand,
  webpackBuildCommand,
  rollupCommand
]