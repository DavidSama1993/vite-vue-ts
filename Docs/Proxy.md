# Proxy
Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。
## 语法
```
  const p = new Proxy(target, handler)
```
### @Params
#### target
需要包装的目标对象（可以使任意类型对象，包括原生数组、函数，甚至另一个Proxy）
#### handler
一个以函数作为属性的对象，个属性中的函数分别定义了各种操作的代理行为
## 方法
#### Proxy.revocable()
创建一个可撤销的 *Proxy* 对象
## handler对象的方法
#### handler.getPrototypeOf()

