import sp1 from "../assets/social-proof/SP1.png";
import sp2 from "../assets/social-proof/SP2.png";
import sp3 from "../assets/social-proof/SP3.png";

export type ServiceItem = {
  title: string;
  description: string;
};

export type SocialProofItem = {
  src: string;
  alt: string;
};

export const siteContent = {
  header: {
    logoSrc: "/images/logo0nir.png",
    logoText: "ניר יפרח",
    buttonText: "לקביעת שיחת אפיון",
    buttonSubtext: "ללא עלות",
    whatsappMessage:
      "היי ניר, הגעתי מהאתר ואשמח לקבוע שיחת אפיון ללא עלות.",
  },

  socialLinks: {
    whatsapp: "https://wa.me/972542006874",
    instagram: "https://www.instagram.com/niryifrah?igsh=cWQ0Z2JkdDdzcHQ1",
    youtube: "https://www.youtube.com/@niryifrah",
  },

  hero: {
    title: "תכנון פיננסי אישי ומשפחתי | תכנון הון",
    description:
      "כל יחידה פיננסית, בין אם זו משפחה או יחיד, מנהלת לאורך חייה מיליונים. מעטים יודעים לעשות את זה נכון. לחיות טוב בהווה מבלי להתפשר על העתיד הכלכלי. לחצו פליי וגלו ב־5 דקות איך אתם צריכים להסתכל על ניהול הכסף שלכם.",
    primaryButton: "לצפייה בסרטון",
  },

  video: {
    title: "להתחיל לנהל, להפסיק להתנהל.",
    description: "צפו בסרטון",
    src: "https://res.cloudinary.com/dtjr9qzet/video/upload/v1773334171/2_ocxr95.mp4",
    poster: "",
  },

  services: {
    items: [
      {
        title: "תכנון פיננסי למשפחות ויחידים",
        description:
          "מיפוי ובניית תמונה פיננסית מלאה. בניית תכנית כלכלית שמותאמת אישית למידות שלכם.",
      },
      {
        title: "תכנון הון",
        description:
          "בניית אסטרטגיית השקעות ואלוקציית נכסים המותאמת ליעדים ולמטרות החיים שלכם.",
      },
      {
        title: "ליווי פיננסי לעצמאים",
        description:
          "תהליך מותאם לעצמאים שרוצים לקחת שליטה על המספרים בעסק.",
      },
      {
        title: "ליווי פנסיוני ותכנון פרישה",
        description:
          "סוכן בעל רשיון עובר על התיק הפנסיוני ואת הביטוחים ורואה מה ניתן לשפר. תכנון הפרישה נעשה על ידי מתכנן פרישה.",
      },
      {
        title: "משכנתאות ומימון",
        description:
          "תכנון המימון והמינוף בהתאם למטרות החיים.",
      },
    ] as ServiceItem[],
  },

  socialProof: {
    items: [
      {
        src: sp1,
        alt: "סיפור הצלחה 1",
      },
      {
        src: sp2,
        alt: "סיפור הצלחה 2",
      },
      {
        src: sp3,
        alt: "סיפור הצלחה 3",
      },
    ] as SocialProofItem[],
  },

  about: {
    imageSrc: "/Nir.jpg",
    eyebrow: "נעים מאוד!",
    name: "ניר יפרח",
    badges: [] as string[],
    paragraphs: [
      "בן 33, נשוי לשי, אבא לרני ונועם ומתכנן פיננסי CFP.",
      "את עולם הפיננסים אני פוגש דווקא מהעולם העסקי. בעשור האחרון כעצמאי הקמתי שני חדרי כושר ומסעדה.",
      "כשהבנתי שהסביבה הקרובה אליי לא מבינה עד הסוף את העקרונות החשובים בניהול הפיננסים שלהם, חולמים על משהו אחד ומקבלים החלטות אחרות לגמרי רק על סמך תחושות בטן או התייעצות עם משפחה, הבנתי שהם לא היחידים וכנראה שיש כאן צורך גדול הרבה יותר.",
      "למדתי כלכלת המשפחה, משכנתאות ומימון ותכנון פיננסי CFP.",
      "אנשים חושבים שפיננסים זה מספרים וטבלאות אקסל. זה נכון, אבל לפני זה יש אנשים וחלומות שצריכים להיות מתורגמים למספרים.",
      "אני אוהב לעבוד עם אנשים ויותר מזה, אני אוהב לראות את התהליכים שהם עוברים. וכאחד שמגיע מעולם הכושר אני יכול להגיד שזה מאוד דומה.",
    ] as string[],
    quote:
      "״בריאות כלכלית ובריאות גופנית מבוססים על אותם עקרונות: פשטות, התמדה ותכנית שמותאמת לרצונות וליכולות״",
  },

  contact: {
    title: "יש לי מתנה!",
    descriptionLines: [
      "הצ׳ק ליסט הפיננסי המקיף שלי - Google Sheets מקיף שכולל מעקב אחרי:",
      "התנהלות כלכלית | בנקים ואשראי | פנסיה וביטוחים | השקעות",
    ] as string[],
    buttonText: "שלח לי",
  },

  footer: {
    text: "כל הזכויות שמורות לניר יפרח",
  },
} as const;