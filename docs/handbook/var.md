# 变量

变量有全局变量和组件变量两种，变量只能在动作脚本中使用。

全局变量和组件变量作用域不同，全局变量可以用在所有的地方，组件变量只能在定义变量的组件中使用。

变量的作用是保存各种类型的数据，参与表达式计算，给方法传递参数。

变量的数据定义如下：
``` typescript
export const enum VariableType {
    NUMBER = 'number',
    STRING = 'string',
    BOOLEAN = 'boolean',
    ARRAY = 'array',
    OBJECT = 'object',
}

export type VariableDataValue = number | string | boolean | Array<any> | any;

export interface IVariableData {
    id?: string;
    type: VariableType;
    value: VariableDataValue;
}
```
全局变量保存在数据的global节点中
``` json
"global": {
        "totalPage": {
            "type": "string",
            "value": "noPage"
        },
        "curPage": {
            "type": "number",
            "value": 0
        },
        "isOpen": {
            "type": "boolean",
            "value": false
        },
        "pageArr": {
            "type": "array",
            "value": [0,1,2,3]
        },
        "pageInfo": {
            "type": "object",
            "value": {
                "pageIndex": 1,
                "pageContent":"sayABC"
            }
        }
    },
```
组件的变量保存在组件的prop节点中
``` json
"props": {
    "leftImg": {
        "type": "number",
        "value": 0
    },
    "rightImg": {
        "type": "number",
        "value": 0
    },
    "leftImgPage": {
        "type": "number",
        "value": 0
    },
    "rightImgPage": {
        "type": "number",
        "value": 0
    }
},
```

#### 变量的简单定义法
变量也支持简单的定义法，直接写值，引擎会根据值的类型判断变量的类型
例如，上面的例子也可以写成
``` json
"global": {
        "totalPage": "noPage",
        "curPage": 0,
        "isOpen": false,
        "pageArr": [0,1,2,3],
        "pageInfo": {
            "pageIndex": 1,
            "pageContent":"sayABC"
        }
    },
```
``` json
"props": {
    "leftImg": 0,
    "rightImg": 0,
    "leftImgPage": 0,
    "rightImgPage": 0
},
```

#### 变量在动作脚本中的定义
变量除了在数据中可以定义外，还可以在动作脚本中定义，详见 [动作脚本VFX 文档](./action.md#定义变量)
定义变量
```  typescript
@this = {
    var $num = 5; //number类型
    var $str = "string"; // 字符串类型
    var $bol = true;  // 布尔型
    var $obj = {name:"sukui", age:16}; // 对象类型
    var global$vv = 8; // 定义全局变量
}
```