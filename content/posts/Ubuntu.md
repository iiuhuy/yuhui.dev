---
title: Ubuntu 
type: title
date: 2020-04-22 21:54:29
categories: [tech]
tags: [roadmap]
---

# Ubuntu 18.04

- [01 install MySQL](#01)
- [02 Linux 在终端通过命令打开文件夹](#02)
- [03 配置 Python3 selenium 环境](#03)
- [04 安装 go 环境](#04)
- [05 gzweb 安装](#05)
- [06 从 nginx 官网编译 nginx](#06)
- [07 Ubuntu 服务器安装 Node.js ](#07)
- [08 升级 CMake ](#08)
- [09 Install Apache Maven](#09)
- [10 Ubuntu 安装 SourceInsight](#10)

---

## <span id="01"> 01 install MySQL </span>

<details>
<summary> 详情信息 </summary>

```bash
$ sudo apt-get install net-tools
$ sudo apt-get install mysql-server mysql-client
$ sudo netstat -tap | grep mysql  # 查看是否安装成功
$ sudo mysql_secure_installation # 运行安全脚本，设置 root 用户密码和一些其他的设置
$ systemctl status mysql.service # 查看 mysql 的运行状态。如下图
```

<img src="https://raw.githubusercontent.com/AlvinMi/2019-Pic/master/2019/20191108235140.png"/>

登录到 MySQL

```bash
$ sudo mysql -uroot -p
```

修改远程设置：

修改绑定地址为 0.0.0.0，原来默认绑定 127.0.0.1 注释掉。或者直接注释掉！

```bash
$ sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf
bind-address = 0.0.0.0
# bind-address = 127.0.0.1
```

进入 MySQL 程序修改 root 账户的远程访问的权限。否则远程用 Navicat 访问时，会报 1130 错误：

```bash
mysql>GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '自己的数据库密码' WITH GRANT OPTION;
mysql>flush privileges;
```

退出，重启:

```bash
$ systemctl restart mysql.service
```

在 Linux -> Ubuntu 下使用 [navicat](https://www.navicat.com.cn/download/navicat-premium) 链接打开的时候, 乱码了。

首先是安装: 下载完成后在目录下面解压

```bash
$ tar -zxvf  navicat121_premium_cs_x64.tar.gz
$ mv navicat121_premium_cs_x64.tar.gz  ./navicat64
$ ./start_navicat    # 运行
```

</details>

## <span id="02"> 02 Linux 在终端通过命令打开文件夹 </span>

<details>
<summary> 详情信息 </summary>

使用 `nautilus`

linux 图形化桌面 GNOME 包括了一个叫做 `Nautilus` 的文件管理器，可以通过安装 `nautilus` 来使用 nautilus 命令，在命令窗口中直接打开指定的文件夹。

```bash
# 安装nautilus
$ sudo apt-get install nautilus
# 打开当前位置的文件夹
$ nautilus .
# 打开指定位置的文件夹
$ nautilus /usr/local
```

</details>

## <span id="03"> 03 配置 Python3 selenium 环境 </span>

<details>
<summary> 详情信息 </summary>

安装 Python3. 略...

- 安装库: `pip install selenium`
- 配置浏览器驱动: [下载驱动](https://pypi.org/project/selenium/), 不能 FQ 可以在 `npm.taobao.org` 镜像里面找到对应浏览器的 WebDrivers, 例如 `https://npm.taobao.org/mirrors/chromedriver/77.0.3865.10/`, 下载完成后将驱动移动到 `/usr/local/bin/` 目录下即可.
- 调试环境, 代码片段:

```python
from selenium  import webdriver
# 打开浏览器
driver = webdriver.Chrome()
driver.get("https://www.baidu.com")
```

</details>

## <span id="04"> 04 安装 go 环境 </span>

<details>
<summary> 详情信息 </summary>

- 1.[下载源码包](https://golang.google.cn) 使用 Linux 命令查看系统位数 `uname -m` `x86_64` 下载 64 位.
- 2.解压&配置:

```bash
$ tar -C /usr/local -xzf go1.14.linux-amd64.tar.gz
$ export PATH=$PATH:/usr/local/go/bin
# 配置 zsh 加入 .zshrc 文件, 执行 source .zshrc 即可
```

- [gvm](https://awesomeopensource.com/project/moovweb/gvm) go 版本管理工具

参考:

- [golang install linux](https://golang.google.cn/doc/install?download=go1.14.linux-amd64.tar.gz)
- [安装 GO](https://github.com/astaxie/build-web-application-with-golang/blob/master/zh/01.1.md)

</details>

## <span id="05"> 05 gzweb 安装 </span>

<details>
<summary> 详情信息 </summary>

[Gzweb](http://gazebosim.org/gzweb) 是 Gazebo 的 WebGL 客户端.

- [安装步骤](http://gazebosim.org/gzweb#gzweb_installation)
- [Gzweb 源码](https://bitbucket.org/osrf/gzweb) 源码分两部分: `gzweb/gz3d` 内部的 Javascript 代码（用于可视化）和 `gzweb/gzbridge` 内部的 C++ 代码（用于与 gzserver 进行通信）。

</details>

---

## <span id="06"> 06 从 nginx 官网编译 nginx </span>

<details>
<summary> 详情信息 </summary>

主要 4 步: 1.下载 Nginx, 从[官网](http://nginx.org/en/download.html)
在服务器执行:

```bash
$ wget http://nginx.org/download/nginx-1.6.2.tar.gz
$ tar zxvf nginx-1.6.2.tar.gz
$ cd nginx-1.6.2
```

2.Configure
`./configure --help | more`, 查看支持哪些参数.

- --prefix 设置安装目录

使用默认的参数编译:

```bash
$ ./configure --prefix=/home/web/nginx
```

configure 过程中遇到报错都需要安装一下对应的库, 如: `error:the HHTP rewrite module requires the PCRE library` 需要装 pcre 库, `./configure: error: SSL modules require the OpenSSL library.` 需要装 openssl 库

3.编译

执行 `make` 编译, 我编译过程中遇到如图所示的错误:

<img src="https://raw.githubusercontent.com/AlvinMi/2019-Pic/master/2020/20200328011957.png"/>

`src/core/ngx_murmurhash.c:37:11: error: this statement may fall through [-Werror=implicit-fallthroug=]`
修改 `/objs/Makefile` 文件, 将 `-Werror` 去掉再重新 make 编译就可以了。

- 编译完成后可以在 `objs` 文件看到编译后最终运行的 nginx 二进制文件, 且如果升级, 不能 `make install`, 需要替换 nginx 文件
- C 语言编译生成的中间都会在 `src` 目录
- 动态模块编译后会生成 so 动态文件, 也会放在 `objs` 目录

  4.安装

```bash
$ make install
```

就可以在 --prefix 指定的目录中看到以下目录:

- conf: 决定 nginx 功能的配置文件目录
- html
- log: Access log 和 error log
- sbin: nginx 二进制文件

</details>

## <span id="07"> 07 Ubuntu 服务器安装 Node.js </span>

<details>
<summary> 详情信息 </summary>

```bash
# 如果是 12+, 改为 setup_12.x 即可
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
$ sudo apt install nodejs
$ node --version
$ npm --version

# nvm
# zsh 同理
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
# 根据命令提示, 将 export 开始的命令在终端执行一次
$ source ~/.nvm/nvm.sh
$ nvm --version
0.34.0
# 就可以使用 nvm 安装 node 版本
$ nvm install node

安装 Yarn
$ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
$ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
$ sudo apt update
$ sudo apt install yarn
$ yarn --version
1.22.4
```

</details>

## <span id="08"> 08 升级 CMake </span>

<details>
<summary> 详情信息 </summary>

若用 cmake 编译过 ros ，千万别傻乎乎地随便找个帖子执行下面的命令：

```bash
sudo apt-get autoremove cmake
```

会把之前用 cmake 编译好的包都给卸载掉。

简单点的方法是下载 cmake 压缩包，直接建立软链接覆盖掉系统的 cmake，[压缩包网址](https://cmake.org/files/) 。
以 3.13.0 版本为例:

```bash
$ cd ~
$ wget https://cmake.org/files/v3.13/cmake-3.13.0-Linux-x86_64.tar.gz
$ tar -xzvf cmake-3.13.0-Linux-x86_64.tar.gz

# 解压出来的包，将其放在 /opt 目录下，其他目录也可以，主要别以后不小心删了
$ sudo mv cmake-3.13.0-Linux-x86_64 /opt/cmake-3.13.0

# 建立软链接
$ sudo ln -sf /opt/cmake-3.13.0/bin/*  /usr/bin/

# 查看 cmake 版本
$ cmake --version
cmake version 3.13.0

CMake suite maintained and supported by Kitware (kitware.com/cmake).
```

</details>

## <span id="09"> 09 Install Apache Maven </span>

<details>
<summary> 详情信息 </summary>

> 前提是安装了 Java 环境，配置了 JDK 环境变量。

下载 [Maven](http://downloads.apache.org/maven/) 的地址： http://downloads.apache.org/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz

```bash
$ java -version
java version "1.8.0_201"
Java(TM) SE Runtime Environment (build 1.8.0_201-b09)
Java HotSpot(TM) 64-Bit Server VM (build 25.201-b09, mixed mode)

$ cd /opt/
$ sudo wget http://downloads.apache.org/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz
$ sudo tar -xvzf apache-maven-3.6.3-bin.tar.gz
$ sudo mv apache-maven-3.6.3 maven
$ sudo vim /etc/profile.d/mavenenv.sh
# 添加下面的三行：注意自己的 JDK 路径
export JAVA_HOME='/usr/local/java/jdk1.8.0_201'
export M2_HOME=/opt/maven
export PATH=${M2_HOME}/bin:${PATH}

$ sudo chmod +x /etc/profile.d/mavenenv.sh
$ source /etc/profile.d/mavenenv.sh
$ mvn --version
Apache Maven 3.6.3 (cecedd343002696d0abb50b32b541b8a6ba2883f)
Maven home: /opt/maven
Java version: 1.8.0_201, vendor: Oracle Corporation, runtime: /usr/local/java/jdk1.8.0_201/jre
Default locale: zh_CN, platform encoding: UTF-8
OS name: "linux", version: "4.15.0-94-generic", arch: "amd64", family: "unix"
```

</details>

## <span id="10"> 10 Ubuntu 安装 SourceInsight </span>

<details>
<summary> 详情信息 </summary>

安装 wine，下载完 sourceInsight 后，

```bash
$ wine sourceinsight40102-setup.exe
```

安装过程和 Windows 一样，默认下一步也成。

启动 SourceInsight 工程，需要稍微简单配置一下。参考：[](https://blog.csdn.net/LEON1741/article/details/54315506)
配置一个 Bash 脚本用于启动。

在 `/usr/sbin` 下新建一个 `opensi.sh` 文件

配置如下：

```bash
# !/bin/bash
wine ~/.wine/drive_c/Program\ Files\ \(x86\)/Source\ Insight\ 4.0/sourceinsight4.exe
```

赋予权限:

```bash
$ sudo chmod a+x opensi.sh
```

就能在命令行中输入 `opensi.sh` 启动了。

</details>
