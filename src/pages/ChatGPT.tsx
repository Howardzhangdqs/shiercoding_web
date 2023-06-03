import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';

const urls = [
    "https://chat2.jinshutuan.com/",
    "https://url-3.ai-node.com/",
    "http://chat.newstop.asia/",
    "http://n1.xjai.cc",
    "http://20200.cn/",
    "http://chat2.aiyunos.top",
    "https://chat.aidutu.cn/",
    "https://ct5.xiami.monster/",
    "http://154.12.55.27:3000/",
    "https://gpt90.com/",
    "https://chatgpt01.peo.icu/",
    "https://chat.4.bnu120.space/",
    "https://chat.scorpii.net/",
    "http://new.cutim.top/",
    "http://chat.forwardminded.xyz/#/",
    "https://homes.nb8.ltd/",
    "http://gpt.hz-it-dev.com/",
    "http://bamboochat.kebakeba.com/",
    "https://bots.skybyte.me",
    "https://chat.wuguokai.cn/",
    "https://www.aieye.bio/",
    "http://chatgpt.bamboochat.cn/",
    "http://laicj.cn/",
    "https://box.xboat.cc/",
    "https://chat.kunshanyuxin.com/",
    "https://chatyou.lovebaby.today/",
    "http://121.201.123.162:8888/",
    "https://www.zaiwen.top/",
    "https://chat.lingdong5.com/",
    "https://chat.jubianxingqiu.com/",
    "http://openai999.com/",
    "https://www.gptdemo.net/cn/",
    "https://moeyy.cn/chatgpt/",
    "https://chat2doc.cn/",
    "https://toyaml.com/chat.html",
    "https://tchat.c1ns.cn",
    "https://openmao.panchuang.net/",
    "https://chat1.wobcw.com",
    "https://heimoshuiyu.github.io/chatgpt-api-web/?key=fakekey&api=https%3A%2F%2F3lio5ooiekcn3gxx6du2jf5wzq0mudmm.lambda-url.us-east-1.on.aws%2F&mode=fetch",
    "https://chat.douresources.com/",
    "https://cool-js.com/ai/chat/index.html",
    "http://gpt.zsqt.cc/",
    "https://ai.hxkj.vip",
    "https://ai.bo-e.com/",
    "https://www.quxuetrip.com/AITrip.html",
    "http://exchatgpt.com.cn/",
    "https://www.aishort.top/",
    "https://ai.ikeyi.top/",
    "https://ai.iiter.cn",
    "https://chat.zhenbs.com/",
    "https://chatgptmirror.com/",
    "http://180.184.170.12:3002",
    "https://chat05.aivesa.site/",
    "https://chat.huashuyunai.com/",
    "https://www.zhiyoustar.com/",
    "https://mst.ai/tools/chat",
    "https://poe.com/",
    "https://chatbot.theb.ai/",
    "https://free.anzz.top/",
    "http://chat.gptforlove.com/",
    "http://www.chatplus.plus/",
    "https://chatgptdddd.com",
    "https://infiniteai.chat/",
    "https://www.promptboom.com/",
    "https://b1.Betai55.uk/",
    "https://beta.character.ai/",
    "https://1.1ai.fun",
    "https://t66.ltd/",
    "https://ai.ccppcc.com/",
    "https://vvanglro.eu.org/",
    "https://02.gpt-5.asia/",
    "https://gpts.dawu.world",
    "https://www.ai-eye.org/",
    "https://tchat.icu",
    "https://chat-alnkplus.top/",
    "https://aigpt.one/",
    "https://chathub.zhulei.xyz",
    "https://huggingface.co/spaces/AUST001/ChatGPT",
    "https://chat.forefront.ai/",
    "https://chat1.hehanwang.com/",
    "http://chat5.manongzyg.one/",
    "https://nbchat.github.io/ai/",
    "https://s2.1gpt.uk/",
    "https://chat.tig.im/",
    "https://ora.sh/openai/gpt4",
    "http://www.aizj.me/",
    "https://chat-shared.zhile.io/shared.html",
    "https://www.sweetsai.com/",
    "https://openprompt.co/ChatGPT",
    "https://xc.com/",
    "https://94gpt.com/",
    "https://gpt.getshare.net/",
    "https://www.teach-anything.com/",
    "https://gpt.esojourn.org/",
    "https://jiehan.tech/",
    "https://tubogpt.vercel.app/",
    "http://ai.captnemo.xyz",
    "https://www.askopenai.cn/",
    "http://14.128.37.61:10031/home",
    "https://gpt6.fun",
    "http://www.chatcleand.xyz/",
];

const testSiteOnline = (url: string, callback: Function) => {
    var timer = setTimeout(function () {
        callback(false);
    }, 10000)
    var img = document.createElement("img");
    img.onload = function () {
        clearTimeout(timer);
        callback(true);
    }
    img.src = url + "/favicon.ico?v=" + Math.round(Math.random() * 9999);
};

export default function () {
    return (
        <Layout>
            <h1>这里收录一些看起来可以使用的ChatGPT代理们</h1>
            <div>
                可用性测试：<a href={"https://howardzhangdqs.netlify.app/tool/ping?wd=" + urls.join("%0A")}>Ping Tools</a>
            </div>
            <table>
                {urls.map((url) => (
                    <tr>
                        <td><a href={url} target="_blank">{url}</a></td>
                    </tr>
                ))}
            </table>
        </Layout>
    );
}