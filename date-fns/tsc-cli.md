```bash

#使用 tsconfig.json 的配置
tsc

#编译 src 目录的所有 .ts 文件
tsc src/*.ts

#只编译 index.ts,使用默认编译选项
tsc index.ts

#创建一个tsconfig.json文件。在工作目录中添加推荐设置
tsc --init

#打印编译器的版本。
tsc --version -v

#在CLI上提供帮助的本地信息。
tsc --help -h

#指定编译配置文件
tsc --project 

tsc --project src/tsconfig.product.json

tsc --project tsconfig.json

# 监视输入文件
tsc --watch -w

tsc --project src/tsconfig.product.json --watch

#打印最终配置而不是构建
tsc --showConfig

#为所有编译后的文件指定一个输出文件夹
tsc --outDir

tsc --project src/tsconfig.product.json --watch --outDir src/out

#显示所有编译器选项
tsc --all

#打印作为编译部分的文件的名称，然后停止处理
tsc --listFilesOnly

# 支持导入任意扩展名的文件，只要有声明文件
tsc --allowArbitraryExtensions

#删除所有项目的输出
tsc --clean

# 如果项目过时，则构建一个或多个项目及其依赖项
tsc --build -b
```

Compiler option '--project' may not be used with '--build'