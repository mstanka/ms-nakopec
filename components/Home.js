import Image from "next/image";
import Link from "next/link";
import CustomImage from "./CustomImage";

export default function Home() {
  return (
    <>
      <div className="my-6">
        <h1>Proč na kopec</h1>
        <p>
          Na kopec je blog, který vypráví můj příběh, proč jdu &#34;na
          kopec&#34;. Je to příběh o tom, jak nacházím svoji cestu přes
          jednotlivé &#34;kopečky života&#34; a jak hledám důvod, proč se pořád
          o něco snažím a k čemu je to vlastně dobré.
        </p>
        <blockquote>
          Intuitivně cítím, že na ten kopec musím jít. Je něco ve mně, co mně
          nutí vylézt nahoru. Překonat tuhle překážku a posunout se zase o
          kousek dál. Nezastavovat se moc dlouho na rozcestích a pokračovat ve
          své cestě životem... A přitom třeba stokrát zakopnout a upadnout, ale
          zase se zvednout. Klást si otázky a nalézat na ně odpovědi.
          Nepřestávat se snažit být v životě šťastnější a spokojenější...
        </blockquote>
        <br />
        <Image
          src="/images/general/zapadni-tatry.jpg"
          alt="Na kopec"
          width={4707}
          height={1700}
          priority
          className="next-image"
        />
        <br />
        <p>
          Začala jsem psát tenhle blog v době, kdy se mi hromadily fotky a
          zážitky z cest po kopcích a já je nechtěla nechat ležet zaprášené v
          šuplíku. Současně jsem cítila, že chození po horách není jenom
          chození… je to hledání cesty vlastním životem, hledání TÉ správné
          cesty… A protože mám v povaze nevzdávat se při prvním zakopnutí,
          hledám a postupně nalézám…
        </p>
        <br />
        <Image
          src="/images/general/zapadni-tatry2.jpg"
          alt="Na kopec"
          width={4714}
          height={1702}
          priority
          className="next-image"
        />
        <br />
        <p>
          Na těchto stránkách najdete moje postřehy z cest. Některé cesty jsou
          krátké, některé jsou delší, ale svůj smysl a význam mají všechny. A
          uvidíte tu spousty mých fotek, a semtam nějakou tu myšlenku, která mě
          potká, jak si tak pluju po proudu života…
        </p>

        <p>
          A možná tu najdete inspiraci pro svoji vlastní cestu, pro svůj vlastní
          kopec, který se chystáte zdolat. Protože každý z nás má svůj kopec,
          který musí zdolat. Ať už je to cokoliv - ať už je to malý kopeček nebo
          velká hora, důležité je, že se na něj vydáme a že se nevzdáme, když
          narazíme na překážky.
        </p>

        <p>
          Moje chození po horách mě nakonec přivedlo ke cvičení Taiji. Postupně
          a pomalu mi začalo pronikat do života a já jsem si uvědomila, že tohle
          je moje cesta. Cesta, která mi dává smysl a která mě naplňuje. Protože
          Taiji je pro mě jako chození po horách - je to cesta, která mě vede k
          sobě samé, k mému vnitřnímu klidu a harmonii.
        </p>

        <div className="flex justify-center pb-2">
          <CustomImage
            src="/images/general/taiji.jpg"
            alt="Taiji"
            size="verticalLarge"
          />
        </div>

        <p>
          Takže pokud máte chuť, pojďte se mnou na kopec. Pojďte objevovat krásy
          hor, přírody a života. Pojďte hledat cestu k sobě samým a k svému
          vnitřnímu klidu a harmonii.
        </p>
      </div>

      <Link href={`/posts`} passHref>
        <span className="bg-cyan-700 text-stone-200 px-6 py-2 rounded-lg mr-2">
          Nejnovější příspěvky
        </span>
      </Link>
      <Link href={`/tags`} passHref>
        <span className="bg-cyan-700 text-stone-200 px-6 py-2 rounded-lg mr-2">
          Kategorie
        </span>
      </Link>
    </>
  );
}
