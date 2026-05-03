export default function ReframeSection() {
    return (
        <section className="reframe-section" dir="rtl">
            <div className="reframe-inner">

                {/* ── כותרת ── */}
                <div className="reframe-header">
                    <div className="section-label">תחשבו על זה רגע</div>
                    <div className="divider" />
                    <h2 className="reframe-title">
                        המשפחה שלכם מגלגלת מיליונים.
                        <br />
                        <span className="reframe-title-accent">בלי תוכנית — הם פשוט ייעלמו.</span>
                    </h2>
                </div>

                {/* ── המספר הגדול ── */}
                <div className="reframe-stat-block">
                    <div className="reframe-stat-number">₪9,000,000</div>
                    <p className="reframe-stat-desc">
                        זה כמה כסף ינהל זוג עם הכנסה משותפת של 25,000 ₪ בחודש — לאורך 30 שנות עבודה בלבד.
                        <br />
                        <strong>עוד לא ספרנו פנסיה, נכסים, ביטוחים וחסכונות.</strong>
                    </p>
                    <p className="reframe-stat-punch">
                        לכל עסק שמגלגל 9 מיליון יש CFO, תוכנית ואסטרטגיה.
                        <br />
                        לרוב המשפחות — יש תחושת בטן.
                    </p>
                </div>

                {/* ── 3 ריפריימים ── */}
                <div className="reframe-cards">

                    <div className="reframe-card">
                        <div className="reframe-card-num">01</div>
                        <div className="reframe-card-before">
                            <span className="reframe-x">✕</span>
                            "אנחנו צריכים להרוויח יותר"
                        </div>
                        <div className="reframe-card-arrow">↓</div>
                        <div className="reframe-card-after">
                            ברוב המקרים הבעיה היא לא ההכנסה — היא מה שעושים איתה.
                            משפחות עם תוכנית מקדימות משפחות עם הכנסה גבוהה יותר, כמעט תמיד.
                        </div>
                    </div>

                    <div className="reframe-card">
                        <div className="reframe-card-num">02</div>
                        <div className="reframe-card-before">
                            <span className="reframe-x">✕</span>
                            "נחסוך קצת יותר בחודש הבא"
                        </div>
                        <div className="reframe-card-arrow">↓</div>
                        <div className="reframe-card-after">
                            חיסכון בלי תוכנית תזרים זה כמו לטוס בלי נווט.
                            אתם זזים, אבל לא יודעים לאן — ובסוף מוצאים את עצמכם חוזרים לאותה נקודה.
                        </div>
                    </div>

                    <div className="reframe-card">
                        <div className="reframe-card-num">03</div>
                        <div className="reframe-card-before">
                            <span className="reframe-x">✕</span>
                            "כל אחד מאיתנו מטפל בחלק שלו"
                        </div>
                        <div className="reframe-card-arrow">↓</div>
                        <div className="reframe-card-after">
                            כסף בזוגיות זה ספורט קבוצתי.
                            כשאין שפה משותפת ותוכנית אחת — גם אם שניכם עובדים קשה, אתם דוחפים לכיוונים שונים.
                        </div>
                    </div>

                </div>

                {/* ── מעבר לסרטון ── */}
                <div className="reframe-bridge">
                    <p>בסרטון של 5 דקות הבאים — אני מסביר בדיוק איך זה נראה במציאות, ומה עושים אחרת.</p>
                    <a href="#video" className="reframe-bridge-link">
                        צפו בסרטון ←
                    </a>
                </div>

            </div>
        </section>
    );
}
