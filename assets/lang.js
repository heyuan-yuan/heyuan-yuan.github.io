(function () {
  'use strict';
  var STRINGS = {
    zh: {
      'skip.link': '跳到主要内容',
      'nav.aria': '页面导航',
      'nav.pubs': '论文',
      'nav.edu': '教育',
      'nav.research': '研究',
      'nav.projects': '项目',
      'nav.skills': '技能',
      'nav.exp': '经历',
      'nav.news': '动态',
      'hero.photoAlt': '贺园园的个人照片',
      'hero.tagsAria': '研究关键词',
      'hero.actionsAria': '联系方式与个人资料',
      'hero.bio': '我目前是云南师范大学信息学院计算机技术专业硕士研究生，由<a href="https://cic.ynnu.edu.cn/info/1056/1078.htm" target="_blank" rel="noopener noreferrer">杨扬教授</a>和<a href="https://cic.ynnu.edu.cn/info/1056/1336.htm" target="_blank" rel="noopener noreferrer">赵姗老师</a>共同指导。研究聚焦于红外与可见光图像融合，重点关注颜色保真、多模态特征交互、语义引导融合，以及面向下游视觉任务的融合质量提升。',
      'contact.email': '发送电子邮件',
      'contact.github': '访问 GitHub 主页',
      'contact.cv': '查看中文简历',
      'contact.cvTitle': '中文简历',
      'contact.wechat': '显示微信二维码',
      'contact.wechatTitle': '微信',
      'pubs.title': '论文成果',
      'pubs.intro': '以第一作者身份发表中科院二区论文2篇。',
      'pubs.badge': '已见刊',
      'pubs.meta1': 'SCI · 中科院 2 区 · IF 6.4',
      'pubs.meta2': 'SCI · 中科院 2 区 · IF 3.8',
      'edu.title': '教育经历',
      'edu.ms.date': '2024.09 - 2027.06（预计）',
      'edu.ms.school': '云南师范大学 · 信息学院',
      'edu.ms.degree': '计算机技术专业，硕士研究生',
      'edu.ms.supervisor': '导师：<a href="https://cic.ynnu.edu.cn/info/1056/1078.htm" target="_blank" rel="noopener noreferrer">杨扬</a>、<a href="https://cic.ynnu.edu.cn/info/1056/1336.htm" target="_blank" rel="noopener noreferrer">赵姗</a>共同指导',
      'edu.ms.rank': '专业排名 1/155',
      'edu.ms.award': '研究生国家奖学金（2026）',
      'edu.ms.second': '二等学业奖学金（连续2年）',
      'edu.bs.school': '太原工业学院 · 计算机工程系',
      'edu.bs.degree': '网络工程专业，本科',
      'edu.bs.honor': '优秀共青团员（连续2年）',
      'res.title': '研究方向',
      'res1.title': '颜色信息保留',
      'res1.text': '针对现有 CNN 与 GAN 类融合方法易出现细节丢失、边缘模糊，且较少系统保留可见光颜色信息的问题，研究面向颜色保真的红外与可见光图像融合方法。',
      'res2.title': '视觉感知与高级视觉任务',
      'res2.text': '围绕高色彩保真融合结果更符合人类视觉感知这一特点，研究提升融合图像视觉质量与语义表达能力的方法，使融合结果更有利于目标识别、场景理解与视觉注意力等高级视觉任务。',
      'res3.title': '边境安防下游检测',
      'res3.text': '面向边境安防中的非法入境目标检测与识别需求，研究多通道可见光和单通道红外数据的联合建模与细节增强融合，为后续检测和识别提供颜色更生动、细节更丰富的融合结果。',
      'proj.title': '科研项目',
      'proj1.date': '国家自然科学基金<br>地区科学基金项目',
      'proj1.title': '面向边境安防的超大场景自动监测技术研究',
      'proj1.text': '项目参与者，围绕边境安防场景中的多模态感知、图像融合和自动监测技术开展研究。',
      'proj2.date': '云南省科技厅<br>科技计划项目',
      'proj2.title': '针对超大场景下的多模态图像融合与目标检测研究',
      'proj2.text': '项目参与者，研究超大场景下多模态图像融合与目标检测相关方法。',
      'skill.title': '科研技能',
      'skill1.label': '研究方法',
      'skill1.text': '熟悉红外与可见光图像融合、多模态特征交互、语义引导融合、注意力机制与门控网络、不确定性建模等深度学习方法，了解目标检测与识别等下游任务。',
      'skill2.label': '研究工具',
      'skill2.text': '熟练使用 Python 与 PyTorch 开展模型搭建与实验，熟悉 Linux 环境与基础运维，掌握常用图像处理与实验分析流程。',
      'skill3.label': '学术写作',
      'skill3.text': '英语水平 CET-6 499，具备中英文学术论文写作与修改能力，熟悉 SCI 期刊投稿与返修流程。',
      'exp.title': '实践与荣誉',
      'exp.stu.title': '学生工作',
      'exp.stu1': '班级团支部组织委员，2025.09 - 至今',
      'exp.stu2': '班级文体委员，2024.09 - 2025.09',
      'exp.stu3': '太原工业学院 PC 义修团负责人，2021.09 - 2022.06',
      'exp.work.title': '工作经历',
      'exp.work1': '<a href="https://www.kunlun.com/" target="_blank" rel="noopener noreferrer">北京昆仑万维科技股份有限公司</a>，Linux 运维岗，2023.07 - 2024.08',
      'exp.comp.title': '竞赛与专利',
      'exp.comp1': '第十届华为 ICT 大赛实践赛云南赛区一等奖',
      'exp.comp2': '第八届传智杯全国 IT 技能大赛云南赛区一等奖',
      'exp.comp3': '2026 云师大第三届“图灵杯”程序设计大赛一等奖',
      'exp.comp4': '发明专利公开 1 项',
      'news.title': '最新动态',
      'news.scholarship': '获研究生国家奖学金。',
      'news.uma': 'UMAFusion 录用。',
      'news.miss': 'MISSFusion 录用。',
      'news.site': '个人学术主页上线。',
      'footer.loc': '山西 · 吕梁',
      'footer.copy': '© 2026 贺园园',
      'dialog.aria': '微信二维码',
      'dialog.close': '关闭',
      'dialog.qrAlt': '贺园园的微信二维码，使用微信扫一扫添加好友',
      'dialog.id': '微信号：<strong>flames-_</strong>'
    },
    en: {
      'skip.link': 'Skip to content',
      'nav.aria': 'Page navigation',
      'nav.pubs': 'Publications',
      'nav.edu': 'Education',
      'nav.research': 'Research',
      'nav.projects': 'Projects',
      'nav.skills': 'Skills',
      'nav.exp': 'Experience',
      'nav.news': 'News',
      'hero.photoAlt': 'Photo of Yuanyuan He',
      'hero.tagsAria': 'Research keywords',
      'hero.actionsAria': 'Contact and profiles',
      'hero.bio': 'I am currently a master\'s student in Computer Technology at the School of Information, Yunnan Normal University, jointly supervised by <a href="https://cic.ynnu.edu.cn/info/1056/1078.htm" target="_blank" rel="noopener noreferrer">Prof. Yang Yang</a> and <a href="https://cic.ynnu.edu.cn/info/1056/1336.htm" target="_blank" rel="noopener noreferrer">Zhao Shan</a>. My research focuses on infrared and visible image fusion, with an emphasis on color fidelity, multimodal feature interaction, and semantic-guided fusion, as well as improving fusion quality for downstream vision tasks.',
      'contact.email': 'Send an email',
      'contact.github': 'Visit GitHub profile',
      'contact.cv': 'View CV (PDF)',
      'contact.cvTitle': 'CV (PDF)',
      'contact.wechat': 'Show WeChat QR code',
      'contact.wechatTitle': 'WeChat',
      'pubs.title': 'Publications',
      'pubs.intro': 'Two first-author papers published in CAS Q2 journals.',
      'pubs.badge': 'Published',
      'pubs.meta1': 'SCI · CAS Q2 · IF 6.4',
      'pubs.meta2': 'SCI · CAS Q2 · IF 3.8',
      'edu.title': 'Education',
      'edu.ms.date': '2024.09 - 2027.06 (Expected)',
      'edu.ms.school': 'Yunnan Normal University · School of Information',
      'edu.ms.degree': 'M.S. in Computer Technology',
      'edu.ms.supervisor': 'Supervised by <a href="https://cic.ynnu.edu.cn/info/1056/1078.htm" target="_blank" rel="noopener noreferrer">Yang Yang</a> and <a href="https://cic.ynnu.edu.cn/info/1056/1336.htm" target="_blank" rel="noopener noreferrer">Zhao Shan</a>',
      'edu.ms.rank': 'Ranked 1/155 in program',
      'edu.ms.award': 'National Scholarship for Graduate Students (2026)',
      'edu.ms.second': 'Second-Class Academic Scholarship (2 consecutive years)',
      'edu.bs.school': 'Taiyuan Institute of Technology · Department of Computer Engineering',
      'edu.bs.degree': 'B.Eng. in Network Engineering',
      'edu.bs.honor': 'Outstanding League Member (2 consecutive years)',
      'res.title': 'Research Interests',
      'res1.title': 'Color Information Preservation',
      'res1.text': 'Existing CNN- and GAN-based fusion methods often suffer from loss of detail, blurred edges, and limited preservation of visible color information. I study infrared and visible image fusion methods oriented toward color fidelity.',
      'res2.title': 'Visual Perception and High-level Vision Tasks',
      'res2.text': 'Color-faithful fusion results better match human visual perception. I study methods that improve the visual quality and semantic expressiveness of fused images, making them more suitable for high-level vision tasks such as object recognition, scene understanding, and visual attention.',
      'res3.title': 'Downstream Detection for Border Security',
      'res3.text': 'Targeting the detection and recognition of illegal border-crossing targets in border security, I study joint modeling and detail-enhanced fusion of multi-channel visible and single-channel infrared data, providing fusion results with more vivid colors and richer details for subsequent detection and recognition.',
      'proj.title': 'Research Projects',
      'proj1.date': 'NSFC<br>Regional Science Fund',
      'proj1.title': 'Automatic Monitoring of Ultra-large Scenes for Border Security',
      'proj1.text': 'Project participant, working on multimodal perception, image fusion, and automatic monitoring technologies in border security scenarios.',
      'proj2.date': 'Yunnan Provincial<br>S&T Program',
      'proj2.title': 'Multimodal Image Fusion and Object Detection for Ultra-large Scenes',
      'proj2.text': 'Project participant, researching multimodal image fusion and object detection methods for ultra-large scenes.',
      'skill.title': 'Research Skills',
      'skill1.label': 'Methodology',
      'skill1.text': 'Familiar with deep learning methods for infrared and visible image fusion, multimodal feature interaction, semantic-guided fusion, attention mechanisms and gating networks, and uncertainty modeling; aware of downstream tasks such as object detection and recognition.',
      'skill2.label': 'Tools',
      'skill2.text': 'Proficient in Python and PyTorch for model building and experiments; familiar with Linux environments and basic operations; experienced with common image processing and experimental analysis workflows.',
      'skill3.label': 'Academic Writing',
      'skill3.text': 'English: CET-6 499; capable of writing and revising academic papers in both Chinese and English; familiar with SCI journal submission and revision processes.',
      'exp.title': 'Experience and Honors',
      'exp.stu.title': 'Student Leadership',
      'exp.stu1': 'Organization Committee Member of the Class League Branch, 2025.09 - present',
      'exp.stu2': 'Culture and Sports Committee Member of the Class, 2024.09 - 2025.09',
      'exp.stu3': 'Leader of the PC Volunteer Repair Team, Taiyuan Institute of Technology, 2021.09 - 2022.06',
      'exp.work.title': 'Work Experience',
      'exp.work1': '<a href="https://www.kunlun.com/" target="_blank" rel="noopener noreferrer">Kunlun Tech Co., Ltd. (Beijing)</a>, Linux Operations Engineer, 2023.07 - 2024.08',
      'exp.comp.title': 'Competitions and Patent',
      'exp.comp1': 'First Prize, 10th Huawei ICT Competition (Practice Track), Yunnan Division',
      'exp.comp2': 'First Prize, 8th Chuanzhi Cup National IT Skills Competition, Yunnan Division',
      'exp.comp3': 'First Prize, 3rd "Turing Cup" Programming Contest of Yunnan Normal University, 2026',
      'exp.comp4': '1 published invention patent',
      'news.title': 'News',
      'news.scholarship': 'Received the National Scholarship for Graduate Students.',
      'news.uma': 'UMAFusion accepted.',
      'news.miss': 'MISSFusion accepted.',
      'news.site': 'Personal academic homepage launched.',
      'footer.loc': 'Lüliang, Shanxi',
      'footer.copy': '© 2026 Yuanyuan He',
      'dialog.aria': 'WeChat QR code',
      'dialog.close': 'Close',
      'dialog.qrAlt': 'WeChat QR code of Yuanyuan He; scan to add as a contact',
      'dialog.id': 'WeChat ID: <strong>flames-_</strong>'
    }
  };

  function apply(lang) {
    var dict = STRINGS[lang];
    if (!dict) return;
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var value = dict[el.getAttribute('data-i18n')];
      if (typeof value === 'string') el.innerHTML = value;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var value = dict[el.getAttribute('data-i18n-aria')];
      if (typeof value === 'string') el.setAttribute('aria-label', value);
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var value = dict[el.getAttribute('data-i18n-title')];
      if (typeof value === 'string') el.setAttribute('title', value);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var value = dict[el.getAttribute('data-i18n-alt')];
      if (typeof value === 'string') el.setAttribute('alt', value);
    });
    var toggle = document.getElementById('lang-toggle');
    if (toggle) {
      toggle.textContent = lang === 'zh' ? 'EN' : '中文';
      toggle.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换到中文');
    }
    try { localStorage.setItem('site-lang', lang); } catch (e) { /* storage unavailable */ }
  }

  var initial = 'zh';
  try { if (localStorage.getItem('site-lang') === 'en') initial = 'en'; } catch (e) { /* storage unavailable */ }
  if (initial === 'en') apply('en');

  var toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      apply(document.documentElement.getAttribute('lang') === 'en' ? 'zh' : 'en');
    });
  }
})();
