# homeworkBox_server（毕设后台API文档）

## 盒子相关

### 1. 随机数生成

#### URL：/homework/getRandom

#### 请求方式：GET

#### 参数列表：无

#### 返回结果说明：

字段名|类型|必选|说明
-----|---|----|---|
id|Number|✅|作为盒子id

#### 返回JSON示例：
```
{
  status: 200,
  data: {
    id: 18032
  },
  msg: `随机数成功拿取`
}
```
### 2. 创建盒子

#### URL：/homework/createBox

#### 请求方式：POST

#### 参数列表：

参数名|类型|必选|说明
-----|---|----|---|
boxId|string|✅|盒子id，由第一个接口返回
createdId|string|✅|创建盒子者id（微信id）
className|string|✅|盒子所在的班级名称
course|string|✅|盒子名称（课程名称）

#### 返回结果说明：

字段名|类型|必选|说明
-----|---|----|---|
boxId|string|✅|盒子id
createdId|string|✅|创建盒子者id（微信id）
className|string|✅|盒子所在的班级名称
course|string|✅|盒子名称（课程名称）

#### 返回JSON示例：
```
{
  status: 200,
  data: {
    boxId: "19320",
    createId: "wxid7201dsa2idnas2",
    className: "网络1502",
    course: "数据挖掘"
  },
  msg: "创建成功"
}
```

### 3. 加入盒子

#### URL：/homework/addUserBox

#### 请求方式：POST

#### 参数列表：

参数名|类型|必选|说明
-----|---|----|---|
boxId|string|✅|盒子id，由第一个接口返回
userId|string|✅|加入盒子者id（微信id）

#### 返回结果说明：

字段名|类型|必选|说明
-----|---|----|---|
boxId|string|✅|盒子id，由第一个接口返回
userId|string|✅|加入盒子者id（微信id）

#### 返回JSON示例：
```
{
  status: 200,
  data: {
    boxId: "28210",
    userId: "wxndksdfasmf232sad2s"
  },
  msg: "添加对应关系成功"
}
```

### 4. 查找用户创建的盒子

#### URL：/homework/getBoxes

#### 请求方式：GET

#### 参数列表：

参数名|类型|必选|说明
-----|---|----|---|
createId|string|✅|创建盒子者id（微信id）

#### 返回结果说明：

字段名|类型|必选|说明
-----|---|----|---|
boxId|string|✅|盒子id
createdId|string|✅|创建盒子者id（微信id）
className|string|✅|盒子所在的班级名称
course|string|✅|盒子名称（课程名称）

#### 返回JSON示例：
```
{
  status: 200,
  data: {
    [{
      boxId: "19320",
      createId: "wxid7201dsa2idnas2",
      className: "网络1502",
      course: "数据挖掘"
    }, {
      boxId: "11220",
      createId: "wxdsf2345dsa2idnas2",
      className: "软件1602",
      course: "计算机网络"
    }]
  },
  msg: "查找成功"
}
```

### 5. 查找用户加入的盒子

#### URL：/homework/getAddBoxes

#### 请求方式：GET

#### 参数列表：

参数名|类型|必选|说明
-----|---|----|---|
userId|string|✅|创建加入者id（微信id）

#### 返回结果说明：

字段名|类型|必选|说明
-----|---|----|---|
boxId|string|✅|盒子id
createdId|string|✅|创建盒子者id（微信id）
className|string|✅|盒子所在的班级名称
course|string|✅|盒子名称（课程名称）

#### 返回JSON示例：
```
{
  status: 200,
  data: {
    [{
      boxId: "19320",
      createId: "wxid7201dsa2idnas2",
      className: "网络1502",
      course: "数据挖掘"
    }, {
      boxId: "11220",
      createId: "wxdsf2345dsa2idnas2",
      className: "软件1602",
      course: "计算机网络"
    }]
  },
  msg: "查找成功"
}
```

### 5. 查找用户加入的盒子

#### URL：/homework/getAddBoxes

#### 请求方式：GET

#### 参数列表：

参数名|类型|必选|说明
-----|---|----|---|
userId|string|✅|创建加入者id（微信id）

#### 返回结果说明：

字段名|类型|必选|说明
-----|---|----|---|
boxId|string|✅|盒子id
createdId|string|✅|创建盒子者id（微信id）
className|string|✅|盒子所在的班级名称
course|string|✅|盒子名称（课程名称）

