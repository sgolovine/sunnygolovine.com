_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"09G5":function(e){e.exports=JSON.parse('{"skills":["Extensive experience in implementing React and React Native applications in a variety of enviorments ranging from startups and SMB\'s to Fortune 500 companies.","Extensive Experience in building component and styling systems for mobile and web applications, employing tools such as Styled Components, Bootstrap, and TailwindCSS to move quicker in developing frontends UI\'s.","Experience with building API\'s to support mobile applications, utilizing the MERN Stack.","Experience with integrating applications with cloud providers including AWS and Firebase. Worked with EC2 and S3 to deliver more traditional API\'s and serverless technology to deliver simpler solutions."]}')},"20a2":function(e,t,n){e.exports=n("nOHt")},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("hUgY")}])},"8ViL":function(e){e.exports=JSON.parse('{"headline":"Hey! My name is Sunny","bio":"I came here from Russia in 2000 and went to Georgia Southern University where I graduated with a Bachelors in Computer Science. Since then I have worked with several companies helping them build next generation web and mobile applications using React, React Native and other modern web and mobile technologies."}')},A9pS:function(e){e.exports=JSON.parse('{"github":"https://github.com/sgolovine","instagram":"https://instagram.com/sgolovine","linkedin":"https://linkedin.com/in/SunnyGolovine","twitter":"https://twitter.com/_glvn","dev":"https://dev.to/sgolovine","email":"sunny@glvn.co"}')},IWhs:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var o=n("q1tI"),a=n.n(o),i=n("A9pS"),s=n("khU4"),r=n("8ViL");const l={headline:r.headline,bio:r.bio,links:i,projects:s.projects},c=Object(o.createContext)(l),p=({children:e})=>a.a.createElement(c.Provider,{value:l},e);t.b=c},XIvV:function(e){e.exports=JSON.parse('{"sideProjects":[{"name":"Property Abacus","startDate":"2021","endDate":"Present","description":"A real estate investment calculator. Allows users to input property expenses and revenues and see metrics such as Internal Rate of Return, CAP Rate, Cashflows and other metrics relevant to real estate investment. Built using NextJS and TailwindCSS","type":"Website"},{"name":"Webhost Watchdog","startDate":"2020","endDate":"Present","description":"Web hosting review website. Utilizes React, GatsbyJS and JAMStack Technologies to run with virtually no overhead cost.","link":"https://webhostwatchdog.com","type":"Website"},{"name":"TipTrack","startDate":"2019","endDate":"Present","description":"A tip tracker app for iOS and Android. Keeps track of tips earned and lets the user create custom metrics from their tip data. TipTrack was built using React Native and relies on client side logic to compute tip analytics. Available in the Apple App Store","link":"https://tiptrack.app","type":"iOS and Android App"},{"name":"Fav.sh","startDate":"2018","endDate":"Present","description":"An open source browser extension that lets users create bookmarks and sync them with Github Gist.","link":"https://fav.sh","type":"Browser Extension"},{"name":"CopyBin","startDate":"2017","endDate":"2018","description":"CopyBin was an Android app that let users quickly copy canned responses","link":"https://glvn.co/projects/copybin","type":"Android App"}]}')},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var o=n("284h");t.__esModule=!0,t.default=void 0;var a=o(n("q1tI")),i=n("elyg"),s=n("nOHt"),r=n("vNVm");const l={};function c(e,t,n,o){if(!e)return;if(!(0,i.isLocalURL)(t))return;e.prefetch(t,n,o).catch((e=>{0}));const a=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}var p=function(e){const t=!1!==e.prefetch,n=(0,s.useRouter)(),o=n&&n.pathname||"/",{href:p,as:u}=a.default.useMemo((()=>{const[t,n]=(0,i.resolveHref)(o,e.href,!0);return{href:t,as:e.as?(0,i.resolveHref)(o,e.as):n||t}}),[o,e.href,e.as]);let{children:d,replace:m,shallow:h,scroll:f,locale:g}=e;"string"===typeof d&&(d=a.default.createElement("a",null,d));const v=a.Children.only(d),b=v&&"object"===typeof v&&v.ref,[y,w]=(0,r.useIntersection)({rootMargin:"200px"}),k=a.default.useCallback((e=>{y(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,y]);(0,a.useEffect)((()=>{const e=w&&t&&(0,i.isLocalURL)(p),o="undefined"!==typeof g?g:n&&n.locale,a=l[p+"%"+u+(o?"%"+o:"")];e&&!a&&c(n,p,u,{locale:o})}),[u,p,w,g,t,n]);const S={ref:k,onClick:e=>{v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,t,n,o,a,s,r,l){const{nodeName:c}=e.currentTarget;("A"!==c||!function(e){const{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==r&&(r=o.indexOf("#")<0),t[a?"replace":"push"](n,o,{shallow:s,locale:l,scroll:r}).then((e=>{e&&r&&document.body.focus()})))}(e,n,p,u,m,h,f,g)},onMouseEnter:e=>{(0,i.isLocalURL)(p)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),c(n,p,u,{priority:!0}))}};if(e.passHref||"a"===v.type&&!("href"in v.props)){const e="undefined"!==typeof g?g:n&&n.locale,t=(0,i.getDomainLocale)(u,e,n&&n.locales,n&&n.domainLocales);S.href=t||(0,i.addBasePath)((0,i.addLocale)(u,e,n&&n.defaultLocale))}return a.default.cloneElement(v,S)};t.default=p},hUgY:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),a=n.n(o);var i=()=>a.a.createElement("div",{className:"flex flex-row items-center justify-center"},a.a.createElement("p",null,"Built with \u2764\xa0 by Sunny Golovine")),s=n("20a2"),r=n("YFqc"),l=n.n(r);const c=({link:e,name:t})=>{const n=Object(s.useRouter)().pathname===e;return a.a.createElement(l.a,{href:e},a.a.createElement("a",{className:`mx-2 text-sm font-semibold ${n&&"text-blue-600"} hover:text-blue-600`},t))};var p=()=>a.a.createElement("div",{className:"flex flex-row h-full justify-between items-center"},a.a.createElement("h1",{className:"font-bold"},"Sunny Golovine"),a.a.createElement("div",null,a.a.createElement(c,{name:"Home",link:"/"}),a.a.createElement(c,{name:"Blog",link:"/blog"}),a.a.createElement(c,{name:"Resume",link:"/resume"})));const u=["/"],d={"/blog":"Blog Posts","/resume":"Resume"};var m=()=>{const e=Object(s.useRouter)(),t=e.pathname,n=d[t];return u.includes(e.pathname)?null:a.a.createElement("div",{className:"pb-12"},a.a.createElement("h1",{className:"text-2xl font-bold"},n))};var h=({children:e})=>a.a.createElement("div",{className:"max-w-3xl mx-auto flex flex-col"},a.a.createElement("div",{className:"h-16 px-4"},a.a.createElement(p,null)),a.a.createElement("div",{className:"p-4"},a.a.createElement(m,null),e),a.a.createElement(i,null)),f=n("IWhs"),g=n("lXvS");n("s9KQ");t.default=({Component:e,pageProps:t})=>a.a.createElement(f.a,null,a.a.createElement(g.a,null,a.a.createElement(h,null,a.a.createElement(e,t))))},khU4:function(e){e.exports=JSON.parse('{"projects":[{"name":"Property Abacus (Upcomming)","desc":"And upcomming real estate investment calculator. Built with NextJS and TailwindCSS, allows users to caculate rental income and expenses on a property"},{"name":"Webhost Watchdog","desc":"Webhost Watchdog is a blog for comprehensive reviews of webhosting products. Reviews the most popular webhosting products form the top hosting companies in the market today","links":[{"name":"Website","href":"https://webhostwatchdog.com"}]},{"name":"My Resume","desc":"An online resume built using NextJS and TailwindCSS","links":[{"name":"Website","href":"https://resume.glvn.co"}]},{"name":"Fav Bookmark Manager","desc":"Fav Bookmark Manager (or simply fav.sh) is an open source bookmark manager extension for Chrome and Firefox that syncs with Github Gist. Backup, collect, publish and share you bookmarks all while staying in control of your data.","links":[{"name":"Chrome Web Store","href":"https://chrome.google.com/webstore/detail/fav-bookmark-manager/gammmbkeceiljlgijimbhhgkfmiejnkl"},{"name":"Firefox Addon","href":"https://addons.mozilla.org/firefox/addon/fav/"},{"name":"Source Code","href":"https://github.com/fav-sh"},{"name":"Website","href":"https://fav.sh"}]},{"name":"TipTrack","desc":"TipTrack is a tip tracking app for servers, bartenders and more. Lets users create custom analytics to track their earnings","links":[{"name":"App Store","href":"https://apps.apple.com/us/app/tiptrack/id1495916444"},{"name":"Google Play Store","href":"https://play.google.com/store/apps/details?id=com.glvn.tiptrack"},{"name":"Website","href":"https://tiptrack.app/"}]},{"name":"sunny.gg","desc":"A linktree alternative built in Preact and TailwindCSS","links":[{"name":"Website","href":"https://sunny.sh"},{"name":"Source Code","href":"https://github.com/sgolovine/sunny.gg"}]}]}')},km2G:function(e){e.exports=JSON.parse('{"education":[{"name":"Georgia Southern University","degree":"Bachelors in Computer Science","gradDate":"Spring 2017"},{"name":"Georgia Perimeter College","degree":"Associates in Science","gradDate":"Fall 2015"}]}')},lXvS:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var o=n("q1tI"),a=n.n(o),i=n("ns3D"),s=n("km2G"),r=n("XIvV"),l=n("09G5"),c=n("vBPi");const p={skills:l.skills,contactInfo:i.contactInfo,education:s.education,sideProjects:r.sideProjects,workExperience:c.workExperience},u=Object(o.createContext)(p),d=({children:e})=>a.a.createElement(u.Provider,{value:p},e);t.b=u},ns3D:function(e){e.exports=JSON.parse('{"contactInfo":{"phone":"6786462358","email":"sunny@glvn.co","website":"https://glvn.co","linkedin":"https://linkedin.com/in/SunnyGolovine","github":"https://github.com/sgolovine"}}')},s9KQ:function(e,t,n){},vBPi:function(e){e.exports=JSON.parse('{"workExperience":[{"name":"Ascendum Solutions","position":"Software Engineer","startDate":"May 2020","endDate":"Present","url":"https://www.ascendum.com","accomplishments":["Worked on a team to develop an upcoming social media app for a prominent client in the Healthcare space. Led development in establishing conventions and setting up libraries for other developers to use, as well as implementing key features including push notifications, authentication flows and other 3rd party integrations.","Worked directly with the client and their development teams in solving the most challenging issues in developing the app including analytics, security and accessibility.","Collaborated with DevOps to build a robust deployment pipeline able to serve multiple environments, and branch level versioning, allowing QA to quickly install and test developer code and allowing seamless demo progress of the app with the client","Worked with other teams in the company on an as-needed basis. to shore up development and solve critical issues on a tight deadline.","Wrote highly portable code, allowing features from one app to be quickly ported to other apps, allowing our client to go live with key features quicker.","Developed internal tools to help development teams within the company bootstrap React Native applications for new clients quicker. Combining the best practices from existing codebases into a template that can be used to in future projects."]},{"name":"Cox Automotive (Manheim)","position":"Full Stack Software Engineer","startDate":"Aug 2018","endDate":"Apr 2020","url":"https://www.coxautoinc.com","accomplishments":["Worked on a team to build and maintain several key mobile applications and API\'s in the Cox Automotive ecosystem. Combined these products resulted in a 20% increase in revenues from online purchasing of vehicles.","Implemented a deployment process for the CAFS App that reduced the number of issues during deploys by 50% and led to a smoother and better document deployment procedure.","Architected the theming system within the primary mobile application our team built, allowing the app to be themed for client use.","Excelled in providing cost and time effective solutions for a number of issues, business use cases and features to our apps and services."]},{"name":"Rali (Formerly OnQ)","position":"Junior Software Engineer","startDate":"Mar 2017","endDate":"Aug 2018","url":"https://getrali.com","accomplishments":["Collaborated with other developers to help build a learning platform in React and React Native for mobile devices.","Led an effort to fork an open source WYSIWYG editor and modify it for internal use.","Continually worked with product owners and UX designers to enhance features and usability of company products and tools."]}]}')},vNVm:function(e,t,n){"use strict";var o=n("TqRt");t.__esModule=!0,t.useIntersection=function({rootMargin:e,disabled:t}){const n=t||!s,o=(0,a.useRef)(),[l,c]=(0,a.useState)(!1),p=(0,a.useCallback)((t=>{o.current&&(o.current(),o.current=void 0),n||l||t&&t.tagName&&(o.current=function(e,t,n){const{id:o,observer:a,elements:i}=function(e){const t=e.rootMargin||"";let n=r.get(t);if(n)return n;const o=new Map,a=new IntersectionObserver((e=>{e.forEach((e=>{const t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return r.set(t,n={id:t,observer:a,elements:o}),n}(n);return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),r.delete(o))}}(t,(e=>e&&c(e)),{rootMargin:e}))}),[n,e,l]);return(0,a.useEffect)((()=>{s||l||(0,i.default)((()=>c(!0)))}),[l]),[p,l]};var a=n("q1tI"),i=o(n("0G5g"));const s="undefined"!==typeof IntersectionObserver;const r=new Map}},[[0,0,1,2]]]);