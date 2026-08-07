export const threats = [
  {
    icon: "Fish",
    title: "Phishing",
    description:
      "Fraudulent emails, texts, or calls that impersonate trusted brands to trick you into handing over credentials or money.",
    tips: [
      "Check the sender's real address, not the display name",
      "Never enter credentials from a link in an email",
      "Report suspicious messages to your IT or security team",
    ],
  },
  {
    icon: "Bug",
    title: "Malware",
    description:
      "Malicious software — viruses, trojans, spyware — installed through downloads, attachments, or infected USB drives.",
    tips: [
      "Only install software from official stores and vendors",
      "Keep antivirus and endpoint protection running",
      "Scan attachments and unknown USB devices before opening",
    ],
  },
  {
    icon: "Lock",
    title: "Ransomware",
    description:
      "Attackers encrypt your files and demand payment. Recovery without clean backups is often impossible.",
    tips: [
      "Keep offline or immutable backups of critical data",
      "Patch operating systems and remote access tools quickly",
      "Restrict admin rights to the people who truly need them",
    ],
  },
  {
    icon: "KeyRound",
    title: "Password Attacks",
    description:
      "Brute force, credential stuffing, and password spraying exploit weak or reused passwords across many accounts.",
    tips: [
      "Use a unique 14+ character passphrase per account",
      "Store credentials in a reputable password manager",
      "Turn on two-factor authentication everywhere it is offered",
    ],
  },
  {
    icon: "Users",
    title: "Social Engineering",
    description:
      "Manipulation that exploits trust and urgency — fake IT support, CEO fraud, tailgating into secure areas.",
    tips: [
      "Verify unusual requests through a known second channel",
      "Slow down when a message pressures you to act now",
      "Never share one-time codes with anyone, ever",
    ],
  },
  {
    icon: "Database",
    title: "Data Breaches",
    description:
      "Large-scale exposure of personal data from a company you trusted, later resold and reused against you.",
    tips: [
      "Monitor breach notification services for your email",
      "Change reused passwords immediately after a breach",
      "Share the minimum personal data a service truly needs",
    ],
  },
] as const;

export const securityTips = [
  {
    icon: "KeyRound",
    title: "Use strong unique passwords",
    body: "A long passphrase per account stops one leak from unlocking your whole digital life.",
  },
  {
    icon: "ShieldCheck",
    title: "Enable Two-Factor Authentication",
    body: "2FA blocks the vast majority of account takeovers even when your password is stolen.",
  },
  {
    icon: "RefreshCw",
    title: "Keep software updated",
    body: "Updates close the exact security holes attackers scan for automatically.",
  },
  {
    icon: "MousePointerClick",
    title: "Avoid suspicious links",
    body: "Hover to preview the destination and type known addresses manually when in doubt.",
  },
  {
    icon: "HardDriveDownload",
    title: "Backup important files",
    body: "Keep three copies, on two types of media, with one stored offline or offsite.",
  },
  {
    icon: "Bug",
    title: "Install antivirus software",
    body: "Reputable endpoint protection catches known malware before it can execute.",
  },
  {
    icon: "Wifi",
    title: "Secure your Wi-Fi",
    body: "Use WPA3 or WPA2, a strong router password, and a separate guest network.",
  },
  {
    icon: "Smartphone",
    title: "Lock devices",
    body: "A PIN, password, or biometric lock keeps a lost device from becoming a data breach.",
  },
] as const;

export const dailyTips = [
  "Never reuse passwords across accounts.",
  "Enable multi-factor authentication on every important account.",
  "Think before clicking — urgency is an attacker's favourite tool.",
  "Update your software and browser this week.",
  "Verify suspicious emails through a second, known channel.",
  "Use a password manager instead of memorising credentials.",
] as const;

export const faqs = [
  {
    q: "What is phishing?",
    a: "Phishing is a fraudulent message — usually email, SMS, or a phone call — that impersonates a person or brand you trust in order to steal credentials, payment details, or install malware. Modern phishing is highly targeted and can reference real projects, colleagues, or invoices.",
  },
  {
    q: "What is ransomware?",
    a: "Ransomware is malicious software that encrypts your files and demands payment for the decryption key. Paying does not guarantee recovery, which is why tested, offline backups and rapid patching are the most reliable defences.",
  },
  {
    q: "How can I protect my password?",
    a: "Use a unique passphrase of at least 14 characters for every account, store them in a password manager, never share them over email or chat, and change any password that appears in a known data breach.",
  },
  {
    q: "What is Two-Factor Authentication?",
    a: "Two-Factor Authentication (2FA) adds a second proof of identity — an authenticator app code, hardware key, or biometric — on top of your password, so a stolen password alone is not enough to access your account.",
  },
  {
    q: "Why should I update my software?",
    a: "Most successful attacks exploit vulnerabilities that already have a fix available. Applying updates promptly removes those known weaknesses from your devices before automated scanners find them.",
  },
] as const;

export const quizQuestions = [
  {
    question: "An email from your 'bank' asks you to confirm your password via a link. What do you do?",
    options: [
      "Click the link and enter your details quickly",
      "Ignore the link and log in via the bank's official app or website",
      "Reply to the email asking if it is genuine",
      "Forward it to a colleague for their opinion",
    ],
    answer: 1,
    explanation:
      "Legitimate banks never ask for credentials by email. Always navigate to the official app or site yourself.",
  },
  {
    question: "Which of these is the strongest password?",
    options: ["Summer2024!", "P@ssw0rd", "brisk-otter-vault-97-lantern", "12345678"],
    answer: 2,
    explanation: "Length and unpredictability beat symbol tricks. Long random passphrases are hardest to crack.",
  },
  {
    question: "A caller claims to be IT support and asks for your one-time code. You should:",
    options: [
      "Give the code, IT needs it to help",
      "Refuse and verify through your official IT channel",
      "Give a partial code to be safe",
      "Put them on hold and read it out later",
    ],
    answer: 1,
    explanation: "One-time codes are never needed by real support staff. Sharing one hands over your account.",
  },
  {
    question: "What is the clearest sign of a phishing website?",
    options: [
      "It loads slowly",
      "It uses a slightly misspelled or unusual domain name",
      "It has a modern design",
      "It asks you to accept cookies",
    ],
    answer: 1,
    explanation: "Look-alike domains such as 'paypa1-secure.com' are the most reliable phishing tell.",
  },
  {
    question: "Your laptop offers a security update before an important meeting. Best action?",
    options: [
      "Postpone it indefinitely",
      "Disable updates to avoid interruptions",
      "Install it as soon as the meeting ends",
      "Wait until the device slows down",
    ],
    answer: 2,
    explanation: "Delay briefly if you must, but install security updates the same day — exploits move fast.",
  },
] as const;

export const checklistItems = [
  "Strong, unique passwords",
  "Two-Factor Authentication enabled",
  "Software and OS up to date",
  "Antivirus installed and active",
  "Secure, encrypted Wi-Fi",
  "Avoid suspicious links and attachments",
  "Important files backed up",
  "Device lock enabled (PIN or biometric)",
] as const;