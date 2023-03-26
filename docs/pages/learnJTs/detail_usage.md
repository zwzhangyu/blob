# 工具方法详细教程

## 获取数据类型
`getDataType`用来获取传入参数的数据类型

### getDataType
使用方式：
传入一个参数，会返回数据类型的字符串

```js
// 引入
import {getDataType} from 'learnjts'

// 使用
getDataType(100) // 返回一个字符串 'number'
console.log(getDataType(100)) // number

let obj ={book:'js深入学习指南'}
console.log(getDataType(obj)) // object
```

### 详细解析
`getDataType`可以准确的判断出参数的数据类型。number、string、array、object等
#### 源码
```js
function getDataType(target){
    let type = typeof target
    // 判断是否是复杂数据类型，如果不是则直接返回
    if(type === 'object'){
        return Object.prototype.toString.call(target)
                .replace(/^\[object (\S+)\]$/, '$1').toLowerCase();
    }else{
        return type
    }
}
```
首先使用typeof判断参数是不是基础类型，如果是就直接返回，如果不是就是用 `Object.prototype.toString` 来获取数据类型
,toString()方法获取的数据类型都是有规律的，所以使用正则进行匹配，截取数据类型，最后以 小写字符串 的形式统一返回数据类型

#### 知识点
- `typeof `只能判断基础数据类型，并且当typeof判断null时返回一个object

- 而 `instanceof` 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。它可以判断复杂的引用数据类型，但是不能正确判断基础数据类型

- toString() 是 Object 的原型方法，调用该方法，可以统一返回格式为 “[object Xxx]” 的字符串，其中 Xxx 就是对象的类型。对于 Object 对象，直接调用 toString() 就能返回 [object Object]，而对于其他对象，则需要通过 call 来调用


## 数字转中文
### capitalNum
`capitalNum`用来将传入的阿拉伯数字转成中文数字，目前暂时只支持100一下的数字

使用方式：
```js
// 引入
import {capitalNum} from 'learnjts'

// 使用
capitalNum(1) // 一
console.log(capitalNum(1)) // 一

console.log(capitalNum(10)) // 十
console.log(capitalNum(16)) // 十六
console.log(capitalNum(20)) // 二十
console.log(capitalNum(22)) // 二十二
```

### 详细解析
做的项目中经常从后台返回的是数字序数，但是要求却是用中文做序数，所以写了这个函数

::: warning
不支持负数和小数,且只支持100以下的整数
:::
#### 源码
```js
function capitalNum(num){
    const capitalList = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
    if(num < 0) {
        return "不支持负数"
    }else if(num >= 0 && num<=10){
        // 返回十以内的数字
        return capitalList[num]
    }else if(num > 10 && num < 100){
        // 十位数
        const decade = String(num)[0];
        // 个位数
        const single = String(num)[1];
        if(num < 20){
            return `十${capitalList[Number(single)]}`;
        }
        // 进行拼接，如果个位数为0 
        if(Number(single) === 0){
            return `${capitalList[Number(decade)]}十`;
        }else{
            // 个位数不为0
            return `${capitalList[Number(decade)]}十${capitalList[Number(single)]}`;
        }
    }else{
        return "不支持100及以上的数字"
    }
}
```
## 深拷贝

### deepClone

 `deepClone`可以将一个复杂的数据类型复制出来，重新开辟一个存储空间进行存储数据

使用方式：只需要传入一个参数
```js
// 引入
import {deepClone} from 'learnjts'

// 使用
let num = deepClone(1) // 可以拷贝基础数据类型

let arr = deepClone([1,2,3,4]) //可以拷贝数组，亦可以拷贝复杂数据对象
```

### 详细解析

深拷贝将会在新对象中创建一 个新的和原始对象中对应字段相同（内容相同）的字段，也就是说这个引用和原始对象的引用是不同的，我们在改变新对象中的这个字段的时候是不会影响到原始对象中对应字段的内容。

