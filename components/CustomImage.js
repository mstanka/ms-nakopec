import Image from "next/image";

export default function CustomImage({ src, alt, size }) {
  if (size === "horizontalLarge") {
    return (
      <div className="py-1">
        <Image
          src={src}
          alt={alt}
          width={1376}
          height={850}
          className="next-image"
        />
      </div>
    );
  }

  if (size === "horizontalSmall") {
    return (
      <Image
        src={src}
        alt={alt}
        width={688}
        height={430}
        className="next-image"
      />
    );
  }

  if (size === "verticalLarge") {
    return (
      <Image
        src={src}
        alt={alt}
        width={550}
        height={770}
        className="next-image"
      />
    );
  }

  if (size === "verticalSmall") {
    return (
      <Image
        src={src}
        alt={alt}
        width={688}
        height={930}
        className="next-image"
      />
    );
  }
}
