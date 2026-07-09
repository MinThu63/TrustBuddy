// ===== TrustBuddy - Anti-Scam Assistant =====
// Production n8n webhook URL
const N8N_WEBHOOK_URL = "https://n8ngc.codeblazar.org/webhook/d3705ce9-d2b0-48dc-ba72-5bdb76011802";

// Feedback webhook URL (Hsu's workflow)
const FEEDBACK_WEBHOOK_URL = "https://hsumyatsan123.app.n8n.cloud/webhook/c416126d-2807-4872-8328-bc97b1017a7e";

// ===== TRANSLATIONS (Singapore's 4 official languages) =====
const translations = {
    en: {
        tagline: "Your friendly scam-checking assistant",
        langLabel: "Language:",
        sizeLabel: "Text Size:",
        tabCheck: "🔍 Check a Message",
        tabHistory: "📋 History",
        inputLabel: "<strong>Paste a suspicious message below and I'll check it for you:</strong>",
        placeholder: "Paste here..",
        privacyNote: "🔒 Your message is checked securely. We do not store your personal data.",
        checkBtn: "🔍 Check This Message",
        loadingLabel: "Analysing — please wait...",
        resultHeader: "TrustBuddy says:",
        errorHeader: "Connection Issue",
        errorMessage: "We could not reach the scam-checking service right now. Please check your internet connection and try again.",
        copyBtn: "📋 Copy Result",
        resetBtn: "🔄 Check Another Message",
        copied: "✅ Copied!",
        historyTitle: "Previous Checks",
        clearHistory: "🗑️ Clear All",
        historyEmpty: "No messages checked yet. Your history will appear here.",
        clearConfirm: "Are you sure you want to clear all history?",
        connectionOk: '✅ <strong>Connected to AI</strong> — TrustBuddy is ready',
        connectionFail: '⚠️ <strong>Connection issue</strong> — Please try again',
        emergencyTitle: "🚨 Think you've been scammed?",
        emergencyLine1: 'Call the <strong>Anti-Scam Helpline</strong>: <a href="tel:1800-722-6688">1800-722-6688</a>',
        emergencyLine2: 'Report via <strong>ScamShield App</strong> or visit <a href="https://www.scamshield.org.sg" target="_blank" rel="noopener">scamshield.org.sg</a>',
        emergencyLine3: 'In an emergency, call the <strong>Singapore Police</strong>: <a href="tel:999">999</a>',
        footerPrivacy: "🔒 100% Free — Your messages are never stored on our servers.",
        navBrand: "TrustBuddy",
        navHome: "Home",
        navAbout: "About",
        navScamTypes: "Scam Types",
        navResources: "Resources",
        navFAQ: "FAQ",
        navFeedback: "Feedback",
        footerHome: "Home",
        footerAbout: "About",
        footerScamTypes: "Scam Types",
        footerFAQ: "FAQ",
        footerFeedback: "Feedback",
        title: "TrustBuddy — Anti-Scam Assistant",
        headingAbout: "About TrustBuddy",
        headingScamTypes: "Common Scam Types in Singapore",
        headingResources: "Educational Resources",
        headingFAQ: "Frequently Asked Questions",
        headingFeedback: "Give Feedback",
        aboutIntro1: "TrustBuddy is a <strong>free AI-powered tool</strong> that helps senior citizens in Singapore identify scam messages, phishing links, and fraudulent calls.",
        aboutIntro2: "Scam cases in Singapore hit record highs in recent years. Seniors are the most vulnerable — often targeted by sophisticated scammers who impersonate banks, government officials, or family members.",
        aboutIntro3: "Our system uses <strong>Retrieval-Augmented Generation (RAG)</strong> to check suspicious messages against a curated database of known scam profiles, providing instant, accurate verdicts in plain language that anyone can understand.",
        howItWorks: "How It Works",
        step1Title: "Step 1",
        step1Desc: "Paste the suspicious message you received",
        step2Title: "Step 2",
        step2Desc: "AI searches our scam database for matches",
        step3Title: "Step 3",
        step3Desc: "Get instant verdict and safety advice",
        keyFeatures: "Key Features",
        featureMultiLanguage: "✅ <strong>Multi-language</strong> — English, 中文, Melayu, தமிழ்",
        featureAdjustableText: "✅ <strong>Adjustable text size</strong> — for varying vision needs",
        featureTranslation: "✅ <strong>One-click translation</strong> — translate AI responses instantly",
        featureReadAloud: "✅ <strong>Read Aloud</strong> — AI reads the response out loud for those with poor eyesight",
        featureHistory: "✅ <strong>Check history</strong> — review past analyses anytime",
        featureCopyShare: "✅ <strong>Copy & share</strong> — send results to family via WhatsApp",
        featureResources: "✅ <strong>Educational resources</strong> — official scam advisories, videos, quizzes & games",
        featureFeedback: "✅ <strong>Feedback system</strong> — help us improve with your input",
        featurePrivacy: "✅ <strong>100% free & private</strong> — no data stored",
        resourcesIntro: "Stay informed. Learn how to protect yourself and your loved ones from scams.",
        readLearnHeading: "Read & Learn",
        scamBriefsTitle: "Scams & Cybercrime Briefs",
        scamBriefsDesc: "Latest reports on scam cases and cybercrime statistics in Singapore.",
        scamTrendsTitle: "Scam Trends",
        scamTrendsDesc: "Current scam trends and emerging patterns targeting Singaporeans.",
        scamBulletinsTitle: "Scam Bulletins",
        scamBulletinsDesc: "Regular bulletins with updates on new scam tactics and warnings.",
        scamTypesIntro: "Learn to recognise these scams and protect yourself and your loved ones.",
        scamTypeFamilyTitle: "Family Impersonation",
        scamTypeBankTitle: "Fake Bank Alert (Phishing)",
        scamTypeGovernmentTitle: "Government Impersonation",
        scamTypeInvestmentTitle: "Investment Scam",
        scamTypeLoveTitle: "Love / Romance Scam",
        scamTypeParcelTitle: "Parcel Delivery Scam",
        scamTypeJobTitle: "Job Scam",
        scamTypeCpfIrasTitle: "CPF / IRAS Tax Scam",
        scamTypeHigh: "HIGH",
        scamTypeCritical: "CRITICAL",
        scamTypeMedium: "MEDIUM",
        exampleLabel: "Example:",
        howItWorksLabel: "How it works:",
        protectionLabel: "Protection:",
        scamTypeFamilyExample: "\"Hi Mum, I dropped my phone. This is my new number. Can you send $500 to this account urgently?\"",
        scamTypeFamilyHow: "Scammer pretends to be your child with a \"new number\" and asks for urgent money transfer via PayNow or bank transfer.",
        scamTypeFamilyProtection: "Call your child on their original number. Ask a personal question only they would know.",
        scamTypeBankExample: "\"[DBS] Unauthorized transaction of SGD 3,500 detected. Verify now: https://dbs-secure-login.com\"",
        scamTypeBankHow: "SMS with fake bank link steals your login credentials and OTP when you click and enter details.",
        scamTypeBankProtection: "Banks NEVER send clickable links via SMS. Call the number on the back of your card.",
        scamTypeGovernmentExample: "\"This is the Singapore Police. Your bank account is linked to money laundering. Transfer your funds to this safe account.\"",
        scamTypeGovernmentHow: "Caller claims to be Police/MAS/ICA and pressures you to transfer savings to a \"safe\" account for \"investigation.\"",
        scamTypeGovernmentProtection: "Police will NEVER ask you to transfer money. Hang up and call 999 if unsure.",
        scamTypeInvestmentExample: "\"Guaranteed 20% returns per month! Join our exclusive Telegram group. I made $50,000 in one week!\"",
        scamTypeInvestmentHow: "Victim joins a group, makes small investments with \"returns,\" then invests big. Platform disappears with all funds.",
        scamTypeInvestmentProtection: "No legitimate investment guarantees high returns. Check MAS Investor Alert List.",
        scamTypeLoveExample: "\"I want to visit you in Singapore but need money for my plane ticket. I promise I'll pay you back.\"",
        scamTypeLoveHow: "Fake dating profile builds emotional connection over weeks, then fabricates emergencies requiring money.",
        scamTypeLoveProtection: "Never send money to someone you haven't met in person. Reverse image search their photos.",
        scamTypeParcelExample: "\"SingPost: Failed delivery attempt. Pay $2.50 to reschedule: http://singpost-pay.com\"",
        scamTypeParcelHow: "Fake delivery SMS asks for small \"fee\" via link. Link steals credit card details and drains your account.",
        scamTypeParcelProtection: "SingPost/Ninja Van never ask for payment via SMS links. Use their official app only.",
        scamTypeJobExample: "\"Earn $300/day liking YouTube videos from home! Pay $50 registration fee to start immediately.\"",
        scamTypeJobHow: "Small tasks pay initially to build trust. Then victim is asked to \"invest\" to unlock higher pay. Money never returns.",
        scamTypeJobProtection: "Legitimate jobs never ask you to pay money upfront. If you pay to earn, it's a scam.",
        scamTypeCpfIrasExample: "\"IRAS: Your tax return has an error. Click to verify: https://iras-refund-sg.com. You are owed $3,200.\"",
        scamTypeCpfIrasHow: "Fake SMS impersonates CPF/IRAS. Link steals SingPass credentials or banking details.",
        scamTypeCpfIrasProtection: "CPF and IRAS never send clickable links via SMS. Use SingPass app or official websites only.",
        columnTitle: "The Straits Times Column",
        columnDesc: "Anti-scam articles and columns published in The Straits Times.",
        materialsTitle: "Public Education Materials",
        materialsDesc: "Downloadable brochures, posters, and educational content for the community.",
        videosTitle: "Learn Through Videos",
        videosDesc: "Watch educational videos about how scams work and how to stay safe.",
        interactiveHeading: "Interactive & Fun",
        quizTitle: "Scam Quiz",
        quizDesc: "Test your scam knowledge with an interactive quiz.",
        gamesTitle: "Anti-Scam Games",
        gamesDesc: "Play helpful games that teach you how to spot scams.",
        faqIntro: "Everything you need to know about TrustBuddy.",
        faqQ1: "Is TrustBuddy free to use?",
        faqA1: "Yes, TrustBuddy is 100% free. There are no hidden charges, subscriptions, or sign-up required. Just paste your message and check instantly.",
        faqQ2: "Is my message stored or shared?",
        faqA2: "Your messages are only used to check for scams and are not stored permanently or shared with third parties. We take your privacy seriously. Your check history is only saved locally on your own device.",
        faqQ3: "How accurate is the scam detection?",
        faqA3: "TrustBuddy uses AI powered by a curated database of real scam profiles from Singapore. While highly accurate, no system is perfect. When in doubt, call the <strong>Anti-Scam Helpline at 1799</strong>.",
        faqQ4: "What languages are supported?",
        faqA4: "The interface supports all 4 official languages of Singapore: <strong>English, Chinese (中文), Malay (Melayu), and Tamil (தமிழ்)</strong>. AI responses can also be translated into any of these languages with one click.",
        faqQ5: "What should I do if I've already been scammed?",
        faqA5: "Act immediately:<ul class=\"mt-2\"><li><strong>Call your bank</strong> to freeze your account</li><li>Call the <strong>Anti-Scam Helpline: 1800-722-6688</strong></li><li>File a <strong>police report</strong> online or call <strong>999</strong></li><li>Report via the <strong>ScamShield App</strong></li></ul>The faster you act, the higher the chance of recovering your funds.",
        faqQ6: "Can my family use TrustBuddy to help me?",
        faqA6: "Absolutely! Family members can use TrustBuddy to check messages on behalf of their elderly parents or grandparents. You can also use the \"Copy Result\" button to share the AI's analysis via WhatsApp or SMS.",
        faqQ7: "How does TrustBuddy know if a message is a scam?",
        faqA7: "TrustBuddy uses a technology called <strong>Retrieval-Augmented Generation (RAG)</strong>. When you submit a message, our AI searches a curated database of known scam patterns, compares it against real scam profiles, and gives you a verdict based on matching patterns, red flags, and known tactics used by scammers in Singapore.",
        faqQ8: "Does TrustBuddy work on my phone?",
        faqA8: "Yes! TrustBuddy works on any device with a web browser — smartphones, tablets, and computers. The design is fully responsive and optimized for mobile use with large buttons and text.",
        feedbackIntro: "Help us improve TrustBuddy for seniors in Singapore.",
        feedbackQ1: "Was TrustBuddy helpful?",
        feedbackQ2: "Was the scam verdict correct?",
        feedbackQ3: "Was the response easy to understand?",
        feedbackQ4: "Anything else? (optional)",
        feedbackPlaceholder: "Your thoughts...",
        feedbackSubmit: "✅ Submit Feedback",
        feedbackHelpfulYes: "👍 Helpful",
        feedbackHelpfulNo: "👎 Not Helpful",
        feedbackAccurateYes: "Yes",
        feedbackAccurateNo: "No",
        feedbackAccurateNotSure: "Not Sure",
        feedbackClarityEasy: "😊 Easy",
        feedbackClarityOk: "😐 OK",
        feedbackClarityConfusing: "😕 Confusing",
        sourceAttribution: "All resources sourced from <a href='https://www.scamshield.gov.sg/' target='_blank' rel='noopener'>ScamShield Singapore (scamshield.gov.sg)</a> — an initiative by the Singapore Government.",
        indexTrustBuddy: "Don't get scammed.<br>Ask TrustBuddy.",
        indexReceivedText: "Received a strange text message? Not sure if it's real or a scam? Just paste it here — our AI will check it for you in seconds and tell you if it's safe.",
        indexTrustBuddyHelp: "<strong>TrustBuddy helps you:</strong><br>✅ Check if a suspicious message is real or a scam<br>✅ Spot scammers pretending to be your child or the police<br>✅ Learn about common scams and how to protect yourself",
        indexTrustBuddyHelpsYou: "🌏 4 Languages | 🔊 Read Aloud | 🔒 100% Private |💰 Free Forever" ,
        indexCheckMessage: "🔍 Start Checking Messages",
        indexScamProfiles: "Scam Profiles",
        indexLanguages:"Languages",
        indexAvailable:"Available",
        indexBuiltForSeniors:"Built for seniors in Singapore · Powered by AI · No sign-up required"
    
    
    
    },
    zh: {
        tagline: "您的防诈骗小助手",
        langLabel: "语言：",
        sizeLabel: "字体大小：",
        tabCheck: "🔍 检查信息",
        tabHistory: "📋 历史记录",
        inputLabel: "<strong>将可疑信息粘贴在下方，我帮您检查：</strong>",
        placeholder: "粘贴在这里..",
        privacyNote: "🔒 您的信息将被安全检查。我们不会储存您的个人资料。",
        checkBtn: "🔍 检查此信息",
        loadingLabel: "正在分析 — 请稍候...",
        resultHeader: "TrustBuddy 分析结果：",
        errorHeader: "连接问题",
        errorMessage: "目前无法连接到防诈骗服务。请检查您的网络连接，然后再试一次。",
        copyBtn: "📋 复制结果",
        resetBtn: "🔄 检查另一条信息",
        copied: "✅ 已复制！",
        historyTitle: "检查记录",
        clearHistory: "🗑️ 清除全部",
        historyEmpty: "尚未检查任何信息。您的记录将显示在这里。",
        clearConfirm: "您确定要清除所有记录吗？",
        connectionOk: '✅ <strong>已连接 AI</strong> — TrustBuddy 已就绪',
        connectionFail: '⚠️ <strong>连接问题</strong> — 请重试',
        emergencyTitle: "🚨 怀疑自己被骗了？",
        emergencyLine1: '拨打 <strong>反诈骗热线</strong>：<a href="tel:1800-722-6688">1800-722-6688</a>',
        emergencyLine2: '通过 <strong>ScamShield 应用</strong> 举报或浏览 <a href="https://www.scamshield.org.sg" target="_blank" rel="noopener">scamshield.org.sg</a>',
        emergencyLine3: '紧急情况请拨打 <strong>新加坡警察</strong>：<a href="tel:999">999</a>',
        footerPrivacy: "🔒 100% 免费 — 您的信息不会被储存在我们的服务器上。",
        navBrand: "TrustBuddy",
        navHome: "首页",
        navAbout: "关于",
        navScamTypes: "诈骗类型",
        navResources: "资源",
        navFAQ: "常见问题",
        navFeedback: "反馈",
        footerHome: "首页",
        footerAbout: "关于",
        footerScamTypes: "诈骗类型",
        footerFAQ: "常见问题",
        footerFeedback: "反馈",
        title: "TrustBuddy — 防诈骗助手",
        headingAbout: "关于 TrustBuddy",
        headingScamTypes: "新加坡常见诈骗类型",
        headingResources: "教育资源",
        headingFAQ: "常见问题",
        headingFeedback: "提供反馈",
        aboutIntro1: "TrustBuddy 是一款<strong>免费的 AI 智能工具</strong>，帮助新加坡年长者识别诈骗信息、钓鱼链接和诈骗电话。",
        aboutIntro2: "近年来，新加坡的诈骗案件创下历史新高。年长者最容易成为受害者，经常成为冒充银行、政府官员或家人的诈骗分子的目标。",
        aboutIntro3: "我们的系统采用<strong>检索增强生成（RAG）</strong>技术，将可疑信息与精心整理的已知诈骗案例数据库进行比对，并以任何人都能轻松理解的简单语言提供即时、准确的分析结果。",
        howItWorks: "使用方式",
        step1Title: "步骤 1",
        step1Desc: "贴上您收到的可疑信息",
        step2Title: "步骤 2",
        step2Desc: "AI 在我们的诈骗数据库中搜索匹配内容",
        step3Title: "步骤 3",
        step3Desc: "立即获得分析结果及安全建议",
        keyFeatures: "主要功能",
        featureMultiLanguage: "✅ <strong>多语言支持</strong> — 英语、中文、马来语、泰米尔语",
        featureAdjustableText: "✅ <strong>可调节文字大小</strong> — 满足不同视力需求",
        featureTranslation: "✅ <strong>一键翻译</strong> — 即时翻译 AI 回应",
        featureReadAloud: "✅ <strong>朗读功能</strong> — AI 为视力较弱者朗读分析结果",
        featureHistory: "✅ <strong>历史记录</strong> — 随时查看过往分析",
        featureCopyShare: "✅ <strong>复制与分享</strong> — 通过 WhatsApp 分享结果给家人",
        featureResources: "✅ <strong>教育资源</strong> — 官方防诈骗公告、视频、测验与小游戏",
        featureFeedback: "✅ <strong>意见反馈系统</strong> — 帮助我们持续改进",
        featurePrivacy: "✅ <strong>100% 免费且注重隐私</strong> — 不储存任何数据",
        resourcesIntro: "随时掌握最新资讯，学习如何保护自己和亲友，远离诈骗。",
        readLearnHeading: "阅读与学习",
        scamBriefsTitle: "诈骗与网络犯罪简报",
        scamBriefsDesc: "了解新加坡最新诈骗案件及网络犯罪统计数据。",
        scamTrendsTitle: "诈骗趋势",
        scamTrendsDesc: "了解当前针对新加坡人的诈骗趋势及新型诈骗手法。",
        scamBulletinsTitle: "诈骗公告",
        scamBulletinsDesc: "定期发布最新诈骗手法及安全警示。",
        scamTypesIntro: "了解这些诈骗类型，保护自己和亲友。",
        scamTypeFamilyTitle: "冒充家庭成员",
        scamTypeBankTitle: "伪造银行警报（网络钓鱼）",
        scamTypeGovernmentTitle: "冒充政府官员",
        scamTypeInvestmentTitle: "投资诈骗",
        scamTypeLoveTitle: "爱情／恋爱诈骗",
        scamTypeParcelTitle: "包裹派送诈骗",
        scamTypeJobTitle: "工作诈骗",
        scamTypeCpfIrasTitle: "CPF / IRAS 税务诈骗",
        scamTypeHigh: "高风险",
        scamTypeCritical: "严重",
        scamTypeMedium: "中风险",
        exampleLabel: "示例：",
        howItWorksLabel: "工作原理：",
        protectionLabel: "保护：",
        scamTypeFamilyExample: "“妈妈，我的手机掉了。这是我的新号码。你能紧急给这个账户汇500新元吗？”",
        scamTypeFamilyHow: "诈骗者冒充您的孩子，称“这是我的新号码”，并要求通过PayNow或银行转账紧急汇款。",
        scamTypeFamilyProtection: "拨打您孩子的原号码核实。问只有他们知道的私人问题。",
        scamTypeBankExample: "“[DBS] 发现未经授权的3500新币交易。立即验证：https://dbs-secure-login.com”",
        scamTypeBankHow: "带有伪造银行链接的短信会在您点击并输入信息时窃取登录凭证和一次性密码。",
        scamTypeBankProtection: "银行绝不会通过短信发送可点击链接。拨打银行卡背面的电话号码。",
        scamTypeGovernmentExample: "“这里是新加坡警方。您的银行账户涉嫌洗钱。请将资金转入此安全账户。”",
        scamTypeGovernmentHow: "来电者声称是警察/MAS/ICA，并施压要求您将储蓄转入所谓“安全”账户进行调查。",
        scamTypeGovernmentProtection: "警方绝不会要求您转账。若不确定，请挂断并拨打999。",
        scamTypeInvestmentExample: "“保证每月20%回报！加入我们的专属Telegram群。我一周赚了5万新币！”",
        scamTypeInvestmentHow: "受害者加入群组，先投入少量资金获得回报，然后被要求投入更多，平台最终消失。",
        scamTypeInvestmentProtection: "没有合法投资能保证高回报。查看MAS投资者警示名单。",
        scamTypeLoveExample: "“我想去新加坡看你，但我需要机票钱。我保证会还你。”",
        scamTypeLoveHow: "假恋爱资料逐步建立情感联结，然后编造紧急情况要求汇款。",
        scamTypeLoveProtection: "不要给尚未见过面的人汇钱。对其照片进行反向图片搜索。",
        scamTypeParcelExample: "“新邮：派送失败。支付$2.50重新安排：https://singpost-pay.com”",
        scamTypeParcelHow: "伪造的派件短信要求通过链接支付小额“费用”。链接会窃取信用卡信息并清空账户。",
        scamTypeParcelProtection: "新邮/Ninja Van不会通过短信要求付款。仅使用其官方应用。",
        scamTypeJobExample: "“在家点赞YouTube视频每天赚$300！立即支付$50注册费开始。”",
        scamTypeJobHow: "先支付小任务报酬以建立信任，随后要求“投资”以解锁更高报酬。钱不会回来。",
        scamTypeJobProtection: "真正的工作不会要求您先付钱。如果需要付费才能赚钱，那就是诈骗。",
        scamTypeCpfIrasExample: "“IRAS：您的报税有错误。点击验证：https://iras-refund-sg.com。您应得$3,200。”",
        scamTypeCpfIrasHow: "伪造短信冒充CPF/IRAS，链接窃取SingPass凭证或银行信息。",
        scamTypeCpfIrasProtection: "CPF和IRAS不会通过短信发送可点击链接。仅使用SingPass应用或官方网站。",
        columnTitle: "《海峡时报》专栏",
        columnDesc: "《海峡时报》刊登的防诈骗文章与专栏。",
        materialsTitle: "公众教育资料",
        materialsDesc: "可下载的小册子、海报及社区教育资源。",
        videosTitle: "观看教学视频",
        videosDesc: "观看教育影片，了解诈骗的运作方式以及如何保护自己。",
        interactiveHeading: "互动学习",
        quizTitle: "诈骗知识测验",
        quizDesc: "通过互动测验测试您的防诈骗知识。",
        gamesTitle: "防诈骗小游戏",
        gamesDesc: "通过有趣的小游戏学习如何识别诈骗。",
        faqIntro: "关于 TrustBuddy，您需要知道的一切。",
        faqQ1: "TrustBuddy 是免费使用的吗？",
        faqA1: "是的，TrustBuddy 完全免费，没有任何隐藏收费、订阅费用或注册要求。只需贴上您的信息，即可立即进行检测。",
        faqQ2: "我的信息会被储存或分享吗？",
        faqA2: "您的信息仅用于检测诈骗，不会被永久储存，也不会与第三方分享。我们非常重视您的隐私。您的检查记录仅保存在您自己的设备上。",
        faqQ3: "诈骗检测的准确率有多高？",
        faqA3: "TrustBuddy 使用结合新加坡真实诈骗案例数据库的 AI 技术进行分析。虽然准确率很高，但任何系统都无法做到百分之百准确。如有疑问，请拨打<strong>反诈骗热线 1799</strong>。",
        faqQ4: "支持哪些语言？",
        faqA4: "本系统支持新加坡四种官方语言：<strong>英语、中文、马来语和泰米尔语</strong>。AI 回应也可以一键翻译成这些语言。",
        faqQ5: "如果我已经被骗了，该怎么办？",
        faqA5: "立即采取行动：<ul class=\"mt-2\"><li><strong>拨打您的银行</strong> 冻结您的账户</li><li>拨打 <strong>反诈骗热线：1800-722-6688</strong></li><li>在线报案或拨打 <strong>999</strong></li><li>通过 <strong>ScamShield 应用</strong> 举报</li></ul>您行动越快，追回资金的机会就越大。",
        faqQ6: "家庭成员可以使用 TrustBuddy 帮助我吗？",
        faqA6: "当然可以！家庭成员可以代表年长的父母或祖父母使用 TrustBuddy 检查信息。您也可以使用“复制结果”按钮通过 WhatsApp 或短信分享 AI 的分析。",
        faqQ7: "TrustBuddy 如何判断一条信息是否是诈骗？",
        faqA7: "TrustBuddy 使用一种名为 <strong>检索增强生成（RAG）</strong> 的技术。当您提交信息时，我们的 AI 会搜索精心整理的诈骗案例数据库，将其与真实诈骗档案进行比对，并根据匹配的模式、风险信号和新加坡常见的诈骗手法给出判断。",
        faqQ8: "TrustBuddy 可以在我的手机上使用吗？",
        faqA8: "可以！TrustBuddy 可在任何支持网页浏览器的设备上使用 — 智能手机、平板和电脑。界面响应式设计，优化了移动设备使用，按钮和文字都较大。",
        feedbackIntro: "帮助我们持续改进 TrustBuddy，为新加坡年长者提供更好的服务。",
        feedbackQ1: "TrustBuddy 对您有帮助吗？",
        feedbackQ2: "诈骗分析结果正确吗？",
        feedbackQ3: "AI 的回复是否容易理解？",
        feedbackQ4: "还有其他意见吗？（可选）",
        feedbackPlaceholder: "请输入您的意见……",
        feedbackSubmit: "✅ 提交反馈",
        feedbackHelpfulYes: "👍 有帮助",
        feedbackHelpfulNo: "👎 没有帮助",
        feedbackAccurateYes: "是",
        feedbackAccurateNo: "否",
        feedbackAccurateNotSure: "不确定",
        feedbackClarityEasy: "😊 容易理解",
        feedbackClarityOk: "😐 一般",
        feedbackClarityConfusing: "😕 难以理解",
        sourceAttribution: "所有资源均来自 <a href='https://www.scamshield.gov.sg/' target='_blank' rel='noopener'>新加坡 ScamShield（scamshield.gov.sg）</a> — 由新加坡政府发起的倡议。",
        indexTrustBuddy: "别被骗。<br>询问 TrustBuddy。",
        indexReceivedText: "收到一条奇怪的短信？不确定是真实信息还是诈骗？只需将内容贴到这里，我们的 AI 会在几秒钟内为您检查，并告诉您是否安全。",
        indexTrustBuddyHelp: "<strong>TrustBuddy 可以帮助您：</strong><br>✅ 检查可疑信息是真实还是诈骗<br>✅ 识别冒充您孩子或警方的诈骗分子<br>✅ 学习常见诈骗手法以及如何保护自己",
        indexTrustBuddyHelpsYou: "🌏 4 种语言 | 🔊 语音朗读 | 🔒 100% 保护隐私 | 💰 永久免费",
        indexCheckMessage: "🔍 开始检查信息",
        indexScamProfiles: "诈骗档案",
        indexLanguages: "语言",
        indexAvailable: "可用",
        indexBuiltForSeniors: "专为新加坡长者打造 · AI 驱动 · 无需注册"
  
    },
    ms: {
        tagline: "Pembantu anti-penipuan anda",
        langLabel: "Bahasa:",
        sizeLabel: "Saiz Teks:",
        tabCheck: "🔍 Semak Mesej",
        tabHistory: "📋 Sejarah",
        inputLabel: "<strong>Tampal mesej yang mencurigakan di bawah dan saya akan semak untuk anda:</strong>",
        placeholder: "Tampal di sini..",
        privacyNote: "🔒 Mesej anda disemak dengan selamat. Kami tidak menyimpan data peribadi anda.",
        checkBtn: "🔍 Semak Mesej Ini",
        loadingLabel: "Sedang menganalisis — sila tunggu...",
        resultHeader: "TrustBuddy berkata:",
        errorHeader: "Masalah Sambungan",
        errorMessage: "Kami tidak dapat menghubungi perkhidmatan semakan penipuan sekarang. Sila semak sambungan internet anda dan cuba lagi.",
        copyBtn: "📋 Salin Keputusan",
        resetBtn: "🔄 Semak Mesej Lain",
        copied: "✅ Disalin!",
        historyTitle: "Semakan Terdahulu",
        clearHistory: "🗑️ Padam Semua",
        historyEmpty: "Belum ada mesej yang disemak. Sejarah anda akan dipaparkan di sini.",
        clearConfirm: "Adakah anda pasti mahu memadamkan semua sejarah?",
        connectionOk: '✅ <strong>Disambungkan ke AI</strong> — TrustBuddy sedia',
        connectionFail: '⚠️ <strong>Masalah sambungan</strong> — Sila cuba lagi',
        emergencyTitle: "🚨 Rasa anda telah ditipu?",
        emergencyLine1: 'Hubungi <strong>Talian Anti-Penipuan</strong>: <a href="tel:1800-722-6688">1800-722-6688</a>',
        emergencyLine2: 'Lapor melalui <strong>Aplikasi ScamShield</strong> atau layari <a href="https://www.scamshield.org.sg" target="_blank" rel="noopener">scamshield.org.sg</a>',
        emergencyLine3: 'Dalam kecemasan, hubungi <strong>Polis Singapura</strong>: <a href="tel:999">999</a>',
        footerPrivacy: "🔒 100% Percuma — Mesej anda tidak disimpan di pelayan kami.",
        navBrand: "TrustBuddy",
        navHome: "Laman Utama",
        navAbout: "Mengenai",
        navScamTypes: "Jenis Penipuan",
        navResources: "Sumber",
        navFAQ: "FAQ",
        navFeedback: "Maklum Balas",
        footerHome: "Laman Utama",
        footerAbout: "Mengenai",
        footerScamTypes: "Jenis Penipuan",
        footerFAQ: "FAQ",
        footerFeedback: "Maklum Balas",
        title: "TrustBuddy — Pembantu Anti-Penipuan",
        headingAbout: "Mengenai TrustBuddy",
        headingScamTypes: "Jenis Penipuan Biasa di Singapura",
        headingResources: "Sumber Pendidikan",
        headingFAQ: "Soalan Lazim",
        headingFeedback: "Berikan Maklum Balas",
        aboutIntro1: "TrustBuddy ialah <strong>alat AI percuma</strong> yang membantu warga emas di Singapura mengenal pasti mesej penipuan, pautan phishing dan panggilan penipuan.",
        aboutIntro2: "Kes penipuan di Singapura telah mencapai tahap tertinggi dalam beberapa tahun kebelakangan ini. Warga emas merupakan golongan yang paling mudah menjadi mangsa kerana sering disasarkan oleh penipu yang menyamar sebagai bank, pegawai kerajaan atau ahli keluarga.",
        aboutIntro3: "Sistem kami menggunakan <strong>Retrieval-Augmented Generation (RAG)</strong> untuk menyemak mesej yang mencurigakan dengan pangkalan data profil penipuan yang telah disusun, lalu memberikan keputusan yang pantas, tepat dan mudah difahami oleh semua orang.",
        howItWorks: "Cara Ia Berfungsi",
        step1Title: "Langkah 1",
        step1Desc: "Tampalkan mesej mencurigakan yang anda terima",
        step2Title: "Langkah 2",
        step2Desc: "AI mencari padanan dalam pangkalan data penipuan kami",
        step3Title: "Langkah 3",
        step3Desc: "Dapatkan keputusan serta-merta dan nasihat keselamatan",
        keyFeatures: "Ciri-ciri Utama",
        featureMultiLanguage: "✅ <strong>Sokongan pelbagai bahasa</strong> — Bahasa Inggeris, 中文, Bahasa Melayu, தமிழ்",
        featureAdjustableText: "✅ <strong>Saiz teks boleh dilaraskan</strong> — untuk memenuhi keperluan penglihatan yang berbeza",
        featureTranslation: "✅ <strong>Terjemahan satu klik</strong> — terjemahkan respons AI dengan serta-merta",
        featureReadAloud: "✅ <strong>Bacaan suara</strong> — AI membacakan respons untuk mereka yang mempunyai masalah penglihatan",
        featureHistory: "✅ <strong>Sejarah semakan</strong> — semak semula analisis terdahulu pada bila-bila masa",
        featureCopyShare: "✅ <strong>Salin & kongsi</strong> — hantar keputusan kepada keluarga melalui WhatsApp",
        featureResources: "✅ <strong>Sumber pendidikan</strong> — nasihat rasmi tentang penipuan, video, kuiz dan permainan",
        featureFeedback: "✅ <strong>Sistem maklum balas</strong> — bantu kami menambah baik dengan maklum balas anda",
        featurePrivacy: "✅ <strong>100% percuma & peribadi</strong> — tiada data disimpan",
        resourcesIntro: "Kekal berinformasi. Pelajari cara melindungi diri anda dan orang tersayang daripada penipuan.",
        readLearnHeading: "Baca & Pelajari",
        scamBriefsTitle: "Ringkasan Penipuan & Jenayah Siber",
        scamBriefsDesc: "Laporan terkini mengenai kes penipuan dan statistik jenayah siber di Singapura.",
        scamTrendsTitle: "Trend Penipuan",
        scamTrendsDesc: "Trend penipuan semasa dan corak baharu yang menyasarkan rakyat Singapura.",
        scamBulletinsTitle: "Buletin Penipuan",
        scamBulletinsDesc: "Buletin berkala dengan maklumat terkini mengenai taktik penipuan baharu dan amaran keselamatan.",
        scamTypesIntro: "Pelajari cara mengenal pasti penipuan ini dan lindungi diri anda serta orang tersayang.",
        scamTypeFamilyTitle: "Peniruan Keluarga",
        scamTypeBankTitle: "Amaran Bank Palsu (Phishing)",
        scamTypeGovernmentTitle: "Peniruan Kerajaan",
        scamTypeInvestmentTitle: "Penipuan Pelaburan",
        scamTypeLoveTitle: "Penipuan Cinta / Percintaan",
        scamTypeParcelTitle: "Penipuan Penghantaran Bungkusan",
        scamTypeJobTitle: "Penipuan Kerja",
        scamTypeCpfIrasTitle: "Penipuan Cukai CPF / IRAS",
        scamTypeHigh: "TINGGI",
        scamTypeCritical: "KRITIKAL",
        scamTypeMedium: "SEDERHANA",
        exampleLabel: "Contoh:",
        howItWorksLabel: "Bagaimana ia berfungsi:",
        protectionLabel: "Perlindungan:",
        scamTypeFamilyExample: "“Hi Mak, saya jatuhkan telefon. Ini nombor baru saya. Boleh hantarkan $500 ke akaun ini segera?”",
        scamTypeFamilyHow: "Penipu menyamar sebagai anak anda dengan “nombor baru” dan meminta pemindahan wang segera melalui PayNow atau pindahan bank.",
        scamTypeFamilyProtection: "Hubungi anak anda di nombor asal mereka. Tanyakan soalan peribadi yang hanya mereka tahu.",
        scamTypeBankExample: "“[DBS] Transaksi tidak dibenarkan sebanyak SGD 3,500 dikesan. Sahkan sekarang: https://dbs-secure-login.com”",
        scamTypeBankHow: "SMS dengan pautan bank palsu mencuri maklumat masuk dan OTP apabila anda mengklik dan memasukkan butiran.",
        scamTypeBankProtection: "Bank TIDAK pernah menghantar pautan boleh klik melalui SMS. Hubungi nombor di belakang kad anda.",
        scamTypeGovernmentExample: "“Ini Polis Singapura. Akaun bank anda dikaitkan dengan pengubahan wang haram. Pindahkan dana anda ke akaun selamat ini.”",
        scamTypeGovernmentHow: "Pemanggil mendakwa sebagai Polis/MAS/ICA dan mendesak anda memindahkan simpanan ke akaun “selamat” untuk “siasatan.”",
        scamTypeGovernmentProtection: "Polis tidak akan pernah meminta anda memindahkan wang. Tamatkan panggilan dan hubungi 999 jika tidak pasti.",
        scamTypeInvestmentExample: "“Pulangan dijamin 20% sebulan! Sertai kumpulan Telegram eksklusif kami. Saya menjana $50,000 dalam seminggu!”",
        scamTypeInvestmentHow: "Mangsa menyertai kumpulan, membuat pelaburan kecil dengan “pulangan,” kemudian melabur besar. Platform itu hilang bersama semua wang.",
        scamTypeInvestmentProtection: "Tiada pelaburan sah yang menjamin pulangan tinggi. Semak Senarai Amaran Pelabur MAS.",
        scamTypeLoveExample: "“Saya mahu melawat anda di Singapura tetapi perlukan wang tiket kapal terbang. Saya janji akan bayar balik.”",
        scamTypeLoveHow: "Profil temu janji palsu membina hubungan emosi selama beberapa minggu, kemudian mencipta kecemasan yang memerlukan wang.",
        scamTypeLoveProtection: "Jangan hantar wang kepada sesiapa yang anda belum pernah berjumpa secara peribadi. Cari balik gambar mereka melalui carian imej terbalik.",
        scamTypeParcelExample: "“SingPost: Cubaan penghantaran gagal. Bayar $2.50 untuk menjadualkan semula: http://singpost-pay.com”",
        scamTypeParcelHow: "SMS penghantaran palsu meminta bayaran “yuran” kecil melalui pautan. Pautan mencuri butiran kad dan mengosongkan akaun anda.",
        scamTypeParcelProtection: "SingPost/Ninja Van tidak akan meminta bayaran melalui pautan SMS. Gunakan aplikasi rasmi sahaja.",
        scamTypeJobExample: "“Dapatkan $300/hari dengan menekan video YouTube dari rumah! Bayar yuran pendaftaran $50 untuk mula segera.”",
        scamTypeJobHow: "Tugas kecil membayar pada awalnya untuk membina kepercayaan. Kemudian mangsa diminta “melabur” untuk membuka bayaran lebih tinggi. Wang tidak kembali.",
        scamTypeJobProtection: "Peluang kerja sah tidak akan meminta anda membayar lebih awal. Jika anda perlu membayar untuk mendapat wang, ia adalah penipuan.",
        scamTypeCpfIrasExample: "“IRAS: Pulangan cukai anda mempunyai ralat. Klik untuk mengesahkan: https://iras-refund-sg.com. Anda berhak mendapat $3,200.”",
        scamTypeCpfIrasHow: "SMS palsu menyamar sebagai CPF/IRAS. Pautan mencuri bukti SingPass atau butiran bank.",
        scamTypeCpfIrasProtection: "CPF dan IRAS tidak akan menghantar pautan boleh klik melalui SMS. Gunakan aplikasi SingPass atau laman rasmi sahaja.",
        columnTitle: "Kolum The Straits Times",
        columnDesc: "Artikel dan kolum anti-penipuan yang diterbitkan dalam The Straits Times.",
        materialsTitle: "Bahan Pendidikan Awam",
        materialsDesc: "Risalah, poster dan bahan pendidikan yang boleh dimuat turun untuk masyarakat.",
        videosTitle: "Belajar Melalui Video",
        videosDesc: "Tonton video pendidikan tentang cara penipuan berlaku dan bagaimana untuk kekal selamat.",
        interactiveHeading: "Interaktif & Menyeronokkan",
        quizTitle: "Kuiz Penipuan",
        quizDesc: "Uji pengetahuan anda tentang penipuan melalui kuiz interaktif.",
        gamesTitle: "Permainan Anti-Penipuan",
        gamesDesc: "Main permainan yang membantu anda belajar mengenal pasti penipuan.",
        faqIntro: "Semua yang anda perlu tahu tentang TrustBuddy.",
        faqQ1: "Adakah TrustBuddy percuma untuk digunakan?",
        faqA1: "Ya, TrustBuddy adalah 100% percuma. Tiada caj tersembunyi, yuran langganan atau pendaftaran diperlukan. Hanya tampalkan mesej anda dan semak dengan segera.",
        faqQ2: "Adakah mesej saya disimpan atau dikongsi?",
        faqA2: "Mesej anda hanya digunakan untuk menyemak penipuan dan tidak disimpan secara kekal atau dikongsi dengan pihak ketiga. Kami mengambil serius privasi anda. Sejarah semakan anda hanya disimpan secara tempatan pada peranti anda sendiri.",
        faqQ3: "Sejauh manakah ketepatan pengesanan penipuan?",
        faqA3: "TrustBuddy menggunakan AI yang disokong oleh pangkalan data profil penipuan sebenar dari Singapura. Walaupun sangat tepat, tiada sistem yang sempurna. Jika anda ragu-ragu, hubungi <strong>Talian Bantuan Anti-Scam di 1799</strong>.",
        faqQ4: "Apakah bahasa yang disokong?",
        faqA4: "Antara muka ini menyokong keempat-empat bahasa rasmi Singapura: <strong>Bahasa Inggeris, 中文, Bahasa Melayu dan தமிழ்</strong>. Respons AI juga boleh diterjemahkan ke mana-mana bahasa ini dengan satu klik.",
        faqQ5: "Apakah yang perlu saya lakukan jika saya telah menjadi mangsa penipuan?",
        faqA5: "Bertindak segera:<ul class=\"mt-2\"><li><strong>Hubungi bank anda</strong> untuk membekukan akaun anda</li><li>Hubungi <strong>Talian Bantuan Anti-Scam: 1800-722-6688</strong></li><li>Bulet laporan polis dalam talian atau hubungi <strong>999</strong></li><li>Laporkan melalui <strong>Aplikasi ScamShield</strong></li></ul>Semakin cepat anda bertindak, semakin besar peluang untuk memulihkan dana anda.",
        faqQ6: "Bolehkah keluarga saya menggunakan TrustBuddy untuk membantu saya?",
        faqA6: "Sudah tentu! Ahli keluarga boleh menggunakan TrustBuddy untuk menyemak mesej bagi pihak ibu bapa atau datuk nenek yang berusia. Anda juga boleh menggunakan butang \"Salin Keputusan\" untuk berkongsi analisis AI melalui WhatsApp atau SMS.",
        faqQ7: "Bagaimana TrustBuddy mengetahui sama ada mesej itu penipuan?",
        faqA7: "TrustBuddy menggunakan teknologi yang dipanggil <strong>Retrieval-Augmented Generation (RAG)</strong>. Apabila anda menghantar mesej, AI kami mencari corak penipuan yang diketahui dalam pangkalan data yang terpilih, membandingkannya dengan profil penipuan sebenar, dan memberi keputusan berdasarkan corak yang sepadan, isyarat amaran, dan taktik yang digunakan oleh penipu di Singapura.",
        faqQ8: "Adakah TrustBuddy boleh digunakan di telefon saya?",
        faqA8: "Ya! TrustBuddy boleh digunakan pada mana-mana peranti yang mempunyai pelayar web — telefon pintar, tablet, dan komputer. Reka bentuknya responsif sepenuhnya dan dioptimumkan untuk kegunaan mudah alih dengan butang dan teks yang besar.",
        feedbackIntro: "Bantu kami menambah baik TrustBuddy untuk warga emas di Singapura.",
        feedbackQ1: "Adakah TrustBuddy membantu anda?",
        feedbackQ2: "Adakah keputusan pengesanan penipuan adalah tepat?",
        feedbackQ3: "Adakah respons mudah difahami?",
        feedbackQ4: "Ada apa-apa lagi? (Pilihan)",
        feedbackPlaceholder: "Kongsi pendapat anda...",
        feedbackSubmit: "✅ Hantar Maklum Balas",
        feedbackHelpfulYes: "👍 Membantu",
        feedbackHelpfulNo: "👎 Tidak Membantu",
        feedbackAccurateYes: "Ya",
        feedbackAccurateNo: "Tidak",
        feedbackAccurateNotSure: "Tidak Pasti",
        feedbackClarityEasy: "😊 Mudah",
        feedbackClarityOk: "😐 OK",
        feedbackClarityConfusing: "😕 Mengelirukan",
        sourceAttribution: "Semua sumber adalah daripada <a href='https://www.scamshield.gov.sg/' target='_blank' rel='noopener'>ScamShield Singapura (scamshield.gov.sg)</a> — inisiatif kerajaan Singapura.",
        indexTrustBuddy: "Jangan jadi mangsa penipuan.<br>Tanya TrustBuddy.",
        indexReceivedText: "Menerima mesej teks yang mencurigakan? Tidak pasti sama ada ia benar atau satu penipuan? Hanya tampalkan mesej itu di sini — AI kami akan menyemaknya dalam beberapa saat dan memberitahu anda sama ada ia selamat.",
        indexTrustBuddyHelp: "<strong>TrustBuddy membantu anda:</strong><br>✅ Menyemak sama ada mesej yang mencurigakan adalah benar atau penipuan<br>✅ Mengenal pasti penipu yang menyamar sebagai anak anda atau pihak polis<br>✅ Mempelajari penipuan yang biasa berlaku dan cara melindungi diri",
        indexTrustBuddyHelpsYou: "🌏 4 Bahasa | 🔊 Bacaan Suara | 🔒 100% Peribadi | 💰 Percuma Selamanya",
        indexCheckMessage: "🔍 Mula Menyemak Mesej",
        indexScamProfiles: "Profil Penipuan",
        indexLanguages: "Bahasa",
        indexAvailable: "Tersedia",
        indexBuiltForSeniors: "Direka khas untuk warga emas di Singapura · Dikuasakan oleh AI · Tiada pendaftaran diperlukan"
    
    
    },
    ta: {
        tagline: "உங்கள் நம்பகமான மோசடி-சோதனை உதவியாளர்",
        langLabel: "மொழி:",
        sizeLabel: "எழுத்து அளவு:",
        tabCheck: "🔍 செய்தியை சோதிக்க",
        tabHistory: "📋 வரலாறு",
        inputLabel: "<strong>சந்தேகமான செய்தியை கீழே ஒட்டவும், நான் உங்களுக்காக சோதிக்கிறேன்:</strong>",
        placeholder: "இங்கே ஒட்டவும்..",
        privacyNote: "🔒 உங்கள் செய்தி பாதுகாப்பாக சோதிக்கப்படுகிறது. உங்கள் தனிப்பட்ட தரவை நாங்கள் சேமிப்பதில்லை.",
        checkBtn: "🔍 இந்த செய்தியை சோதிக்கவும்",
        loadingLabel: "பகுப்பாய்வு செய்யப்படுகிறது — தயவுசெய்து காத்திருங்கள்...",
        resultHeader: "TrustBuddy கூறுகிறது:",
        errorHeader: "இணைப்பு பிரச்சனை",
        errorMessage: "மோசடி-சோதனை சேவையை இப்போது அணுக முடியவில்லை. உங்கள் இணைய இணைப்பை சரிபார்த்து மீண்டும் முயற்சிக்கவும்.",
        copyBtn: "📋 முடிவை நகலெடு",
        resetBtn: "🔄 வேறு செய்தியை சோதிக்க",
        copied: "✅ நகலெடுக்கப்பட்டது!",
        historyTitle: "முந்தைய சோதனைகள்",
        clearHistory: "🗑️ அனைத்தையும் அழி",
        historyEmpty: "இதுவரை எந்த செய்தியும் சோதிக்கப்படவில்லை. உங்கள் வரலாறு இங்கே தோன்றும்.",
        clearConfirm: "அனைத்து வரலாற்றையும் அழிக்க விரும்புகிறீர்களா?",
        connectionOk: '✅ <strong>AI உடன் இணைக்கப்பட்டது</strong> — TrustBuddy தயாராக உள்ளது',
        connectionFail: '⚠️ <strong>இணைப்பு பிரச்சனை</strong> — மீண்டும் முயற்சிக்கவும்',
        emergencyTitle: "🚨 நீங்கள் மோசடிக்கு ஆளானதாக நினைக்கிறீர்களா?",
        emergencyLine1: '<strong>மோசடி எதிர்ப்பு உதவி எண்</strong>: <a href="tel:1800-722-6688">1800-722-6688</a> அழைக்கவும்',
        emergencyLine2: '<strong>ScamShield செயலி</strong> மூலம் புகாரளிக்கவும் அல்லது <a href="https://www.scamshield.org.sg" target="_blank" rel="noopener">scamshield.org.sg</a> பார்க்கவும்',
        emergencyLine3: 'அவசரநிலையில், <strong>சிங்கப்பூர் காவல்துறை</strong>: <a href="tel:999">999</a> அழைக்கவும்',
        footerPrivacy: "🔒 100% இலவசம் — உங்கள் செய்திகள் எங்கள் சேவையகங்களில் சேமிக்கப்படுவதில்லை.",
        navBrand: "TrustBuddy",
        navHome: "முகப்பு",
        navAbout: "பற்றி",
        navScamTypes: "தடையற்ற மோசடி வகைகள்",
        navResources: "வளங்கள்",
        navFAQ: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
        navFeedback: "பின்தொடர்பு",
        footerHome: "முகப்பு",
        footerAbout: "பற்றி",
        footerScamTypes: "மோசடி வகைகள்",
        footerFAQ: "FAQ",
        footerFeedback: "கருத்து",
        title: "TrustBuddy — மோசடி எதிர்ப்பு உதவியாளர்",
        headingAbout: "TrustBuddy பற்றி",
        headingScamTypes: "சிங்கப்பூரில் பொதுவான மோசடி வகைகள்",
        headingResources: "கல்வி வளங்கள்",
        headingFAQ: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
        headingFeedback: "பின்தொடர்பைக் கொடுங்கள்",
        aboutIntro1: "TrustBuddy என்பது <strong>இலவச AI அடிப்படையிலான கருவி</strong>. இது சிங்கப்பூரில் உள்ள மூத்த குடிமக்கள் மோசடி செய்திகள், போலி இணைப்புகள் மற்றும் மோசடி தொலைபேசி அழைப்புகளை அடையாளம் காண உதவுகிறது.",
        aboutIntro2: "சமீப ஆண்டுகளில் சிங்கப்பூரில் மோசடி சம்பவங்கள் சாதனை அளவை எட்டியுள்ளன. வங்கிகள், அரசு அதிகாரிகள் அல்லது குடும்ப உறுப்பினர்களாக நடிக்கும் மோசடிக்காரர்களால் மூத்த குடிமக்கள் அதிகமாக இலக்காகக் கொள்ளப்படுகின்றனர்.",
        aboutIntro3: "எங்கள் அமைப்பு <strong>Retrieval-Augmented Generation (RAG)</strong> தொழில்நுட்பத்தைப் பயன்படுத்தி சந்தேகத்திற்கிடமான செய்திகளை நம்பகமான மோசடி தரவுத்தளத்துடன் ஒப்பிட்டு, அனைவரும் எளிதில் புரிந்துகொள்ளக்கூடிய மொழியில் உடனடி மற்றும் துல்லியமான முடிவுகளை வழங்குகிறது.",
        howItWorks: "இது எவ்வாறு செயல்படுகிறது",
        step1Title: "படி 1",
        step1Desc: "நீங்கள் பெற்ற சந்தேகத்திற்கிடமான செய்தியை ஒட்டுங்கள்",
        step2Title: "படி 2",
        step2Desc: "AI எங்கள் மோசடி தரவுத்தளத்தில் பொருந்தும் தகவல்களைத் தேடுகிறது",
        step3Title: "படி 3",
        step3Desc: "உடனடியாக முடிவையும் பாதுகாப்பு ஆலோசனையையும் பெறுங்கள்",
        keyFeatures: "முக்கிய அம்சங்கள்",
        featureMultiLanguage: "✅ <strong>பல மொழி ஆதரவு</strong> — ஆங்கிலம், 中文, Bahasa Melayu, தமிழ்",
        featureAdjustableText: "✅ <strong>எழுத்து அளவை மாற்றலாம்</strong> — வெவ்வேறு பார்வைத் தேவைகளுக்காக",
        featureTranslation: "✅ <strong>ஒரே கிளிக்கில் மொழிபெயர்ப்பு</strong> — AI பதில்களை உடனடியாக மொழிபெயர்க்கலாம்",
        featureReadAloud: "✅ <strong>உரக்க வாசித்தல்</strong> — பார்வைக் குறைபாடு உள்ளவர்களுக்காக AI பதிலை உரக்க வாசிக்கும்",
        featureHistory: "✅ <strong>முந்தைய பதிவுகள்</strong> — முந்தைய பகுப்பாய்வுகளை எப்போது வேண்டுமானாலும் பார்க்கலாம்",
        featureCopyShare: "✅ <strong>நகலெடுத்து பகிரவும்</strong> — WhatsApp மூலம் குடும்பத்தினருடன் முடிவுகளைப் பகிரலாம்",
        featureResources: "✅ <strong>கல்வி வளங்கள்</strong> — அதிகாரப்பூர்வ மோசடி எச்சரிக்கைகள், வீடியோக்கள், வினாடி வினாக்கள் மற்றும் விளையாட்டுகள்",
        featureFeedback: "✅ <strong>கருத்து தெரிவிக்கும் அமைப்பு</strong> — உங்கள் கருத்துகளால் எங்களை மேம்படுத்த உதவுங்கள்",
        featurePrivacy: "✅ <strong>100% இலவசம் மற்றும் தனியுரிமை</strong> — எந்தத் தரவும் சேமிக்கப்படாது",
        resourcesIntro: "தகவலறிந்து இருங்கள். உங்களையும் உங்கள் அன்புக்குரியவர்களையும் மோசடிகளில் இருந்து பாதுகாப்பது எப்படி என்பதை அறிந்து கொள்ளுங்கள்.",
        readLearnHeading: "படித்து அறிக",
        scamBriefsTitle: "மோசடி மற்றும் இணையக் குற்றச் சுருக்கங்கள்",
        scamBriefsDesc: "சிங்கப்பூரில் நடைபெற்ற சமீபத்திய மோசடி வழக்குகள் மற்றும் இணையக் குற்றப் புள்ளிவிவரங்கள்.",
        scamTrendsTitle: "மோசடி போக்குகள்",
        scamTrendsDesc: "சிங்கப்பூரர்களை இலக்காகக் கொண்ட தற்போதைய மோசடி போக்குகள் மற்றும் புதிய உத்திகள்.",
        scamBulletinsTitle: "மோசடி அறிவிப்புகள்",
        scamBulletinsDesc: "புதிய மோசடி உத்திகள் மற்றும் எச்சரிக்கைகள் பற்றிய வழக்கமான அறிவிப்புகள்.",
        scamTypesIntro: "இந்த மோசடிகளை அறிவதன் மூலம் உங்கள் மற்றும் உங்கள் அன்புக்குரியவர்களை பாதுகாக்கவும்.",
        scamTypeFamilyTitle: "குடும்பத்தை போலி அழித்தல்",
        scamTypeBankTitle: "போலிப்பெற்று வங்கி எச்சரிக்கை (ஃபிஷிங்)",
        scamTypeGovernmentTitle: "அரசு அதிகாரியை போல நடிக்கும் மோசடி",
        scamTypeInvestmentTitle: "முதலீட்டு மோசடி",
        scamTypeLoveTitle: "காதல் / காதலர் மோசடி",
        scamTypeParcelTitle: "கடைசிப் பார்சல் மோசடி",
        scamTypeJobTitle: "வேலைவாய்ப்பு மோசடி",
        scamTypeCpfIrasTitle: "CPF / IRAS வரி மோசடி",
        scamTypeHigh: "உயர்",
        scamTypeCritical: "முக்கியமான",
        scamTypeMedium: "நடுத்தர",
        exampleLabel: "உதாரணம்:",
        howItWorksLabel: "இது எப்படி வேலை செய்கிறது:",
        protectionLabel: "பாதுகாப்பு:",
        scamTypeFamilyExample: "“மமா, என் கைபேசியை வீழ்த்தி விட்டேன். இது என் புதிய எண்ணிக்கை. தயவுசெய்து உடனடியாக $500 இந்த கணக்குக்கு அனுப்ப முடியுமா?”",
        scamTypeFamilyHow: "மோசடிக்காரர் உங்கள் மகனாக அல்லது மகளாக நடித்து \"புதிய எண்\" என்றால், PayNow அல்லது வங்கி பரிமாற்றம் மூலம் உடனடி பணம் கோருகிறார்.",
        scamTypeFamilyProtection: "அவர்களின் பழைய எண்ணிக்கையில் உங்கள் குழந்தையை அழைக்கவும். அவர்கள் மட்டுமே அறிந்த ஒரு தனியார் கேள்வியை கேளுங்கள்.",
        scamTypeBankExample: "“[DBS] SGD 3,500 உடைய அனுமதியற்ற பரிமாற்றம் கண்டறியப்பட்டது. இப்போது சரிபார்க்கவும்: https://dbs-secure-login.com”",
        scamTypeBankHow: "தவறான வங்கி இணைப்பு கொண்ட SMS-ஐ நீங்கள் கிளிக் செய்து விவரங்களை உள்ளிடும் போது உங்கள் உள்நுழைவு விவரங்களையும் OTP-யையும் திருப்பிச் செலுத்தும்.",
        scamTypeBankProtection: "வங்கிகள் SMS மூலமாக சொடுக்கக்கூடிய இணைப்புகளைச் சமர்ப்பிக்க மாட்டார்கள். உங்கள் அட்டையின் பின்புறத்தில் உள்ள எண்ணிக்கையில் அழைக்கவும்.",
        scamTypeGovernmentExample: "“இது சிங்கப்பூர் போலீசார். உங்கள் வங்கி கணக்கு பணம் துல்லியமின்றி மயக்கத்தில் உள்ளது. உங்கள் தொகையை இந்த பாதுகாப்பான கணக்கிற்கு மாற்றவும்.”",
        scamTypeGovernmentHow: "மாற்று அழைப்பாளர் போலீஸ்/MAS/ICA என்று வழிமொழிந்து, சோதனைக்காக உங்கள் சேமிப்புகளை \"பாதுகாப்பான\" கணக்கிற்கு மாற்றுமாறு அழுத்துகிறார்.",
        scamTypeGovernmentProtection: "போலீஸ் நீங்கள் பணம் மாற்ற உங்களை எப்போதும் கேட்க மாட்டார். நிச்சயமில்லாமல் இருந்தால் கொண்டையை விட்டு 999-ஐ அழைக்கவும்.",
        scamTypeInvestmentExample: "“மாதத்திற்கு 20% வருமானம் உறுதி! எங்கள் தனியுரிமை Telegram குழுவில் சேரவும். நான் ஒரு வாரத்தில் $50,000 சம்பாதித்தேன்!”",
        scamTypeInvestmentHow: "பயனாளர் குழுவில் சேர்ந்து சிறிய முதலீடுகளை செய்கிறார், பின்னர் \"வருமானம்\" கூறப்படுகின்றது, பின்னர் அதிக முதலீடு செய்யப்படுகிறது. பின்னர் தளம் அனைத்து நிதிகளுடன் காணாமல் ஆகும்.",
        scamTypeInvestmentProtection: "எந்த சட்டப்படி முதலீடுகளும் அதிக வருமானத்தை உறுதிசெய்ய மாட்டாது. MAS முதலீட்டாளர் எச்சரிப்பு பட்டியலை சரிபார்க்கவும்.",
        scamTypeLoveExample: "“நான் சமீபத்தில் சிங்கப்பூருக்கு வர விரும்புகிறேன் ஆனால் விமானப்பயணத்திற்கு பணம் வேண்டும். நான் அதை திரும்பப்பெறுவேன் என்று வாக்களிக்கிறேன்.”",
        scamTypeLoveHow: "போய்யான காதல் தேர்வு சுயவிவரம் பல வாரங்கள் மூலம் உணர்ச்சி தொடர்பினை உருவாக்கி, பின்னர் பணம் கேட்க அவசர கடமையை உருவாக்குகிறது.",
        scamTypeLoveProtection: "நீங்கள் நேரில் சந்திக்காத ஒருவருக்கு பணம் அனுப்பாதீர்கள். அவர்களின் புகைப்படங்களை எதிர்-படம் தேடல் மூலம் சரிபாருங்கள்.",
        scamTypeParcelExample: "“SingPost: விநியோக முயற்சி தோல்வி. மீண்டும் கட்டமைக்க $2.50 செலுத்தவும்: http://singpost-pay.com”",
        scamTypeParcelHow: "போய் விநியோக SMS ஒரு சிறிய \"கட்டணம்\" கேட்டு இணைப்பு மூலமாக செலவுசெய்கிறது. இணைப்பு உங்கள் கிரெடிட் கார்டு விவரங்களை திருடி உங்கள் கணக்கை காலியாக்கும்.",
        scamTypeParcelProtection: "SingPost/Ninja Van SMS வழியாக கட்டணம் கேட்காது. அவர்களின் அதிகாரப்பூர்வ செயலியை மட்டுமே பயன்படுத்தவும்.",
        scamTypeJobExample: "“வீட்டிலிருந்து YouTube வீடியோக்களை விரும்புவதற்கு $300/நாள் சம்பாதிக்கலாம்! உடனடியாக துவங்க $50 பதிவு கட்டணம் செலுத்தவும்.”",
        scamTypeJobHow: "சிறிய பணிகள் தொடக்கத்தில் நம்பிக்கையை உருவாக்க பணம் தருகின்றன. பின்னர் அவரை அதிக கட்டணம் செலுத்த \"முதலீடு\" செய்யச் சொல்லப்படுகிறது. பணம் திரும்பாது.",
        scamTypeJobProtection: "சட்டபூர்வ வேலை வாய்ப்புகள் நீங்கள் முன் பணம் செலுத்த வேண்டாம். பணம் சம்பாதிக்க நீங்கள் பணம் செலுத்த வேண்டுமானால், அது மோசடி.",
        scamTypeCpfIrasExample: "“IRAS: உங்கள் வரிவிளக்கத்தில் ஒரு பிழை உள்ளது. சரிபார்க்க கிளிக் செய்க: https://iras-refund-sg.com. உங்கள் வந்து $3,200.”",
        scamTypeCpfIrasHow: "போய் SMS CPF/IRAS போல மாறுகிறது. இணைப்பு உங்கள் SingPass சான்றிதழ்களையும் வங்கிக்கான விவரங்களையும் திருடும்.",
        scamTypeCpfIrasProtection: "CPF மற்றும் IRAS SMS மூலம் சொடுக்கக்கூடிய இணைப்புகளை அனுப்பமாட்டாது. SingPass செயலி அல்லது அதிகாரப்பூர்வ இணையத்தளத்தை மட்டுமே பயன்படுத்தவும்.",
        columnTitle: "The Straits Times கட்டுரைகள்",
        columnDesc: "The Straits Times வெளியிடும் மோசடி தடுப்பு கட்டுரைகள் மற்றும் சிறப்பு பதிவுகள்.",
        materialsTitle: "பொது கல்வி வளங்கள்",
        materialsDesc: "சமூகத்திற்காக பதிவிறக்கம் செய்யக்கூடிய சிற்றேடுகள், சுவரொட்டிகள் மற்றும் கல்வி வளங்கள்.",
        videosTitle: "வீடியோக்கள் மூலம் கற்றுக்கொள்ளுங்கள்",
        videosDesc: "மோசடிகள் எவ்வாறு நடைபெறுகின்றன மற்றும் பாதுகாப்பாக இருப்பது எப்படி என்பதை விளக்கும் கல்வி வீடியோக்களைப் பாருங்கள்.",
        interactiveHeading: "ஊடாடும் மற்றும் வேடிக்கையானது",
        quizTitle: "மோசடி வினாடி வினா",
        quizDesc: "ஊடாடும் வினாடி வினா மூலம் உங்கள் மோசடி பற்றிய அறிவைச் சோதியுங்கள்.",
        gamesTitle: "மோசடி தடுப்பு விளையாட்டுகள்",
        gamesDesc: "மோசடிகளை அடையாளம் காண கற்றுத்தரும் பயனுள்ள விளையாட்டுகளை விளையாடுங்கள்.",
        faqIntro: "TrustBuddy பற்றி நீங்கள் தெரிந்து கொள்ள வேண்டிய அனைத்தும்.",
        faqQ1: "TrustBuddy-ஐ இலவசமாகப் பயன்படுத்த முடியுமா?",
        faqA1: "ஆம், TrustBuddy 100% இலவசம். மறைமுக கட்டணங்கள், சந்தா அல்லது பதிவு தேவையில்லை. உங்கள் செய்தியை ஒட்டி உடனடியாகச் சரிபார்க்கலாம்.",
        faqQ2: "என் செய்தி சேமிக்கப்படுமா அல்லது பகிரப்படுமா?",
        faqA2: "உங்கள் செய்திகள் மோசடியைச் சரிபார்ப்பதற்காக மட்டுமே பயன்படுத்தப்படும். அவை நிரந்தரமாக சேமிக்கப்படாது அல்லது மூன்றாம் தரப்பினருடன் பகிரப்படாது. உங்கள் தனியுரிமையை நாங்கள் மிகவும் மதிக்கிறோம். உங்கள் சேமிப்பு வரலாறு உங்கள் சாதனத்தில் மட்டுமே உள்ளடக்கப்படும்.",
        faqQ3: "மோசடி கண்டறிதல் எவ்வளவு துல்லியமானது?",
        faqA3: "TrustBuddy, சிங்கப்பூரிலிருந்து சேகரிக்கப்பட்ட உண்மையான மோசடி விவரங்களை கொண்ட தரவுத்தளத்தின் ஆதரவுடன் இயங்கும் AI-ஐ பயன்படுத்துகிறது. இது மிகவும் துல்லியமானதாக இருந்தாலும், எந்த அமைப்பும் முழுமையானதல்ல. சந்தேகம் இருந்தால், <strong>1799 என்ற Anti-Scam உதவி எண்ணை</strong> அழைக்கவும்.",
        faqQ4: "எந்த மொழிகள் ஆதரிக்கப்படுகின்றன?",
        faqA4: "இந்த அமைப்பு சிங்கப்பூரின் நான்கு அதிகாரப்பூர்வ மொழிகளையும் ஆதரிக்கிறது: <strong>ஆங்கிலம், 中文, Bahasa Melayu மற்றும் தமிழ்</strong>. AI பதில்களையும் ஒரே கிளிக்கில் இந்த மொழிகளுக்கு மொழிபெயர்க்கலாம்.",
        faqQ5: "நான் ஏற்கனவே மோசடிக்கு ஆளாகிவிட்டால் என்ன செய்ய வேண்டும்?",
        faqA5: "உடனடியாக நடவடிக்கை எடு:<ul class=\"mt-2\"><li><strong>உங்கள் வங்கியை அழைக்கவும்</strong> உங்கள் கணக்கை குளிர்நிலைப்படுத்த</li><li><strong>மோசடி எதிர்ப்புத் தொலைபேசி: 1800-722-6688</strong> அழைக்கவும்</li><li><strong>போலிஸ் புகாரை</strong> ஆன்லைனில் பதிவு செய்யவும் அல்லது <strong>999</strong> அழைக்கவும்</li><li><strong>ScamShield செயலி</strong> மூலமாக புகாரளிக்கவும்</li></ul>நீங்கள் இன்னும் விரைவாக நடவடிக்கை எடுப்பினால், உங்கள் நிதியை மீட்டொள்ளும் வாய்ப்பு அதிகமாகும்.",
        faqQ6: "என் குடும்பம் TrustBuddy-ஐ எனக்கு உதவ பயன்படுத்தலாமா?",
        faqA6: "முடியும்அது! குடும்ப உறுப்பினர்கள் தங்கள் மூத்த பெற்றோர் அல்லது தாத்தா-பாட்டி சார்பாக செய்திகள் சரிபார்க்க TrustBuddy-ஐ பயன்படுத்தலாம். நீங்கள் AI-வின் பகுப்பாய்வை WhatsApp அல்லது SMS மூலம் பகிர பதிவேற்று முடிவு பொத்தானைப் பயன்படுத்தலாம்.",
        faqQ7: "ஒரு செய்தி மோசடி என்று TrustBuddy எப்படி தெரியும்?",
        faqA7: "TrustBuddy <strong>Retrieval-Augmented Generation (RAG)</strong> என்ற தொழில்நுட்பத்தைப் பயன்படுத்துகிறது. நீங்கள் ஒரு செய்தியை சமர்ப்பிக்கும் போது, எங்கள் AI தேர்வு செய்யப்பட்ட மோசடி வடிவமைப்புகளுடன் அந்த செய்தியை ஒப்பிடுகிறது, உண்மையான மோசடி hồட்டுகளுடன் ஒப்பிடுகிறது, பொருந்தும் மாதிரிகள், சிவப்பு கொடிகள் மற்றும் சிங்கப்பூரில் பயன்படுத்தப்படும் மோசடி நுட்பங்கள் அடிப்படையில் ஒரு முடிவை அளிக்கிறது.",
        faqQ8: "TrustBuddy என் தொலைபேசியில் வேலை செய்கிறதா?",
        faqA8: "ஆம்! TrustBuddy இணைய உலாவியில் செயல்படும் எந்த சாதனத்திலும் வேலை செய்கிறது — ஸ்மார்ட்ஃபோன், டாப்லெட் மற்றும் கணினிகள். வடிவமைப்பு முழுமையாக பதில் அளிக்கும் மற்றும் 모바일 பயன்பாட்டிற்காக பெரிய பொத்தான்கள் மற்றும் எழுத்துக்களுடன் மேம்படுத்தப்பட்டுள்ளது.",
        feedbackIntro: "சிங்கப்பூரின் மூத்த குடிமக்களுக்காக TrustBuddy-யை மேலும் மேம்படுத்த எங்களுக்கு உதவுங்கள்.",
        feedbackQ1: "TrustBuddy உங்களுக்கு உதவியாக இருந்ததா?",
        feedbackQ2: "மோசடி கண்டறிதல் முடிவு சரியாக இருந்ததா?",
        feedbackQ3: "பதில் எளிதாகப் புரிந்ததா?",
        feedbackQ4: "வேறு ஏதேனும் கருத்துகள் உள்ளதா? (விருப்பம்)",
        feedbackPlaceholder: "உங்கள் கருத்துகளைப் பகிருங்கள்...",
        feedbackSubmit: "✅ கருத்தைச் சமர்ப்பிக்கவும்",
        feedbackHelpfulYes: "👍 உதவியாக இருந்தது",
        feedbackHelpfulNo: "👎 உதவியாக இல்லை",
        feedbackAccurateYes: "ஆம்",
        feedbackAccurateNo: "இல்லை",
        feedbackAccurateNotSure: "உறுதியாக தெரியவில்லை",
        feedbackClarityEasy: "😊 எளிது",
        feedbackClarityOk: "😐 பரவாயில்லை",
        feedbackClarityConfusing: "😕 குழப்பமாக இருந்தது",
        sourceAttribution: "அனைத்து ஆதாரங்களும் <a href='https://www.scamshield.gov.sg/' target='_blank' rel='noopener'>ScamShield சிங்கப்பூர் (scamshield.gov.sg)</a> இலிருந்து பெறப்பட்டவை — சிங்கப்பூர் அரசாங்கத்தின் முயற்சி.",
        indexTrustBuddy: "மோசடியில் சிக்காதீர்கள்.<br>TrustBuddy-யிடம் கேளுங்கள்.",
        indexReceivedText: "சந்தேகத்திற்கிடமான குறுஞ்செய்தி கிடைத்ததா? அது உண்மையா அல்லது மோசடியா என்று தெரியவில்லையா? அதை இங்கே ஒட்டுங்கள் — எங்கள் AI சில நொடிகளில் அதைச் சரிபார்த்து, அது பாதுகாப்பானதா என்பதை உங்களுக்குத் தெரிவிக்கும்.",
        indexTrustBuddyHelp: "<strong>TrustBuddy உங்களுக்கு உதவுகிறது:</strong><br>✅ சந்தேகத்திற்கிடமான செய்தி உண்மையா அல்லது மோசடியா என்பதைச் சரிபார்க்க<br>✅ உங்கள் குழந்தை அல்லது காவல்துறை என நடிக்கும் மோசடிக்காரர்களைக் கண்டறிய<br>✅ பொதுவான மோசடிகளைப் பற்றி அறிந்து, உங்களை எவ்வாறு பாதுகாத்துக்கொள்வது என்பதை கற்றுக்கொள்ள",
        indexTrustBuddyHelpsYou: "🌏 4 மொழிகள் | 🔊 குரல் வாசிப்பு | 🔒 100% தனியுரிமை | 💰 எப்போதும் இலவசம்",
        indexCheckMessage: "🔍 செய்தியைச் சரிபார்க்கத் தொடங்குங்கள்",
        indexScamProfiles: "மோசடி வகைகள்",
        indexLanguages: "மொழிகள்",
        indexAvailable: "கிடைக்கும்",
        indexBuiltForSeniors: "சிங்கப்பூரின் மூத்த குடிமக்களுக்காக உருவாக்கப்பட்டது · AI மூலம் இயங்குகிறது · பதிவு தேவையில்லை"
    }
};

