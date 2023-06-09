import React, { useRef } from "react";
import { Ping } from "./ping.js";
// import { IconExternalLink } from "./component.js";

export const urls = [
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

const ping_status = ["未Ping", "Ping中", "Ping成功", "Ping超时"];

const TimeOut = 20000;

export const UrlTable = () => {
    return (
        <>
            <table>
                <thead>
                    <th>链接</th>
                    <th>Ping值</th>
                </thead>
                <tbody>
                    {urls.map((url) => {
                        let $url = new URL(url);
                        const status = useRef(-1);
                        const p = new Ping();
                        p.ping(url).then(data => {
                            status.current = data;
                        }).catch(data => {
                            console.log(url, data);
                            status.current = data;
                        });
                        return (
                            <tr key={url}>
                                <td><a href={url} target="_blank">{$url.origin + $url.pathname}</a></td>
                                <td style={{ textAlign: "center" }}>{
                                    status.current >= 0 ? (
                                        <span style={{ color: (status.current > TimeOut ? "red" : "var(--ifm-color-primary)") }}>{status.current + "ms"}</span>
                                    ) : "Ping中"
                                }</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
};