#### 返回JSON示例：
```
{
  status: 200,
  data: {
    [{
      boxId: "19320",
      createId: "wxid7201dsa2idnas2",
      className: "网络1502",
      course: "数据挖掘"
    }, {
      boxId: "11220",
      createId: "wxdsf2345dsa2idnas2",
      className: "软件1602",
      course: "计算机网络"
    }]
  },
  msg: "查找成功"
}
```

## 用户相关

### 1. 添加用户

#### URL：/homework/addUser

#### 请求方式：POST

#### 参数列表：

参数名|类型|必选|说明
-----|---|----|---|
userId|string|✅|用户id（微信id）
name|string|✅|用户名（微信昵称）
portrait|string|✅|用户头像（微信头像）

#### 返回结果说明：

字段名|类型|必选|说明
-----|---|----|---|
userId|string|✅|用户id（微信id）
name|string|✅|用户名（微信昵称）
portrait|string|✅|用户头像（微信头像）

#### 返回JSON示例：
```
{
  status: 200,
  data: {
    userId: "wxidwd6218dwdv2edb",
    name: "Youngzhang",
    portrait: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKokVJ7UEKiaDcLYzXK3mkMWgGxZBezaB5ticXicMIC6qZfBXB4bloRh0QkMha20M6ESBSfYBULDNtcg/132"
  },
  msg: "添加成功"
}
```

### 2. 查找用户

#### URL：/homework/findUser

#### 请求方式：GET

#### 参数列表：

参数名|类型|必选|说明
-----|---|----|---|
userId|string|✅|用户id（微信id）

#### 返回结果说明：

字段名|类型|必选|说明
-----|---|----|---|
userId|string|✅|用户id（微信id）
name|string|✅|用户名（微信昵称）
portrait|string|✅|用户头像（微信头像）

#### 返回JSON示例：
```
{
  status: 200,
  data: {
    userId: "wxidwd6218dwdv2edb",
    name: "Youngzhang",
    portrait: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKokVJ7UEKiaDcLYzXK3mkMWgGxZBezaB5ticXicMIC6qZfBXB4bloRh0QkMha20M6ESBSfYBULDNtcg/132"
  },
  msg: "查找成功"
}
```

### 3. 查找某个盒子下的所有用户

#### URL：/homework/getUsers

#### 请求方式：GET

#### 参数列表：

参数名|类型|必选|说明
-----|---|----|---|
boxId|string|✅|盒子id

#### 返回结果说明：

字段名|类型|必选|说明
-----|---|----|---|
userId|string|✅|用户id（微信id）
name|string|✅|用户名（微信昵称）
portrait|string|✅|用户头像（微信头像）

#### 返回JSON示例：
```
{
  status: 200,
  data: {
    [{
      userId: "wxidwd6218dwdv2edb",
      name: "Youngzhang",
      portrait: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKokVJ7UEKiaDcLYzXK3mkMWgGxZBezaB5ticXicMIC6qZfBXB4bloRh0QkMha20M6ESBSfYBULDNtcg/132"
    },{
      userId: "wxidsal2d6218dw2sd2e45d",
      name: "pretty",
      portrait: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKokVJ7UEKiaDcLYzXK3mkMWgGxZBezaB5ticXicMIC6qZfBXB4bloRh0QkMha20M6ESBSfYBULDNtcg/132"
    }]
  },
  msg: "查找成功"
}
```

## 作业相关

### 1. 发布作业

#### URL：/homework/addHomework

#### 请求方式：POST

#### 参数列表：

参数名|类型|必选|说明
-----|---|----|---|
boxId|string|✅|盒子id
title|string|✅|作业标题
text|string|✅|作业内容
deadline|string|✅|作业截止日期

#### 返回结果说明：

字段名|类型|必选|说明
-----|---|----|---|
boxId|string|✅|盒子id
title|string|✅|作业标题
text|string|✅|作业内容
deadline|string|✅|作业截止日期

#### 返回JSON示例：
```
{
  status: 200,
  data: {
    boxId: "28103",
    title: "大物第一章作业",
    text: "第一章课后习题1，3，5题",
    deadline: "2019-04-19"
  },
  msg: "发布成功"
}
```

### 2. 查找某个盒子下的作业

#### URL：/homework/getBoxHomework

#### 请求方式：GET

#### 参数列表：

参数名|类型|必选|说明
-----|---|----|---|
boxId|string|✅|盒子id

#### 返回结果说明：

