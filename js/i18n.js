/* Four language site dictionary.
   Keys are the English strings exactly as they appear in the page.
   Anything missing falls back to English. */

const I18N = {
  en: {},

  zh: {
    '← Home': '← 首页',
    'Personal site · 个人主页': '个人主页',
    'Read the research': '看看研究',
    'Get in touch': '联系我',
    'About': '关于',
    'Research': '研究',
    'Knowledge': '知识',
    'Tools': '工具',
    'Contact': '联系',
    'Read more →': '了解更多 →',
    'All 11 papers →': '全部 11 篇 →',
    'All 20 fields →': '全部 20 个学科 →',
    'All tools →': '全部工具 →',
    'All details →': '全部方式 →',
    'All repositories →': '全部仓库 →',
    'Contact →': '联系 →',
    'Write to me ↗': '写信给我 ↗',
    'GitHub release ↗': 'GitHub 发布 ↗',
    'Download ↗': '下载 ↗',
    'Source ↗': '源码 ↗',
    'A good person does not have only one skill, so I keep widening the map, one field at a time.':
      '古人说，君子不器。那就一个学科一个学科地把这张地图画大。',
    'Based in': '所在地',
    'Languages': '语言',
    'Email': '邮箱',
    'Academic': '学术邮箱',
    'Personal': '个人邮箱',
    'WeChat': '微信',
    'QQ': 'QQ',
    'Phone': '电话',
    'Binzhou, Shandong, China': '中国山东滨州',
    '02 fields': '02 学科',
    '04 fields': '04 学科',
    '05 fields': '05 学科',
    '08 fields': '08 学科',
    '03 fields': '03 学科',
    'Human Science': '人文科学',
    'Social Science': '社会科学',
    'Natural Science': '自然科学',
    'Applied Science': '应用科学',
    'Philosophy': '哲学',
    'Literature': '文学',
    'History': '历史',
    'Art': '艺术',
    'Sociology': '社会学',
    'Economics': '经济学',
    'Politics': '政治学',
    'Law': '法学',
    'Management': '管理学',
    'Education': '教育学',
    'Psychology': '心理学',
    'Military': '军事学',
    'Mathematics': '数学',
    'Physics': '物理学',
    'Chemistry': '化学',
    'Biology': '生物学',
    'Geoscience': '地球科学',
    'Engineering': '工程学',
    'Medicine': '医学',
    'Agriculture': '农学',
    'Finance': '金融',
    'Multimodal': '多模态',
    'Geometry': '几何',
    'Theory': '理论',
    'Benchmark': '基准',
    'Systems': '系统',
    'Draft': '草稿',
    'Notes': '札记',
    'Graph': '图网络',
    'Published': '已发表',
    'Papers': '论文',
    'Fields': '学科',
    'Domains': '门类',
    'Branches': '分支',
    'Manuscripts': '论文',
    'Items': '条目',
    'Areas': '方向',
    'Licence': '许可',
    'Released': '已发布',
    'Platforms': '平台',
    'Affiliation': '单位',
    'Writes in': '写作语言',
    'Field note': '学科笔记',
    'Domain': '门类',
    'Every field opens one of these. The branches come straight from the markdown file, so the page follows the text.':
      '每个学科都会展开一块图版。分支直接来自 markdown 文件，改文即改页。',
    'Source: content/knowledge.md. Edit the headings, run node build-knowledge.mjs, and the page follows.':
      '来源：content/knowledge.md。改标题层级，运行 node build-knowledge.mjs，页面随之更新。',
    'A personal life log: record what you do, then read it back by year, month and week.':
      '个人生活记录：记下做了什么，按年、月、周回看。',
    'A reading desk for papers: a local library, a ranking, and a profile.':
      '文献阅读台：本地文库、榜单和个人页。',
    'A single page web terminal for long background jobs, with a live progress bar.':
      '单页网页终端，跑长时后台任务，带实时进度条。',
    'Mobile app': '移动应用',
    'Web and CLI': '网页与命令行',
    'Directed risk contagion modelled with transfer entropy, read by temporal convolution and graph attention.':
      '用传递熵刻画风险传染，再由时间卷积与图注意力读取。',
    'LSTM over financial and non-financial indicators, read with KernelSHAP.':
      '用 LSTM 读财务与非财务指标，并用 KernelSHAP 解释。',
    'Accounting panel, filing text and ownership graph aligned on the firm quarter.':
      '把会计面板、公告文本与股权图对齐到同一个公司季度。',
    'Small programs I built because nothing else did the job. All three are open source and published through GitHub Releases: no store, no accounts, no telemetry.':
      '这些是自己写的小工具，因为找不到现成的。三个都开源，通过 GitHub Releases 发布：没有商店，没有账号，没有埋点。',
    'How to get one': '怎么拿到',
    'Download': '下载',
    'Check': '检查',
    'Report': '反馈',
    'Step 01': '第一步',
    'Step 02': '第二步',
    'Step 03': '第三步',
    "Open the project's Releases page and take the latest build for your platform. Every release notes what changed.":
      '打开项目的 Releases 页面，按平台取最新构建。每个版本都写了改了什么。',
    'Read the README first. It lists what the tool expects and what it will not do. Android builds are unsigned, so expect a warning on first install.':
      '先读 README，它写清楚了工具要求什么、不做什么。安卓包没有签名，首次安装会有提示。',
    'Issues and pull requests are welcome on GitHub. A short reproduction beats a long explanation.':
      '欢迎在 GitHub 提 issue 和 PR。一段简短的复现比一大段解释有用。',
    'Questions, corrections, collaboration: email is the fastest way to reach me. I read everything and reply when I can.':
      '问题、勘误、合作：邮件是最快的方式。我都会看，能回的时候回。',
    'Your name': '姓名',
    'Your email': '邮箱',
    'Subject': '主题',
    'Message': '留言',
    'Name': '姓名',
    'What is this about?': '想聊什么？',
    'Write as much or as little as you like.': '写多写少都行。',
    'Send message': '发送',
    'Books I keep returning to': '反复翻的几本书',
    'A Markdown file inside a small zip, updated whenever the list changes.':
      '一个 Markdown 文件，装在小压缩包里，书单变了就更新。',
    'Download .zip': '下载 .zip',
    'Suggest a book →': '推荐一本书 →',
    'Reading list': '书单',
    'The ancients said that a good person does not have only one skill. Becoming a polymath like Da Vinci is a formidable challenge, yet I am committed to continuously refining my skills and expanding my knowledge.':
      '古人说，君子不器。成为达·芬奇那样的通才很难，但我愿意一直磨自己的手艺，把知识面拓宽。',
    'Human knowledge, accumulated over millennia, resembles a mountain whose peak is beyond sight and an ocean whose depths are unfathomable. Even a person who spends his whole life studying it would still know only a fraction. For me the road to learning is still long and difficult.':
      '人类积累千年的知识，像望不到顶的山、探不到底的深海。一个人穷尽一生，也只得其中一小部分。对我来说，求学之路仍然漫长而艰难。',
    'Nevertheless, my passion for learning burns fiercely and my resolve to make progress remains unyielding. This site is where I refine my understanding and share what might be useful to someone else. For any lapses in rigor, I ask your understanding.':
      '但求知的热情没有熄，想往前走的心也没有软。这个站就是我梳理理解、分享一点或许有用之物的地方。若有疏漏，请多包涵。',
    'Away from the notes I read history for pleasure, keep a slow list of books, and tinker with small programs. The motto at the foot of every page is not decoration. It is the reason this site exists at all.':
      '不写东西的时候，读点历史，慢慢列书单，写写小工具。每页页脚那句话不是装饰，它就是这个站存在的原因。',
    'Be broadly learned, inquire thoroughly, reflect carefully, discern clearly, and practice earnestly.':
      '博学之，审问之，慎思之，明辨之，笃行之。',
    'The Book of Rites · 礼记': '《礼记》',
    'Code and data': '代码与数据',
    'Collaborate': '合作',
    'Eleven papers, mostly on the geometry of learned representations and what it can be made to say about finance and law. Two are published; the rest are on the bench.':
      '十一篇论文，大多关于学习到的表示的几何，以及它能对金融与法律说些什么。两篇已发表，其余在改。',
    'One repository per paper, holding the code, the data manifest and the recorded outputs.':
      '每篇论文一个仓库，放代码、数据清单和记录下来的输出。',
    'Anonymous code and results for the double blind submission.': '双盲评审用的匿名代码与结果。',
    'Measurement code and recorded outputs for the dimension study.': '维数研究的测量代码与记录输出。',
    'paper001 to paper011': 'paper001 到 paper011',
    'erdnet-gm-review': 'erdnet-gm-review',
    'dds-measurements': 'dds-measurements',
    'Repositories': '仓库',
    'Review package': '评审包',
    'Measurements': '测量',
    'GitHub Pages · No trackers · No cookies': 'GitHub Pages · 无追踪 · 无 Cookie',
    '中文 · English': '中文 · English',
  },

  fr: {
    '← Home': '← Accueil',
    'Personal site · 个人主页': 'Site personnel',
    'Read the research': 'Lire les travaux',
    'Get in touch': 'Me contacter',
    'About': 'À propos',
    'Research': 'Recherche',
    'Knowledge': 'Savoirs',
    'Tools': 'Outils',
    'Contact': 'Contact',
    'Read more →': 'En savoir plus →',
    'All 11 papers →': 'Les 11 articles →',
    'All 20 fields →': 'Les 20 disciplines →',
    'All tools →': 'Tous les outils →',
    'All details →': 'Tous les détails →',
    'All repositories →': 'Tous les dépôts →',
    'Contact →': 'Contact →',
    'Write to me ↗': 'Écrivez-moi ↗',
    'GitHub release ↗': 'Version GitHub ↗',
    'Download ↗': 'Télécharger ↗',
    'Source ↗': 'Source ↗',
    'A good person does not have only one skill, so I keep widening the map, one field at a time.':
      "L'homme accompli ne se limite pas à un seul talent : j'élargis donc la carte, discipline après discipline.",
    'Based in': 'Basé à',
    'Languages': 'Langues',
    'Email': 'Courriel',
    'Academic': 'Académique',
    'Personal': 'Personnel',
    'WeChat': 'WeChat',
    'QQ': 'QQ',
    'Phone': 'Téléphone',
    'Binzhou, Shandong, China': 'Binzhou, Shandong, Chine',
    '04 fields': '04 disciplines',
    '08 fields': '08 disciplines',
    '05 fields': '05 disciplines',
    '03 fields': '03 disciplines',
    'Human Science': 'Sciences humaines',
    'Social Science': 'Sciences sociales',
    'Natural Science': 'Sciences de la nature',
    'Applied Science': 'Sciences appliquées',
    'Philosophy': 'Philosophie',
    'Literature': 'Littérature',
    'History': 'Histoire',
    'Art': 'Art',
    'Sociology': 'Sociologie',
    'Economics': 'Économie',
    'Politics': 'Politique',
    'Law': 'Droit',
    'Management': 'Gestion',
    'Education': 'Éducation',
    'Psychology': 'Psychologie',
    'Military': 'Science militaire',
    'Mathematics': 'Mathématiques',
    'Physics': 'Physique',
    'Chemistry': 'Chimie',
    'Biology': 'Biologie',
    'Geoscience': 'Géosciences',
    'Engineering': 'Ingénierie',
    'Medicine': 'Médecine',
    'Agriculture': 'Agronomie',
    'Finance': 'Finance',
    'Multimodal': 'Multimodal',
    'Geometry': 'Géométrie',
    'Theory': 'Théorie',
    'Benchmark': 'Benchmark',
    'Systems': 'Systèmes',
    'Draft': 'Brouillon',
    'Notes': 'Notes',
    'Graph': 'Graphe',
    'Published': 'Publié',
    'Papers': 'Articles',
    'Fields': 'Disciplines',
    'Domains': 'Domaines',
    'Branches': 'Branches',
    'Items': 'Éléments',
    'Areas': 'Axes',
    'Licence': 'Licence',
    'Released': 'Publiés',
    'Platforms': 'Plateformes',
    'Writes in': 'Langues de travail',
    'Field note': 'Note de terrain',
    'Domain': 'Domaine',
    'Every field opens one of these. The branches come straight from the markdown file, so the page follows the text.':
      'Chaque discipline ouvre une planche. Les branches viennent du fichier markdown : la page suit le texte.',
    'Source: content/knowledge.md. Edit the headings, run node build-knowledge.mjs, and the page follows.':
      'Source : content/knowledge.md. Modifiez les titres, lancez node build-knowledge.mjs, la page suit.',
    'A personal life log: record what you do, then read it back by year, month and week.':
      'Un journal de vie : notez ce que vous faites, relisez par année, mois et semaine.',
    'A reading desk for papers: a local library, a ranking, and a profile.':
      'Un bureau de lecture : bibliothèque locale, classement et profil.',
    'A single page web terminal for long background jobs, with a live progress bar.':
      'Un terminal web d\'une page pour les tâches longues, avec barre de progression en direct.',
    'Mobile app': 'Application mobile',
    'Web and CLI': 'Web et CLI',
    'Directed risk contagion modelled with transfer entropy, read by temporal convolution and graph attention.':
      'Contagion du risque modélisée par entropie de transfert, lue par convolution temporelle et attention de graphe.',
    'LSTM over financial and non-financial indicators, read with KernelSHAP.':
      'LSTM sur des indicateurs financiers et non financiers, interprété avec KernelSHAP.',
    'Accounting panel, filing text and ownership graph aligned on the firm quarter.':
      'Panneau comptable, texte des dépôts et graphe de détention alignés sur le trimestre de l\'entreprise.',
    'Small programs I built because nothing else did the job. All three are open source and published through GitHub Releases: no store, no accounts, no telemetry.':
      "De petits programmes écrits faute de mieux. Les trois sont open source, publiés via GitHub Releases : sans magasin, sans compte, sans télémétrie.",
    'How to get one': 'Comment en obtenir un',
    'Download': 'Télécharger',
    'Check': 'Vérifier',
    'Report': 'Signaler',
    'Step 01': 'Étape 01',
    'Step 02': 'Étape 02',
    'Step 03': 'Étape 03',
    "Open the project's Releases page and take the latest build for your platform. Every release notes what changed.":
      'Ouvrez la page Releases et prenez la dernière version pour votre plateforme. Chaque version indique les changements.',
    'Read the README first. It lists what the tool expects and what it will not do. Android builds are unsigned, so expect a warning on first install.':
      "Lisez d'abord le README : il dit ce que l'outil attend et ce qu'il ne fait pas. Les versions Android ne sont pas signées, attendez-vous à un avertissement.",
    'Issues and pull requests are welcome on GitHub. A short reproduction beats a long explanation.':
      'Les issues et pull requests sont bienvenus sur GitHub. Une courte reproduction vaut mieux qu\'une longue explication.',
    'Questions, corrections, collaboration: email is the fastest way to reach me. I read everything and reply when I can.':
      'Questions, corrections, collaboration : le courriel est le plus rapide. Je lis tout et réponds quand je peux.',
    'Your name': 'Votre nom',
    'Your email': 'Votre courriel',
    'Subject': 'Objet',
    'Message': 'Message',
    'Name': 'Nom',
    'What is this about?': 'De quoi s\'agit-il ?',
    'Write as much or as little as you like.': 'Écrivez autant ou aussi peu que vous voulez.',
    'Send message': 'Envoyer',
    'Books I keep returning to': 'Les livres où je reviens',
    'A Markdown file inside a small zip, updated whenever the list changes.':
      'Un fichier Markdown dans une petite archive, mis à jour à chaque changement.',
    'Download .zip': 'Télécharger .zip',
    'Suggest a book →': 'Suggérer un livre →',
    'Reading list': 'Liste de lecture',
    'The ancients said that a good person does not have only one skill. Becoming a polymath like Da Vinci is a formidable challenge, yet I am committed to continuously refining my skills and expanding my knowledge.':
      "Les anciens disaient que l'homme de bien ne se limite pas à un seul talent. Devenir un polymathe comme Vinci est un défi redoutable, mais je m'attache à affiner mes savoir-faire et à élargir mes connaissances.",
    'Human knowledge, accumulated over millennia, resembles a mountain whose peak is beyond sight and an ocean whose depths are unfathomable. Even a person who spends his whole life studying it would still know only a fraction. For me the road to learning is still long and difficult.':
      "Le savoir humain, accumulé sur des millénaires, ressemble à une montagne dont on ne voit pas le sommet et à un océan sans fond. Même une vie entière d'étude n'en donne qu'une fraction. Pour moi, la route de l'apprentissage reste longue et difficile.",
    'Nevertheless, my passion for learning burns fiercely and my resolve to make progress remains unyielding. This site is where I refine my understanding and share what might be useful to someone else. For any lapses in rigor, I ask your understanding.':
      "Pourtant la passion d'apprendre ne faiblit pas et la volonté d'avancer tient bon. Ce site est l'endroit où j'affine ma compréhension et partage ce qui peut servir à d'autres. Pour les manques de rigueur, je demande votre indulgence.",
    'Away from the notes I read history for pleasure, keep a slow list of books, and tinker with small programs. The motto at the foot of every page is not decoration. It is the reason this site exists at all.':
      "Loin des notes, je lis de l'histoire pour le plaisir, je tiens une liste de livres sans hâte et je bricole de petits programmes. La devise au bas de chaque page n'est pas un ornement : c'est la raison d'être de ce site.",
    'Be broadly learned, inquire thoroughly, reflect carefully, discern clearly, and practice earnestly.':
      "Étudier largement, interroger à fond, réfléchir avec soin, discerner clairement, agir avec sincérité.",
    'The Book of Rites · 礼记': 'Le Livre des rites · 礼记',
    'Code and data': 'Code et données',
    'Collaborate': 'Collaborer',
    'Eleven papers, mostly on the geometry of learned representations and what it can be made to say about finance and law. Two are published; the rest are on the bench.':
      "Onze articles, surtout sur la géométrie des représentations apprises et ce qu'elle peut dire de la finance et du droit. Deux sont publiés, les autres sont en chantier.",
    'One repository per paper, holding the code, the data manifest and the recorded outputs.':
      'Un dépôt par article : le code, le manifeste des données et les sorties enregistrées.',
    'Anonymous code and results for the double blind submission.': 'Code et résultats anonymes pour la soumission en double aveugle.',
    'Measurement code and recorded outputs for the dimension study.': 'Code de mesure et sorties enregistrées pour l\'étude de dimension.',
    'Repositories': 'Dépôts',
    'Review package': 'Dossier de relecture',
    'Measurements': 'Mesures',
    'GitHub Pages · No trackers · No cookies': 'GitHub Pages · Sans traceur · Sans cookie',
    '中文 · English': '中文 · English',
  },

  ja: {
    '← Home': '← ホーム',
    'Personal site · 个人主页': '個人サイト',
    'Read the research': '研究を読む',
    'Get in touch': '連絡する',
    'About': '私について',
    'Research': '研究',
    'Knowledge': '知識',
    'Tools': 'ツール',
    'Contact': '連絡先',
    'Read more →': 'もっと読む →',
    'All 11 papers →': '論文 11 本すべて →',
    'All 20 fields →': '20 分野すべて →',
    'All tools →': 'ツール一覧 →',
    'All details →': '詳細を見る →',
    'All repositories →': 'リポジトリ一覧 →',
    'Contact →': '連絡先 →',
    'Write to me ↗': 'メールを書く ↗',
    'GitHub release ↗': 'GitHub リリース ↗',
    'Download ↗': 'ダウンロード ↗',
    'Source ↗': 'ソース ↗',
    'A good person does not have only one skill, so I keep widening the map, one field at a time.':
      '古人曰く、君子は器ならず。だから一つずつ、地図を広げていく。',
    'Based in': '拠点',
    'Languages': '言語',
    'Email': 'メール',
    'Academic': '大学用',
    'Personal': '個人用',
    'WeChat': 'WeChat',
    'QQ': 'QQ',
    'Phone': '電話',
    'Binzhou, Shandong, China': '中国 山東省 浜州',
    '04 fields': '04 分野',
    '08 fields': '08 分野',
    '05 fields': '05 分野',
    '03 fields': '03 分野',
    'Human Science': '人文科学',
    'Social Science': '社会科学',
    'Natural Science': '自然科学',
    'Applied Science': '応用科学',
    'Philosophy': '哲学',
    'Literature': '文学',
    'History': '歴史',
    'Art': '芸術',
    'Sociology': '社会学',
    'Economics': '経済学',
    'Politics': '政治学',
    'Law': '法学',
    'Management': '経営学',
    'Education': '教育学',
    'Psychology': '心理学',
    'Military': '軍事学',
    'Mathematics': '数学',
    'Physics': '物理学',
    'Chemistry': '化学',
    'Biology': '生物学',
    'Geoscience': '地球科学',
    'Engineering': '工学',
    'Medicine': '医学',
    'Agriculture': '農学',
    'Finance': '金融',
    'Multimodal': 'マルチモーダル',
    'Geometry': '幾何',
    'Theory': '理論',
    'Benchmark': 'ベンチマーク',
    'Systems': 'システム',
    'Draft': '草稿',
    'Notes': 'ノート',
    'Graph': 'グラフ',
    'Published': '査読済み',
    'Papers': '論文',
    'Fields': '分野',
    'Domains': '領域',
    'Branches': '分岐',
    'Items': '項目',
    'Areas': '領域',
    'Licence': 'ライセンス',
    'Released': '公開数',
    'Platforms': '対応環境',
    'Writes in': '執筆言語',
    'Field note': '分野ノート',
    'Domain': '領域',
    'Every field opens one of these. The branches come straight from the markdown file, so the page follows the text.':
      '各分野はこの一枚を開きます。分岐は markdown から直接読み込むので、文を変えればページも変わります。',
    'Source: content/knowledge.md. Edit the headings, run node build-knowledge.mjs, and the page follows.':
      '出典：content/knowledge.md。見出しを直して node build-knowledge.mjs を実行するとページに反映されます。',
    'A personal life log: record what you do, then read it back by year, month and week.':
      '個人の生活ログ。したことを記録し、年・月・週で振り返る。',
    'A reading desk for papers: a local library, a ranking, and a profile.':
      '論文の読書台。ローカル文庫、ランキング、プロフィール。',
    'A single page web terminal for long background jobs, with a live progress bar.':
      '長いバックグラウンド処理のための単一ページ端末。進捗バー付き。',
    'Mobile app': 'モバイルアプリ',
    'Web and CLI': 'Web と CLI',
    'Directed risk contagion modelled with transfer entropy, read by temporal convolution and graph attention.':
      '移転エントロピーでリスク伝染を表し、時間畳み込みとグラフ注意で読む。',
    'LSTM over financial and non-financial indicators, read with KernelSHAP.':
      '財務・非財務指標を LSTM で読み、KernelSHAP で解釈する。',
    'Accounting panel, filing text and ownership graph aligned on the firm quarter.':
      '会計パネル、開示文、持株グラフを企業四半期で揃える。',
    'Small programs I built because nothing else did the job. All three are open source and published through GitHub Releases: no store, no accounts, no telemetry.':
      '代わりになるものが無かったので自分で書いた小さな道具。三つともオープンソースで、GitHub Releases から公開しています。ストアもアカウントも計測もありません。',
    'How to get one': '入手方法',
    'Download': 'ダウンロード',
    'Check': '確認',
    'Report': '報告',
    'Step 01': 'ステップ 01',
    'Step 02': 'ステップ 02',
    'Step 03': 'ステップ 03',
    "Open the project's Releases page and take the latest build for your platform. Every release notes what changed.":
      'Releases ページを開き、環境に合う最新ビルドを取ってください。各版に変更点が書かれています。',
    'Read the README first. It lists what the tool expects and what it will not do. Android builds are unsigned, so expect a warning on first install.':
      'まず README を読んでください。何を前提にし、何をしないかが書かれています。Android 版は署名がないため、初回インストール時に警告が出ます。',
    'Issues and pull requests are welcome on GitHub. A short reproduction beats a long explanation.':
      'GitHub での issue と pull request を歓迎します。短い再現が長い説明に勝ります。',
    'Questions, corrections, collaboration: email is the fastest way to reach me. I read everything and reply when I can.':
      '質問、訂正、共同研究の相談はメールが一番早いです。全部読みます。返せる時に返します。',
    'Your name': 'お名前',
    'Your email': 'メールアドレス',
    'Subject': '件名',
    'Message': '本文',
    'Name': 'お名前',
    'What is this about?': 'どんな用件ですか？',
    'Write as much or as little as you like.': '短くても長くても構いません。',
    'Send message': '送信',
    'Books I keep returning to': '何度も戻る本',
    'A Markdown file inside a small zip, updated whenever the list changes.':
      '小さな zip に入った Markdown。リストが変われば更新します。',
    'Download .zip': '.zip をダウンロード',
    'Suggest a book →': '本をすすめる →',
    'Reading list': '読書リスト',
    'The ancients said that a good person does not have only one skill. Becoming a polymath like Da Vinci is a formidable challenge, yet I am committed to continuously refining my skills and expanding my knowledge.':
      '古人は言いました、君子は器ならず、と。ダ・ヴィンチのような万能人になるのは容易ではありませんが、腕を磨き知識を広げ続けるつもりです。',
    'Human knowledge, accumulated over millennia, resembles a mountain whose peak is beyond sight and an ocean whose depths are unfathomable. Even a person who spends his whole life studying it would still know only a fraction. For me the road to learning is still long and difficult.':
      '千年かけて積み上げられた人類の知識は、頂の見えない山、底の知れない海のようです。一生をかけても、知り得るのはほんの一部。私にとって学びの道は、まだ長く険しいままです。',
    'Nevertheless, my passion for learning burns fiercely and my resolve to make progress remains unyielding. This site is where I refine my understanding and share what might be useful to someone else. For any lapses in rigor, I ask your understanding.':
      'それでも学ぶ情熱は消えず、前へ進む意志も緩みません。この場所で理解を整え、誰かの役に立つかもしれないことを書いています。行き届かない点はご容赦ください。',
    'Away from the notes I read history for pleasure, keep a slow list of books, and tinker with small programs. The motto at the foot of every page is not decoration. It is the reason this site exists at all.':
      '書くことから離れている時は、歴史を読み、ゆっくり本のリストを作り、小さなプログラムをいじっています。各ページの下の言葉は飾りではなく、このサイトがある理由そのものです。',
    'Be broadly learned, inquire thoroughly, reflect carefully, discern clearly, and practice earnestly.':
      '広く学び、深く問い、慎みて思惟し、明らかに弁別し、篤く行う。',
    'The Book of Rites · 礼记': '『礼記』',
    'Code and data': 'コードとデータ',
    'Collaborate': '共同研究',
    'Eleven papers, mostly on the geometry of learned representations and what it can be made to say about finance and law. Two are published; the rest are on the bench.':
      '論文 11 本。多くは学習された表現の幾何について、それを金融と法にどう効かせるか。2 本が掲載済み、残りは作業中です。',
    'One repository per paper, holding the code, the data manifest and the recorded outputs.':
      '論文ごとに一つのリポジトリ。コード、データ目録、記録した出力を置いています。',
    'Anonymous code and results for the double blind submission.': '二重盲検投稿用の匿名コードと結果。',
    'Measurement code and recorded outputs for the dimension study.': '次元研究の計測コードと記録出力。',
    'Repositories': 'リポジトリ',
    'Review package': '査読用パッケージ',
    'Measurements': '計測',
    'GitHub Pages · No trackers · No cookies': 'GitHub Pages · 追跡なし · Cookie なし',
    '中文 · English': '中文 · English',
  },
};

