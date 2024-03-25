# addWeeks

将指定的周数添加到给定的日期

## 导入
```js
// ESM
import { addWeeks } from 'date-fns'

// ES2015
import addWeeks from 'date-fns/addWeeks'

// commonjs
const addWeeks = require('date-fns/addWeeks')
```

## 语法

```js
addWeeks(date, amount)
```

## 参数
date 类型：Date | Number 描述：更改日期

amount 类型：Date | Number 描述：需要增加的周数。正小数将使用Math.floor进行舍入。小于0的小数将使用Math.ceil进行舍入

## 返回值：

类型：Date

新的日期增加了几周

# differenceInCalendarWeeks

获取给定日期之间的日历周数

```js

import { differenceInCalendarWeeks } from 'date-fns'

```
# isThisWeek

给定的日期与当前日期是否在同一周内

```js
import { isThisWeek } from 'date-fns'
```

# addDays

将指定的天数添加到给定的日期。

导入：

```js
import { addDays } from 'date-fns'
```

语法：

```js
addDays(date, amount)
```

参数：

date:要更改的日期

类型：Date | Number

amount:需要添加的天数。正小数将使用Math.floor进行舍入。小于0的小数将使用Math.ceil进行舍入

类型：Number

返回值：新的日期对象，加上指定的天数

返回值类型：Date

# addBusinessDays

将指定的工作日数(星期一到星期五)添加到给定日期，忽略周末。

导入：

```js
import { addBusinessDays } from 'date-fns'
```

语法：

```js
addBusinessDays(date, amount)
```

# differenceInBusinessDays

获取给定日期之间的工作日周期数。工作日不是周末。与differenceInCalendarDays类似，该函数在计算差值之前先从日期中删除时间

导入：

```js
import { differenceInBusinessDays } from 'date-fns'
```

语法：

```js
differenceInBusinessDays(dateLeft, dateRight)
```