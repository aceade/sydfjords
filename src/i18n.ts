import { createI18n } from 'vue-i18n';

/**
 * Create the internationalisation entries. This is limited to the Navbar only as a proof of concept.
 */
export const i18n = createI18n({
    locale: "en",
    fallbackLocale: "en",
    messages: {
        en: {
            nativeName: "English",
            navbar: {
                home: "Home",
                see: "See and Do",
                hotels: "Stay",
                travel: "Get Here",
                about: "About",
                whales: "Whale-Watching",
                colwdvatn: "Colwdvatn",
                loremvik: "Loremvik",
                ipsumvatn: "Ipsumvatn",
                changeLang: {
                    alt: "Change Language",
                    title: "Change Language",
                }
            }
        },
        ga: {
            nativeName: "Gaeilge",
            navbar: {
                home: "Príomhleathanach",
                see: "Le Déanamh",
                hotels: "Fán",
                travel: "Taistáil",
                about: "Faoin Suíomh",
                whales: "Faireamh Ar Míolta Móra",
                colwdvatn: "Colwdvatn",
                loremvik: "Loremvik",
                ipsumvatn: "Ipsumvatn",
                changeLang: {
                    alt: "Athraigh Teanga",
                    title: "Athraigh Teanga",
                }
            }
        },
        de: {
            nativeName: "Deutsch",
            navbar: {
                home: "Hauptseite",
                see: "Zum Besehen",
                hotels: "Verweilen Sie",
                travel: "Kommen Sie Hier",
                about: "Um Dieser Seite",
                whales: "Walbeobachtung",
                colwdvatn: "Colwdvatn",
                loremvik: "Loremvik",
                ipsumvatn: "Ipsumvatn",
                changeLang: {
                    alt: "Sprache Wählen",
                    title: "Sprache Wählen"
                }
            }
        },
        it: {
            nativeName: "Italiano",
            navbar: {
                home: "Pagina Principale",
                see: "Da Fare",
                hotels: "Restare",
                travel: "Arrivare",
                about: "Informazioni",
                whales: "Osservazione Delle Balene",
                colwdvatn: "Colwdvatn",
                loremvik: "Loremvik",
                ipsumvatn: "Ipsumvatn",
                changeLang: {
                    alt: "Cambia Lingua",
                    title: "Cambia Lingua",
                }
            }
        },
        ar: {
            nativeName: "",
            navbar: {
                home: "الصفحة الرئيسية",
                see: "انظر وافعل",
                hotels: "الفنادق",
                travel: "تعال هنا",
                about: "عن",
                whales: "مشاهدة الحيتان",
                colwdvatn: "كولودفاتن",
                loremvik: "لوريمفيك",
                ipsumvatn: "إبسومفاتن",
                changeLang: {
                  alt: "تغيير اللغة",
                  title: "تغيير اللغة",
                }
              }
        },
        ja: {
            nativeName: "",
            navbar: {
                home: "ホームページ",
                see: "見て、やってみよう",
                hotels: "滞在する",
                travel: "ここへ到着する",
                about: "について",
                whales: "ホエールウォッチング",
                colwdvatn: "コルドヴァトン",
                loremvik: "ロレンヴィク",
                ipsumvatn: "イプサムヴァトン",
                changeLang: {
                  alt: "言語を変えてください",
                  title: "言語を変えてください",
                }
              }
        }
    }
});