const LANG_LABELS = { en: 'English', zh: '中文', fr: 'Français', ja: '日本語' };
const STORAGE_KEY = 'site-lang';

function currentLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved && I18N[saved] ? saved : 'en';
}

function translateText(text, lang) {
  const dict = I18N[lang];
  if (!dict) return text;
  const key = text.trim();
  if (!key) return text;
  const hit = dict[key];
  if (!hit) return text;
  const lead = text.match(/^\s*/)[0];
  const tail = text.match(/\s*$/)[0];
  return lead + hit + tail;
}

function applyLanguage(lang) {
  const dict = I18N[lang] || {};
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
  document.body.dataset.lang = lang;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const p = node.parentElement;
      if (!p) return NodeFilter.FILTER_REJECT;
      if (p.closest('script, style, svg, code, pre')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  for (const node of nodes) node.nodeValue = translateText(node.nodeValue, lang);

  // attributes
  const attrNames = ['placeholder', 'title', 'aria-label'];
  for (const el of document.querySelectorAll('[placeholder], [title], [aria-label]')) {
    for (const attr of attrNames) {
      const v = el.getAttribute(attr);
      if (!v) continue;
      const hit = dict[v.trim()];
      if (hit) el.setAttribute(attr, hit);
    }
  }

  // language menu state
  document.querySelectorAll('[data-lang-option]').forEach((el) => {
    el.setAttribute('aria-current', el.dataset.langOption === lang ? 'true' : 'false');
  });
  document.querySelectorAll('[data-lang-label]').forEach((el) => {
    el.textContent = LANG_LABELS[lang];
  });

  const btn = document.querySelector('[data-lang-btn]');
  if (btn) btn.setAttribute('aria-label', 'Language: ' + LANG_LABELS[lang]);
}

function setLanguage(lang) {
  localStorage.setItem(STORAGE_KEY, lang);
  location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = currentLang();
  if (lang !== 'en') applyLanguage(lang);
  else {
    document.querySelectorAll('[data-lang-option]').forEach((el) => {
      el.setAttribute('aria-current', el.dataset.langOption === 'en' ? 'true' : 'false');
    });
  }

  const btn = document.querySelector('[data-lang-btn]');
  const menu = document.querySelector('[data-lang-menu]');
  if (btn && menu) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = menu.dataset.open !== 'true';
      menu.dataset.open = String(open);
      btn.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', () => {
      menu.dataset.open = 'false';
      btn.setAttribute('aria-expanded', 'false');
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        menu.dataset.open = 'false';
        btn.setAttribute('aria-expanded', 'false');
      }
    });
    menu.querySelectorAll('[data-lang-option]').forEach((el) => {
      el.addEventListener('click', () => setLanguage(el.dataset.langOption));
    });
  }
});