字段名|类型|必选|说明
-----|---|----|---|
boxId|string|✅|盒子id
title|string|✅|作业标题
text|string|✅|作业内容
deadline|string|✅|作业截止日期

#### 返回JSON示例：
```
{
  status: 200,
  data: {
    boxId: "28103",
    title: "大物第一章作业",
    text: "第一章课后习题1，3，5题",
    deadline: "2019-04-19"
  },
  msg: "查找成功"
}
```

### 3. 查找创建盒子者发布过的所有作业

#### URL：/homework/getHomework

#### 请求方式：GET

#### 参数列表：

参数名|类型|必选|说明
-----|---|----|---|
userId|string|✅|用户id（微信id）

#### 返回结果说明：

字段名|类型|必选|说明
-----|---|----|---|
boxId|string|✅|盒子id
title|string|✅|作业标题
text|string|✅|作业内容
deadline|string|✅|作业截止日期

#### 返回JSON示例：
```
{
  status: 200,
  data: {
    [{
      boxId: "28103",
      title: "大物第一章作业",
      text: "第一章课后习题1，3，5题",
      deadline: "2019-04-19"
    }, {
      boxId: "10203",
      title: "大英第四章作业",
      text: "第四章课后习题2，4，6题",
      deadline: "2019-04-21"
    }]
  },
  msg: "查找成功"
}
```
## 资源相关

### 1. 发布资源

#### URL：/homework/createResources

#### 请求方式：POST

#### 参数列表：

参数名|类型|必选|说明
-----|---|----|---|
boxId|string|✅|盒子id
title|string|✅|资源标题
url|string|✅|资源路径


#### 返回结果说明：

字段名|类型|必选|说明
-----|---|----|---|
id|string|✅|id
boxId|string|✅|盒子id
title|string|✅|资源标题
url|string|✅|资源标题

#### 返回JSON示例：
```
{
  status: 200,
  data: {
    id: "0000001",
    boxId: "28103",
    title: "大物第一章作业",
    url: "D:\wamp\www\homeworkBox\homeworkBox_server\upload\106251557235566000.ppt"
  },
  msg: "发布成功"
}
```

### 2. 查找某个盒子下的所有资源
#### URL：/homework/findBoxResources

#### 请求方式：GET

#### 参数列表：

参数名|类型|必选|说明
-----|---|----|---|
boxId|string|✅|盒子id

#### 返回结果说明：

字段名|类型|必选|说明
-----|---|----|---|
boxId|string|✅|盒子id
title|string|✅|资源标题
url|string|✅|资源路径

#### 返回JSON示例：
```
{
  status: 200,
  data: {
    boxId: "28103",
    title: "大物第一章ppt",
    url: "D:\wamp\www\homeworkBox\homeworkBox_server\upload\106251557235566000.ppt"
  },
  msg: "查找成功"
}
```

### 3. 查找个人主页下的所有资源
#### URL：/homework/getUserResources

#### 请求方式：GET

#### 参数列表：

参数名|类型|必选|说明
-----|---|----|---|
userId|string|✅|用户id（微信id）

#### 返回结果说明：

字段名|类型|必选|说明
-----|---|----|---|
boxId|string|✅|盒子id
title|string|✅|资源标题
url|string|✅|资源路径

#### 返回JSON示例：
```
{
  status: 200,
  data: {
    [{
      boxId: "28103",
      title: "大物第一章ppt",
      url: "D:\wamp\www\homeworkBox\homeworkBox_server\upload\106251557235566000.ppt"
    }, {
      boxId: "10203",
      title: "大英第四章ppt",
      url: "D:\wamp\www\homeworkBox\homeworkBox_server\upload\106251557235566000.ppt"
    }]
  },
  msg: "查找成功"
}
```
### 4. 下载资源

#### URL：/homework/downloadResources

#### 请求方式：GET

#### 参数列表：

参数名|类型|必选|说明
-----|---|----|---|
boxId|string|✅|盒子id
title|string|✅|资源标题

#### 返回结果说明：

字段名|类型|必选|说明
-----|---|----|---|
boxId|string|✅|盒子id
title|string|✅|资源标题
url|string|✅|资源路径

#### 返回JSON示例：
```
{
  status: 200,
  data: {
    boxId: "28103",
    title: "大物第一章ppt",
    url: "C:\Users\youngzhang\Downloads\大物第一章ppt.ppt"
  },
  msg: "下载成功"
}
```