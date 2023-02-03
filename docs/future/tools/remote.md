---
tags: [linux, remote, HowardZhangdqs]
description: Linux系统远程控制解决方案推荐
title: Linux 远程控制
sidebar_position: 1
---

```mdx-code-block

import CodeBlock from '@theme/CodeBlock';

export const Logo = ({ icon, content }) => (
    <p align="center">
        <div style={{ "display": "inline-block" }}>
            <icon icon={ icon } width="4em" height="4em" />
            <br />
            { content }
        </div>
    </p>
);

export const Bash = ({path}) => (
    <>
        <font color="#16c60c">{`shiercoding@shiercoding:`}</font>
        <font color="#3b78ff">{path ? path : `~`}</font>{`$ `}
    </>
)

export const DateFormat = function(d, fmt){
    var o = {
        "M+" : d.getMonth()+1,                 //月份
        "d+" : d.getDate(),                    //日
        "h+" : d.getHours(),                   //小时
        "m+" : d.getMinutes(),                 //分
        "s+" : d.getSeconds(),                 //秒
        "q+" : Math.floor((d.getMonth()+3)/3), //季度
        "S"  : d.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1, (d.getFullYear()+"").substr(4 - RegExp.$1.length));
    } 
    for(var k in o){
        if(new RegExp("("+ k +")").test(fmt)){
        fmt = fmt.replace(
            RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));  
        }       
    }
    return fmt;
}

```

# Linux 远程控制<icon icon="gg:remote" inline={true}/>

```mdx-code-block

```

直接使用命令行

## SSH

### 安装

虽然完整版 Ubuntu<icon icon="logos:ubuntu" inline={ true }/> 好像默认安装了 SSH 服务，但是还是有必要重新装一下：

```bash
$ sudo apt install openssh-server
```

:::info 关于`apt-get`、`apt`和`aptitude`的区别