/* Long copy that only appears on the research and tools pages. */

const R = {
  zh: {
    'Directed risk contagion modelled with transfer entropy, then read by temporal convolution and graph attention.':
      '用传递熵刻画风险传染，再由时间卷积与图注意力读取。',
    'LSTM over multi-dimensional financial and non-financial indicators, read with KernelSHAP and partial dependence plots.':
      '用 LSTM 读多维度财务与非财务指标，并用 KernelSHAP 与部分依赖图解释。',
    'Aligns an accounting panel, filing text and an ownership graph on one node, the firm quarter, to predict which material events fire.':
      '把会计面板、公告文本与股权图对齐到同一个公司季度，预测哪些重大事件会发生。',
    'Legal isomorphism and severity scoring for quantified breach analysis.':
      '法律同构与严重性评分，用于量化的违约分析。',
    'A dataset and task for separating abnormal optimism from ordinary tone in management discussion and analysis.':
      '一个数据集与任务，用来把异常乐观从管理层讨论的日常语气里分出来。',
    'Treats encoder combination as a stress test on the geometric resilience of fused feature manifolds, so no candidate has to be trained.':
      '把编码器组合当成对融合特征流形几何韧性的压力测试，不必训练任何候选组合。',
    'A geometric account of what carries across legal domains when a norm is applied, and what does not survive the map.':
      '用几何解释规范适用在跨法域迁移时保住了什么，又丢掉了什么。',
    'Why training-free geometric proxies predict generalization, through spectral and differential channels acting together.':
      '解释为什么无需训练的几何指标能预测泛化，靠的是谱通道与微分通道共同作用。',
    'Notes toward non-static computational foundations. Not yet a paper.':
      '关于非静态计算基础的札记，尚未成文。',
    'A protocol for comparing information flow between modules whose scales do not match.':
      '一个比较模块间信息流的协议，处理两边尺度不匹配的情况。',
    'Local dimension estimators on metric measure spaces, shown to be one functional at different window fields, with the scale range each silently assumes.':
      '度量测度空间上的局部维数估计量，证明它们是同一个泛函在不同窗口场上的取值，并给出各自默认的尺度区间。',
    'A personal life log. Record a behaviour once it happens, or a span for things that last, then review it by year, month and week.':
      '个人生活记录：事发生了就记一条，持续的事就记一段，然后按年、月、周回看。',
    'A reading desk for papers: a local library, a ranking of what people are reading, and a profile that keeps the two together.':
      '论文阅读台：本地文库、大家在读什么的榜单，以及把两者放在一起的个人页。',
    'A single page web terminal for long background jobs, with a live progress bar. Pure Python stdlib, no dependencies.':
      '单页网页终端，跑长时后台任务，带实时进度条。纯 Python 标准库，无第三方依赖。',
    'Four domains, twenty fields, one hundred and forty six branches. This is the shape of what I am trying to learn, not a list of credentials. The page is generated from one markdown file, so it stays easy to redraw.':
      '四个门类、二十个学科、一百四十六个分支。这是我试图学习的形状，不是履历。整页由一份 markdown 生成，随时可以重画。',
  },
  fr: {
    'Directed risk contagion modelled with transfer entropy, then read by temporal convolution and graph attention.':
      "Contagion du risque modélisée par entropie de transfert, puis lue par convolution temporelle et attention de graphe.",
    'LSTM over multi-dimensional financial and non-financial indicators, read with KernelSHAP and partial dependence plots.':
      'LSTM sur des indicateurs financiers et non financiers multidimensionnels, interprété avec KernelSHAP et des graphiques de dépendance partielle.',
    'Aligns an accounting panel, filing text and an ownership graph on one node, the firm quarter, to predict which material events fire.':
      "Aligne un panneau comptable, le texte des dépôts et un graphe de détention sur un même nœud, le trimestre de l'entreprise, pour prédire quels événements majeurs surviendront.",
    'Legal isomorphism and severity scoring for quantified breach analysis.':
      'Isomorphisme juridique et score de gravité pour une analyse quantifiée des manquements.',
    'A dataset and task for separating abnormal optimism from ordinary tone in management discussion and analysis.':
      "Un jeu de données et une tâche pour séparer l'optimisme anormal du ton ordinaire dans le rapport de gestion.",
    'Treats encoder combination as a stress test on the geometric resilience of fused feature manifolds, so no candidate has to be trained.':
      "Traite la combinaison d'encodeurs comme un test de résistance géométrique des variétés de caractéristiques fusionnées, sans entraîner aucun candidat.",
    'A geometric account of what carries across legal domains when a norm is applied, and what does not survive the map.':
      "Une lecture géométrique de ce qui passe d'un domaine juridique à l'autre quand une norme s'applique, et de ce qui ne survit pas au transfert.",
    'Why training-free geometric proxies predict generalization, through spectral and differential channels acting together.':
      'Pourquoi des indicateurs géométriques sans entraînement prédisent la généralisation, par l\'action conjointe des canaux spectral et différentiel.',
    'Notes toward non-static computational foundations. Not yet a paper.':
      "Notes vers des fondements computationnels non statiques. Pas encore un article.",
    'A protocol for comparing information flow between modules whose scales do not match.':
      "Un protocole pour comparer les flux d'information entre modules dont les échelles diffèrent.",
    'Local dimension estimators on metric measure spaces, shown to be one functional at different window fields, with the scale range each silently assumes.':
      "Des estimateurs de dimension locale sur des espaces métriques mesurés, ramenés à une même fonctionnelle évaluée sur différents champs de fenêtres, avec la plage d'échelles que chacun suppose en silence.",
    'A personal life log. Record a behaviour once it happens, or a span for things that last, then review it by year, month and week.':
      "Un journal de vie. Notez un comportement quand il arrive, ou une durée pour ce qui dure, puis relisez par année, mois et semaine.",
    'A reading desk for papers: a local library, a ranking of what people are reading, and a profile that keeps the two together.':
      "Un bureau de lecture : bibliothèque locale, classement de ce que les gens lisent, et un profil qui relie les deux.",
    'A single page web terminal for long background jobs, with a live progress bar. Pure Python stdlib, no dependencies.':
      "Un terminal web d'une page pour les tâches longues, avec barre de progression en direct. Bibliothèque standard Python seule, sans dépendance.",
    'Four domains, twenty fields, one hundred and forty six branches. This is the shape of what I am trying to learn, not a list of credentials. The page is generated from one markdown file, so it stays easy to redraw.':
      "Quatre domaines, vingt disciplines, cent quarante-six branches. C'est la forme de ce que j'essaie d'apprendre, pas une liste de titres. La page est générée depuis un seul fichier markdown, donc facile à redessiner.",
  },
  ja: {
    'Directed risk contagion modelled with transfer entropy, then read by temporal convolution and graph attention.':
      '移転エントロピーでリスク伝染を表し、時間畳み込みとグラフ注意で読む。',
    'LSTM over multi-dimensional financial and non-financial indicators, read with KernelSHAP and partial dependence plots.':
      '多次元の財務・非財務指標を LSTM で読み、KernelSHAP と部分依存プロットで解釈する。',
    'Aligns an accounting panel, filing text and an ownership graph on one node, the firm quarter, to predict which material events fire.':
      '会計パネル、開示文、持株グラフを企業四半期という一つのノードに揃え、どの重要事象が起きるかを予測する。',
    'Legal isomorphism and severity scoring for quantified breach analysis.':
      '法的同型性と重大度スコアによる、定量化された違反分析。',
    'A dataset and task for separating abnormal optimism from ordinary tone in management discussion and analysis.':
      '経営者による討議と分析から、異常な楽観を通常の語調から切り分けるためのデータセットとタスク。',
    'Treats encoder combination as a stress test on the geometric resilience of fused feature manifolds, so no candidate has to be trained.':
      'エンコーダの組み合わせを、融合特徴多様体の幾何的靭性への負荷試験として扱う。候補を訓練する必要はない。',
    'A geometric account of what carries across legal domains when a norm is applied, and what does not survive the map.':
      '規範が適用されるとき法域を越えて何が保たれ、何が写像を生き延びないかを、幾何で説明する。',
    'Why training-free geometric proxies predict generalization, through spectral and differential channels acting together.':
      '訓練不要の幾何指標がなぜ汎化を予測するのかを、スペクトル経路と微分経路の共同作用から説明する。',
    'Notes toward non-static computational foundations. Not yet a paper.':
      '非静的計算基礎へ向けたノート。まだ論文ではない。',
    'A protocol for comparing information flow between modules whose scales do not match.':
      '尺度の合わないモジュール間の情報流を比べるためのプロトコル。',
    'Local dimension estimators on metric measure spaces, shown to be one functional at different window fields, with the scale range each silently assumes.':
      '距離測度空間の局所次元推定器が、実は同じ汎関数を異なる窓場で評価したものだと示し、それぞれが暗黙に仮定するスケール範囲を明らかにする。',
    'A personal life log. Record a behaviour once it happens, or a span for things that last, then review it by year, month and week.':
      '個人の生活ログ。起きた行動はその場で、続くものは区間で記録し、年・月・週で振り返る。',
    'A reading desk for papers: a local library, a ranking of what people are reading, and a profile that keeps the two together.':
      '論文の読書台。ローカル文庫、みんなが読んでいるもののランキング、その二つを並べるプロフィール。',
    'A single page web terminal for long background jobs, with a live progress bar. Pure Python stdlib, no dependencies.':
      '長いバックグラウンド処理のための単一ページ端末。進捗バー付き。Python 標準ライブラリのみで、外部依存はない。',
    'Four domains, twenty fields, one hundred and forty six branches. This is the shape of what I am trying to learn, not a list of credentials. The page is generated from one markdown file, so it stays easy to redraw.':
      '四領域、二十分野、百四十六の分岐。これは私が学ぼうとしている形であり、経歴の一覧ではない。ページは一つの markdown から生成されるので、描き直すのは簡単だ。',
  },
};

Object.assign(I18N.zh, R.zh);
Object.assign(I18N.fr, R.fr);
Object.assign(I18N.ja, R.ja);

const MOTTO = {
  fr: ["Je suis un rover de l'espace,", 'heureux d\'avoir les étoiles pour compagnes,', 'ce qui rend ma quête moins solitaire.'],
  ja: ['私は宇宙の漫遊者で、', '幸いにも満天の星が付き合ってくれるので、', '探究の道でそれほど孤独を感じずにすむ。'],
};

const originalApply = applyLanguage;
applyLanguage = function (lang) {
  originalApply(lang);
  const cn = document.querySelector('.statement .cn');
  if (cn && MOTTO[lang]) cn.innerHTML = MOTTO[lang].join('<br>');

  const foot = document.querySelector('.footer .motto > p:first-child');
  if (foot && MOTTO[lang]) foot.innerHTML = MOTTO[lang].join('<br>');
};
