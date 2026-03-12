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
    buttonText: "לקביעת שיחת איפיון",
    buttonSubtext: "ללא עלות",
    whatsappMessage:
      "היי ניר, הגעתי מהאתר ואשמח לקבוע שיחת איפיון ללא עלות.",
  },

  socialLinks: {
    whatsapp: "https://wa.me/972542006874",
    instagram: "https://www.instagram.com/niryifrah?igsh=cWQ0Z2JkdDdzcHQ1",
    youtube: "https://www.youtube.com/@niryifrah",
  },

  hero: {
    title: "תכנון פיננסי אישי ומשפחתי | תכנון הון",
    description:
      "כל יחידה פיננסית, בין אם זו משפחה או יחיד, מנהלת לאורך חייה מיליונים. מעטים יודעים לעשות את זה נכון. לחיות טוב בהווה מבלי להתפשר על העתיד הכלכלי. לחצו Play וגלו ב־4 דקות איך להפסיק לרדוף אחרי הכסף ולהתחיל לנהל אותו.",
    primaryButton: "לצפייה בסרטון",
  },

  video: {
    title: "לעשות סדר בכסף, בצורה פשוטה וברורה",
    description:
      "הסרטון כאן כדי לתת תמונה בהירה, רגועה ומעשית על הדרך הנכונה לנהל כסף.",
    src: "https://res.cloudinary.com/dtjr9qzet/video/upload/v1773334171/2_ocxr95.mp4",
    poster: "",
  },

  services: {
    items: [
      {
        title: "תכנון פיננסי למשפחות ויחידים",
        description:
          "כולל מיפוי פיננסי מלא ובניית תכנית כלכלית דינאמית שמותאמת למידות שלכם.",
      },
      {
        title: "תכנון הון",
        description:
          "בניית אסטרטגיית השקעות ואלוקציית נכסים מותאמת ליעדים ולמטרות החיים שלכם.",
      },
      {
        title: "ליווי פיננסי לעצמאים",
        description:
          "תהליך מותאם לעצמאים שרוצים לקחת שליטה על המספרים בעסק.",
      },
      {
        title: "ליווי פנסיוני",
        description:
          "את כל התהליכים מלווה סוכן בעל רישיון שבודק את התיק הפנסיוני ואת הביטוחים ורואה מה ניתן לשפר.",
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
    eyebrow: "נעים מאוד",
    name: "ניר יפרח",
    badges: ["3 עסקים שהוקמו", "CFP", "ליווי בגובה העיניים"],
    paragraphs: [
      "בן 33, נשוי לשי ואבא לרני ונועם.",
      "את עולם הפיננסים פגשתי דווקא מהצד העסקי. הקמתי 3 עסקים גדולים שעובדים, שני חדרי כושר ומסעדה.",
      "כשהבנתי שהסביבה הקרובה שלי לא מבינה עד הסוף איך כסף עובד ואיך נכון לנהל אותו בצורה חכמה ופשוטה, ולהשקיע אותו בהתאם למטרות החיים שלהם, הבנתי שיש כאן צורך הרבה יותר גדול.",
      "הלכתי ללמוד ייעוץ לכלכלת המשפחה, משכנתאות ותכנון פיננסי CFP.",
      "תמיד אהבתי לעבוד עם אנשים ולראות תהליכים קורים. זה גם מה שמשך אותי לפתוח את חדר הכושר הראשון, והאמת היא שזה מאוד דומה.",
    ] as string[],
    quote:
      "בריאות כלכלית ובריאות גופנית מושתתות על אותם עקרונות: פשטות, התמדה עקבית ותכנית שמתאימה לרצונות וליכולות.",
  },

  contact: {
    buttonText: "השאירו פרטים",
  },

  footer: {
    text: "כל הזכויות שמורות לניר יפרח",
  },
} as const;