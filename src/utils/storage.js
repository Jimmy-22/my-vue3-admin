// 存储数据
const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.sessionStorage.setItem(key, value)
}

// 获取数据
const getItem = (key) => {
  const data = window.sessionStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (e) {
    return data
  }
}

// 删除数据
const removeItem = (key) => {
  window.sessionStorage.removeItem(key)
}

// 删除所有数据
const removeAllItem = () => {
  window.sessionStorage.clear()
}

export { setItem, getItem, removeAllItem, removeItem }