// State
let currentLang = 'en';

let lastResult = null; // Store last result so we can re-render on lang change
let originalResultText = ''; // Always keep the original English response for translations
let resultLang = 'en'; // Keep the displayed result language for speech output
let availableVoices = [];


const LANG_ORDER = ['en', 'zh', 'ms', 'ta'];

// DOM Elements
const inputField = document.getElementById('scamInput');
const checkButton = document.getElementById('checkButton');
const loadingStatus = document.getElementById('loadingStatus');
const resultBox = document.getElementById('resultBox');

// ===== LANGUAGE SWITCHING =====
function switchLang(lang) {
    currentLang = lang;
    localStorage.setItem('silverShieldLang', lang);
    applyTranslations();
}

function applyTranslations() {
    const t = { ...translations.en, ...translations[currentLang] };

    // Static UI elements (with null checks for pages that don't have all elements)
    const setEl = (id, prop, val) => { const el = document.getElementById(id); if (el) el[prop] = val; };
    setEl('tagline', 'textContent', t.tagline);
    setEl('langLabel', 'textContent', t.langLabel);
    setEl('sizeLabel', 'textContent', t.sizeLabel);
    setEl('tabCheckLabel', 'textContent', t.tabCheck);
    setEl('tabHistoryLabel', 'textContent', t.tabHistory);
    setEl('inputLabel', 'innerHTML', t.inputLabel);
    setEl('privacyNote', 'innerHTML', t.privacyNote);
    setEl('checkBtnLabel', 'innerHTML', t.checkBtn);
    setEl('loadingLabel', 'textContent', t.loadingLabel);
    setEl('historyTitle', 'textContent', t.historyTitle);
    setEl('clearHistoryBtn', 'innerHTML', t.clearHistory);
    setEl('emergencyTitle', 'textContent', t.emergencyTitle);
    setEl('emergencyLine1', 'innerHTML', t.emergencyLine1);
    setEl('emergencyLine2', 'innerHTML', t.emergencyLine2);
    setEl('emergencyLine3', 'innerHTML', t.emergencyLine3);
    setEl('footerPrivacy', 'innerHTML', t.footerPrivacy);
    setEl('connectionStatus', 'innerHTML', t.connectionOk);
    setEl('navBrand', 'textContent', t.navBrand);
    setEl('navHome', 'textContent', t.navHome);
    setEl('navAbout', 'textContent', t.navAbout);
    setEl('navScamTypes', 'textContent', t.navScamTypes);
    setEl('navResources', 'textContent', t.navResources);
    setEl('navFAQ', 'textContent', t.navFAQ);
    setEl('navFeedback', 'textContent', t.navFeedback);
    setEl('pageHeadingAbout', 'textContent', t.headingAbout);
    setEl('pageHeadingFAQ', 'textContent', t.headingFAQ);
    setEl('pageHeadingResources', 'textContent', t.headingResources);
    setEl('pageHeadingScamTypes', 'textContent', t.headingScamTypes);
    setEl('pageHeadingFeedback', 'textContent', t.headingFeedback);
    document.title = t.title;
    translatePageStaticText();

    const scamInput = document.getElementById('scamInput');
    if (scamInput) scamInput.placeholder = t.placeholder;

    // Update html lang attribute
    const langMap = { en: 'en', zh: 'zh-SG', ms: 'ms-SG', ta: 'ta-SG' };
    document.documentElement.lang = langMap[currentLang] || 'en';

    // Update active language button
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => btn.classList.remove('active'));
    const langIdx = LANG_ORDER.indexOf(currentLang);
    if (langIdx >= 0 && langBtns[langIdx]) {
        langBtns[langIdx].classList.add('active');
    }

    // Re-render result box if a result is currently showing
    if (lastResult && resultBox && resultBox.classList.contains('visible')) {
        showResult(lastResult.message, lastResult.type);
    }

    // Re-render history if history panel is active
    if (document.getElementById('panelHistory')?.classList.contains('active')) {
        renderHistory();
    }

    // Update history empty state if visible in check panel
    const historyEmpty = document.querySelector('.history-empty');
    if (historyEmpty) {
        historyEmpty.textContent = t.historyEmpty;
    }
}