[知乎 - `apt-get`、`apt`和`aptitude`的区别在哪？](https://www.zhihu.com/question/43534144/answer/2528433708)：能用`apt`就用`apt`，搜索包用`aptitude`
:::

安装好了，SSH 服务就自动开始跑了。

通过下面这条指令查看 SSH 服务是否正在运行：

```bash
$ systemctl status ssh
```

如果输出形如这样则说明 SSH 服务正常启动了：

<CodeBlock language="">
    <Bash/>{`systemctl status ssh
`}<font color="#16c60c">{`●`}</font>{` ssh.service - OpenBSD Secure Shell server
     Loaded: loaded (/lib/systemd/system/ssh.service; enabled; vendor preset: enabled)
     Active: `}<font color="#16c60c">{`active (running)`}</font>{` since Thu ${
            DateFormat(new Date(+new Date() - 1000 * 60 * 60 * 24 * 7), "yyyy-MM-dd hh:mm:ss")
        } CST; 1 week 0 days ago
       Docs: man:sshd(8)
             man:sshd_config(5)
   Main PID: ... (sshd)
      Tasks: 1 (limit: 18869)
     Memory: ...M
        CPU: ...ms
     CGroup: /system.slice/ssh.service
             └─1047 "sshd: /usr/sbin/sshd -D [listener] 0 of 10-100 startups"
...`}
</CodeBlock>

### 使用

装有 Linux 系统的设备开启 SSH 服务后，他就会成为一台服务器，我们可以通过其他设备去连接这台服务器。

连接之前首先要找出服务器的 IP（内网）地址：[知乎 - 如何在 Ubuntu 中检查你的 IP 地址](https://zhuanlan.zhihu.com/p/81212996#:~:text=%E7%BB%88%E7%AB%AF%E6%96%B9%E5%BC%8F)

然后在你的（可以是Windows设备上）打开命令行，输入：
```bash
$ ssh [目标主机用户名]@[目标主机IP地址]
```

比如，我在Windows上要链接用户名为`shiercoding`的SSH服务器，该服务器内网IP地址为`10.0.0.114`，则可以通过如下指令：
```bash
$ ssh shiercoding@10.0.0.114
```

一般就能连接上了，输入目标主机的密码，然后当成在目标主机里用Bash命令行即可。

### Tmux

[阮一峰的网络日志 - Tmux 使用教程](https://www.ruanyifeng.com/blog/2019/10/tmux.html)：阮一峰YYDS！！！Tmux看这一篇就够了，只需要了解一些快捷键和创建、接入会话的方法即可。

安装建议使用这条命令：
```bash
$ sudo apt install tmux
```

## OpenVSCode Server

<Logo icon="vscode-icons:file-type-vscode" content="VSCode" />

OpenVSCode Server 是一个把宇宙第一的编辑器 VSCode 搬到了浏览器里的项目。

VSCode 本身是基于一个叫 [Electron](https://www.electronjs.org/) 的项目开发的，Electron 本质上又是一个 Chrome 内核的类似浏览器的东西，所以移植是可能的。

项目地址：[Github - openvscode-server](https://github.com/gitpod-io/openvscode-server/)

是的……这玩意暂时只支持 Linux 系统……不过不要紧，我们的目的就是在不太好编辑代码的 Linux 字符界面下写代码。

它具体的原理大概是在被远程操控的电脑上运行一个 VSCode 内核，这个内核会开启一个 Web Service，将被远程操控的电脑当成一台服务器。通过其他电脑访问这个服务器开启的端口即可登录 OpenVSCode Server，并在浏览器里码代码。

### 下载

[Github - openvscode-server/releases](https://github.com/gitpod-io/openvscode-server/releases)

根据你的性格选择是用`Pre-release`还是`Latest`版本（一般`Pre-release`可能会有点 Bug，但是会相比前一个版本增加很多新功能，`Latest`是经过公测后的稳定版）。

然后根据被控制的电脑架构选择版本（一般为`x64`）。

下载完成后解压缩即可：[知乎 - Ubuntu压缩及解压文件简介](https://zhuanlan.zhihu.com/p/143846450#:~:text=.tar.gz文件)

### 准备

解压缩后文件目录树大致为这样：

```none
.
# highlight-start
├── bin
│   ├── helpers
│   │   └── browser.sh
# info
│   ├── openvscode-server
│   └── remote-cli
│       └── openvscode-server
# highlight-end
├── extensions
│   └──...
├── node
├── node_modules
│   └──...
├── out
│   └──...
├── package.json
├── product.json
└── resources
    └── server
        ├── code-192.png
        ├── code-512.png
        ├── favicon.ico
        └── manifest.json
```

上图标蓝的即为我们需要的可执行文件，其余文件都基本为依赖。

`cd`进`bin`目录查看`openvscode-server`文件的用法

<CodeBlock language="">
    <Bash path="~/openvscode"/>{`cd bin\n`}
    <Bash path="~/openvscode/bin"/>{`./openvscode-server -h
OpenVSCode Server 1.74.3\n
Usage: openvscode-server [options]\n
Options
  --host <ip-address>            The host name or IP address the server should listen to. If not set, defaults to 'localhost'.
  --port <port | port range>     The port the server should listen to. If 0 is passed a random free port is picked. If a range in the format num-num is passed, a free port from the range
                                 (end inclusive) is selected.
  --socket-path <path>           The path to a socket file for the server to listen to.
  --connection-token <token>     A secret that must be included with all requests.
  --connection-token-file <path> Path to a file that contains the connection token.
  --without-connection-token     Run without a connection token. Only use this if the connection is secured by other means.
  --accept-server-license-terms  If set, the user accepts the server license terms and the server will be started without a user prompt.
  --server-data-dir              Specifies the directory that server data is kept in.
  --telemetry-level <level>      Sets the initial telemetry level. Valid levels are: 'off', 'crash', 'error' and 'all'. If not specified, the server will send telemetry until a client
                                 connects, it will then use the clients telemetry setting. Setting this to 'off' is equivalent to --disable-telemetry
  --user-data-dir <dir>          Specifies the directory that user data is kept in. Can be used to open multiple distinct instances of Code.
  -h --help                      Print usage.\n
Troubleshooting
  --log <level> Log level to use. Default is 'info'. Allowed values are 'critical', 'error', 'warn', 'info', 'debug', 'trace', 'off'. You can also configure the log level of an extension
                by passing extension id and log level in the following format: '\${publisher}.\${name}:\${logLevel}'. For example: 'vscode.csharp:trace'. Can receive one or more such
                entries.
  -v --version  Print version.\n
Extensions Management
  --extensions-dir <dir>              Set the root path for extensions.
  --install-extension <ext-id | path> Installs or updates an extension. The argument is either an extension id or a path to a VSIX. The identifier of an extension is
                                      '\${publisher}.\${name}'. Use '--force' argument to update to latest version. To install a specific version provide '@\${version}'. For example:
                                      'vscode.csharp@1.2.3'.
  --uninstall-extension <ext-id>      Uninstalls an extension.
  --list-extensions                   List the installed extensions.
  --show-versions                     Show versions of installed extensions, when using --list-extensions.
  --category <category>               Filters installed extensions by provided category, when using --list-extensions.
  --pre-release                       Installs the pre-release version of the extension, when using --install-extension
  --start-server                      Start the server when installing or uninstalling extensions. To be used in combination with 'install-extension', 'install-builtin-extension' and
                                      'uninstall-extension'.`}
</CodeBlock>

在使用前我推荐先安装几个拓展（OpenVSCode Server 提供的拓展不全，需要用命令安装，其它常用的拓展可以直接在拓展商店里搜索到）：
```bash
$ ./openvscode-server --install-extension formulahendry.code-runner  # Code Runner
```

## 使用

如果直接运行：
```bash
$ ./openvscode-server
```

你会得到类似这样的输出：
<CodeBlock language="">
    <Bash path="~/openvscode/bin"/>{`./openvscode-server
Server bound to 127.0.0.1:3000 (IPv4)
Extension host agent listening on 3000\n
[09:59:15]\n
Web UI available at http://localhost:3000/?tkn=11451419-5760-4479-8568-114514191981
[09:59:15] Extension host agent started.
...`}</CodeBlock>

然后你只能在目标主机上的浏览器访问 OpenVSCode Server，这显然不是我们想要的，所以要开启私服：

```bash
$ ./openvscode-server --host 0.0.0.0
```

这时候你就可以在同一局域网的任意设备去访问 OpenVScode Server 了，但是访问的链接有一大串token要输入，这显然不是我们想要的，所以要自定义token：

```bash
$ ./openvscode-server --host 0.0.0.0 --connection-token [你的token，随便输一个好敲的字符串即可]
```

然后在你的电脑上访问这个网址即可：`http://[目标主机IP地址]:[服务所在的端口，默认为3000]/?tkn=[你的token]`

经过一些时间的熟悉和调整，整体使用起来和宇宙第一 VSCode 的体验几乎一样一样了。

### 使用建议

1. OpenVSCode Server 目前不支持中文：[Github - Some extensions cannot be installed and used #313](https://github.com/gitpod-io/openvscode-server/issues/313)
2. 可以开个 Tmux，在 Tmux 的一个会话中运行 OpenVSCode Server 的服务进程。
3. OpenVSCode Server 看起来暂时不会开发原生 Windows 版：[Github - Build for windows #483](https://github.com/gitpod-io/openvscode-server/issues/483)
4. OpenVSCode Server 目前**可能**无法查看图片，如果要查看可以右键下载图片然后在本地查看。
5. OpenVSCode Server 目前**可能**无法打开 Jupyter NoteBook，如果需要查看可以开个 [Jupyter Lab](#jupyter-lab)


## Jupyter Lab

<Logo icon="logos:jupyter" content="Jupyter" />

[知乎 - 教你如何在Linux上搭建Jupyter Lab](https://zhuanlan.zhihu.com/p/369124114)：写的很详细，我就不多赘述了。

[知乎 - Jupyter Lab对比Jupyter Notebook有什么优点和不足？](https://www.zhihu.com/question/413049489/answer/2849948408)：一些使用技巧。

[微信公众号 - 熬了半宿！梳理了 JupyterLab 上 20 个超级实用的插件！](https://mp.weixin.qq.com/s?__biz=MzUzODYwMDAzNA==&mid=2247512313&idx=1&sn=ada69be046bdc0be9fe928a542c82f4c&chksm=fad7c7f4cda04ee2e5ccdfbc838fa8aa39a485175a94cfb2eaf3891ddb3ae21ce60043012947&scene=21#wechat_redirect)：标题党，但是插件都还是很实用的。