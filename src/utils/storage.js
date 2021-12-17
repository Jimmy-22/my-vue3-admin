// 存储数据
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.sessionStorage.setItem(key, value)
}

// 获取数据
export const getItem = (key) => {
  const data = window.sessionStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (e) {
    return data
  }
}

// 删除数据
export const removeItem = (key) => {
  window.sessionStorage.removeItem(key)
}

// 删除所有数据
export const removeAllItem = () => {
  window.sessionStorage.clear()
}
