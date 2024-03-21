import{_ as n,o as i,c as t,q as p,s as r,m as s,J as h,a2 as k,a as y}from"./chunks/framework.B-3R4Eol.js";const _={name:"LightGrayTable"},d=a=>(p("data-v-b049683d"),a=a(),r(),a),u={class:"collapse mv4"},v=d(()=>s("thead",null,[s("tr",null,[s("th",{class:"pv2 ph3 tl f6 fw6 ttu"},"Name"),s("th",{class:"tr f6 ttu fw6 pv2 ph3"},"Rating")])],-1)),b=d(()=>s("tbody",null,[s("tr",{class:"striped--light-gray"},[s("td",{class:"pv2 ph3"},"Jurassic Park"),s("td",{class:"pv2 ph3"},"5 stars")]),s("tr",{class:"striped--light-gray"},[s("td",{class:"pv2 ph3"},"Back to the Future"),s("td",{class:"pv2 ph3"},"5 stars")]),s("tr",{class:"striped--light-gray"},[s("td",{class:"pv2 ph3"},"Primer"),s("td",{class:"pv2 ph3"},"5 stars")]),s("tr",{class:"striped--light-gray"},[s("td",{class:"pv2 ph3"},"Sunshine"),s("td",{class:"pv2 ph3"},"5 stars")]),s("tr",{class:"striped--light-gray"},[s("td",{class:"pv2 ph3"},"Moon"),s("td",{class:"pv2 ph3"},"5 stars")])],-1)),m=[v,b];function f(a,e,l,c,g,o){return i(),t("table",u,m)}const A=n(_,[["render",f],["__scopeId","data-v-b049683d"]]),D={name:"NearWhiteTable"},E=a=>(p("data-v-9293fd33"),a=a(),r(),a),T={class:"collapse mv4"},F=E(()=>s("thead",null,[s("tr",null,[s("th",{class:"pv2 ph3 tl f6 fw6 ttu"},"Name"),s("th",{class:"tr f6 ttu fw6 pv2 ph3"},"Rating")])],-1)),S=E(()=>s("tbody",null,[s("tr",{class:"striped--near-white"},[s("td",{class:"pv2 ph3"},"Jurassic Park"),s("td",{class:"pv2 ph3"},"5 stars")]),s("tr",{class:"striped--near-white"},[s("td",{class:"pv2 ph3"},"Back to the Future"),s("td",{class:"pv2 ph3"},"5 stars")]),s("tr",{class:"striped--near-white"},[s("td",{class:"pv2 ph3"},"Primer"),s("td",{class:"pv2 ph3"},"5 stars")]),s("tr",{class:"striped--near-white"},[s("td",{class:"pv2 ph3"},"Sunshine"),s("td",{class:"pv2 ph3"},"5 stars")]),s("tr",{class:"striped--near-white"},[s("td",{class:"pv2 ph3"},"Moon"),s("td",{class:"pv2 ph3"},"5 stars")])],-1)),C=[F,S];function w(a,e,l,c,g,o){return i(),t("table",T,C)}const $=n(D,[["render",w],["__scopeId","data-v-9293fd33"]]),B=k(`<h1 id="tables" tabindex="-1">Tables <a class="header-anchor" href="#tables" aria-label="Permalink to &quot;Tables&quot;">​</a></h1><p>Tachyons has some basic utilities for styling tables that are easy to customize and extend.</p><h2 id="striped-light-gray" tabindex="-1">Striped | Light Gray <a class="header-anchor" href="#striped-light-gray" aria-label="Permalink to &quot;Striped | Light Gray&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">table</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-collapse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tbody</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tr</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-striped</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">light-gray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tr</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-striped</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">light-gray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tbody</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,4),P=k(`<h2 id="striped-near-white" tabindex="-1">Striped | Near white <a class="header-anchor" href="#striped-near-white" aria-label="Permalink to &quot;Striped | Near white&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">table</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-collapse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tbody</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tr</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-striped</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">near-white</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tr</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-striped</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">near-white</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tbody</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,2),N=s("h2",{id:"reference",tabindex:"-1"},[y("Reference "),s("a",{class:"header-anchor",href:"#reference","aria-label":'Permalink to "Reference"'},"​")],-1),x=s("ul",null,[s("li",null,[s("a",{href:"https://tachyons.io/docs/elements/tables/",target:"_blank",rel:"noreferrer"},"Tables Source Docs | Tachyons")])],-1),q=JSON.parse('{"title":"Tables","description":"","frontmatter":{},"headers":[],"relativePath":"elements/tables.md","filePath":"elements/tables.md"}'),I={name:"elements/tables.md"},R=Object.assign(I,{setup(a){return(e,l)=>(i(),t("div",null,[B,h(A),P,h($),N,x]))}});export{q as __pageData,R as default};