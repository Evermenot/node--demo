###自定义包的创建
- 包都要以一个单独的目录而存在

- 每一个包中必须在根目录中提供一个package.json

- package.json中必须包含`name` `version` `main`三个属性

  - name：包的名字

  - version：包的版本

  - main：包的入口文件

  - 可选属性：

    ```
    description：包的简要说明
    keywords：关键字数据，通常用于搜索
    maintainers：维护者数组，每个元素要包含name、email、web可选字段
    contributors：贡献者数组，格式与maintainers相同。包的坐着应该是贡献者数据的第一个元素
    bugs：提交bug的地址，可以是网址或者电子邮件地址
    licenses：许可证数组，每个元素要包含type和url字段
    repositories：仓库托管地址数组，每个元素要包含type、url和path字段
    dependencies：包的依赖，一个关联数组，由包名称和版本号组成。
    devDependencies：开发依赖项，表示一个包在开发期间用到的依赖项
    ```

- 二进制文件应该存放在**bin目录**

- JavaScript代码应该存放在**lib目录**

- 包的说明文档**doc目录**

- 单元测试应该存放在**test目录**

 