function translatePageStaticText() {
    const t = translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (!key || t[key] === undefined) return;
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            if ('placeholder' in el) {
                el.placeholder = t[key];
            } else {
                el.value = t[key];
            }
        } else {
            el.innerHTML = t[key];
        }
    });
}

function initLanguage() {
    const saved = localStorage.getItem('silverShieldLang');
    if (saved && translations[saved]) {
        currentLang = saved;
    }
    applyTranslations();
}

document.addEventListener('DOMContentLoaded', initLanguage);



// ===== TAB SWITCHING =====
function switchTab(tab) {
    document.getElementById('tabCheck').classList.toggle('active', tab === 'check');
    document.getElementById('tabHistory').classList.toggle('active', tab === 'history');
    document.getElementById('panelCheck').classList.toggle('active', tab === 'check');
    document.getElementById('panelHistory').classList.toggle('active', tab === 'history');

    if (tab === 'history') renderHistory();
}

// ===== CHECK MESSAGE =====
async function checkMessage() {
    const messageText = inputField.value.trim();

    if (!messageText) {
        shakeButton();
        inputField.focus();
        return;
    }

    setLoadingState(true);

    // Map language code to full name for n8n AI Agent
    const langNames = { en: 'English', zh: 'Chinese (Simplified)', ms: 'Malay', ta: 'Tamil' };

    try {
        const response = await fetch(N8N_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user_message: messageText
            })
        });

        if (!response.ok) {
            // Try to read the body anyway — n8n sometimes returns data with non-200 status
            try {
                const data = await response.json();
                const aiReply = data.output || data.text || '';
                if (aiReply) {
                    originalResultText = aiReply;
                    showResult(aiReply, 'success');
                    saveToHistory(messageText, aiReply);
                    return;
                }
            } catch (e) {}
            throw new Error(`Server responded with status ${response.status}`);
        }

        const data = await response.json();
        const aiReply = data.output || data.text || JSON.stringify(data);

        // Store original English text for future translations
        originalResultText = aiReply;
        showResult(aiReply, 'success');
        saveToHistory(messageText, aiReply);
        updateConnectionStatus(true);

    } catch (error) {
        console.error("Error communicating with backend:", error);
        const t = translations[currentLang];
        showResult(t.errorMessage, 'error');
        updateConnectionStatus(false);
    } finally {
        setLoadingState(false);
    }
}

