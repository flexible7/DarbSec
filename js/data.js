const trackMeta = {
  "foundation": {
    "title": "التأسيس السيبراني والشبكات",
    "short": "التأسيس",
    "icon": "fa-layer-group",
    "desc": "لمن يحتاج ترتيب أساسيات الحاسب والشبكات وأنظمة التشغيل ومبادئ الحماية قبل اختيار التخصص."
  },
  "defensive": {
    "title": "الدفاع وعمليات الأمن السيبراني",
    "short": "الدفاع",
    "icon": "fa-shield-alt",
    "desc": "للمهتمين بمراقبة التنبيهات وتحليل السجلات والاستجابة للحوادث وفهم التهديدات."
  },
  "offensive": {
    "title": "الاختبار الأمني والهجوم الأخلاقي",
    "short": "الاختبار الأمني",
    "icon": "fa-terminal",
    "desc": "للمهتمين باكتشاف الثغرات واختبار الأنظمة داخل بيئات مصرح بها وكتابة التقارير الفنية."
  },
  "grc": {
    "title": "الحوكمة والمخاطر والامتثال",
    "short": "الحوكمة والمخاطر",
    "icon": "fa-balance-scale",
    "desc": "للمهتمين بالسياسات والضوابط وإدارة المخاطر والتدقيق والالتزام بالمتطلبات."
  },
  "cloud": {
    "title": "أمن السحابة والهوية",
    "short": "أمن السحابة",
    "icon": "fa-cloud-shield",
    "desc": "للمهتمين بتأمين الخدمات السحابية والحسابات والصلاحيات وتصميم الحماية."
  },
  "forensics": {
    "title": "التحقيق الجنائي والاستجابة للحوادث",
    "short": "التحقيق الرقمي",
    "icon": "fa-fingerprint",
    "desc": "للمهتمين بجمع الأدلة الرقمية وتحليل الحوادث ومعرفة ما حدث خطوة بخطوة."
  },
  "appsec": {
    "title": "أمن التطبيقات والبرمجيات",
    "short": "أمن التطبيقات",
    "icon": "fa-code",
    "desc": "للمهتمين بحماية تطبيقات الويب ومراجعة الكود وإدخال الحماية أثناء تطوير البرمجيات."
  },
  "management": {
    "title": "الإدارة والقيادة السيبرانية",
    "short": "القيادة السيبرانية",
    "icon": "fa-chess-king",
    "desc": "للمهتمين ببناء البرامج الأمنية وقيادة الفرق وربط الحماية بأهداف الجهة."
  },
  "ot": {
    "title": "أمن الأنظمة الصناعية",
    "short": "الأمن الصناعي",
    "icon": "fa-industry",
    "desc": "للمهتمين بحماية المصانع وأنظمة التحكم والبنية التحتية والخدمات الحيوية."
  }
};
const certData = {
  "isc2_cc": {
    "badge": "CC",
    "title": "Certified in Cybersecurity",
    "display_title": "CC - Certified in Cybersecurity",
    "desc": "مدخل مهني مختصر للأمن السيبراني. ترتيب المفاهيم الأساسية مثل التهديدات، الضوابط، الشبكات، والعمليات الأمنية.",
    "org": "ISC2",
    "level": "مبتدئ",
    "cat": "foundation",
    "paths": [
      "foundation",
      "defensive",
      "grc"
    ],
    "kind": "شهادة تأسيسية",
    "role": "مدخل مهني مختصر للأمن السيبراني.",
    "req": "يفضل معرفة عامة بالحاسب والإنترنت.",
    "duration": "1 - 2 شهر",
    "priority": 1,
    "recommended_for": "مدخل مهني مختصر للأمن السيبراني.",
    "outcome": "ترتيب المفاهيم الأساسية مثل التهديدات، الضوابط، الشبكات، والعمليات الأمنية.",
    "next_step": "بعد ذلك اتجه إلى Security+ أو CySA+ للدفاع، أو ISO 27001/GRC للحوكمة.",
    "skills": [
      "Cyber Basics",
      "Controls",
      "Risk",
      "Security Concepts"
    ],
    "tags": [
      "Cyber Basics",
      "Controls",
      "Risk"
    ]
  },
  "security_plus": {
    "badge": "Security+",
    "title": "CompTIA Security+",
    "display_title": "Security+ - CompTIA Security+",
    "desc": "أغلب خريجي الأمن السيبراني كبداية عامة قبل التخصص. تأسيس قوي في المفاهيم الأمنية، إدارة المخاطر، التهديدات، التشفير، والهوية.",
    "org": "CompTIA",
    "level": "مبتدئ",
    "cat": "foundation",
    "paths": [
      "foundation",
      "defensive",
      "offensive",
      "grc"
    ],
    "kind": "شهادة تأسيسية",
    "role": "أغلب خريجي الأمن السيبراني كبداية عامة قبل التخصص.",
    "req": "يفضل فهم أساسيات الشبكات وأنظمة التشغيل.",
    "duration": "2 - 3 أشهر",
    "priority": 2,
    "recommended_for": "أغلب خريجي الأمن السيبراني كبداية عامة قبل التخصص.",
    "outcome": "تأسيس قوي في المفاهيم الأمنية، إدارة المخاطر، التهديدات، التشفير، والهوية.",
    "next_step": "بعد ذلك اختر CySA+ للدفاع، PenTest+ للهجومي، أو ISO 27001/GRC للحوكمة.",
    "skills": [
      "Security Basics",
      "Risk",
      "Network Security",
      "Identity"
    ],
    "tags": [
      "Security Basics",
      "Risk",
      "Network Security"
    ]
  },
  "network_plus": {
    "badge": "Network+",
    "title": "CompTIA Network+",
    "display_title": "Network+ - CompTIA Network+",
    "desc": "تقوية أساسيات الشبكات قبل دخول SOC أو اختبار الاختراق. فهم IP، البروتوكولات، troubleshooting، وبنية الشبكات.",
    "org": "CompTIA",
    "level": "مبتدئ",
    "cat": "foundation",
    "paths": [
      "foundation",
      "defensive",
      "offensive",
      "cloud"
    ],
    "kind": "شهادة تأسيسية مساندة",
    "role": "تقوية أساسيات الشبكات قبل دخول SOC أو اختبار الاختراق.",
    "req": "لا يوجد، لكن معرفة حاسب عامة تساعد.",
    "duration": "2 - 3 أشهر",
    "priority": 3,
    "recommended_for": "تقوية أساسيات الشبكات قبل دخول SOC أو اختبار الاختراق.",
    "outcome": "فهم IP، البروتوكولات، troubleshooting، وبنية الشبكات.",
    "next_step": "بعد ذلك Security+ أو CCNA حسب هدفك وعمقك المطلوب في الشبكات.",
    "skills": [
      "Networking",
      "Protocols",
      "Troubleshooting"
    ],
    "tags": [
      "Networking",
      "Protocols",
      "Troubleshooting"
    ]
  },
  "ccna": {
    "badge": "CCNA",
    "title": "Cisco Certified Network Associate",
    "display_title": "CCNA - Cisco Certified Network Associate",
    "desc": "قاعدة شبكات قوية تخدمه في الأمن السيبراني. فهم أعمق للتوجيه، التحويل، VLANs، troubleshooting، وبنية الشبكات.",
    "org": "Cisco",
    "level": "متوسط",
    "cat": "foundation",
    "paths": [
      "foundation",
      "defensive",
      "offensive",
      "cloud"
    ],
    "kind": "شهادة شبكات",
    "role": "قاعدة شبكات قوية تخدمه في الأمن السيبراني.",
    "req": "أساسيات الحاسب والشبكات، ويُفضّل امتلاك تجربة عملية بسيطة.",
    "duration": "3 - 5 أشهر",
    "priority": 4,
    "recommended_for": "قاعدة شبكات قوية تخدمه في الأمن السيبراني.",
    "outcome": "فهم أعمق للتوجيه، التحويل، VLANs، troubleshooting، وبنية الشبكات.",
    "next_step": "بعد ذلك CyberOps Associate أو CySA+ للدفاع، أو eJPT/PNPT للهجومي.",
    "skills": [
      "Routing",
      "Switching",
      "IP",
      "Network Analysis"
    ],
    "tags": [
      "Routing",
      "Switching",
      "IP"
    ]
  },
  "sc_900": {
    "badge": "SC-900",
    "title": "Microsoft Security, Compliance, and Identity Fundamentals",
    "display_title": "SC-900 - Microsoft Security, Compliance, and Identity Fundamentals",
    "desc": "فهم أمن Microsoft والهوية والامتثال بشكل مبسط. فهم أساسيات الهوية، الأمان، الامتثال، وحلول Microsoft الأمنية.",
    "org": "Microsoft",
    "level": "مبتدئ",
    "cat": "foundation",
    "paths": [
      "foundation",
      "cloud",
      "grc"
    ],
    "kind": "شهادة تأسيسية",
    "role": "فهم أمن Microsoft والهوية والامتثال بشكل مبسط.",
    "req": "لا يوجد متطلب قوي.",
    "duration": "2 - 5 أسابيع",
    "priority": 5,
    "recommended_for": "فهم أمن Microsoft والهوية والامتثال بشكل مبسط.",
    "outcome": "فهم أساسيات الهوية، الأمان، الامتثال، وحلول Microsoft الأمنية.",
    "next_step": "بعد ذلك SC-200 لعمليات الأمن أو SC-500 لأمن Azure أو SC-300 للهوية.",
    "skills": [
      "Microsoft Security",
      "Identity",
      "Compliance"
    ],
    "tags": [
      "Microsoft Security",
      "Identity",
      "Compliance"
    ]
  },
  "gsec": {
    "badge": "GSEC",
    "title": "GIAC Security Essentials",
    "display_title": "GSEC - GIAC Security Essentials",
    "desc": "أساس ويريد إثبات معرفة عملية واسعة في الأمن السيبراني. تثبيت معرفة قوية في الدفاع، الأنظمة، الشبكات، التشفير، والاستجابة الأولية.",
    "org": "GIAC",
    "level": "متوسط",
    "cat": "foundation",
    "paths": [
      "foundation",
      "defensive"
    ],
    "kind": "شهادة تأسيسية متقدمة",
    "role": "أساس ويريد إثبات معرفة عملية واسعة في الأمن السيبراني.",
    "req": "أساسيات شبكات وأنظمة تشغيل.",
    "duration": "2 - 4 أشهر",
    "priority": 6,
    "recommended_for": "أساس ويريد إثبات معرفة عملية واسعة في الأمن السيبراني.",
    "outcome": "تثبيت معرفة قوية في الدفاع، الأنظمة، الشبكات، التشفير، والاستجابة الأولية.",
    "next_step": "بعد ذلك GCIH أو GCIA حسب ميولك الدفاعي.",
    "skills": [
      "Security Essentials",
      "Defense",
      "Systems"
    ],
    "tags": [
      "Security Essentials",
      "Defense",
      "Systems"
    ]
  },
  "cisco_cyberops": {
    "badge": "CyberOps Associate",
    "title": "Cisco CyberOps Associate",
    "display_title": "CyberOps Associate - Cisco CyberOps Associate",
    "desc": "استهداف بداية عملية في SOC وتحليل التنبيهات. فهم عمليات SOC، التنبيهات، المراقبة، والتهديدات.",
    "org": "Cisco",
    "level": "مبتدئ",
    "cat": "defensive",
    "paths": [
      "foundation",
      "defensive"
    ],
    "kind": "شهادة عمليات أمنية",
    "role": "استهداف بداية عملية في SOC وتحليل التنبيهات.",
    "req": "أساسيات شبكات وأمن سيبراني.",
    "duration": "2 - 3 أشهر",
    "priority": 7,
    "recommended_for": "استهداف بداية عملية في SOC وتحليل التنبيهات.",
    "outcome": "فهم عمليات SOC، التنبيهات، المراقبة، والتهديدات.",
    "next_step": "بعد ذلك CySA+ أو SC-200 أو BTL1.",
    "skills": [
      "SOC",
      "Monitoring",
      "Threats"
    ],
    "tags": [
      "SOC",
      "Monitoring",
      "Threats"
    ]
  },
  "sscp": {
    "badge": "SSCP",
    "title": "Systems Security Certified Practitioner",
    "display_title": "SSCP - Systems Security Certified Practitioner",
    "desc": "دور أمني عملي مرتبط بالأنظمة والعمليات قبل الانتقال إلى CISSP. تقوية مفاهيم العمليات الأمنية، التحكم بالوصول، المخاطر، الحوادث، وأمن الشبكات.",
    "org": "ISC2",
    "level": "متوسط",
    "cat": "defensive",
    "paths": [
      "foundation",
      "defensive"
    ],
    "kind": "شهادة أمن عمليات وأنظمة",
    "role": "دور أمني عملي مرتبط بالأنظمة والعمليات قبل الانتقال إلى CISSP.",
    "req": "أساسيات شبكات وأنظمة وأمن.",
    "duration": "3 - 5 أشهر",
    "priority": 8,
    "recommended_for": "دور أمني عملي مرتبط بالأنظمة والعمليات قبل الانتقال إلى CISSP.",
    "outcome": "تقوية مفاهيم العمليات الأمنية، التحكم بالوصول، المخاطر، الحوادث، وأمن الشبكات.",
    "next_step": "بعد ذلك CySA+ أو GCIH للدفاع، أو CISSP لاحقًا بعد الخبرة.",
    "skills": [
      "Security Operations",
      "Access Control",
      "Systems Security"
    ],
    "tags": [
      "Security Operations",
      "Access Control",
      "Systems Security"
    ]
  },
  "cysa_plus": {
    "badge": "CySA+",
    "title": "CompTIA Cybersecurity Analyst",
    "display_title": "CySA+ - CompTIA Cybersecurity Analyst",
    "desc": "المتجه لوظائف SOC Analyst أو Blue Team Analyst. تحليل التهديدات، الثغرات، السجلات، الاستجابة، والتوصيات الدفاعية.",
    "org": "CompTIA",
    "level": "متوسط",
    "cat": "defensive",
    "paths": [
      "defensive"
    ],
    "kind": "شهادة تحليل دفاعي",
    "role": "المتجه لوظائف SOC Analyst أو Blue Team Analyst.",
    "req": "شهادة Security+ أو معرفة جيدة بالشبكات والأنظمة.",
    "duration": "3 - 4 أشهر",
    "priority": 10,
    "recommended_for": "المتجه لوظائف SOC Analyst أو Blue Team Analyst.",
    "outcome": "تحليل التهديدات، الثغرات، السجلات، الاستجابة، والتوصيات الدفاعية.",
    "next_step": "بعد ذلك BTL1/SC-200 عمليًا، ثم GCIH أو GCIA حسب التخصص.",
    "skills": [
      "SOC",
      "Threat Analysis",
      "Vulnerability Management"
    ],
    "tags": [
      "SOC",
      "Threat Analysis",
      "Vulnerability Management"
    ]
  },
  "btl1": {
    "badge": "BTL1",
    "title": "Blue Team Level 1",
    "display_title": "BTL1 - Blue Team Level 1",
    "desc": "تطبيق عملي لدخول SOC بدل الحفظ النظري فقط. تطبيق على تحليل السجلات، الحوادث، التحقيق الأولي، والتقارير.",
    "org": "Security Blue Team",
    "level": "مبتدئ",
    "cat": "defensive",
    "paths": [
      "defensive"
    ],
    "kind": "شهادة عملية",
    "role": "تطبيق عملي لدخول SOC بدل الحفظ النظري فقط.",
    "req": "أساسيات أمنية وشبكات.",
    "duration": "1 - 3 أشهر",
    "priority": 11,
    "recommended_for": "تطبيق عملي لدخول SOC بدل الحفظ النظري فقط.",
    "outcome": "تطبيق على تحليل السجلات، الحوادث، التحقيق الأولي، والتقارير.",
    "next_step": "بعد ذلك CySA+ أو SC-200 أو GCIH.",
    "skills": [
      "Blue Team",
      "Logs",
      "Incident Triage"
    ],
    "tags": [
      "Blue Team",
      "Logs",
      "Incident Triage"
    ]
  },
  "sc_200": {
    "badge": "SC-200",
    "title": "Microsoft Security Operations Analyst",
    "display_title": "SC-200 - Microsoft Security Operations Analyst",
    "desc": "استهداف SOC في بيئات Microsoft Sentinel/Defender. استخدام Sentinel وDefender للتحقيق، الاستجابة، والـ threat hunting.",
    "org": "Microsoft",
    "level": "متوسط",
    "cat": "defensive",
    "paths": [
      "defensive",
      "cloud"
    ],
    "kind": "شهادة عمليات أمنية",
    "role": "استهداف SOC في بيئات Microsoft Sentinel/Defender.",
    "req": "معرفة بأساسيات منظومة أمان مايكروسوفت، ويُفضّل مستوى قريب من شهادة SC-900.",
    "duration": "2 - 4 أشهر",
    "priority": 12,
    "recommended_for": "استهداف SOC في بيئات Microsoft Sentinel/Defender.",
    "outcome": "استخدام Sentinel وDefender للتحقيق، الاستجابة، والـ threat hunting.",
    "next_step": "بعد ذلك SC-500 أو GCIH أو SC-100 حسب مسارك.",
    "skills": [
      "Microsoft Sentinel",
      "Defender",
      "Incident Response"
    ],
    "tags": [
      "Microsoft Sentinel",
      "Defender",
      "Incident Response"
    ]
  },
  "gcih": {
    "badge": "GCIH",
    "title": "GIAC Certified Incident Handler",
    "display_title": "GCIH - GIAC Certified Incident Handler",
    "desc": "محلل دفاعي يريد فهم الهجمات والتعامل مع الحوادث بجدية. كشف الحوادث، فهم تكتيكات المهاجم، الاستجابة، واحتواء الهجمات.",
    "org": "GIAC",
    "level": "متوسط",
    "cat": "defensive",
    "paths": [
      "defensive",
      "forensics"
    ],
    "kind": "شهادة استجابة للحوادث",
    "role": "محلل دفاعي يريد فهم الهجمات والتعامل مع الحوادث بجدية.",
    "req": "أساسيات قوية في الشبكات والأنظمة.",
    "duration": "3 - 5 أشهر",
    "priority": 13,
    "recommended_for": "محلل دفاعي يريد فهم الهجمات والتعامل مع الحوادث بجدية.",
    "outcome": "كشف الحوادث، فهم تكتيكات المهاجم، الاستجابة، واحتواء الهجمات.",
    "next_step": "بعد ذلك GCIA أو GCFA أو GREM حسب التخصص.",
    "skills": [
      "Incident Response",
      "Attack Techniques",
      "Containment"
    ],
    "tags": [
      "Incident Response",
      "Attack Techniques",
      "Containment"
    ]
  },
  "gcia": {
    "badge": "GCIA",
    "title": "GIAC Certified Intrusion Analyst",
    "display_title": "GCIA - GIAC Certified Intrusion Analyst",
    "desc": "التعمق في تحليل الترافيك والـ IDS/NSM. تحليل حركة الشبكة، كشف التسلل، وفهم المؤشرات الشبكية.",
    "org": "GIAC",
    "level": "محترف",
    "cat": "defensive",
    "paths": [
      "defensive",
      "forensics"
    ],
    "kind": "شهادة تحليل اختراقات شبكية",
    "role": "التعمق في تحليل الترافيك والـ IDS/NSM.",
    "req": "شبكات قوية ومعرفة بتحليل الحزم.",
    "duration": "3 - 6 أشهر",
    "priority": 14,
    "recommended_for": "التعمق في تحليل الترافيك والـ IDS/NSM.",
    "outcome": "تحليل حركة الشبكة، كشف التسلل، وفهم المؤشرات الشبكية.",
    "next_step": "بعد ذلك GNFA أو Threat Hunting متقدم.",
    "skills": [
      "Network Detection",
      "Traffic Analysis",
      "IDS"
    ],
    "tags": [
      "Network Detection",
      "Traffic Analysis",
      "IDS"
    ]
  },
  "gmon": {
    "badge": "GMON",
    "title": "GIAC Continuous Monitoring",
    "display_title": "GMON - GIAC Continuous Monitoring",
    "desc": "بناء مراقبة أمنية وتحسين الرؤية داخل البيئة. فهم الرصد المستمر، بناء حالات استخدام، وقياس فعالية الكشف.",
    "org": "GIAC",
    "level": "متوسط",
    "cat": "defensive",
    "paths": [
      "defensive"
    ],
    "kind": "شهادة مراقبة مستمرة",
    "role": "بناء مراقبة أمنية وتحسين الرؤية داخل البيئة.",
    "req": "أساسيات مراكز العمليات الأمنية ومنصات إدارة معلومات وأحداث الأمن.",
    "duration": "3 - 5 أشهر",
    "priority": 15,
    "recommended_for": "بناء مراقبة أمنية وتحسين الرؤية داخل البيئة.",
    "outcome": "فهم الرصد المستمر، بناء حالات استخدام، وقياس فعالية الكشف.",
    "next_step": "بعد ذلك GCIH أو GCIA أو GCTI.",
    "skills": [
      "Continuous Monitoring",
      "Detection Engineering",
      "SIEM"
    ],
    "tags": [
      "Continuous Monitoring",
      "Detection Engineering",
      "SIEM"
    ]
  },
  "gcti": {
    "badge": "GCTI",
    "title": "GIAC Cyber Threat Intelligence",
    "display_title": "GCTI - GIAC Cyber Threat Intelligence",
    "desc": "التخصص في CTI وفهم الخصوم وربط المؤشرات بالسياق. إنتاج معلومات استخبارات تهديدات قابلة للاستخدام الدفاعي.",
    "org": "GIAC",
    "level": "متوسط",
    "cat": "defensive",
    "paths": [
      "defensive"
    ],
    "kind": "شهادة استخبارات تهديدات",
    "role": "التخصص في CTI وفهم الخصوم وربط المؤشرات بالسياق.",
    "req": "أساسيات أمنية وتحليلية.",
    "duration": "2 - 4 أشهر",
    "priority": 16,
    "recommended_for": "التخصص في CTI وفهم الخصوم وربط المؤشرات بالسياق.",
    "outcome": "إنتاج معلومات استخبارات تهديدات قابلة للاستخدام الدفاعي.",
    "next_step": "بعد ذلك Threat Hunting أو Incident Response متقدم.",
    "skills": [
      "CTI",
      "Threat Actors",
      "Intel Reports"
    ],
    "tags": [
      "CTI",
      "Threat Actors",
      "Intel Reports"
    ]
  },
  "ec_csa": {
    "badge": "CSA",
    "title": "Certified SOC Analyst",
    "display_title": "CSA - Certified SOC Analyst",
    "desc": "مدخل منظم لوظائف مركز العمليات الأمنية. فهم مراقبة التنبيهات، الحوادث، السجلات، وأساسيات SOC.",
    "org": "EC-Council",
    "level": "مبتدئ",
    "cat": "defensive",
    "paths": [
      "defensive"
    ],
    "kind": "شهادة SOC",
    "role": "مدخل منظم لوظائف مركز العمليات الأمنية.",
    "req": "أساسيات أمن وشبكات.",
    "duration": "2 - 3 أشهر",
    "priority": 17,
    "recommended_for": "مدخل منظم لوظائف مركز العمليات الأمنية.",
    "outcome": "فهم مراقبة التنبيهات، الحوادث، السجلات، وأساسيات SOC.",
    "next_step": "بعد ذلك CySA+ أو BTL1 أو SC-200.",
    "skills": [
      "SOC",
      "Alerts",
      "SIEM"
    ],
    "tags": [
      "SOC",
      "Alerts",
      "SIEM"
    ]
  },
  "ec_ecih": {
    "badge": "ECIH",
    "title": "EC-Council Certified Incident Handler",
    "display_title": "ECIH - EC-Council Certified Incident Handler",
    "desc": "مدخل منظم لإدارة الحوادث والاستجابة. فهم دورة الحادث، الاحتواء، الاستئصال، التعافي، والتوثيق.",
    "org": "EC-Council",
    "level": "متوسط",
    "cat": "defensive",
    "paths": [
      "defensive",
      "forensics"
    ],
    "kind": "شهادة استجابة للحوادث",
    "role": "مدخل منظم لإدارة الحوادث والاستجابة.",
    "req": "أساسيات أمنية وشبكات.",
    "duration": "2 - 4 أشهر",
    "priority": 18,
    "recommended_for": "مدخل منظم لإدارة الحوادث والاستجابة.",
    "outcome": "فهم دورة الحادث، الاحتواء، الاستئصال، التعافي، والتوثيق.",
    "next_step": "بعد ذلك GCIH أو GCFA حسب العمق المطلوب.",
    "skills": [
      "Incident Handling",
      "Response Process",
      "Documentation"
    ],
    "tags": [
      "Incident Handling",
      "Response Process",
      "Documentation"
    ]
  },
  "offsec_osda": {
    "badge": "OSDA",
    "title": "OffSec Defense Analyst",
    "display_title": "OSDA - OffSec Defense Analyst",
    "desc": "مسار دفاعي عملي بأسلوب OffSec. تحليل حوادث وتنبيهات وسجلات من منظور عملي.",
    "org": "OffSec",
    "level": "متوسط",
    "cat": "defensive",
    "paths": [
      "defensive"
    ],
    "kind": "شهادة دفاع عملية",
    "role": "مسار دفاعي عملي بأسلوب OffSec.",
    "req": "أساسيات مراكز العمليات الأمنية والشبكات والأنظمة.",
    "duration": "2 - 4 أشهر",
    "priority": 19,
    "recommended_for": "مسار دفاعي عملي بأسلوب OffSec.",
    "outcome": "تحليل حوادث وتنبيهات وسجلات من منظور عملي.",
    "next_step": "بعد ذلك OSTH أو GCIH أو SC-200.",
    "skills": [
      "Defensive Analysis",
      "SOC",
      "Logs"
    ],
    "tags": [
      "Defensive Analysis",
      "SOC",
      "Logs"
    ]
  },
  "offsec_osth": {
    "badge": "OSTH",
    "title": "OffSec Threat Hunter",
    "display_title": "OSTH - OffSec Threat Hunter",
    "desc": "محلل دفاعي يريد التعمق في البحث الاستباقي عن التهديدات. تصميم فرضيات hunting وتحليل مؤشرات متقدمة.",
    "org": "OffSec",
    "level": "محترف",
    "cat": "defensive",
    "paths": [
      "defensive"
    ],
    "kind": "شهادة Threat Hunting",
    "role": "محلل دفاعي يريد التعمق في البحث الاستباقي عن التهديدات.",
    "req": "خبرة في مراكز العمليات الأمنية، وفهم جيد للسجلات وإطار MITRE ATT&CK لتصنيف أساليب الهجوم.",
    "duration": "3 - 6 أشهر",
    "priority": 20,
    "recommended_for": "محلل دفاعي يريد التعمق في البحث الاستباقي عن التهديدات.",
    "outcome": "تصميم فرضيات hunting وتحليل مؤشرات متقدمة.",
    "next_step": "بعد ذلك GCTI أو GCIA أو مسار Detection Engineering.",
    "skills": [
      "Threat Hunting",
      "MITRE ATT&CK",
      "Detection"
    ],
    "tags": [
      "Threat Hunting",
      "MITRE ATT&CK",
      "Detection"
    ]
  },
  "ejpt": {
    "badge": "eJPT",
    "title": "Junior Penetration Tester",
    "display_title": "eJPT - Junior Penetration Tester",
    "desc": "أفضل بداية عملية لاختبار الاختراق بدون الانتقال مباشرة للمستوى المتقدم. تطبيق أساسيات الاستطلاع، الاستغلال البسيط، واختبار الأنظمة والويب.",
    "org": "INE Security",
    "level": "مبتدئ",
    "cat": "offensive",
    "paths": [
      "offensive"
    ],
    "kind": "شهادة هجومية عملية للمبتدئين",
    "role": "أفضل بداية عملية لاختبار الاختراق بدون الانتقال مباشرة للمستوى المتقدم.",
    "req": "أساسيات الشبكات ونظام لينكس وتقنيات الويب.",
    "duration": "1 - 3 أشهر",
    "priority": 30,
    "recommended_for": "أفضل بداية عملية لاختبار الاختراق بدون الانتقال مباشرة للمستوى المتقدم.",
    "outcome": "تطبيق أساسيات الاستطلاع، الاستغلال البسيط، واختبار الأنظمة والويب.",
    "next_step": "بعد ذلك PNPT أو PenTest+ أو CEH Practical حسب هدفك.",
    "skills": [
      "Pentest Basics",
      "Recon",
      "Web Basics"
    ],
    "tags": [
      "Pentest Basics",
      "Recon",
      "Web Basics"
    ]
  },
  "pjpt": {
    "badge": "PJPT",
    "title": "Practical Junior Penetration Tester",
    "display_title": "PJPT - Practical Junior Penetration Tester",
    "desc": "بداية عملية في اختبار الاختراق الداخلي والشبكات. اختبار اختراق عملي على مستوى مبتدئ مع تقرير.",
    "org": "TCM Security",
    "level": "مبتدئ",
    "cat": "offensive",
    "paths": [
      "offensive"
    ],
    "kind": "شهادة اختبار اختراق عملية",
    "role": "بداية عملية في اختبار الاختراق الداخلي والشبكات.",
    "req": "أساسيات الشبكات ونظام لينكس.",
    "duration": "1 - 3 أشهر",
    "priority": 31,
    "recommended_for": "بداية عملية في اختبار الاختراق الداخلي والشبكات.",
    "outcome": "اختبار اختراق عملي على مستوى مبتدئ مع تقرير.",
    "next_step": "بعد ذلك PNPT أو eJPT/OSCP لاحقًا.",
    "skills": [
      "Internal Pentest",
      "Reporting",
      "Recon"
    ],
    "tags": [
      "Internal Pentest",
      "Reporting",
      "Recon"
    ]
  },
  "pentest_plus": {
    "badge": "PenTest+",
    "title": "CompTIA PenTest+",
    "display_title": "PenTest+ - CompTIA PenTest+",
    "desc": "شهادة vendor-neutral في مراحل اختبار الاختراق. فهم التخطيط، الاستطلاع، الاستغلال، الأدوات، والتقارير.",
    "org": "CompTIA",
    "level": "متوسط",
    "cat": "offensive",
    "paths": [
      "offensive"
    ],
    "kind": "شهادة اختبار اختراق",
    "role": "شهادة vendor-neutral في مراحل اختبار الاختراق.",
    "req": "شهادة Security+ أو معرفة مكافئة، مع أساسيات الشبكات ونظام لينكس.",
    "duration": "3 - 4 أشهر",
    "priority": 32,
    "recommended_for": "شهادة vendor-neutral في مراحل اختبار الاختراق.",
    "outcome": "فهم التخطيط، الاستطلاع، الاستغلال، الأدوات، والتقارير.",
    "next_step": "بعد ذلك PNPT أو OSCP بعد مختبرات كافية.",
    "skills": [
      "Pentesting",
      "Exploitation",
      "Reporting"
    ],
    "tags": [
      "Pentesting",
      "Exploitation",
      "Reporting"
    ]
  },
  "ceh": {
    "badge": "CEH",
    "title": "Certified Ethical Hacker",
    "display_title": "CEH - Certified Ethical Hacker",
    "desc": "فهم واسع لمراحل الاختراق الأخلاقي وأدواته. فهم منهجي لمراحل الهجوم الأخلاقي، الأدوات، والتهديدات.",
    "org": "EC-Council",
    "level": "متوسط",
    "cat": "offensive",
    "paths": [
      "offensive"
    ],
    "kind": "شهادة هجومية عامة",
    "role": "فهم واسع لمراحل الاختراق الأخلاقي وأدواته.",
    "req": "أساسيات أمن وشبكات.",
    "duration": "2 - 4 أشهر",
    "priority": 33,
    "recommended_for": "فهم واسع لمراحل الاختراق الأخلاقي وأدواته.",
    "outcome": "فهم منهجي لمراحل الهجوم الأخلاقي، الأدوات، والتهديدات.",
    "next_step": "لا تجعلها نهاية الطريق؛ بعد ذلك شهادة عملية مثل eJPT/PNPT/OSCP.",
    "skills": [
      "Ethical Hacking",
      "Tools",
      "Methodology"
    ],
    "tags": [
      "Ethical Hacking",
      "Tools",
      "Methodology"
    ]
  },
  "ceh_practical": {
    "badge": "CEH Practical",
    "title": "Certified Ethical Hacker Practical",
    "display_title": "CEH Practical - Certified Ethical Hacker Practical",
    "desc": "نسخة عملية أكثر من CEH النظرية. إثبات عملي لبعض مهارات الاختبار الأخلاقي.",
    "org": "EC-Council",
    "level": "متوسط",
    "cat": "offensive",
    "paths": [
      "offensive"
    ],
    "kind": "شهادة عملية",
    "role": "نسخة عملية أكثر من CEH النظرية.",
    "req": "معرفة بمحتوى شهادة CEH أو خبرة في المختبرات العملية.",
    "duration": "1 - 3 أشهر",
    "priority": 34,
    "recommended_for": "نسخة عملية أكثر من CEH النظرية.",
    "outcome": "إثبات عملي لبعض مهارات الاختبار الأخلاقي.",
    "next_step": "بعد ذلك PNPT أو OSCP حسب جاهزيتك.",
    "skills": [
      "Hands-on Hacking",
      "Practical Labs",
      "Recon"
    ],
    "tags": [
      "Hands-on Hacking",
      "Practical Labs",
      "Recon"
    ]
  },
  "pnpt": {
    "badge": "PNPT",
    "title": "Practical Network Penetration Tester",
    "display_title": "PNPT - Practical Network Penetration Tester",
    "desc": "تجربة قريبة من اختبار اختراق واقعي مع تقرير. تنفيذ اختبار اختراق شبكي وكتابة تقرير مهني.",
    "org": "TCM Security",
    "level": "متوسط",
    "cat": "offensive",
    "paths": [
      "offensive"
    ],
    "kind": "شهادة اختبار اختراق عملية",
    "role": "تجربة قريبة من اختبار اختراق واقعي مع تقرير.",
    "req": "أساسيات قوية في الشبكات والدليل النشط وإدارة أنظمة لينكس وويندوز.",
    "duration": "3 - 5 أشهر",
    "priority": 35,
    "recommended_for": "تجربة قريبة من اختبار اختراق واقعي مع تقرير.",
    "outcome": "تنفيذ اختبار اختراق شبكي وكتابة تقرير مهني.",
    "next_step": "بعد ذلك OSCP أو تخصص Active Directory/Red Team.",
    "skills": [
      "Network Pentest",
      "Active Directory",
      "Professional Reporting"
    ],
    "tags": [
      "Network Pentest",
      "Active Directory",
      "Professional Reporting"
    ]
  },
  "oscp": {
    "badge": "OSCP",
    "title": "OffSec Certified Professional",
    "display_title": "OSCP - OffSec Certified Professional",
    "desc": "هدف قوي لمن بنى أساس عملي جيد في الشبكات وLinux والويب. إثبات قدرة عملية على استغلال أنظمة وكتابة تقرير اختراق.",
    "org": "OffSec",
    "level": "محترف",
    "cat": "offensive",
    "paths": [
      "offensive"
    ],
    "kind": "شهادة اختبار اختراق متقدمة",
    "role": "هدف قوي لمن بنى أساس عملي جيد في الشبكات وLinux والويب.",
    "req": "خبرة فعلية في المختبرات، ومعرفة جيدة بنظام لينكس والشبكات وأساليب استغلال الثغرات داخل البيئات المصرح بها.",
    "duration": "4 - 8 أشهر",
    "priority": 36,
    "recommended_for": "هدف قوي لمن بنى أساس عملي جيد في الشبكات وLinux والويب.",
    "outcome": "إثبات قدرة عملية على استغلال أنظمة وكتابة تقرير اختراق.",
    "next_step": "بعد ذلك OSEP للـ advanced pentest أو OSWE لأمن تطبيقات الويب.",
    "skills": [
      "Exploitation",
      "Privilege Escalation",
      "Reporting"
    ],
    "tags": [
      "Exploitation",
      "Privilege Escalation",
      "Reporting"
    ]
  },
  "osep": {
    "badge": "OSEP",
    "title": "OffSec Experienced Penetration Tester",
    "display_title": "OSEP - OffSec Experienced Penetration Tester",
    "desc": "تقنيات اختبار اختراق متقدمة بعد تجاوز الأساسيات. تقنيات متقدمة في الاختراق، الحماية الالتفافية، والبيئات الواقعية.",
    "org": "OffSec",
    "level": "محترف",
    "cat": "offensive",
    "paths": [
      "offensive"
    ],
    "kind": "شهادة هجومية متقدمة",
    "role": "تقنيات اختبار اختراق متقدمة بعد تجاوز الأساسيات.",
    "req": "يُفضّل الحصول على شهادة OSCP أو امتلاك خبرة عملية مكافئة.",
    "duration": "4 - 8 أشهر",
    "priority": 37,
    "recommended_for": "تقنيات اختبار اختراق متقدمة بعد تجاوز الأساسيات.",
    "outcome": "تقنيات متقدمة في الاختراق، الحماية الالتفافية، والبيئات الواقعية.",
    "next_step": "بعد ذلك تخصص Red Team أو OSED/OSWE حسب الاهتمام.",
    "skills": [
      "Advanced Pentest",
      "Evasion",
      "Red Team"
    ],
    "tags": [
      "Advanced Pentest",
      "Evasion",
      "Red Team"
    ]
  },
  "oswa": {
    "badge": "OSWA",
    "title": "OffSec Web Assessor",
    "display_title": "OSWA - OffSec Web Assessor",
    "desc": "بداية عملية في اختبار تطبيقات الويب. فهم اختبار تطبيقات الويب واستغلال ثغرات شائعة.",
    "org": "OffSec",
    "level": "متوسط",
    "cat": "appsec",
    "paths": [
      "offensive",
      "appsec"
    ],
    "kind": "شهادة أمن تطبيقات ويب",
    "role": "بداية عملية في اختبار تطبيقات الويب.",
    "req": "أساسيات الويب، وفهم بروتوكول HTTP، ومبادئ بسيطة في لغة جافاسكربت.",
    "duration": "2 - 4 أشهر",
    "priority": 38,
    "recommended_for": "بداية عملية في اختبار تطبيقات الويب.",
    "outcome": "فهم اختبار تطبيقات الويب واستغلال ثغرات شائعة.",
    "next_step": "بعد ذلك OSWE أو GWAPT.",
    "skills": [
      "Web Security",
      "HTTP",
      "App Testing"
    ],
    "tags": [
      "Web Security",
      "HTTP",
      "App Testing"
    ]
  },
  "oswe": {
    "badge": "OSWE",
    "title": "OffSec Web Expert",
    "display_title": "OSWE - OffSec Web Expert",
    "desc": "التعمق في تحليل الكود واستغلال تطبيقات الويب. تحليل كود وتطوير استغلالات ويب متقدمة.",
    "org": "OffSec",
    "level": "محترف",
    "cat": "appsec",
    "paths": [
      "offensive",
      "appsec"
    ],
    "kind": "شهادة أمن ويب متقدمة",
    "role": "التعمق في تحليل الكود واستغلال تطبيقات الويب.",
    "req": "خبرة ويب وبرمجة وتحليل ثغرات.",
    "duration": "5 - 9 أشهر",
    "priority": 39,
    "recommended_for": "التعمق في تحليل الكود واستغلال تطبيقات الويب.",
    "outcome": "تحليل كود وتطوير استغلالات ويب متقدمة.",
    "next_step": "بعد ذلك CSSLP/DevSecOps أو أبحاث أمنية.",
    "skills": [
      "Code Review",
      "Web Exploitation",
      "AppSec"
    ],
    "tags": [
      "Code Review",
      "Web Exploitation",
      "AppSec"
    ]
  },
  "gpen": {
    "badge": "GPEN",
    "title": "GIAC Penetration Tester",
    "display_title": "GPEN - GIAC Penetration Tester",
    "desc": "شهادة قوية في منهجية اختبار الاختراق. فهم عملي للمنهجية، الاستغلال، التقارير، وتقنيات الاختبار.",
    "org": "GIAC",
    "level": "متوسط",
    "cat": "offensive",
    "paths": [
      "offensive"
    ],
    "kind": "شهادة اختبار اختراق",
    "role": "شهادة قوية في منهجية اختبار الاختراق.",
    "req": "أساسيات شبكات وأنظمة واختبار أمني.",
    "duration": "3 - 5 أشهر",
    "priority": 40,
    "recommended_for": "شهادة قوية في منهجية اختبار الاختراق.",
    "outcome": "فهم عملي للمنهجية، الاستغلال، التقارير، وتقنيات الاختبار.",
    "next_step": "بعد ذلك GWAPT لتطبيقات الويب أو GXPN للمتقدم.",
    "skills": [
      "Pentest Methodology",
      "Exploitation",
      "Reporting"
    ],
    "tags": [
      "Pentest Methodology",
      "Exploitation",
      "Reporting"
    ]
  },
  "gwapt": {
    "badge": "GWAPT",
    "title": "GIAC Web Application Penetration Tester",
    "display_title": "GWAPT - GIAC Web Application Penetration Tester",
    "desc": "تخصص ويب بدل اختبار الشبكات العام. اختبار ثغرات الويب وتحليل سلوك التطبيقات.",
    "org": "GIAC",
    "level": "متوسط",
    "cat": "appsec",
    "paths": [
      "offensive",
      "appsec"
    ],
    "kind": "شهادة اختبار تطبيقات ويب",
    "role": "تخصص ويب بدل اختبار الشبكات العام.",
    "req": "أساسيات الويب وفهم بروتوكول HTTP.",
    "duration": "3 - 5 أشهر",
    "priority": 41,
    "recommended_for": "تخصص ويب بدل اختبار الشبكات العام.",
    "outcome": "اختبار ثغرات الويب وتحليل سلوك التطبيقات.",
    "next_step": "بعد ذلك OSWE أو CSSLP حسب اهتمامك بالكود/SDLC.",
    "skills": [
      "Web App Pentest",
      "OWASP",
      "HTTP"
    ],
    "tags": [
      "Web App Pentest",
      "OWASP",
      "HTTP"
    ]
  },
  "gxpn": {
    "badge": "GXPN",
    "title": "GIAC Exploit Researcher and Advanced Penetration Tester",
    "display_title": "GXPN - GIAC Exploit Researcher and Advanced Penetration Tester",
    "desc": "تخصص متقدم في الاستغلال والبحث الأمني. فهم استغلال متقدم وتقنيات بحث أمني.",
    "org": "GIAC",
    "level": "محترف",
    "cat": "offensive",
    "paths": [
      "offensive"
    ],
    "kind": "شهادة هجومية متقدمة جدًا",
    "role": "تخصص متقدم في الاستغلال والبحث الأمني.",
    "req": "خبرة قوية في الاستغلال والأنظمة والبرمجة.",
    "duration": "6 - 12 شهر",
    "priority": 42,
    "recommended_for": "تخصص متقدم في الاستغلال والبحث الأمني.",
    "outcome": "فهم استغلال متقدم وتقنيات بحث أمني.",
    "next_step": "بعد ذلك تخصص exploit development أو reverse engineering.",
    "skills": [
      "Exploit Research",
      "Advanced Pentest",
      "Binary"
    ],
    "tags": [
      "Exploit Research",
      "Advanced Pentest",
      "Binary"
    ]
  },
  "cpent": {
    "badge": "CPENT",
    "title": "Certified Penetration Testing Professional",
    "display_title": "CPENT - Certified Penetration Testing Professional",
    "desc": "اختبار اختراق عملي متقدم نسبيًا. تطبيق سيناريوهات اختبار اختراق عملية ومتنوعة.",
    "org": "EC-Council",
    "level": "محترف",
    "cat": "offensive",
    "paths": [
      "offensive"
    ],
    "kind": "شهادة اختبار اختراق متقدمة",
    "role": "اختبار اختراق عملي متقدم نسبيًا.",
    "req": "خبرة عملية في الاختبار والشبكات.",
    "duration": "3 - 6 أشهر",
    "priority": 43,
    "recommended_for": "اختبار اختراق عملي متقدم نسبيًا.",
    "outcome": "تطبيق سيناريوهات اختبار اختراق عملية ومتنوعة.",
    "next_step": "قارنها مع PNPT/OSCP حسب هدفك وسوقك المستهدف.",
    "skills": [
      "Practical Pentest",
      "Advanced Labs",
      "Reporting"
    ],
    "tags": [
      "Practical Pentest",
      "Advanced Labs",
      "Reporting"
    ]
  },
  "cpts": {
    "badge": "CPTS",
    "title": "HTB Certified Penetration Testing Specialist",
    "display_title": "CPTS - HTB Certified Penetration Testing Specialist",
    "desc": "شهادة عملية تركّز على مهارات اختبار الاختراق داخل بيئات لاب متقدمة. اختبار عملي لمهارات الاستطلاع، الاستغلال، التصعيد، والتقرير.",
    "org": "Hack The Box",
    "level": "متوسط",
    "cat": "offensive",
    "paths": [
      "offensive"
    ],
    "kind": "شهادة اختبار اختراق عملية",
    "role": "شهادة عملية تركّز على مهارات اختبار الاختراق داخل بيئات لاب متقدمة.",
    "req": "أساسيات الشبكات ونظام لينكس والويب، مع معرفة بأدوات الاختبار الأمني.",
    "duration": "3 - 6 أشهر",
    "priority": 44,
    "recommended_for": "شهادة عملية تركّز على مهارات اختبار الاختراق داخل بيئات لاب متقدمة.",
    "outcome": "اختبار عملي لمهارات الاستطلاع، الاستغلال، التصعيد، والتقرير.",
    "next_step": "بعد ذلك PNPT أو OSCP حسب الهدف والسوق.",
    "skills": [
      "Practical Pentest",
      "Labs",
      "Reporting"
    ],
    "tags": [
      "Practical Pentest",
      "Labs",
      "Reporting"
    ]
  },
  "iso27001_foundation": {
    "badge": "ISO 27001 Foundation",
    "title": "ISO/IEC 27001 Foundation",
    "display_title": "ISO 27001 Foundation - ISO/IEC 27001 Foundation",
    "desc": "دخول GRC وفهم نظام إدارة أمن المعلومات. فهم مبادئ ISO 27001، ISMS، الضوابط، والمخاطر.",
    "org": "PECB / BSI / Accredited Bodies",
    "level": "مبتدئ",
    "cat": "grc",
    "paths": [
      "grc"
    ],
    "kind": "شهادة حوكمة تأسيسية",
    "role": "دخول GRC وفهم نظام إدارة أمن المعلومات.",
    "req": "أساسيات أمن سيبراني مفيدة.",
    "duration": "2 - 6 أسابيع",
    "priority": 50,
    "recommended_for": "دخول GRC وفهم نظام إدارة أمن المعلومات.",
    "outcome": "فهم مبادئ ISO 27001، ISMS، الضوابط، والمخاطر.",
    "next_step": "بعد ذلك ISO 27001 Lead Implementer أو Internal/Lead Auditor.",
    "skills": [
      "ISO 27001",
      "ISMS",
      "Controls"
    ],
    "tags": [
      "ISO 27001",
      "ISMS",
      "Controls"
    ]
  },
  "iso27001_li": {
    "badge": "ISO 27001 LI",
    "title": "ISO/IEC 27001 Lead Implementer",
    "display_title": "ISO 27001 LI - ISO/IEC 27001 Lead Implementer",
    "desc": "تعلم بناء وتطبيق ISMS داخل جهة. معرفة تطبيق نظام إدارة أمن المعلومات ومتابعة التحسين.",
    "org": "PECB / BSI / Accredited Bodies",
    "level": "متوسط",
    "cat": "grc",
    "paths": [
      "grc"
    ],
    "kind": "شهادة تطبيق حوكمة",
    "role": "تعلم بناء وتطبيق ISMS داخل جهة.",
    "req": "فهم معيار ISO 27001 ومبادئ إدارة المخاطر.",
    "duration": "2 - 4 أشهر",
    "priority": 51,
    "recommended_for": "تعلم بناء وتطبيق ISMS داخل جهة.",
    "outcome": "معرفة تطبيق نظام إدارة أمن المعلومات ومتابعة التحسين.",
    "next_step": "بعد ذلك CISM أو CRISC أو خبرة تطبيقية في مشاريع GRC.",
    "skills": [
      "ISMS Implementation",
      "Policies",
      "Risk Treatment"
    ],
    "tags": [
      "ISMS Implementation",
      "Policies",
      "Risk Treatment"
    ]
  },
  "iso27001_la": {
    "badge": "ISO 27001 LA",
    "title": "ISO/IEC 27001 Lead Auditor",
    "display_title": "ISO 27001 LA - ISO/IEC 27001 Lead Auditor",
    "desc": "مسار التدقيق والامتثال ومراجعة الضوابط. تخطيط وتنفيذ تدقيق على نظام إدارة أمن المعلومات.",
    "org": "PECB / BSI / Accredited Bodies",
    "level": "متوسط",
    "cat": "grc",
    "paths": [
      "grc"
    ],
    "kind": "شهادة تدقيق",
    "role": "مسار التدقيق والامتثال ومراجعة الضوابط.",
    "req": "فهم معيار ISO 27001 وأساسيات التدقيق.",
    "duration": "2 - 4 أشهر",
    "priority": 52,
    "recommended_for": "مسار التدقيق والامتثال ومراجعة الضوابط.",
    "outcome": "تخطيط وتنفيذ تدقيق على نظام إدارة أمن المعلومات.",
    "next_step": "بعد ذلك CISA أو CISM حسب المسار.",
    "skills": [
      "Audit",
      "Compliance",
      "ISMS"
    ],
    "tags": [
      "Audit",
      "Compliance",
      "ISMS"
    ]
  },
  "cisa": {
    "badge": "CISA",
    "title": "Certified Information Systems Auditor",
    "display_title": "CISA - Certified Information Systems Auditor",
    "desc": "استهداف تدقيق أنظمة المعلومات والضوابط والامتثال. فهم تدقيق الأنظمة، الضوابط، إدارة المخاطر، واستمرارية الأعمال.",
    "org": "ISACA",
    "level": "متوسط",
    "cat": "grc",
    "paths": [
      "grc"
    ],
    "kind": "شهادة تدقيق أنظمة",
    "role": "استهداف تدقيق أنظمة المعلومات والضوابط والامتثال.",
    "req": "خبرة أو معرفة جيدة بالحوكمة والتدقيق وتقنية المعلومات.",
    "duration": "4 - 6 أشهر",
    "priority": 53,
    "recommended_for": "استهداف تدقيق أنظمة المعلومات والضوابط والامتثال.",
    "outcome": "فهم تدقيق الأنظمة، الضوابط، إدارة المخاطر، واستمرارية الأعمال.",
    "next_step": "بعد ذلك CISM للإدارة أو CRISC للمخاطر.",
    "skills": [
      "IT Audit",
      "Controls",
      "Assurance"
    ],
    "tags": [
      "IT Audit",
      "Controls",
      "Assurance"
    ]
  },
  "crisc": {
    "badge": "CRISC",
    "title": "Certified in Risk and Information Systems Control",
    "display_title": "CRISC - Certified in Risk and Information Systems Control",
    "desc": "التخصص في إدارة مخاطر تقنية المعلومات والضوابط. تحديد المخاطر، تقييمها، الاستجابة لها، وتصميم الضوابط.",
    "org": "ISACA",
    "level": "محترف",
    "cat": "grc",
    "paths": [
      "grc",
      "management"
    ],
    "kind": "شهادة مخاطر",
    "role": "التخصص في إدارة مخاطر تقنية المعلومات والضوابط.",
    "req": "خبرة في إدارة المخاطر أو الحوكمة والمخاطر والالتزام مفيدة لهذه المرحلة.",
    "duration": "4 - 6 أشهر",
    "priority": 54,
    "recommended_for": "التخصص في إدارة مخاطر تقنية المعلومات والضوابط.",
    "outcome": "تحديد المخاطر، تقييمها، الاستجابة لها، وتصميم الضوابط.",
    "next_step": "بعد ذلك CISM أو CISSP حسب دورك.",
    "skills": [
      "Risk Management",
      "Controls",
      "Governance"
    ],
    "tags": [
      "Risk Management",
      "Controls",
      "Governance"
    ]
  },
  "cism": {
    "badge": "CISM",
    "title": "Certified Information Security Manager",
    "display_title": "CISM - Certified Information Security Manager",
    "desc": "الخبرة أو التوجه نحو دور إداري في برنامج الأمن السيبراني. فهم حوكمة الأمن، إدارة البرنامج، المخاطر، والحوادث من منظور إداري.",
    "org": "ISACA",
    "level": "محترف",
    "cat": "management",
    "paths": [
      "grc",
      "management"
    ],
    "kind": "شهادة إدارة أمن معلومات",
    "role": "الخبرة أو التوجه نحو دور إداري في برنامج الأمن السيبراني.",
    "req": "خبرة عملية في أمن المعلومات والإدارة.",
    "duration": "4 - 6 أشهر",
    "priority": 55,
    "recommended_for": "الخبرة أو التوجه نحو دور إداري في برنامج الأمن السيبراني.",
    "outcome": "فهم حوكمة الأمن، إدارة البرنامج، المخاطر، والحوادث من منظور إداري.",
    "next_step": "بعد ذلك CISSP أو قيادة برنامج أمني داخل جهة.",
    "skills": [
      "Security Management",
      "Governance",
      "Program Management"
    ],
    "tags": [
      "Security Management",
      "Governance",
      "Program Management"
    ]
  },
  "cissp": {
    "badge": "CISSP",
    "title": "Certified Information Systems Security Professional",
    "display_title": "CISSP - Certified Information Systems Security Professional",
    "desc": "هدف متوسط/طويل لإثبات معرفة أمنية شاملة بعد اكتساب الخبرة. فهم عميق لمجالات الأمن، المعمارية، المخاطر، الهوية، العمليات، والتطوير الآمن.",
    "org": "ISC2",
    "level": "محترف",
    "cat": "management",
    "paths": [
      "grc",
      "management",
      "defensive"
    ],
    "kind": "شهادة احترافية شاملة",
    "role": "هدف متوسط/طويل لإثبات معرفة أمنية شاملة بعد اكتساب الخبرة.",
    "req": "خبرة عملية واسعة في الأمن السيبراني.",
    "duration": "6 - 12 شهر",
    "priority": 56,
    "recommended_for": "هدف متوسط/طويل لإثبات معرفة أمنية شاملة بعد اكتساب الخبرة.",
    "outcome": "فهم عميق لمجالات الأمن، المعمارية، المخاطر، الهوية، العمليات، والتطوير الآمن.",
    "next_step": "لا تجعلها أول شهادة بعد الدبلوم؛ ابنِ أساس وخبرة ثم ارجع لها.",
    "skills": [
      "Security Architecture",
      "Risk",
      "Operations",
      "Leadership"
    ],
    "tags": [
      "Security Architecture",
      "Risk",
      "Operations"
    ]
  },
  "cgeit": {
    "badge": "CGEIT",
    "title": "Certified in the Governance of Enterprise IT",
    "display_title": "CGEIT - Certified in the Governance of Enterprise IT",
    "desc": "مسار قيادي في حوكمة تقنية المعلومات على مستوى المؤسسة. فهم حوكمة تقنية المعلومات، القيمة، المخاطر، والموارد.",
    "org": "ISACA",
    "level": "محترف",
    "cat": "management",
    "paths": [
      "grc",
      "management"
    ],
    "kind": "شهادة حوكمة تقنية",
    "role": "مسار قيادي في حوكمة تقنية المعلومات على مستوى المؤسسة.",
    "req": "خبرة حوكمة وإدارة تقنية.",
    "duration": "4 - 8 أشهر",
    "priority": 57,
    "recommended_for": "مسار قيادي في حوكمة تقنية المعلومات على مستوى المؤسسة.",
    "outcome": "فهم حوكمة تقنية المعلومات، القيمة، المخاطر، والموارد.",
    "next_step": "بعد ذلك تركيز على القيادة أو الاستراتيجية أو CISM/CISSP.",
    "skills": [
      "IT Governance",
      "Strategy",
      "Value Delivery"
    ],
    "tags": [
      "IT Governance",
      "Strategy",
      "Value Delivery"
    ]
  },
  "cdpse": {
    "badge": "CDPSE",
    "title": "Certified Data Privacy Solutions Engineer",
    "display_title": "CDPSE - Certified Data Privacy Solutions Engineer",
    "desc": "الخصوصية، حماية البيانات، والامتثال التقني. فهم هندسة حلول الخصوصية، دورة البيانات، والضوابط.",
    "org": "ISACA",
    "level": "متوسط",
    "cat": "grc",
    "paths": [
      "grc",
      "cloud"
    ],
    "kind": "شهادة خصوصية بيانات",
    "role": "الخصوصية، حماية البيانات، والامتثال التقني.",
    "req": "أساسيات أمن وخصوصية وقوانين بيانات.",
    "duration": "3 - 5 أشهر",
    "priority": 58,
    "recommended_for": "الخصوصية، حماية البيانات، والامتثال التقني.",
    "outcome": "فهم هندسة حلول الخصوصية، دورة البيانات، والضوابط.",
    "next_step": "بعد ذلك تخصص في Privacy/GRC أو Cloud Security.",
    "skills": [
      "Privacy",
      "Data Protection",
      "Compliance"
    ],
    "tags": [
      "Privacy",
      "Data Protection",
      "Compliance"
    ]
  },
  "ccsp": {
    "badge": "CCSP",
    "title": "Certified Cloud Security Professional",
    "display_title": "CCSP - Certified Cloud Security Professional",
    "desc": "خبرة أمنية ويريد إثبات فهم أمني سحابي شامل. فهم معمارية السحابة، البيانات، المنصات، العمليات، والقانون/المخاطر.",
    "org": "ISC2",
    "level": "محترف",
    "cat": "cloud",
    "paths": [
      "cloud",
      "management"
    ],
    "kind": "شهادة أمن سحابي احترافية",
    "role": "خبرة أمنية ويريد إثبات فهم أمني سحابي شامل.",
    "req": "خبرة أمنية وسحابية مناسبة.",
    "duration": "5 - 8 أشهر",
    "priority": 59,
    "recommended_for": "خبرة أمنية ويريد إثبات فهم أمني سحابي شامل.",
    "outcome": "فهم معمارية السحابة، البيانات، المنصات، العمليات، والقانون/المخاطر.",
    "next_step": "بعد ذلك SC-100 أو AWS Security أو دور Cloud Security Architect.",
    "skills": [
      "Cloud Security",
      "Architecture",
      "Compliance"
    ],
    "tags": [
      "Cloud Security",
      "Architecture",
      "Compliance"
    ]
  },
  "cgrc": {
    "badge": "CGRC",
    "title": "Certified in Governance, Risk and Compliance",
    "display_title": "CGRC - Certified in Governance, Risk and Compliance",
    "desc": "شهادة مركزة على الحوكمة والمخاطر والامتثال من ISC2. ترتيب مفاهيم إدارة المخاطر، التفويض، المراقبة، والامتثال.",
    "org": "ISC2",
    "level": "متوسط",
    "cat": "grc",
    "paths": [
      "grc",
      "management"
    ],
    "kind": "شهادة GRC",
    "role": "شهادة مركزة على الحوكمة والمخاطر والامتثال من ISC2.",
    "req": "أساسيات أمن ومخاطر وامتثال.",
    "duration": "3 - 5 أشهر",
    "priority": 60,
    "recommended_for": "شهادة مركزة على الحوكمة والمخاطر والامتثال من ISC2.",
    "outcome": "ترتيب مفاهيم إدارة المخاطر، التفويض، المراقبة، والامتثال.",
    "next_step": "بعد ذلك CISA أو CRISC أو CISM حسب الدور.",
    "skills": [
      "GRC",
      "Risk Management",
      "Compliance"
    ],
    "tags": [
      "GRC",
      "Risk Management",
      "Compliance"
    ]
  },
  "securityx": {
    "badge": "SecurityX",
    "title": "CompTIA SecurityX",
    "display_title": "SecurityX - CompTIA SecurityX",
    "desc": "إثبات مهارات متقدمة في المعمارية الأمنية والعمليات على مستوى أعلى. تعزيز التفكير المعماري، إدارة المخاطر، الحلول الأمنية، والقيادة التقنية.",
    "org": "CompTIA",
    "level": "محترف",
    "cat": "management",
    "paths": [
      "management",
      "defensive",
      "cloud"
    ],
    "kind": "شهادة أمن متقدمة",
    "role": "إثبات مهارات متقدمة في المعمارية الأمنية والعمليات على مستوى أعلى.",
    "req": "خبرة أمنية جيدة، وغالبًا بعد Security+ أو CySA+، أو خبرة عملية مكافئة.",
    "duration": "4 - 8 أشهر",
    "priority": 61,
    "recommended_for": "إثبات مهارات متقدمة في المعمارية الأمنية والعمليات على مستوى أعلى.",
    "outcome": "تعزيز التفكير المعماري، إدارة المخاطر، الحلول الأمنية، والقيادة التقنية.",
    "next_step": "بعد ذلك CISSP أو CCSP أو أدوار Security Architect.",
    "skills": [
      "Security Architecture",
      "Enterprise Security",
      "Risk"
    ],
    "tags": [
      "Security Architecture",
      "Enterprise Security",
      "Risk"
    ]
  },
  "sc401": {
    "badge": "SC-401",
    "title": "Microsoft Certified: مسؤول أمن المعلومات المشارك",
    "display_title": "SC-401 - مسؤول أمن المعلومات من Microsoft",
    "desc": "شهادة متخصصة في حماية المعلومات وإدارة مخاطر البيانات ومنع تسربها داخل حلول Microsoft.",
    "org": "Microsoft",
    "level": "متوسط",
    "cat": "grc",
    "paths": [
      "grc",
      "cloud"
    ],
    "kind": "شهادة حماية معلومات وامتثال",
    "role": "لمن يعمل على حماية البيانات وتطبيق سياسات منع التسرب وإدارة مخاطر المعلومات.",
    "req": "فهم أساسيات Microsoft 365 وإدارة الهوية والالتزام وحماية البيانات.",
    "duration": "2 - 4 أشهر",
    "priority": 62,
    "recommended_for": "لمهتم بحماية البيانات والامتثال وإدارة مخاطر المعلومات في بيئات Microsoft.",
    "outcome": "تطبيق تصنيف المعلومات وسياسات الحماية ومنع التسرب والتحقيق في مخاطر البيانات.",
    "next_step": "بعد ذلك يمكن التوسع إلى SC-100 أو CISM أو تخصصات الحوكمة والخصوصية.",
    "skills": [
      "Information Protection",
      "Data Loss Prevention",
      "Compliance",
      "Insider Risk"
    ],
    "tags": [
      "Information Protection",
      "Compliance",
      "Data Security"
    ]
  },
  "sc500": {
    "badge": "SC-500",
    "title": "Microsoft Certified: Cloud and AI Security Engineer Associate",
    "display_title": "SC-500 - مهندس أمن السحابة والذكاء الاصطناعي من Microsoft",
    "desc": "شهادة متخصصة في تصميم وتنفيذ الحماية للبيئات السحابية وأحمال الذكاء الاصطناعي والهوية والبيانات والشبكات.",
    "org": "Microsoft",
    "level": "متوسط",
    "cat": "cloud",
    "paths": [
      "cloud",
      "defensive"
    ],
    "kind": "شهادة أمن سحابة متخصصة",
    "role": "لمهندس الأمن الذي يحمي البيئات السحابية وحلول الذكاء الاصطناعي من Microsoft.",
    "req": "خبرة عملية في منصة مايكروسوفت أزور، وأساسيات الهوية والشبكات والمراقبة والحماية.",
    "duration": "3 - 5 أشهر",
    "priority": 70,
    "recommended_for": "لمن يملك أساسًا في Azure ويريد التخصص في أمن السحابة والذكاء الاصطناعي.",
    "outcome": "تأمين الهوية والبيانات والشبكات والخدمات السحابية وأحمال الذكاء الاصطناعي.",
    "next_step": "بعد ذلك يمكن التوسع إلى SC-100 أو CCSP أو تخصص سحابي آخر حسب الدور.",
    "skills": [
      "Cloud Security",
      "Identity",
      "Data Protection",
      "AI Security"
    ],
    "tags": [
      "Cloud Security",
      "Identity",
      "AI Security"
    ]
  },
  "aws_security_specialty": {
    "badge": "AWS Security Specialty",
    "title": "AWS Certified Security - Specialty",
    "display_title": "AWS Security Specialty - AWS Certified Security - Specialty",
    "desc": "خبرة AWS ويريد تخصص أمني سحابي. تأمين البيانات، IAM، المراقبة، الاستجابة، الشبكات، والتشفير في AWS.",
    "org": "AWS",
    "level": "محترف",
    "cat": "cloud",
    "paths": [
      "cloud",
      "defensive"
    ],
    "kind": "شهادة أمن AWS",
    "role": "خبرة AWS ويريد تخصص أمني سحابي.",
    "req": "خبرة عملية في خدمات أمازون السحابية (AWS) مع أساسيات أمنية جيدة.",
    "duration": "4 - 7 أشهر",
    "priority": 71,
    "recommended_for": "خبرة AWS ويريد تخصص أمني سحابي.",
    "outcome": "تأمين البيانات، IAM، المراقبة، الاستجابة، الشبكات، والتشفير في AWS.",
    "next_step": "بعد ذلك CCSP أو تخصص Cloud Security Architecture.",
    "skills": [
      "AWS Security",
      "IAM",
      "Encryption",
      "Monitoring"
    ],
    "tags": [
      "AWS Security",
      "IAM",
      "Encryption"
    ]
  },
  "gcp_pcse": {
    "badge": "PCSE",
    "title": "Google Professional Cloud Security Engineer",
    "display_title": "PCSE - Google Professional Cloud Security Engineer",
    "desc": "العمل أو التخصص في تأمين بيئات Google Cloud. تصميم وتنفيذ بنية آمنة، IAM، حماية بيانات، مراقبة، وسلاسل توريد برمجية.",
    "org": "Google Cloud",
    "level": "محترف",
    "cat": "cloud",
    "paths": [
      "cloud"
    ],
    "kind": "شهادة أمن Google Cloud",
    "role": "العمل أو التخصص في تأمين بيئات Google Cloud.",
    "req": "خبرة في منصة جوجل السحابية (GCP) وأساسيات أمن السحابة.",
    "duration": "4 - 7 أشهر",
    "priority": 72,
    "recommended_for": "العمل أو التخصص في تأمين بيئات Google Cloud.",
    "outcome": "تصميم وتنفيذ بنية آمنة، IAM، حماية بيانات، مراقبة، وسلاسل توريد برمجية.",
    "next_step": "بعد ذلك CCSP أو تخصص Cloud Security Architecture.",
    "skills": [
      "GCP Security",
      "IAM",
      "Data Protection"
    ],
    "tags": [
      "GCP Security",
      "IAM",
      "Data Protection"
    ]
  },
  "sc100": {
    "badge": "SC-100",
    "title": "Microsoft Cybersecurity Architect Expert",
    "display_title": "SC-100 - Microsoft Cybersecurity Architect Expert",
    "desc": "خبرة ويريد دور Cybersecurity Architect في بيئات Microsoft/hybrid. تصميم استراتيجية أمنية، Zero Trust، GRC، وعمارة حماية شاملة.",
    "org": "Microsoft",
    "level": "محترف",
    "cat": "management",
    "paths": [
      "cloud",
      "management",
      "grc"
    ],
    "kind": "شهادة معمارية أمنية",
    "role": "خبرة ويريد دور Cybersecurity Architect في بيئات Microsoft/hybrid.",
    "req": "خبرة أمنية ومعرفة بمنظومة أمان مايكروسوفت.",
    "duration": "4 - 8 أشهر",
    "priority": 73,
    "recommended_for": "خبرة ويريد دور Cybersecurity Architect في بيئات Microsoft/hybrid.",
    "outcome": "تصميم استراتيجية أمنية، Zero Trust، GRC، وعمارة حماية شاملة.",
    "next_step": "بعد ذلك قيادة معمارية أمنية أو CISSP/CCSP حسب الهدف.",
    "skills": [
      "Security Architecture",
      "Zero Trust",
      "Strategy"
    ],
    "tags": [
      "Security Architecture",
      "Zero Trust",
      "Strategy"
    ]
  },
  "sc300": {
    "badge": "SC-300",
    "title": "Microsoft: مسؤول الهوية والوصول",
    "display_title": "SC-300 - Microsoft: مسؤول الهوية والوصول",
    "desc": "التخصص في IAM وMicrosoft Entra ID. إدارة الهوية، الوصول، الحوكمة، والحماية المرتبطة بالحسابات.",
    "org": "Microsoft",
    "level": "متوسط",
    "cat": "cloud",
    "paths": [
      "cloud",
      "defensive"
    ],
    "kind": "شهادة هوية ووصول",
    "role": "التخصص في IAM وMicrosoft Entra ID.",
    "req": "أساسيات خدمات مايكروسوفت والحوسبة السحابية.",
    "duration": "2 - 4 أشهر",
    "priority": 74,
    "recommended_for": "التخصص في IAM وMicrosoft Entra ID.",
    "outcome": "إدارة الهوية، الوصول، الحوكمة، والحماية المرتبطة بالحسابات.",
    "next_step": "بعد ذلك SC-500 أو SC-200 أو متخصص أمن الهوية والصلاحيات.",
    "skills": [
      "Identity",
      "Access Management",
      "Entra ID"
    ],
    "tags": [
      "Identity",
      "Access Management",
      "Entra ID"
    ]
  },
  "ccsk": {
    "badge": "CCSK",
    "title": "Certificate of Cloud Security Knowledge",
    "display_title": "CCSK - Certificate of Cloud Security Knowledge",
    "desc": "فهم vendor-neutral لأمن السحابة قبل شهادة متخصصة. فهم مبادئ أمن السحابة، المخاطر، الحوكمة، والضوابط.",
    "org": "Cloud Security Alliance",
    "level": "متوسط",
    "cat": "cloud",
    "paths": [
      "cloud",
      "grc"
    ],
    "kind": "شهادة معرفة أمن سحابي",
    "role": "فهم vendor-neutral لأمن السحابة قبل شهادة متخصصة.",
    "req": "أساسيات أمن وسحابة.",
    "duration": "1 - 3 أشهر",
    "priority": 75,
    "recommended_for": "فهم vendor-neutral لأمن السحابة قبل شهادة متخصصة.",
    "outcome": "فهم مبادئ أمن السحابة، المخاطر، الحوكمة، والضوابط.",
    "next_step": "بعد ذلك CCSP أو SC-500/AWS Security حسب المنصة.",
    "skills": [
      "Cloud Concepts",
      "Cloud Governance",
      "Risk"
    ],
    "tags": [
      "Cloud Concepts",
      "Cloud Governance",
      "Risk"
    ]
  },
  "cks": {
    "badge": "CKS",
    "title": "Certified Kubernetes Security Specialist",
    "display_title": "CKS - Certified Kubernetes Security Specialist",
    "desc": "العمل في الحاويات وKubernetes ويريد تأمينها. تأمين الكلاستر، workloads، supply chain، والمراقبة.",
    "org": "CNCF",
    "level": "محترف",
    "cat": "cloud",
    "paths": [
      "cloud",
      "appsec"
    ],
    "kind": "شهادة أمن Kubernetes",
    "role": "العمل في الحاويات وKubernetes ويريد تأمينها.",
    "req": "خبرة في منصة كوبيرنيتس، ويُفضّل مستوى قريب من شهادة CKA.",
    "duration": "3 - 6 أشهر",
    "priority": 76,
    "recommended_for": "العمل في الحاويات وKubernetes ويريد تأمينها.",
    "outcome": "تأمين الكلاستر، workloads، supply chain، والمراقبة.",
    "next_step": "بعد ذلك DevSecOps أو Cloud Security Engineering.",
    "skills": [
      "Kubernetes Security",
      "Containers",
      "Supply Chain"
    ],
    "tags": [
      "Kubernetes Security",
      "Containers",
      "Supply Chain"
    ]
  },
  "chfi": {
    "badge": "CHFI",
    "title": "Computer Hacking Forensic Investigator",
    "display_title": "CHFI - Computer Hacking Forensic Investigator",
    "desc": "مدخل منظم للتحقيقات الرقمية والأدلة. فهم إجراءات التحقيق، الأدلة، التحليل الجنائي، والتوثيق.",
    "org": "EC-Council",
    "level": "متوسط",
    "cat": "forensics",
    "paths": [
      "forensics",
      "defensive"
    ],
    "kind": "شهادة تحقيق جنائي",
    "role": "مدخل منظم للتحقيقات الرقمية والأدلة.",
    "req": "أساسيات أمن وأنظمة.",
    "duration": "2 - 4 أشهر",
    "priority": 80,
    "recommended_for": "مدخل منظم للتحقيقات الرقمية والأدلة.",
    "outcome": "فهم إجراءات التحقيق، الأدلة، التحليل الجنائي، والتوثيق.",
    "next_step": "بعد ذلك GCFE أو GCFA حسب العمق المطلوب.",
    "skills": [
      "Digital Forensics",
      "Evidence",
      "Investigation"
    ],
    "tags": [
      "Digital Forensics",
      "Evidence",
      "Investigation"
    ]
  },
  "gcfa": {
    "badge": "GCFA",
    "title": "GIAC Certified Forensic Analyst",
    "display_title": "GCFA - GIAC Certified Forensic Analyst",
    "desc": "تحليل اختراقات متقدم وForensics للحوادث. تحليل أنظمة Windows، artifacts، timeline، وتحقيقات اختراق متقدمة.",
    "org": "GIAC",
    "level": "محترف",
    "cat": "forensics",
    "paths": [
      "forensics",
      "defensive"
    ],
    "kind": "شهادة تحليل جنائي متقدمة",
    "role": "تحليل اختراقات متقدم وForensics للحوادث.",
    "req": "خبرة أنظمة وتحقيقات رقمية.",
    "duration": "4 - 7 أشهر",
    "priority": 81,
    "recommended_for": "تحليل اختراقات متقدم وForensics للحوادث.",
    "outcome": "تحليل أنظمة Windows، artifacts، timeline، وتحقيقات اختراق متقدمة.",
    "next_step": "بعد ذلك GNFA أو GREM حسب التخصص.",
    "skills": [
      "Forensics",
      "Timeline Analysis",
      "Incident Investigation"
    ],
    "tags": [
      "Forensics",
      "Timeline Analysis",
      "Incident Investigation"
    ]
  },
  "gcfe": {
    "badge": "GCFE",
    "title": "GIAC Certified Forensic Examiner",
    "display_title": "GCFE - GIAC Certified Forensic Examiner",
    "desc": "بداية في تحليل الأدلة الرقمية وأنظمة Windows. فهم artifacts، أدلة Windows، وتحليل أولي للأجهزة.",
    "org": "GIAC",
    "level": "متوسط",
    "cat": "forensics",
    "paths": [
      "forensics"
    ],
    "kind": "شهادة فحص جنائي",
    "role": "بداية في تحليل الأدلة الرقمية وأنظمة Windows.",
    "req": "أساسيات أنظمة وملفات.",
    "duration": "3 - 5 أشهر",
    "priority": 82,
    "recommended_for": "بداية في تحليل الأدلة الرقمية وأنظمة Windows.",
    "outcome": "فهم artifacts، أدلة Windows، وتحليل أولي للأجهزة.",
    "next_step": "بعد ذلك GCFA أو CHFI حسب المسار.",
    "skills": [
      "Windows Forensics",
      "Artifacts",
      "Evidence"
    ],
    "tags": [
      "Windows Forensics",
      "Artifacts",
      "Evidence"
    ]
  },
  "gnfa": {
    "badge": "GNFA",
    "title": "GIAC Network Forensic Analyst",
    "display_title": "GNFA - GIAC Network Forensic Analyst",
    "desc": "تحليل حوادث من منظور حركة الشبكة. تحليل PCAP، مؤشرات شبكية، وربط الأحداث في التحقيقات.",
    "org": "GIAC",
    "level": "محترف",
    "cat": "forensics",
    "paths": [
      "forensics",
      "defensive"
    ],
    "kind": "شهادة تحقيق شبكي",
    "role": "تحليل حوادث من منظور حركة الشبكة.",
    "req": "شبكات قوية وتحليل حزم.",
    "duration": "4 - 7 أشهر",
    "priority": 83,
    "recommended_for": "تحليل حوادث من منظور حركة الشبكة.",
    "outcome": "تحليل PCAP، مؤشرات شبكية، وربط الأحداث في التحقيقات.",
    "next_step": "بعد ذلك GCIA أو Threat Hunting متقدم.",
    "skills": [
      "Network Forensics",
      "PCAP",
      "Threat Hunting"
    ],
    "tags": [
      "Network Forensics",
      "PCAP",
      "Threat Hunting"
    ]
  },
  "grem": {
    "badge": "GREM",
    "title": "GIAC Reverse Engineering Malware",
    "display_title": "GREM - GIAC Reverse Engineering Malware",
    "desc": "التخصص في تحليل malware والهندسة العكسية. تحليل البرمجيات الخبيثة، سلوكها، مؤشرات الاختراق، والتقارير.",
    "org": "GIAC",
    "level": "محترف",
    "cat": "forensics",
    "paths": [
      "forensics",
      "defensive"
    ],
    "kind": "شهادة تحليل برمجيات خبيثة",
    "role": "التخصص في تحليل malware والهندسة العكسية.",
    "req": "أساسيات برمجة وأنظمة وتحليل ثابت/ديناميكي.",
    "duration": "5 - 9 أشهر",
    "priority": 84,
    "recommended_for": "التخصص في تحليل malware والهندسة العكسية.",
    "outcome": "تحليل البرمجيات الخبيثة، سلوكها، مؤشرات الاختراق، والتقارير.",
    "next_step": "بعد ذلك أبحاث malware أو Threat Intelligence متقدم.",
    "skills": [
      "Malware Analysis",
      "Reverse Engineering",
      "IOC"
    ],
    "tags": [
      "Malware Analysis",
      "Reverse Engineering",
      "IOC"
    ]
  },
  "csslp": {
    "badge": "CSSLP",
    "title": "Certified Secure Software Lifecycle Professional",
    "display_title": "CSSLP - Certified Secure Software Lifecycle Professional",
    "desc": "أمن البرمجيات وSDLC وDevSecOps من منظور مهني. فهم أمن دورة حياة تطوير البرمجيات، المتطلبات، التصميم، الاختبار، والنشر الآمن.",
    "org": "ISC2",
    "level": "محترف",
    "cat": "appsec",
    "paths": [
      "appsec",
      "management"
    ],
    "kind": "شهادة أمن تطوير البرمجيات",
    "role": "أمن البرمجيات وSDLC وDevSecOps من منظور مهني.",
    "req": "خبرة تطوير أو أمن تطبيقات مفيدة.",
    "duration": "4 - 7 أشهر",
    "priority": 90,
    "recommended_for": "أمن البرمجيات وSDLC وDevSecOps من منظور مهني.",
    "outcome": "فهم أمن دورة حياة تطوير البرمجيات، المتطلبات، التصميم، الاختبار، والنشر الآمن.",
    "next_step": "بعد ذلك OSWE/GWAPT للجانب العملي أو DevSecOps تخصصي.",
    "skills": [
      "Secure SDLC",
      "DevSecOps",
      "AppSec"
    ],
    "tags": [
      "Secure SDLC",
      "DevSecOps",
      "AppSec"
    ]
  },
  "gweb": {
    "badge": "GWEB",
    "title": "GIAC Certified Web Application Defender",
    "display_title": "GWEB - GIAC Certified Web Application Defender",
    "desc": "تأمين تطبيقات الويب من الجانب الدفاعي. فهم حماية تطبيقات الويب، الضوابط، والممارسات الدفاعية.",
    "org": "GIAC",
    "level": "متوسط",
    "cat": "appsec",
    "paths": [
      "appsec",
      "defensive"
    ],
    "kind": "شهادة دفاع تطبيقات ويب",
    "role": "تأمين تطبيقات الويب من الجانب الدفاعي.",
    "req": "أساسيات ويب وأمن تطبيقات.",
    "duration": "3 - 5 أشهر",
    "priority": 91,
    "recommended_for": "تأمين تطبيقات الويب من الجانب الدفاعي.",
    "outcome": "فهم حماية تطبيقات الويب، الضوابط، والممارسات الدفاعية.",
    "next_step": "بعد ذلك CSSLP أو GWAPT/OSWA حسب رغبتك دفاع/اختبار.",
    "skills": [
      "Web Defense",
      "Secure Coding",
      "OWASP"
    ],
    "tags": [
      "Web Defense",
      "Secure Coding",
      "OWASP"
    ]
  },
  "devsecops_gf": {
    "badge": "GCSA",
    "title": "GIAC Cloud Security Automation",
    "display_title": "GCSA - GIAC Cloud Security Automation",
    "desc": "الاهتمام بـ DevSecOps والأتمتة الأمنية في السحابة. أتمتة الضوابط، مراقبة السحابة، وتحسين الأمن عبر pipelines.",
    "org": "GIAC",
    "level": "محترف",
    "cat": "appsec",
    "paths": [
      "appsec",
      "cloud"
    ],
    "kind": "شهادة أتمتة أمن سحابي",
    "role": "الاهتمام بـ DevSecOps والأتمتة الأمنية في السحابة.",
    "req": "خبرة في الحوسبة السحابية وعمليات التطوير والتشغيل، مع أساسيات أمنية جيدة.",
    "duration": "4 - 7 أشهر",
    "priority": 92,
    "recommended_for": "الاهتمام بـ DevSecOps والأتمتة الأمنية في السحابة.",
    "outcome": "أتمتة الضوابط، مراقبة السحابة، وتحسين الأمن عبر pipelines.",
    "next_step": "بعد ذلك CKS أو Cloud Security Architecture.",
    "skills": [
      "DevSecOps",
      "Automation",
      "Cloud Controls"
    ],
    "tags": [
      "DevSecOps",
      "Automation",
      "Cloud Controls"
    ]
  },
  "gicsp": {
    "badge": "GICSP",
    "title": "Global Industrial Cyber Security Professional",
    "display_title": "GICSP - Global Industrial Cyber Security Professional",
    "desc": "دخول أمن الأنظمة الصناعية والبنية الحرجة. فهم أمن ICS/OT، المخاطر، الشبكات الصناعية، والضوابط.",
    "org": "GIAC",
    "level": "متوسط",
    "cat": "ot",
    "paths": [
      "ot",
      "defensive"
    ],
    "kind": "شهادة أمن صناعي",
    "role": "دخول أمن الأنظمة الصناعية والبنية الحرجة.",
    "req": "أساسيات الشبكات والأمن، ومعرفة بالأنظمة التشغيلية والصناعية مفيدة.",
    "duration": "3 - 6 أشهر",
    "priority": 95,
    "recommended_for": "دخول أمن الأنظمة الصناعية والبنية الحرجة.",
    "outcome": "فهم أمن ICS/OT، المخاطر، الشبكات الصناعية، والضوابط.",
    "next_step": "بعد ذلك GRID أو تخصص OT Incident Response.",
    "skills": [
      "ICS Security",
      "OT Networks",
      "Industrial Risk"
    ],
    "tags": [
      "ICS Security",
      "OT Networks",
      "Industrial Risk"
    ]
  },
  "grid": {
    "badge": "GRID",
    "title": "GIAC Response and Industrial Defense",
    "display_title": "GRID - GIAC Response and Industrial Defense",
    "desc": "للمتخصصين في الدفاع والاستجابة داخل بيئات صناعية. تحليل حوادث OT، الدفاع، والاستجابة في بيئات التحكم.",
    "org": "GIAC",
    "level": "محترف",
    "cat": "ot",
    "paths": [
      "ot",
      "defensive",
      "forensics"
    ],
    "kind": "شهادة دفاع واستجابة OT",
    "role": "للمتخصصين في الدفاع والاستجابة داخل بيئات صناعية.",
    "req": "خبرة في الأمن الصناعي أو شبكات الأنظمة التشغيلية.",
    "duration": "4 - 8 أشهر",
    "priority": 96,
    "recommended_for": "للمتخصصين في الدفاع والاستجابة داخل بيئات صناعية.",
    "outcome": "تحليل حوادث OT، الدفاع، والاستجابة في بيئات التحكم.",
    "next_step": "بعد ذلك قيادة برنامج أمن OT أو تحقيقات صناعية متقدمة.",
    "skills": [
      "OT Defense",
      "Industrial IR",
      "Detection"
    ],
    "tags": [
      "OT Defense",
      "Industrial IR",
      "Detection"
    ]
  }
};
const trainingProviders = [
  {
    "id": "cls_egypt",
    "name": "CLS Learning Solutions مصر",
    "kind": "مركز تدريب معتمد في مصر",
    "scope": "local",
    "countries": [
      "egypt"
    ],
    "regions": [
      "all"
    ],
    "modes": [
      "online",
      "in_person"
    ],
    "cost_levels": [
      "paid",
      "varies"
    ],
    "cert_ids": [
      "ceh",
      "ec_csa",
      "chfi",
      "cpent",
      "cisa",
      "cism",
      "crisc",
      "ccsk",
      "oscp"
    ],
    "orgs": [
      "EC-Council",
      "ISACA",
      "Cloud Security Alliance"
    ],
    "paths": [
      "foundation",
      "defensive",
      "offensive",
      "grc",
      "cloud",
      "forensics",
      "management"
    ],
    "summary": "جهة تدريب مصرية تعلن اعتمادها كشريك EC-Council وشراكات تقنية متعددة، ولديها برامج سيبرانية متنوعة.",
    "availability_note": "تحقق من اعتماد الدورة المحددة وإصدارها وما إذا كان الاختبار مشمولًا في الرسوم.",
    "action_url": "https://clslearn.com/offer/cyber-security/",
    "source_url": "https://clslearn.com/vendors/ec-council/",
    "source_label": "الموقع الرسمي لـ CLS Learning Solutions",
    "active": true,
    "city": "Other"
  },
  {
    "id": "cei_iraq",
    "name": "Continuing Education Institute العراق",
    "kind": "شريك تدريب معتمد من EC-Council في العراق",
    "scope": "local",
    "countries": [
      "iraq"
    ],
    "regions": [
      "all"
    ],
    "modes": [
      "in_person"
    ],
    "cost_levels": [
      "varies"
    ],
    "cert_ids": [],
    "orgs": [],
    "paths": [
      "foundation",
      "defensive"
    ],
    "summary": "معهد عراقي وصفه EC-Council بأنه شريك تدريب معتمد ضمن مبادرة تدريب وتأهيل سيبراني.",
    "availability_note": "المصدر يؤكد الشراكة التدريبية، لكن يجب التحقق من البرامج المفتوحة حاليًا قبل التسجيل.",
    "action_url": "https://www.eccouncil.org/ec-council-in-news/continuing-education-institute-iraq-partners-with-ec-council-to-provide-cct-scholarship-program-worth-3-5-million/",
    "source_url": "https://www.eccouncil.org/ec-council-in-news/continuing-education-institute-iraq-partners-with-ec-council-to-provide-cct-scholarship-program-worth-3-5-million/",
    "source_label": "EC-Council",
    "active": true,
    "city": "Other"
  },
  {
    "id": "knowledge_circle_jordan",
    "name": "Knowledge Circle Academy الأردن",
    "kind": "أكاديمية تدريب وتطوير مهني في الأردن",
    "scope": "local",
    "countries": [
      "jordan"
    ],
    "regions": [
      "all"
    ],
    "modes": [
      "online",
      "in_person"
    ],
    "cost_levels": [
      "paid",
      "varies"
    ],
    "cert_ids": [],
    "orgs": [],
    "paths": [
      "foundation",
      "defensive",
      "offensive",
      "grc",
      "management"
    ],
    "summary": "أكاديمية أردنية لديها شراكة معلنة مع EC-Council University لتوسيع برامج تعليم الأمن السيبراني في الأردن والمنطقة.",
    "availability_note": "الشراكة تشمل برامج تعليمية ومهنية؛ تحقق من البرنامج المتاح حاليًا قبل التسجيل.",
    "action_url": "https://www.eccu.edu/blog/ec-council-university-partners-with-knowledge-circle-academy-to-expand-cybersecurity-education-in-jordan/",
    "source_url": "https://www.eccu.edu/blog/ec-council-university-partners-with-knowledge-circle-academy-to-expand-cybersecurity-education-in-jordan/",
    "source_label": "EC-Council University",
    "active": true,
    "city": "Other"
  },
  {
    "id": "muscat_training_oman",
    "name": "Muscat Training Institute",
    "kind": "مركز تدريب معتمد من EC-Council في عُمان",
    "scope": "local",
    "countries": [
      "oman"
    ],
    "regions": [
      "all"
    ],
    "modes": [
      "in_person"
    ],
    "cost_levels": [
      "paid",
      "varies"
    ],
    "cert_ids": [
      "ceh"
    ],
    "orgs": [],
    "paths": [
      "foundation",
      "defensive",
      "offensive",
      "forensics"
    ],
    "summary": "مركز تدريب في مسقط معتمد من EC-Council، وتؤكد EC-Council شراكته في برامج منها CEH وبرامج تأسيسية وشبكية وسحابية.",
    "availability_note": "تحقق من قائمة الدورات المفتوحة حاليًا والإصدارات المتاحة.",
    "action_url": "https://muscattraininginstitute.eccouncil.org/",
    "source_url": "https://muscattraininginstitute.eccouncil.org/",
    "source_label": "صفحة EC-Council الخاصة بمعهد مسقط للتدريب",
    "active": true,
    "city": "Other"
  },
  {
    "id": "redteam_uae",
    "name": "RedTeam Hacker Academy الإمارات",
    "kind": "أكاديمية تدريب أمن سيبراني في الإمارات",
    "scope": "local",
    "countries": [
      "uae"
    ],
    "regions": [
      "all"
    ],
    "modes": [
      "online",
      "in_person"
    ],
    "cost_levels": [
      "paid",
      "varies"
    ],
    "cert_ids": [],
    "orgs": [],
    "paths": [
      "foundation",
      "defensive",
      "offensive",
      "grc",
      "forensics"
    ],
    "summary": "أكاديمية تدريب في الإمارات تقدم برامج عملية في الأمن السيبراني والاختبار الأمني والتحقيق الرقمي؛ ويُتحقق من اعتماد كل برنامج وشهادته من الصفحة الرسمية قبل التسجيل.",
    "availability_note": "توفر الشهادات والدورات يتغير حسب الجدول؛ راجع صفحة البرنامج قبل التسجيل.",
    "action_url": "https://redteamacademy.ae/",
    "source_url": "https://redteamacademy.ae/about-us/",
    "source_label": "الموقع الرسمي لـ RedTeam Hacker Academy",
    "active": true,
    "city": "Other"
  },
  {
    "id": "mashreq_cisco_sudan",
    "name": "أكاديمية Cisco بجامعة المشرق",
    "kind": "أكاديمية Cisco Networking Academy في السودان",
    "scope": "local",
    "countries": [
      "sudan"
    ],
    "regions": [
      "all"
    ],
    "modes": [
      "online",
      "in_person"
    ],
    "cost_levels": [
      "varies"
    ],
    "cert_ids": [
      "ccna"
    ],
    "orgs": [],
    "paths": [
      "foundation",
      "defensive"
    ],
    "summary": "جامعة المشرق تعلن اعتماد أكاديمية Cisco Networking Academy وتقدم مسار CCNA ومقررات الشبكات والأمن.",
    "availability_note": "تحقق من مواعيد الفصول وإتاحة التسجيل لغير طلبة الجامعة.",
    "action_url": "https://mashreq.edu.sd/cisco.php",
    "source_url": "https://mashreq.edu.sd/cisco.php",
    "source_label": "الموقع الرسمي لجامعة المشرق",
    "active": true,
    "city": "Other"
  },
  {
    "id": "spu_cisco_iraq",
    "name": "أكاديمية Cisco في جامعة السليمانية التقنية",
    "kind": "Cisco Networking Academy في العراق",
    "scope": "local",
    "countries": [
      "iraq"
    ],
    "regions": [
      "all"
    ],
    "modes": [
      "in_person"
    ],
    "cost_levels": [
      "varies"
    ],
    "cert_ids": [
      "ccna"
    ],
    "orgs": [],
    "paths": [
      "foundation",
      "defensive"
    ],
    "summary": "أكاديمية Cisco في جامعة السليمانية التقنية مزودة بمختبرات CCNA وCCNP والأمن السيبراني وموجهة للطلبة والشباب والعاملين.",
    "availability_note": "تحقق من دورات القبول الحالية والفئات المستهدفة قبل التسجيل.",
    "action_url": "https://spu.edu.iq/en/centers/cisco-network-academy-2/",
    "source_url": "https://spu.edu.iq/en/centers/cisco-network-academy-2/",
    "source_label": "الموقع الرسمي لجامعة السليمانية التقنية",
    "active": true,
    "city": "Other"
  },
  {
    "id": "aau_jordan",
    "name": "أكاديمية EC-Council في جامعة عمّان العربية",
    "kind": "أكاديمية جامعية معتمدة في الأردن",
    "scope": "local",
    "countries": [
      "jordan"
    ],
    "regions": [
      "all"
    ],
    "modes": [
      "in_person"
    ],
    "cost_levels": [
      "varies"
    ],
    "cert_ids": [],
    "orgs": [],
    "paths": [
      "offensive",
      "forensics",
      "defensive"
    ],
    "summary": "أكاديمية EC-Council داخل جامعة عمّان العربية تقدم تدريبًا في الاختراق الأخلاقي والتحقيق الرقمي واختبار الاختراق؛ ويُتحقق من اسم الشهادة المتاحة قبل التسجيل.",
    "availability_note": "قد تكون بعض الدورات موجهة لطلبة الجامعة أو تفتح وفق جدول محدد؛ تحقق من شروط الالتحاق.",
    "action_url": "https://www.aau.edu.jo/en/academics/faculty-computer-science-and-informatics/ec-council-academy",
    "source_url": "https://www.aau.edu.jo/en/academics/faculty-computer-science-and-informatics/ec-council-academy",
    "source_label": "الموقع الرسمي لجامعة عمّان العربية",
    "active": true,
    "city": "Other"
  },
  {
    "id": "tuwaiq_ec_council",
    "name": "أكاديمية طويق",
    "kind": "أكاديمية سعودية وشريك تدريبي",
    "scope": "saudi",
    "regions": [
      "riyadh",
      "all"
    ],
    "modes": [
      "online",
      "in_person"
    ],
    "cost_levels": [
      "free",
      "varies"
    ],
    "cert_ids": [
      "ceh",
      "ec_csa"
    ],
    "orgs": [
      "EC-Council"
    ],
    "paths": [
      "foundation",
      "defensive",
      "offensive"
    ],
    "summary": "معسكرات وبرامج سيبرانية، مع اعتماد معلن لتقديم برامج وشهادات من EC-Council.",
    "availability_note": "البرامج موسمية وقد تختلف الشهادة المتاحة من دفعة لأخرى.",
    "action_url": "https://tuwaiq.edu.sa/",
    "source_url": "https://www.spa.gov.sa/N2333573",
    "source_label": "وكالة الأنباء السعودية",
    "active": true,
    "countries": [
      "saudi_arabia"
    ],
    "city": "Riyadh",
    "city_source": "https://tuwaiq.edu.sa/news/4c2d03e2-40d2-4cfd-b3c6-8071808f4216"
  },
  {
    "id": "nca_academy",
    "name": "الأكاديمية الوطنية للأمن السيبراني",
    "kind": "جهة وطنية حكومية",
    "scope": "saudi",
    "regions": [
      "all"
    ],
    "modes": [
      "online",
      "in_person"
    ],
    "cost_levels": [
      "free",
      "varies"
    ],
    "cert_ids": [],
    "orgs": [],
    "paths": [
      "foundation",
      "defensive",
      "offensive",
      "grc",
      "cloud",
      "forensics",
      "appsec",
      "management",
      "ot"
    ],
    "summary": "برامج ودورات وتمارين سيبرانية وطنية متخصصة تتغير حسب الدفعات والأهلية.",
    "availability_note": "فرصة وطنية عامة وليست وعدًا بتوفر شهادة بعينها. راجع البرامج المفتوحة وشروط القبول.",
    "action_url": "https://nca.gov.sa/ar/nca-academy/",
    "source_url": "https://nca.gov.sa/ar/nca-academy/",
    "source_label": "الهيئة الوطنية للأمن السيبراني",
    "active": true,
    "countries": [
      "saudi_arabia"
    ],
    "city": "Other"
  },
  {
    "id": "nti_egypt",
    "name": "المعهد القومي للاتصالات NTI",
    "kind": "معهد وطني للتدريب التقني في مصر",
    "scope": "local",
    "countries": [
      "egypt"
    ],
    "regions": [
      "all"
    ],
    "modes": [
      "online",
      "in_person"
    ],
    "cost_levels": [
      "free",
      "varies"
    ],
    "cert_ids": [
      "ccna"
    ],
    "orgs": [
      "EC-Council",
      "Cisco"
    ],
    "paths": [
      "foundation",
      "defensive",
      "offensive",
      "grc",
      "cloud"
    ],
    "summary": "المعهد القومي للاتصالات يقدم مبادرات ومسارات تدريبية في الأمن السيبراني والشبكات، وله أكاديميات دولية وشراكات تدريبية.",
    "availability_note": "كثير من البرامج تعمل على دفعات وقد تكون لها شروط أهلية أو تسجيل محدد.",
    "action_url": "https://www.nti.sci.eg/",
    "source_url": "https://www.nti.sci.eg/vendor_academies.html",
    "source_label": "المعهد القومي للاتصالات NTI",
    "active": true,
    "city": "Other"
  },
  {
    "id": "ust_yemen",
    "name": "جامعة العلوم والتكنولوجيا اليمن",
    "kind": "شريك أكاديمي لـ EC-Council في اليمن",
    "scope": "local",
    "countries": [
      "yemen"
    ],
    "regions": [
      "all"
    ],
    "modes": [
      "in_person"
    ],
    "cost_levels": [
      "varies"
    ],
    "cert_ids": [
      "ceh",
      "chfi"
    ],
    "orgs": [
      "EC-Council"
    ],
    "paths": [
      "foundation",
      "defensive",
      "offensive",
      "forensics"
    ],
    "summary": "جددت الجامعة شراكتها الأكاديمية مع EC-Council وتذكر برامج وشهادات مثل CEH وCHFI وECIH ضمن إعداد طلبة الأمن السيبراني.",
    "availability_note": "قد ترتبط بعض البرامج بطلبة الجامعة أو بخطط أكاديمية؛ تحقق من الإتاحة الحالية قبل التسجيل.",
    "action_url": "https://ust.edu.ye/cit/en/2026/01/13/ust-extends-academic-partnership-with-ec-council-for-cybersecurity-certifications-and-training-for-three-more-years/",
    "source_url": "https://ust.edu.ye/cit/en/2026/01/13/ust-extends-academic-partnership-with-ec-council-for-cybersecurity-certifications-and-training-for-three-more-years/",
    "source_label": "الموقع الرسمي لجامعة العلوم والتكنولوجيا اليمن",
    "active": true,
    "city": "Other"
  },
  {
    "id": "kcst_kuwait",
    "name": "مركز الأمن السيبراني في KCST",
    "kind": "مركز جامعي للتدريب والبحث في الكويت",
    "scope": "local",
    "countries": [
      "kuwait"
    ],
    "regions": [
      "all"
    ],
    "modes": [
      "in_person"
    ],
    "cost_levels": [
      "varies"
    ],
    "cert_ids": [],
    "orgs": [],
    "paths": [
      "foundation",
      "defensive",
      "offensive",
      "grc",
      "forensics"
    ],
    "summary": "مركز الأمن السيبراني في كلية الكويت للعلوم والتكنولوجيا يقدم دورات وبرامج تدريبية وشهادات للأفراد والمؤسسات.",
    "availability_note": "المسارات والمواعيد تتغير؛ راجع البرامج المفتوحة في المركز.",
    "action_url": "https://cybersecurity.kcst.edu.kw/training.html",
    "source_url": "https://cybersecurity.kcst.edu.kw/training.html",
    "source_label": "الموقع الرسمي لمركز الأمن السيبراني في KCST",
    "active": true,
    "city": "Other"
  },
  {
    "id": "sca_sudan",
    "name": "مركز التدريب والتأهيل للأمن السيبراني السوداني",
    "kind": "مركز وطني حكومي في السودان",
    "scope": "local",
    "countries": [
      "sudan"
    ],
    "regions": [
      "all"
    ],
    "modes": [
      "in_person"
    ],
    "cost_levels": [
      "varies"
    ],
    "cert_ids": [],
    "orgs": [],
    "paths": [
      "foundation",
      "defensive",
      "offensive",
      "grc",
      "forensics",
      "management"
    ],
    "summary": "مركز تابع للسلطة السودانية للأمن السيبراني ومصمم ليكون مرجعًا وطنيًا للتدريب والتأهيل والبحث والتطوير.",
    "availability_note": "راجع البرامج والإعلانات الرسمية لمعرفة الدورات المفتوحة وشروط الالتحاق.",
    "action_url": "https://sca.gov.sd/en/training-center",
    "source_url": "https://sca.gov.sd/en/training-center",
    "source_label": "السلطة السودانية للأمن السيبراني",
    "active": true,
    "city": "Other"
  },
  {
    "id": "bibf_bahrain",
    "name": "معهد البحرين للدراسات المصرفية والمالية BIBF",
    "kind": "معهد تدريبي في البحرين",
    "scope": "local",
    "countries": [
      "bahrain"
    ],
    "regions": [
      "all"
    ],
    "modes": [
      "in_person"
    ],
    "cost_levels": [
      "paid",
      "varies"
    ],
    "cert_ids": [
      "security_plus"
    ],
    "orgs": [
      "CompTIA"
    ],
    "paths": [
      "foundation",
      "defensive",
      "grc"
    ],
    "summary": "أكاديمية الأمن السيبراني في BIBF تعرض برامج مهنية، ومنها برنامج CompTIA Security+ وبرامج في الحوكمة والأمن.",
    "availability_note": "تحقق من تاريخ الدورة والتسجيل لأن بعض البرامج تفتح على دفعات.",
    "action_url": "https://www.bibf.com/cyber-security-academy/",
    "source_url": "https://www.bibf.com/cyber-security-academy/",
    "source_label": "الموقع الرسمي لـ BIBF",
    "active": true,
    "city": "Other"
  },
  {
    "id": "new_horizons_uae",
    "name": "نيوهورايزن الإمارات",
    "kind": "مركز تدريب تقني في الإمارات",
    "scope": "local",
    "countries": [
      "uae"
    ],
    "regions": [
      "all"
    ],
    "modes": [
      "online",
      "in_person"
    ],
    "cost_levels": [
      "paid",
      "varies"
    ],
    "cert_ids": [
      "security_plus",
      "network_plus",
      "cysa_plus",
      "pentest_plus",
      "cisco_cyberops",
      "cissp",
      "ccsp",
      "cgrc",
      "sscp",
      "sc_900",
      "sc_200",
      "sc100",
      "sc300",
      "ceh",
      "ec_csa",
      "ec_ecih",
      "chfi",
      "cpent"
    ],
    "orgs": [
      "CompTIA",
      "Cisco",
      "EC-Council",
      "ISC2",
      "Microsoft",
      "ISACA"
    ],
    "paths": [
      "foundation",
      "defensive",
      "offensive",
      "grc",
      "cloud",
      "forensics",
      "management"
    ],
    "summary": "مركز تدريب في دبي يعرض مسارات أمن سيبراني من جهات مانحة متعددة، ومنها CompTIA وCisco وEC-Council وISC2 وMicrosoft وISACA.",
    "availability_note": "تحقق من الإصدار الحالي للاختبار، ومواعيد التدريب، واللغة، وما إذا كانت رسوم الاختبار مشمولة.",
    "action_url": "https://newhorizons.ae/training-and-certifications/cybersecurity",
    "source_url": "https://newhorizons.ae/training-and-certifications/cybersecurity",
    "source_label": "الموقع الرسمي لنيوهورايزن الإمارات",
    "active": true,
    "city": "Other"
  },
  {
    "id": "bia_kuwait",
    "name": "Britain International Academy الكويت",
    "kind": "مركز تدريب تقني في الكويت",
    "scope": "local",
    "countries": [
      "kuwait"
    ],
    "regions": [
      "all"
    ],
    "modes": [
      "in_person"
    ],
    "cost_levels": [
      "paid",
      "varies"
    ],
    "cert_ids": [
      "security_plus"
    ],
    "orgs": [
      "CompTIA"
    ],
    "paths": [
      "foundation",
      "defensive"
    ],
    "summary": "مركز تدريب في الكويت لديه برنامج مخصص للتحضير لمفاهيم شهادة CompTIA Security+ وبرامج تقنية أخرى.",
    "availability_note": "تحقق من رمز الاختبار الحالي وجدول الدورة قبل التسجيل.",
    "action_url": "https://biaq8.com/wp/course/comptia-security/",
    "source_url": "https://biaq8.com/wp/course/comptia-security/",
    "source_label": "الموقع الرسمي لـ Britain International Academy",
    "active": true,
    "city": "Other"
  },
  {
    "id": "edoxi_qatar",
    "name": "Edoxi Training Center قطر",
    "kind": "مركز تدريب مهني في قطر",
    "scope": "local",
    "countries": [
      "qatar"
    ],
    "regions": [
      "all"
    ],
    "modes": [
      "online",
      "in_person"
    ],
    "cost_levels": [
      "paid",
      "varies"
    ],
    "cert_ids": [
      "security_plus",
      "network_plus",
      "ceh",
      "cissp",
      "cisa",
      "cism"
    ],
    "orgs": [
      "CompTIA",
      "EC-Council",
      "ISC2",
      "ISACA"
    ],
    "paths": [
      "foundation",
      "defensive",
      "offensive",
      "grc",
      "management"
    ],
    "summary": "يعرض في قطر دورات أمن سيبراني وتحضيرًا لشهادات مثل Security+ وCEH وCISSP وCISA وCISM.",
    "availability_note": "تحقق من موقع التنفيذ ونمط التدريب والمواعيد المتاحة قبل الدفع.",
    "action_url": "https://www.edoxi.com/qatar/cyber-security-courses",
    "source_url": "https://www.edoxi.com/qatar/cyber-security-courses",
    "source_label": "الموقع الرسمي لـ Edoxi قطر",
    "active": true,
    "city": "Other"
  },
  {
    "id": "edutech_qatar",
    "name": "Edutech Consultancy قطر",
    "kind": "شريك Cisco Networking Academy في قطر",
    "scope": "local",
    "countries": [
      "qatar"
    ],
    "regions": [
      "all"
    ],
    "modes": [
      "in_person"
    ],
    "cost_levels": [
      "paid",
      "varies"
    ],
    "cert_ids": [
      "ccna",
      "cisco_cyberops"
    ],
    "orgs": [
      "Cisco"
    ],
    "paths": [
      "foundation",
      "defensive",
      "cloud"
    ],
    "summary": "شريك Cisco Networking Academy في قطر ويعلن تدريبًا لمسارات CCNA وCyberOps وغيرها.",
    "availability_note": "تحقق من الدفعة الحالية ومتطلبات التسجيل لدى الجهة.",
    "action_url": "https://edutechconsultancy.com/best-cisco-certification-trainings-in-qatar-by-edutech-consultancy/",
    "source_url": "https://edutechconsultancy.com/best-cisco-certification-trainings-in-qatar-by-edutech-consultancy/",
    "source_label": "الموقع الرسمي لـ Edutech Consultancy",
    "active": true,
    "city": "Other"
  },
  {
    "id": "ngn_bahrain",
    "name": "NGN Training Centre البحرين",
    "kind": "مركز تدريب تقني في البحرين",
    "scope": "local",
    "countries": [
      "bahrain"
    ],
    "regions": [
      "all"
    ],
    "modes": [
      "online",
      "in_person"
    ],
    "cost_levels": [
      "paid",
      "varies"
    ],
    "cert_ids": [
      "cysa_plus"
    ],
    "orgs": [
      "CompTIA"
    ],
    "paths": [
      "defensive",
      "foundation"
    ],
    "summary": "مركز تدريب في المنامة يعرض دورات مهنية في الأمن السيبراني، ومنها CompTIA CySA+.",
    "availability_note": "راجع التقويم الحالي للتأكد من الموعد وطريقة الحضور.",
    "action_url": "https://training.ngnintl.com/courses/comptia-cybersecurity-analyst-cysa",
    "source_url": "https://training.ngnintl.com/courses/comptia-cybersecurity-analyst-cysa",
    "source_label": "الموقع الرسمي لـ NGN Training Centre",
    "active": true,
    "city": "Other"
  },
  {
    "id": "alkhaleej_ec_council",
    "name": "شركة الخليج للتدريب والتعليم",
    "kind": "جهة تدريب سعودية",
    "scope": "saudi",
    "regions": [
      "riyadh",
      "makkah",
      "eastern",
      "madinah",
      "qassim",
      "asir",
      "all"
    ],
    "modes": [
      "online",
      "in_person"
    ],
    "cost_levels": [
      "medium",
      "paid",
      "varies"
    ],
    "cert_ids": [
      "ceh"
    ],
    "orgs": [
      "EC-Council"
    ],
    "paths": [
      "foundation",
      "offensive"
    ],
    "summary": "تدريب محلي متعدد الفروع، وتظهر في موقع الجهة برامج تحضير لشهادة الهاكر الأخلاقي المعتمد.",
    "availability_note": "تحقق من الإصدار الحالي، الموعد، الفرع، وما إذا كان الاختبار مشمولًا في الرسوم.",
    "action_url": "https://training.alkhaleej.com.sa/ec-council/",
    "source_url": "https://training.alkhaleej.com.sa/ec-council/",
    "source_label": "الموقع الرسمي لشركة الخليج للتدريب",
    "active": true,
    "countries": [
      "saudi_arabia"
    ],
    "city": "Riyadh",
    "city_source": "https://training.alkhaleej.com.sa/contact-us"
  },
  {
    "id": "new_horizons_ksa",
    "name": "نيوهورايزن السعودية",
    "kind": "مركز تدريب تقني في المملكة",
    "scope": "saudi",
    "regions": [
      "riyadh",
      "all"
    ],
    "modes": [
      "online",
      "in_person"
    ],
    "cost_levels": [
      "medium",
      "paid",
      "varies"
    ],
    "cert_ids": [
      "security_plus",
      "network_plus",
      "cysa_plus",
      "pentest_plus",
      "ccna",
      "cisco_cyberops",
      "ceh",
      "ec_csa",
      "sc_900",
      "sc_200",
      "sc100",
      "sc300",
      "sc401",
      "sc500"
    ],
    "orgs": [
      "CompTIA",
      "Cisco",
      "EC-Council",
      "Microsoft"
    ],
    "paths": [
      "foundation",
      "defensive",
      "offensive",
      "cloud",
      "grc",
      "management"
    ],
    "summary": "دورات تقنية حضورية وعن بُعد، وتعلن الجهة شراكات تدريبية مع جهات تقنية عالمية متعددة.",
    "availability_note": "بعض صفحات الدورات قديمة؛ تأكد من رمز الاختبار الحالي وجدول الدورة قبل الدفع.",
    "action_url": "https://newhorizons.com.sa/ar/training-and-certifications/technical-courses-ar-sa",
    "source_url": "https://newhorizons.com.sa/ar/training-and-certifications/technical-courses-ar-sa",
    "source_label": "الموقع الرسمي لنيوهورايزن السعودية",
    "active": true,
    "countries": [
      "saudi_arabia"
    ],
    "city": "Riyadh",
    "city_source": "https://alkhaleej.com.sa/من-نحن/"
  },
  {
    "id": "new_horizons_cairo",
    "name": "نيوهورايزن القاهرة",
    "kind": "مركز تدريب تقني في مصر",
    "scope": "local",
    "countries": [
      "egypt"
    ],
    "regions": [
      "all"
    ],
    "modes": [
      "online",
      "in_person"
    ],
    "cost_levels": [
      "paid",
      "varies"
    ],
    "cert_ids": [
      "security_plus",
      "network_plus",
      "cysa_plus",
      "pentest_plus"
    ],
    "orgs": [
      "CompTIA"
    ],
    "paths": [
      "foundation",
      "defensive",
      "offensive"
    ],
    "summary": "مركز تدريب في القاهرة يعرض مسارات CompTIA ومنها Security+ وCySA+ وPenTest+ إلى جانب تدريب تقني آخر.",
    "availability_note": "تحقق من رمز الاختبار الحالي ومواعيد الدورات قبل التسجيل.",
    "action_url": "https://www.nhcairo.com/training-and-certifications/cybersecurity",
    "source_url": "https://www.nhcairo.com/training-and-certifications/cybersecurity",
    "source_label": "الموقع الرسمي لنيوهورايزن القاهرة",
    "active": true,
    "city": "Other"
  },
  {
    "id": "bsi_official",
    "name": "BSI الشرق الأوسط",
    "kind": "جهة معايير وتدريب معتمد",
    "scope": "regional",
    "regions": [
      "all",
      "riyadh"
    ],
    "modes": [
      "online",
      "in_person"
    ],
    "cost_levels": [
      "paid",
      "premium",
      "varies"
    ],
    "cert_ids": [
      "iso27001_foundation",
      "iso27001_li",
      "iso27001_la"
    ],
    "orgs": [
      "PECB / BSI / Accredited Bodies"
    ],
    "paths": [
      "grc",
      "management"
    ],
    "summary": "دورات مباشرة وعن بُعد في ISO/IEC 27001، مع خيارات مدقق رئيسي معتمدة بحسب الدورة.",
    "availability_note": "راجع تقويم الشرق الأوسط الحالي ومكان انعقاد الدورة.",
    "action_url": "https://www.bsigroup.com/en-AE/products-and-services/training-courses-and-qualifications/",
    "source_url": "https://www.bsigroup.com/en-AE/products-and-services/training-courses-and-qualifications/",
    "source_label": "BSI",
    "active": true,
    "countries": [
      "saudi_arabia",
      "uae",
      "kuwait",
      "bahrain",
      "qatar",
      "oman"
    ],
    "city": "Other"
  },
  {
    "id": "fast_lane_mea",
    "name": "Fast Lane الشرق الأوسط وأفريقيا",
    "kind": "شريك تدريبي إقليمي يخدم المملكة عن بُعد",
    "scope": "regional",
    "regions": [
      "all"
    ],
    "modes": [
      "online",
      "in_person"
    ],
    "cost_levels": [
      "paid",
      "premium",
      "varies"
    ],
    "cert_ids": [
      "ccna",
      "cisco_cyberops",
      "sc_900",
      "sc_200",
      "sc100",
      "sc300",
      "sc401",
      "sc500",
      "aws_security_specialty",
      "gcp_pcse"
    ],
    "orgs": [
      "AWS",
      "Cisco",
      "Google Cloud",
      "Microsoft"
    ],
    "paths": [
      "foundation",
      "defensive",
      "cloud",
      "management"
    ],
    "summary": "مزود تدريبي إقليمي معتمد لدى AWS وCisco وGoogle وMicrosoft، ويقدم تدريبًا بقيادة مدرب وعن بُعد.",
    "availability_note": "المواعيد واللغة والمنطقة الزمنية تختلف حسب الدورة؛ راجع الجدول الحالي.",
    "action_url": "https://www.fastlanemea.com/",
    "source_url": "https://www.fastlanemea.com/company",
    "source_label": "الموقع الرسمي لـ Fast Lane MEA",
    "active": true,
    "countries": [
      "saudi_arabia",
      "uae",
      "kuwait",
      "bahrain",
      "qatar",
      "oman",
      "jordan",
      "egypt",
      "sudan",
      "yemen",
      "iraq"
    ],
    "city": "Other"
  },
  {
    "id": "aws_official",
    "name": "AWS Skill Builder",
    "kind": "الجهة المانحة مباشرة",
    "scope": "global_online",
    "regions": [
      "all"
    ],
    "modes": [
      "online"
    ],
    "cost_levels": [
      "free",
      "paid",
      "varies"
    ],
    "cert_ids": [
      "aws_security_specialty"
    ],
    "orgs": [
      "AWS"
    ],
    "paths": [
      "cloud",
      "defensive"
    ],
    "summary": "مسارات تعلم وتحضير رسمية لأمن خدمات AWS.",
    "availability_note": "توجد موارد مجانية واشتراكات مدفوعة؛ تحقق من رمز الاختبار الحالي.",
    "action_url": "https://skillbuilder.aws/",
    "source_url": "https://aws.amazon.com/training/",
    "source_label": "AWS",
    "active": true,
    "countries": [],
    "city": "Other"
  },
  {
    "id": "cisco_official",
    "name": "Cisco U. وCisco Networking Academy",
    "kind": "الجهة المانحة مباشرة",
    "scope": "global_online",
    "regions": [
      "all"
    ],
    "modes": [
      "online",
      "in_person"
    ],
    "cost_levels": [
      "free",
      "paid",
      "varies"
    ],
    "cert_ids": [
      "ccna",
      "cisco_cyberops"
    ],
    "orgs": [
      "Cisco"
    ],
    "paths": [
      "foundation",
      "defensive",
      "offensive",
      "cloud"
    ],
    "summary": "مسارات ومصادر تعلم رسمية من Cisco للشبكات والأمن السيبراني.",
    "availability_note": "بعض المسارات مجانية وبعضها مدفوع أو يقدم عبر أكاديميات شريكة.",
    "action_url": "https://www.cisco.com/site/us/en/learn/training-certifications/index.html",
    "source_url": "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/index.html",
    "source_label": "Cisco",
    "active": true,
    "countries": [],
    "city": "Other"
  },
  {
    "id": "csa_official",
    "name": "Cloud Security Alliance",
    "kind": "الجهة المانحة مباشرة",
    "scope": "global_online",
    "regions": [
      "all"
    ],
    "modes": [
      "online",
      "in_person"
    ],
    "cost_levels": [
      "free",
      "paid",
      "varies"
    ],
    "cert_ids": [
      "ccsk"
    ],
    "orgs": [
      "Cloud Security Alliance"
    ],
    "paths": [
      "cloud",
      "grc"
    ],
    "summary": "حقيبة تحضير مجانية وخيارات تدريب رسمي ذاتي أو بقيادة مدرب لشهادة معرفة أمن السحابة.",
    "availability_note": "توجد شبكة شركاء ومدربين؛ تحقق من اعتماد المدرب في شبكة CSA قبل الدفع.",
    "action_url": "https://cloudsecurityalliance.org/education/ccsk",
    "source_url": "https://cloudsecurityalliance.org/education/partner",
    "source_label": "Cloud Security Alliance",
    "active": true,
    "countries": [],
    "city": "Other"
  },
  {
    "id": "ec_council_official",
    "name": "EC-Council iClass",
    "kind": "الجهة المانحة مباشرة",
    "scope": "global_online",
    "regions": [
      "all",
      "riyadh"
    ],
    "modes": [
      "online",
      "in_person"
    ],
    "cost_levels": [
      "paid",
      "premium",
      "varies"
    ],
    "cert_ids": [
      "ec_csa",
      "ec_ecih",
      "ceh",
      "ceh_practical",
      "cpent",
      "chfi"
    ],
    "orgs": [
      "EC-Council"
    ],
    "paths": [
      "defensive",
      "offensive",
      "forensics",
      "management"
    ],
    "summary": "دورات رسمية مباشرة عبر الإنترنت، وتظهر للجهة عروض تدريب موجهة للرياض بحسب الجدول.",
    "availability_note": "تحقق من النسخة الحالية للحقيبة ومن تضمين الاختبار العملي عند الحاجة.",
    "action_url": "https://iclass.eccouncil.org/our-courses/",
    "source_url": "https://iclass.eccouncil.org/",
    "source_label": "EC-Council",
    "active": true,
    "countries": [],
    "city": "Other"
  },
  {
    "id": "google_cloud_official",
    "name": "Google Cloud Skills",
    "kind": "الجهة المانحة مباشرة",
    "scope": "global_online",
    "regions": [
      "all"
    ],
    "modes": [
      "online",
      "in_person"
    ],
    "cost_levels": [
      "free",
      "paid",
      "varies"
    ],
    "cert_ids": [
      "gcp_pcse"
    ],
    "orgs": [
      "Google Cloud"
    ],
    "paths": [
      "cloud",
      "defensive"
    ],
    "summary": "مسار رسمي يضم تدريبًا عبر الإنترنت ومختبرات وموارد للتحضير لشهادة مهندس أمن السحابة.",
    "availability_note": "راجع لغة الاختبار والخبرة الموصى بها قبل الحجز.",
    "action_url": "https://cloud.google.com/learn/certification/cloud-security-engineer",
    "source_url": "https://cloud.google.com/learn/certification/cloud-security-engineer",
    "source_label": "Google Cloud",
    "active": true,
    "countries": [],
    "city": "Other"
  },
  {
    "id": "htb_official",
    "name": "Hack The Box Academy",
    "kind": "الجهة المانحة مباشرة",
    "scope": "global_online",
    "regions": [
      "all"
    ],
    "modes": [
      "online"
    ],
    "cost_levels": [
      "paid",
      "varies"
    ],
    "cert_ids": [
      "cpts"
    ],
    "orgs": [
      "Hack The Box"
    ],
    "paths": [
      "offensive",
      "appsec"
    ],
    "summary": "مسار عملي متكامل للتحضير لشهادة اختبار الاختراق العملية.",
    "availability_note": "تحقق من خطة الاشتراك وعدد الوحدات والمدة المتوقعة قبل الشراء.",
    "action_url": "https://academy.hackthebox.com/preview/certifications/htb-certified-penetration-testing-specialist",
    "source_url": "https://academy.hackthebox.com/preview/certifications/htb-certified-penetration-testing-specialist",
    "source_label": "Hack The Box Academy",
    "active": true,
    "countries": [],
    "city": "Other"
  },
  {
    "id": "ine_official",
    "name": "INE Security",
    "kind": "الجهة المانحة مباشرة",
    "scope": "global_online",
    "regions": [
      "all"
    ],
    "modes": [
      "online"
    ],
    "cost_levels": [
      "paid",
      "varies"
    ],
    "cert_ids": [
      "ejpt"
    ],
    "orgs": [
      "INE Security"
    ],
    "paths": [
      "offensive"
    ],
    "summary": "مسار رسمي عملي للتحضير لشهادة اختبار الاختراق للمستوى المبتدئ.",
    "availability_note": "تحقق من نوع الاشتراك ومن تضمين قسيمة الاختبار.",
    "action_url": "https://security.ine.com/certifications/ejpt-certification/",
    "source_url": "https://security.ine.com/certifications/ejpt-certification/",
    "source_label": "INE Security",
    "active": true,
    "countries": [],
    "city": "Other"
  },
  {
    "id": "isaca_official",
    "name": "ISACA",
    "kind": "الجهة المانحة مباشرة",
    "scope": "global_online",
    "regions": [
      "all"
    ],
    "modes": [
      "online",
      "in_person"
    ],
    "cost_levels": [
      "paid",
      "premium",
      "varies"
    ],
    "cert_ids": [
      "cisa",
      "crisc",
      "cism",
      "cgeit",
      "cdpse"
    ],
    "orgs": [
      "ISACA"
    ],
    "paths": [
      "grc",
      "cloud",
      "management"
    ],
    "summary": "مواد ومساقات مراجعة رسمية لشهادات التدقيق والمخاطر والإدارة والخصوصية.",
    "availability_note": "بعض الشهادات تتطلب خبرة لإصدار الاعتماد حتى لو أمكن دخول الاختبار.",
    "action_url": "https://www.isaca.org/credentialing",
    "source_url": "https://www.isaca.org/training-and-events",
    "source_label": "ISACA",
    "active": true,
    "countries": [],
    "city": "Other"
  },
  {
    "id": "linux_foundation_official",
    "name": "Linux Foundation وCNCF",
    "kind": "الجهة المانحة مباشرة",
    "scope": "global_online",
    "regions": [
      "all"
    ],
    "modes": [
      "online"
    ],
    "cost_levels": [
      "paid",
      "premium",
      "varies"
    ],
    "cert_ids": [
      "cks"
    ],
    "orgs": [
      "CNCF"
    ],
    "paths": [
      "cloud",
      "appsec"
    ],
    "summary": "تدريب واختبار عملي رسمي لتأمين منصات Kubernetes.",
    "availability_note": "يتطلب اجتياز شهادة مسؤول Kubernetes قبل جدولة اختبار CKS.",
    "action_url": "https://training.linuxfoundation.org/certification/certified-kubernetes-security-specialist/",
    "source_url": "https://training.linuxfoundation.org/certification/certified-kubernetes-security-specialist/",
    "source_label": "Linux Foundation",
    "active": true,
    "countries": [],
    "city": "Other"
  },
  {
    "id": "microsoft_learn",
    "name": "Microsoft Learn",
    "kind": "الجهة المانحة مباشرة",
    "scope": "global_online",
    "regions": [
      "all"
    ],
    "modes": [
      "online"
    ],
    "cost_levels": [
      "free",
      "paid",
      "varies"
    ],
    "cert_ids": [
      "sc_900",
      "sc_200",
      "sc100",
      "sc300",
      "sc401",
      "sc500"
    ],
    "orgs": [
      "Microsoft"
    ],
    "paths": [
      "foundation",
      "defensive",
      "cloud",
      "grc",
      "management"
    ],
    "summary": "مسارات تعلم مجانية رسمية، مع خيارات تدريب بقيادة مدرب من شركاء Microsoft.",
    "availability_note": "تم اعتماد SC-401 بدل SC-400 وSC-500 بدل المسار المتقاعد AZ-500 في بيانات MAF Tech.",
    "action_url": "https://learn.microsoft.com/credentials/",
    "source_url": "https://learn.microsoft.com/credentials/",
    "source_label": "Microsoft Learn",
    "active": true,
    "countries": [],
    "city": "Other"
  },
  {
    "id": "offsec_official",
    "name": "OffSec Learn",
    "kind": "الجهة المانحة مباشرة",
    "scope": "global_online",
    "regions": [
      "all"
    ],
    "modes": [
      "online"
    ],
    "cost_levels": [
      "paid",
      "premium"
    ],
    "cert_ids": [
      "offsec_osda",
      "offsec_osth",
      "oscp",
      "osep",
      "oswa",
      "oswe"
    ],
    "orgs": [
      "OffSec"
    ],
    "paths": [
      "defensive",
      "offensive",
      "appsec"
    ],
    "summary": "مسارات عملية رسمية لشهادات OffSec الدفاعية والهجومية وأمن تطبيقات الويب.",
    "availability_note": "تحتاج أساسًا عمليًا قويًا؛ راجع مستوى المسار قبل الشراء.",
    "action_url": "https://www.offsec.com/courses-and-certifications/",
    "source_url": "https://www.offsec.com/courses-and-certifications/",
    "source_label": "OffSec",
    "active": true,
    "countries": [],
    "city": "Other"
  },
  {
    "id": "pecb_official",
    "name": "PECB",
    "kind": "جهة مانحة وشبكة شركاء تدريب",
    "scope": "global_online",
    "regions": [
      "all"
    ],
    "modes": [
      "online",
      "in_person"
    ],
    "cost_levels": [
      "paid",
      "premium",
      "varies"
    ],
    "cert_ids": [
      "iso27001_foundation",
      "iso27001_li",
      "iso27001_la"
    ],
    "orgs": [
      "PECB / BSI / Accredited Bodies"
    ],
    "paths": [
      "grc",
      "management"
    ],
    "summary": "تدريب رسمي مباشر أو عبر شركاء معتمدين في معيار إدارة أمن المعلومات ISO/IEC 27001.",
    "availability_note": "تأكد من الجهة المانحة المحددة في الدورة ونوع الاعتماد قبل التسجيل.",
    "action_url": "https://pecb.com/en/education-and-certification-for-individuals/iso-iec-27001",
    "source_url": "https://pecb.com/en/education-and-certification-for-individuals/iso-iec-27001",
    "source_label": "PECB",
    "active": true,
    "countries": [],
    "city": "Other"
  },
  {
    "id": "sans_giac",
    "name": "SANS Institute وGIAC",
    "kind": "التدريب الرسمي المرتبط بالجهة المانحة",
    "scope": "global_online",
    "regions": [
      "all"
    ],
    "modes": [
      "online",
      "in_person"
    ],
    "cost_levels": [
      "premium"
    ],
    "cert_ids": [
      "gsec",
      "gcih",
      "gcia",
      "gmon",
      "gcti",
      "gpen",
      "gwapt",
      "gxpn",
      "gcfa",
      "gcfe",
      "gnfa",
      "grem",
      "gweb",
      "devsecops_gf",
      "gicsp",
      "grid"
    ],
    "orgs": [
      "GIAC"
    ],
    "paths": [
      "foundation",
      "defensive",
      "offensive",
      "forensics",
      "appsec",
      "cloud",
      "ot"
    ],
    "summary": "تدريب متقدم وعميق عبر SANS للتحضير لشهادات GIAC.",
    "availability_note": "غالبًا مرتفع التكلفة؛ قارن السعر مع خبرتك وهدفك قبل التسجيل.",
    "action_url": "https://www.sans.org/cyber-security-courses/",
    "source_url": "https://www.giac.org/how-to-prepare/",
    "source_label": "SANS وGIAC",
    "active": true,
    "countries": [],
    "city": "Other"
  },
  {
    "id": "security_blue_team",
    "name": "Security Blue Team",
    "kind": "الجهة المانحة مباشرة",
    "scope": "global_online",
    "regions": [
      "all"
    ],
    "modes": [
      "online"
    ],
    "cost_levels": [
      "paid",
      "varies"
    ],
    "cert_ids": [
      "btl1"
    ],
    "orgs": [
      "Security Blue Team"
    ],
    "paths": [
      "defensive",
      "forensics"
    ],
    "summary": "تدريب عملي مباشر للتحضير لشهادة محلل الفريق الدفاعي للمستوى الأول.",
    "availability_note": "راجع مدة الوصول للمحتوى وعدد محاولات الاختبار.",
    "action_url": "https://www.securityblue.team/certifications/blue-team-level-1",
    "source_url": "https://www.securityblue.team/certifications/blue-team-level-1",
    "source_label": "Security Blue Team",
    "active": true,
    "countries": [],
    "city": "Other"
  },
  {
    "id": "tcm_official",
    "name": "TCM Security Academy",
    "kind": "الجهة المانحة مباشرة",
    "scope": "global_online",
    "regions": [
      "all"
    ],
    "modes": [
      "online"
    ],
    "cost_levels": [
      "paid",
      "varies"
    ],
    "cert_ids": [
      "pjpt",
      "pnpt"
    ],
    "orgs": [
      "TCM Security"
    ],
    "paths": [
      "offensive"
    ],
    "summary": "دورات عملية رسمية مرتبطة بشهادتي اختبار الاختراق للمستويين المبتدئ والمتوسط.",
    "availability_note": "راجع متطلبات كل اختبار ومدة الوصول للمحتوى.",
    "action_url": "https://certifications.tcm-sec.com/",
    "source_url": "https://certifications.tcm-sec.com/",
    "source_label": "TCM Security",
    "active": true,
    "countries": [],
    "city": "Other"
  },
  {
    "id": "comptia_official",
    "name": "التدريب الرسمي من CompTIA",
    "kind": "الجهة المانحة مباشرة",
    "scope": "global_online",
    "regions": [
      "all"
    ],
    "modes": [
      "online"
    ],
    "cost_levels": [
      "paid",
      "varies"
    ],
    "cert_ids": [
      "security_plus",
      "network_plus",
      "cysa_plus",
      "pentest_plus",
      "securityx"
    ],
    "orgs": [
      "CompTIA"
    ],
    "paths": [
      "foundation",
      "defensive",
      "offensive",
      "cloud",
      "management"
    ],
    "summary": "مواد CertMaster الرسمية للتحضير لشهادات CompTIA.",
    "availability_note": "اختر المادة المطابقة للإصدار الحالي من الاختبار.",
    "action_url": "https://www.comptia.org/training/certmaster-learn",
    "source_url": "https://www.comptia.org/training/certmaster-learn",
    "source_label": "CompTIA",
    "active": true,
    "countries": [],
    "city": "Other"
  },
  {
    "id": "isc2_official",
    "name": "التدريب الرسمي من ISC2",
    "kind": "الجهة المانحة مباشرة",
    "scope": "global_online",
    "regions": [
      "all"
    ],
    "modes": [
      "online"
    ],
    "cost_levels": [
      "paid",
      "premium",
      "varies"
    ],
    "cert_ids": [
      "isc2_cc",
      "cissp",
      "ccsp",
      "csslp",
      "sscp",
      "cgrc"
    ],
    "orgs": [
      "ISC2"
    ],
    "paths": [
      "foundation",
      "defensive",
      "grc",
      "cloud",
      "appsec",
      "management"
    ],
    "summary": "تدريب رسمي مباشر وخيارات تعلم ذاتي أو بقيادة مدرب لشهادات ISC2.",
    "availability_note": "تحقق من اللغة، المتطلبات، وسياسة الاختبار لكل شهادة.",
    "action_url": "https://www.isc2.org/training",
    "source_url": "https://www.isc2.org/training",
    "source_label": "ISC2",
    "active": true,
    "countries": [],
    "city": "Other"
  },
  {
    "id": "alkhaleej_ec_council_jeddah",
    "name": "شركة الخليج للتدريب والتعليم",
    "kind": "جهة تدريب سعودية",
    "scope": "saudi",
    "regions": [
      "riyadh",
      "makkah",
      "eastern",
      "madinah",
      "qassim",
      "asir",
      "all"
    ],
    "modes": [
      "online",
      "in_person"
    ],
    "cost_levels": [
      "medium",
      "paid",
      "varies"
    ],
    "cert_ids": [
      "ceh"
    ],
    "orgs": [
      "EC-Council"
    ],
    "paths": [
      "foundation",
      "offensive"
    ],
    "summary": "تدريب محلي متعدد الفروع، وتظهر في موقع الجهة برامج تحضير لشهادة الهاكر الأخلاقي المعتمد.",
    "availability_note": "تحقق من الإصدار الحالي، الموعد، الفرع، وما إذا كان الاختبار مشمولًا في الرسوم.",
    "action_url": "https://training.alkhaleej.com.sa/ec-council/",
    "source_url": "https://training.alkhaleej.com.sa/ec-council/",
    "source_label": "الموقع الرسمي لشركة الخليج للتدريب",
    "active": true,
    "countries": [
      "saudi_arabia"
    ],
    "city": "Jeddah",
    "branch_label": "فرع جدة",
    "city_source": "https://training.alkhaleej.com.sa/jeddah/"
  }
];
