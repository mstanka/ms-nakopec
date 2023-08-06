import Image from "next/image";
import { CustomLink } from "./CustomLink";

export default function Home() {
  return (
    <>
      <div className="mt-6">
        <h1>Proč na kopec</h1>
        <p>
          Na kopec je blog, který vypráví můj příběh, proč jdu &#34;na
          kopec&#34;. Je to příběh o tom, jak nacházím svoji cestu přes
          jednotlivé &#34;kopečky života&#34; a jak hledám důvod, proč se pořád
          o něco snažím a k čemu je to vlastně dobré.
        </p>
        <br />
        <Image
          src="/images/general/rohace.jpg"
          alt="Na kopec"
          width={1280}
          height={390}
          priority
          className="next-image"
        />
        <br />
        <blockquote>
          Intuitivně cítím, že na ten kopec musím jít. Je něco ve mně, co mně
          nutí vylézt nahoru. Překonat tuhle překážku a posunout se zase o
          kousek dál. Nezastavovat se moc dlouho na rozcestích a pokračovat ve
          své cestě životem... A přitom třeba stokrát zakopnout a upadnout, ale
          zase se zvednout. Klást si otázky a nalézat na ně odpovědi.
          Nepřestávat se snažit být v životě šťastnější a spokojenější...
        </blockquote>
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
          src="/images/general/nakopec.jpg"
          alt="Na kopec"
          width={1280}
          height={750}
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
          <i>A možná tu najdete inspiraci pro svoji vlastní cestu…</i>
        </p>
      </div>

      <CustomLink as={`/posts`} href={`/posts`}>
        <button>Nejnovější příspěvky</button>
      </CustomLink>
      <CustomLink as={`/tags`} href={`/tags`}>
        <button>Kategorie</button>
      </CustomLink>
    </>
  );
}