// ===== UI STATE =====
function setLoadingState(isLoading) {
    inputField.disabled = isLoading;
    checkButton.disabled = isLoading;
    loadingStatus.classList.toggle('active', isLoading);

    if (isLoading) {
        checkButton.style.display = 'none';
        resultBox.classList.remove('visible');
    } else {
        checkButton.style.display = 'flex';
    }
}

function showResult(message, type) {
    const t = translations[currentLang];
    const icon = type === 'success' ? '' : '⚠️';
    const headerText = type === 'success' ? t.resultHeader : t.errorHeader;

    // Store last result for re-rendering on language change
    lastResult = { message, type };
    resultLang = 'en';

    resultBox.className = `result-box visible ${type}`;
    resultBox.innerHTML = `
        <div class="result-header">${icon} ${headerText}</div>
        <div class="result-content">${formatMessage(message)}</div>
        <div class="translate-bar">
            <span class="translate-label">Translate to:</span>
            <button class="translate-btn" onclick="translateResult('en')" type="button">English</button>
            <button class="translate-btn" onclick="translateResult('zh')" type="button">中文</button>
            <button class="translate-btn" onclick="translateResult('ms')" type="button">Melayu</button>
            <button class="translate-btn" onclick="translateResult('ta')" type="button">தமிழ்</button>
        </div>
        <div class="result-actions">
            <button class="btn-copy" onclick="copyResult()" type="button">📋 Copy Result</button>
            <button class="btn-copy" onclick="readAloud()" type="button" id="readAloudBtn">🔊 Read Aloud</button>
            <button class="btn-copy" onclick="shareWhatsApp()" type="button">💬 Share via WhatsApp</button>
            <button class="btn-reset" onclick="resetForm()" type="button">${t.resetBtn}</button>
        </div>
        <div class="feedback-section" id="feedbackSection" style="display:none;">
            <div class="feedback-form">
                <p class="feedback-question"><strong>How did we do?</strong></p>
                <div class="feedback-row">
                    <button class="fb-btn" onclick="setFeedback('helpful', 'helpful', this)" type="button">👍 Helpful</button>
                    <button class="fb-btn" onclick="setFeedback('helpful', 'not_helpful', this)" type="button">👎 Not Helpful</button>
                </div>

                <p class="feedback-question">Was the verdict correct?</p>
                <div class="feedback-row">
                    <button class="fb-btn" onclick="setFeedback('accurate', 'yes', this)" type="button">Yes</button>
                    <button class="fb-btn" onclick="setFeedback('accurate', 'no', this)" type="button">No</button>
                    <button class="fb-btn" onclick="setFeedback('accurate', 'not_sure', this)" type="button">Not Sure</button>
                </div>

                <p class="feedback-question">Was it easy to understand?</p>
                <div class="feedback-row">
                    <button class="fb-btn" onclick="setFeedback('clarity', 'easy', this)" type="button">😊 Easy</button>
                    <button class="fb-btn" onclick="setFeedback('clarity', 'ok', this)" type="button">😐 OK</button>
                    <button class="fb-btn" onclick="setFeedback('clarity', 'confusing', this)" type="button">😕 Confusing</button>
                </div>

                <p class="feedback-question">Anything else? (optional)</p>
                <textarea id="feedbackComment" class="feedback-comment" placeholder="Tell us more..." rows="2"></textarea>

                <button class="btn-submit-feedback" onclick="submitFeedback()" type="button">✅ Submit Feedback</button>
            </div>
        </div>
    `;

    setTimeout(() => {
        resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

function formatMessage(text) {
    return text
        .replace(/\n/g, '<br>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

function copyResult() {
    const t = translations[currentLang];
    const resultContent = resultBox.querySelector('.result-content');
    const textToCopy = resultContent ? resultContent.innerText : '';

    navigator.clipboard.writeText(textToCopy).then(() => {
        const copyBtn = resultBox.querySelector('.btn-copy');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = t.copied;
        setTimeout(() => { copyBtn.innerHTML = originalText; }, 2000);
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    });
}

// ===== READ ALOUD (Web Speech API) =====
let isSpeaking = false;

function readAloud() {
    const btn = document.getElementById('readAloudBtn');

    // If already speaking, stop
    if (isSpeaking) {
        window.speechSynthesis.cancel();
        isSpeaking = false;
        btn.innerHTML = '🔊 Read Aloud';
        return;
    }

    const resultContent = resultBox.querySelector('.result-content');
    if (!resultContent) return;

    const textToRead = resultContent.innerText;
    if (!textToRead) return;

    // Set language for speech based on the displayed result language.
    const langMap = {
        en: 'en-US',
        zh: 'zh-CN',
        ms: 'ms-MY',
        ta: 'ta-IN'
    };
    const targetLang = langMap[resultLang] || langMap[currentLang] || 'en-US';

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = 0.85; // Slightly slower for seniors
    utterance.pitch = 1;

    // Try to find a matching voice for the language
    const voices = availableVoices.length ? availableVoices : window.speechSynthesis.getVoices();
    const matchingVoice = selectSpeechVoice(voices, targetLang);

    if (matchingVoice) {
        utterance.voice = matchingVoice;
        utterance.lang = matchingVoice.lang || targetLang;
    } else {
        utterance.lang = targetLang;
    }

    utterance.onstart = () => {
        isSpeaking = true;
        btn.innerHTML = '⏹️ Stop Reading';
    };

    utterance.onend = () => {
        isSpeaking = false;
        btn.innerHTML = '🔊 Read Aloud';
    };

    utterance.onerror = () => {
        isSpeaking = false;
        btn.innerHTML = '🔊 Read Aloud';
    };

    window.speechSynthesis.speak(utterance);
}

function selectSpeechVoice(voices, targetLang) {
    if (!voices || voices.length === 0) return null;

    const normalizedTarget = targetLang.toLowerCase();
    const targetBase = normalizedTarget.split('-')[0];
    const preferredNames = {
        en: ['google', 'english', 'us english', 'uk english', 'australia', 'singapore'],
        zh: ['google', 'zh', 'zh-cn', 'zh-hans', 'mandarin', 'chinese', '普通話', '國語', '中文'],
        ms: ['google', 'ms', 'bahasa', 'malay', 'malaysia'],
        ta: ['google', 'ta', 'tamil', 'தமிழ்']
    };

    const exact = voices.find(v => v.lang.toLowerCase() === normalizedTarget);
    if (exact) return exact;

    const exactName = voices.find(v => v.name.toLowerCase().includes(normalizedTarget));
    if (exactName) return exactName;

    const pref = preferredNames[targetBase] || [];
    for (const fragment of pref) {
        const match = voices.find(v => v.name.toLowerCase().includes(fragment) || v.lang.toLowerCase().includes(fragment));
        if (match) return match;
    }

    const prefixMatch = voices.find(v => v.lang.toLowerCase().startsWith(normalizedTarget));
    if (prefixMatch) return prefixMatch;

    const nameMatch = voices.find(v => v.name.toLowerCase().includes(targetBase));
    if (nameMatch) return nameMatch;

    const baseMatch = voices.find(v => v.lang.toLowerCase().startsWith(targetBase));
    if (baseMatch) return baseMatch;

    return voices.find(v => v.lang.toLowerCase().startsWith('en')) || voices[0];
}

function loadSpeechVoices() {
    availableVoices = window.speechSynthesis.getVoices();
}

// Pre-load voices (some browsers need this)
if (window.speechSynthesis) {
    loadSpeechVoices();
    window.speechSynthesis.onvoiceschanged = loadSpeechVoices;
}

// ===== WHATSAPP SHARE =====
function shareWhatsApp() {
    const resultContent = resultBox.querySelector('.result-content');
    if (!resultContent) return;

    const text = resultContent.innerText;
    const message = `🛡️ TrustBuddy Scam Check Result:\n\n${text}\n\nCheck suspicious messages for free: https://minthu63.github.io/TrustBuddy/`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
}

function resetForm() {
    inputField.value = '';
    inputField.disabled = false;
    inputField.focus();
    resultBox.classList.remove('visible');
    lastResult = null;
    originalResultText = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function shakeButton() {
    checkButton.style.animation = 'shake 0.4s ease';
    setTimeout(() => { checkButton.style.animation = ''; }, 400);
}

// ===== CONNECTION STATUS =====
function updateConnectionStatus(isConnected) {
    const statusEl = document.getElementById('connectionStatus');
    if (!statusEl) return; // Element was removed from page
    const t = translations[currentLang];
    if (isConnected) {
        statusEl.innerHTML = t.connectionOk;
        statusEl.parentElement.style.color = '#15803d';
    } else {
        statusEl.innerHTML = t.connectionFail;
        statusEl.parentElement.style.color = '#b91c1c';
    }
}

// ===== HISTORY (localStorage) =====
function saveToHistory(message, result) {
    const history = getHistory();
    history.unshift({
        message: message,
        result: result,
        time: new Date().toLocaleString()
    });
    if (history.length > 20) history.pop();
    localStorage.setItem('silverShieldHistory', JSON.stringify(history));
}

function getHistory() {
    try {
        return JSON.parse(localStorage.getItem('silverShieldHistory')) || [];
    } catch { return []; }
}

function renderHistory() {
    const t = translations[currentLang];
    const historyList = document.getElementById('historyList');
    const history = getHistory();

    if (history.length === 0) {
        historyList.innerHTML = `<p class="history-empty">${t.historyEmpty}</p>`;
        return;
    }

    historyList.innerHTML = history.map(item => `
        <div class="history-item">
            <div class="history-message">"${escapeHtml(item.message)}"</div>
            <div class="history-result">${formatMessage(item.result)}</div>
            <div class="history-time">${item.time}</div>
        </div>
    `).join('');
}

function clearHistory() {
    const t = translations[currentLang];
    if (confirm(t.clearConfirm)) {
        localStorage.removeItem('silverShieldHistory');
        renderHistory();
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== TRANSLATE RESULT =====
async function translateResult(targetLang) {
    const resultContent = resultBox.querySelector('.result-content');
    if (!resultContent || !originalResultText) return;

    // If target is English, just show the original
    if (targetLang === 'en') {
        resultContent.innerHTML = formatMessage(originalResultText);
        lastResult.message = originalResultText;
        resultLang = 'en';
        highlightTranslateBtn(targetLang);
        return;
    }

    // Language codes for translation APIs
    const langCodes = { en: 'en', zh: 'zh-CN', ms: 'ms', ta: 'ta' };
    const target = langCodes[targetLang];

    // Show translating state
    const translateBar = resultBox.querySelector('.translate-bar');
    const originalBarHTML = translateBar.innerHTML;
    translateBar.innerHTML = '<span class="translate-label">Translating...</span>';

    try {
        const translatedText = await fetchTranslation(originalResultText, target);

        resultContent.innerHTML = formatMessage(translatedText);

        // Update lastResult for copy/re-render, but DON'T overwrite originalResultText
        lastResult.message = translatedText;
        resultLang = targetLang;

        // Restore translate bar and highlight active
        translateBar.innerHTML = originalBarHTML;
        highlightTranslateBtn(targetLang);

    } catch (error) {
        console.error('Translation error:', error);
        translateBar.innerHTML = originalBarHTML;
        translateBar.insertAdjacentHTML('beforeend', 
            '<span style="color:#b91c1c; font-size:0.8rem; margin-left:0.5rem;">Translation failed. Please try again later.</span>'
        );
        setTimeout(() => {
            const errorMsg = translateBar.querySelector('span[style]');
            if (errorMsg) errorMsg.remove();
        }, 5000);
    }
}

async function fetchTranslation(text, target) {
    const chunks = splitText(text, 450);
    let translatedChunks = [];

    for (const chunk of chunks) {
        const encoded = encodeURIComponent(chunk);

        // First try MyMemory
        try {
            const response = await fetch(
                `https://api.mymemory.translated.net/get?q=${encoded}&langpair=en|${target}`
            );
            const data = await response.json();
            if (response.ok && data.responseStatus === 200 && data.responseData) {
                translatedChunks.push(data.responseData.translatedText);
                continue;
            }
            if (data.responseStatus === 429) {
                throw new Error('MyMemory quota exceeded');
            }
        } catch (err) {
            console.warn('MyMemory failed, falling back:', err.message || err);
        }

        // Fallback: Google Translate unofficial endpoint
        try {
            const response = await fetch(
                `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${target}&dt=t&q=${encoded}`
            );
            if (!response.ok) throw new Error(`Google Translate status ${response.status}`);
            const data = await response.json();
            if (Array.isArray(data) && Array.isArray(data[0])) {
                const translated = data[0].map(item => item[0] || '').join('');
                if (translated) {
                    translatedChunks.push(translated);
                    continue;
                }
            }
        } catch (err) {
            console.warn('Google Translate fallback failed:', err.message || err);
        }

        // Fallback: LibreTranslate public instance
        try {
            const response = await fetch('https://libretranslate.de/translate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ q: chunk, source: 'en', target, format: 'text' })
            });
            if (!response.ok) throw new Error(`LibreTranslate status ${response.status}`);
            const data = await response.json();
            if (data && data.translatedText) {
                translatedChunks.push(data.translatedText);
                continue;
            }
        } catch (err) {
            console.warn('LibreTranslate fallback failed:', err.message || err);
        }

        // Last resort: return original chunk if all translation services fail
        translatedChunks.push(chunk);
    }

    return translatedChunks.join(' ');
}

function highlightTranslateBtn(activeLang) {
    const btns = resultBox.querySelectorAll('.translate-btn');
    const order = ['en', 'zh', 'ms', 'ta'];
    btns.forEach((btn, i) => {
        btn.classList.toggle('active', order[i] === activeLang);
    });
}

function splitText(text, maxLength) {
    const sentences = text.split(/(?<=[.!?।\n])\s*/);
    const chunks = [];
    let current = '';

    for (const sentence of sentences) {
        if ((current + ' ' + sentence).length > maxLength && current.length > 0) {
            chunks.push(current.trim());
            current = sentence;
        } else {
            current = current ? current + ' ' + sentence : sentence;
        }
    }
    if (current.trim()) chunks.push(current.trim());

    // If any chunk is still too long, force-split it
    const result = [];
    for (const chunk of chunks) {
        if (chunk.length > maxLength) {
            for (let i = 0; i < chunk.length; i += maxLength) {
                result.push(chunk.substring(i, i + maxLength));
            }
        } else {
            result.push(chunk);
        }
    }
    return result;
}

// ===== FEEDBACK SYSTEM =====
let feedbackData = { helpful: '', accurate: '', clarity: '' };

function toggleFeedbackForm() {
    const section = document.getElementById('feedbackSection');
    if (section.style.display === 'none') {
        section.style.display = 'block';
        section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
        section.style.display = 'none';
    }
}

function setFeedback(field, value, btn) {
    feedbackData[field] = value;

    // Highlight selected button in its row
    const row = btn.parentElement;
    row.querySelectorAll('.fb-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
}

async function submitFeedback() {
    const comment = document.getElementById('feedbackComment')?.value || '';

    const payload = {
        user_message: inputField.value.trim(),
        ai_verdict: originalResultText,
        helpful: feedbackData.helpful,
        accurate: feedbackData.accurate,
        clarity: feedbackData.clarity,
        comment: comment,
        language: currentLang
    };

    // Replace feedback section with thank you message
    const section = document.getElementById('feedbackSection');
    section.innerHTML = '<p class="feedback-thanks">🙏 Thank you! Your feedback helps us protect more seniors.</p>';

    // Send to feedback webhook
    try {
        await fetch(FEEDBACK_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
    } catch (error) {
        console.error("Feedback submission error:", error);
    }

    feedbackData = { helpful: '', accurate: '', clarity: '' };
}

async function submitStandaloneFeedback() {
    const comment = document.getElementById('feedbackCommentStandalone')?.value || '';
    const userMessage = inputField?.value?.trim() || '(submitted from feedback page)';
    const aiVerdict = originalResultText || '(no verdict - standalone feedback)';

    const payload = {
        user_message: userMessage,
        ai_verdict: aiVerdict,
        helpful: feedbackData.helpful,
        accurate: feedbackData.accurate,
        clarity: feedbackData.clarity,
        comment: comment,
        language: currentLang
    };

    const msgDiv = document.getElementById('standaloneFeedbackMsg');
    msgDiv.innerHTML = '<p class="feedback-thanks">🙏 Thank you! Your feedback helps us protect more seniors.</p>';

    try {
        await fetch(FEEDBACK_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
    } catch (error) {
        console.error("Feedback submission error:", error);
        msgDiv.innerHTML = '<p style="color:#b91c1c;">Something went wrong. Please try again.</p>';
    }

    // Reset
    feedbackData = { helpful: '', accurate: '', clarity: '' };
    document.querySelectorAll('.fb-btn').forEach(b => b.classList.remove('selected'));
    const standaloneComment = document.getElementById('feedbackCommentStandalone');
    if (standaloneComment) standaloneComment.value = '';
}

// ===== KEYBOARD SHORTCUT =====
inputField.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'Enter') {
        checkMessage();
    }
});

// ===== INIT: LOAD SAVED PREFERENCES =====
(function init() {
    

    // Load language
    const savedLang = localStorage.getItem('silverShieldLang');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
        applyTranslations();
    }
})();