#### 源码
```js
// 创建一个判断是否是复杂类型的方法
const isComplexDataType = (target) => {
    return (typeof target === 'object' || typeof target === 'function') && (target !== null)
}

const deepClone = function (target, hash = new WeakMap()) {
    // 不是复杂数据类型类型直接返回
    if(!isComplexDataType(target)) return target
    // 日期对象直接返回一个新的日期对象
    if (target.constructor === Date) return new Date(target)
    // 正则对象直接返回一个新的正则对象
    if (target.constructor === RegExp) return new RegExp(target)     
    // 如果循环引用了就用 weakMap 来解决
    if (hash.has(target)) return hash.get(target)
    // 获取目标元素的所有自身属性
    let allDesc = Object.getOwnPropertyDescriptors(target)
    // 遍历传入参数所有键的特性
    let cloneTarget = Object.create(Object.getPrototypeOf(target), allDesc)
    //继承原型链
    hash.set(target, cloneTarget)
    for (let key of Reflect.ownKeys(target)) { 
        cloneTarget[key] = (isComplexDataType(target[key]) && typeof target[key] !== 'function') ? deepClone(target[key], hash) : target[key]
    }
    return cloneTarget
}
```
- `Object.getOwnPropertyDescriptors()` 方法用来获取一个对象的所有自身属性的描述符。
返回值：所指定对象的所有自身属性的描述符，如果没有任何自身属性，则返回空对象。

- `Object.getPrototypeOf()` 方法返回指定对象的原型（内部`[[Prototype]]`属性的值）
- `Object.create()`方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
- 静态方法 Reflect.ownKeys 返回一个由目标对象自身的属性键组成的数组。

## 防抖
### debounce
`debounce` 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。

使用方式:传入一个方法名，一个时间（毫秒）;返回一个函数，需要用一个变量接收，使用时调用
```js
let newFun = debounce(funName,200) //200ms后执行funName

newFun() // 执行这个方法
```
### 解析
防抖，防止抖动，以免把一次事件误认为多次，敲键盘就是一个每天都会接触到的防抖操作。

想要了解一个概念，必先了解概念所应用的场景。在 JS 这个世界中，有哪些防抖的场景呢

- 登录、发短信等按钮避免用户点击太快，以致于发送了多次请求，需要防抖
- 调整浏览器窗口大小时，resize 次数过于频繁，造成计算过多，此时需要一次到位，就用到了防抖
- 文本编辑器实时保存，当无任何更改操作一秒后进行保存

可以看出来防抖重在清零 clearTimeout(timer)

::: tip
防抖：防止抖动，单位时间内事件触发会被重置，避免事件被误伤触发多次。代码实现重在清零 clearTimeout。防抖可以比作等电梯，只要有一个人进来，就需要再等一会儿。业务场景有避免登录按钮多次点击的重复提交。
:::
#### 源码
```js
function debounce(funName, delay) {
    return function (args) {
        let that = this
        let _args = args
        clearTimeout(funName.id)
        // 每执行一次函数都会默认有一个id值，以函数id值作为定时器id
        funName.id = setTimeout(function () {
            funName.call(that, _args)
        }, delay)
    }
}
```
**重新赋值this的原因:**this 必须指向调用它的对象，而定时器里面指向全局对象 window 是不合适的。

## 节流
### throttle
`throttle` 高频事件触发，但在 n 秒内只会执行一次，所以节流会稀释函数的执行频率

使用方式:传入一个方法名，一个时间（毫秒）;返回一个函数，需要用一个变量接收，使用时调用
```js
let newFun = throttle(funName,200) //200ms后执行funName

newFun() // 执行这个方法
```
### 解析
节流，控制水的流量。控制事件发生的频率，如控制为 1s 发生一次，甚至 1 分钟发生一次。与服务端(server)及网关(gateway)控制的限流 (Rate Limit) 类似。

- scroll 事件，每隔一秒计算一次位置信息等
- 浏览器播放事件，每个一秒计算一次进度信息等
- input 框实时搜索并发送请求展示下拉列表，每隔一秒发送一次请求 (也可做防抖)

代码如下，可以看出来节流重在加锁 timer=timeout
::: tip
节流：控制流量，单位时间内事件只能触发一次，与服务器端的限流 (Rate Limit) 类似。代码实现重在开锁关锁 timer=timeout; timer=null。节流可以比作过红绿灯，每等一个红灯时间就可以过一批。
:::
#### 源码
```js
function throttle(funName,wait){
    let timer;
    return function(){
        let _this = this;
        let args = arguments;
        if(!timer){
            timer = setTimeout(function(){
                timer = null
                funName.applay(_this,args)
            },wait)
        }
    }
}
```

## 数组乱序
使用洗牌算法来进行数组乱序
### shuffle


### 详细解析



