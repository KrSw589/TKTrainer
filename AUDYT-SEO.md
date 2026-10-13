# Audyt SEO i wydajności — TKTrainer

Stan: 11 października 2026. Adres publikacji sprawdzony podczas audytu: `https://krsw589.github.io/TKTrainer/`. Od 13 października 2026 strona jest publikowana pod `https://tktrener.pl/`.

## Najważniejsze ustalenia

| Priorytet | Ustalenie i dowód | Działanie |
| --- | --- | --- |
| Wysoki | Opublikowana strona nie miała mapy witryny (`/TKTrainer/sitemap.xml` zwracał 404), a w kodzie nie było canonical. | Dodano `sitemap.xml` i canonical dla strony głównej. Po publikacji zgłosić mapę w Search Console. |
| Wysoki | Film 8,6 MB odtwarzał się automatycznie i miał `preload="auto"`. W pomiarze Lighthouse wersji opublikowanej pobrano około 3,4 MB filmu. | Film uruchamia się po kliknięciu; przed kliknięciem przeglądarka pobiera tylko plakat. |
| Wysoki | Duże obrazy były ładowane jako PNG. Wersja opublikowana pobrała 3,9 MB zdjęcia Magdy i 1,6 MB porównania Martyny. | Widoczne obrazy zastąpiono plikami WebP. Zdjęcie Magdy ma teraz 148 KB, porównanie Martyny 99 KB. |
| Średni | Treść strony wymaga uruchomienia Reacta. Lokalny pomiar mobilny po poprawkach: LCP około 4,4 s, wobec zalecanych 2,5 s. | Dalsza poprawa wymaga statycznego renderowania treści startowej albo przebudowy eksportu strony. |
| Średni | Strona mówi o leczeniu kontuzji i bólu, ale nie podaje konkretnych kwalifikacji, zakresu usługi ani granic współpracy. | Dodać prawdziwe kwalifikacje, doświadczenie, przebieg konsultacji i uczciwie opisać zakres pomocy. Zweryfikować obietnice zdrowotne. |
| Średni | Jest tylko jedna strona docelowa. Brakuje osobnych odpowiedzi na pytania osób szukających treningu w Katowicach i online. | Przygotować wartościowe strony usług tylko wtedy, gdy będą zawierały własne, konkretne informacje. |

## Wykonane zmiany

- Dodano `lang="pl"`, poprawiono tytuł i opis, ustawiono canonical oraz znaczniki Open Graph.
- Dodano dane strukturalne `Person` oparte na informacjach widocznych na stronie. Nie dodawano adresu firmy ani ocen w danych strukturalnych bez potwierdzenia.
- Dodano mapę XML z jednym kanonicznym adresem.
- Skonwertowano najcięższe zdjęcia i plakat filmu do WebP; film nie ładuje się automatycznie.
- Czcionkę Inter oraz React przeniesiono do zasobów strony, a skrypty oznaczono jako `defer`.

## Wyniki pomiarów i zakres

Lighthouse w profilu mobilnym: działająca wersja przed zmianami pobrała około **9 660 KiB** zasobów. Lokalna wersja po zmianach pobrała około **781 KiB**, uzyskała **82/100 wydajności** i **100/100 w automatycznych kontrolach SEO**. To pomiary laboratoryjne na różnych hostach, więc punktacja nie jest bezpośrednim pomiarem poprawy w produkcji. Po publikacji uruchom PageSpeed Insights dla publicznego adresu i sprawdź dane terenowe w Search Console. Lokalny test przeglądarkowy potwierdził jeden widoczny H1, poprawne renderowanie, brak błędów JavaScript i brak żądania pliku MP4 przed kliknięciem.

Automatyczny wynik SEO 100/100 obejmuje tylko podstawowe kontrole techniczne. Nie ocenia jakości treści, widoczności w Google ani profilu linków.

## Google Search Console — co dodać

1. Po przepięciu domeny dodaj usługę typu **Domena**: `tktrener.pl`. Obejmuje ona `https://`, `http://`, `www` i wszystkie ścieżki.
2. Zweryfikuj własność rekordem DNS: skopiuj z Search Console wartość `google-site-verification=…` i dodaj ją w Cloudflare jako rekord `TXT` dla nazwy `@`. Weryfikacja zwykle przechodzi w ciągu kilku minut.
3. W raporcie **Mapy witryn** zgłoś `https://tktrener.pl/sitemap.xml`.
4. W **Sprawdzeniu adresu URL** przetestuj stronę główną, sprawdź wybraną przez Google stronę kanoniczną i poproś o indeksowanie po publikacji.
5. Obserwuj **Indeksowanie stron**, **Skuteczność** (zapytania, kliknięcia, CTR i strony) oraz **Podstawowe wskaźniki internetowe**. Eksport tych danych pozwoli ustalić dalsze priorytety.

Strona działa pod własną domeną, więc `robots.txt` w katalogu głównym repozytorium jest głównym plikiem robots hosta i wskazuje mapę witryny. Stary adres `https://krsw589.github.io/TKTrainer/` przekierowuje na `https://tktrener.pl/`.

## Informacje do uzupełnienia na stronie

1. **Wiarygodność:** kwalifikacje Tomasza, doświadczenie, rzeczywisty zakres pracy z osobami po kontuzjach, ewentualna współpraca ze specjalistami oraz data aktualizacji opisów zdrowotnych. Unikaj obietnic wyleczenia bez podstaw.
2. **Oferta:** co obejmuje konsultacja, miejsce spotkań, formy współpracy, częstotliwość, orientacyjne ceny albo sposób wyceny, różnice między treningiem na miejscu i online.
3. **Lokalność:** spójne dane kontaktowe i profil firmy w Google, jeśli działalność spełnia warunki profilu. Nie przedstawiaj CityFit jako własnego lokalu bez potwierdzenia.
4. **Formularz i zaufanie:** krótka informacja, kto otrzyma dane z formularza Google i gdzie znaleźć zasady prywatności.
5. **Treści:** osobne, użyteczne strony dla głównych usług oraz odpowiedzi na częste pytania klientów. Każda powinna mieć własny tytuł, opis, H1, canonical i miejsce w mapie witryny.

Jeśli strona przejdzie na własną domenę, trzeba jednocześnie zmienić adresy bezwzględne w canonical, Open Graph, JSON-LD i mapie witryny oraz dodać usługę nowej domeny w Search Console. Należy też ustawić przekierowanie ze starego adresu.

## Źródła

- [Google Search Central — adresy kanoniczne](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google Search Central — mapy witryn](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Pomoc Search Console — dodanie mapy](https://support.google.com/webmasters/answer/7451001)
- [Pomoc Search Console — usługa z prefiksem URL](https://support.google.com/webmasters/answer/10432366)
- [Google Search Central — treści pomocne dla użytkowników](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
