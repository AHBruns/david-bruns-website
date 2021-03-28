import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
};

/**
 * Book
 *
 *
 */
export interface Book extends SanityDocument {
  _type: "book";

  /**
   * Title — `string`
   *
   *
   */
  title: string;

  /**
   * Cover — `image`
   *
   *
   */
  cover: {
    _type: "image";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Description — `richText`
   *
   *
   */
  description: RichText;

  /**
   * Buy Links — `array`
   *
   *
   */
  buyLinks?: Array<SanityKeyed<BuyLink>>;

  /**
   * Series Name — `string`
   *
   * Books with the same series name will be grouped together on the books page. Check for typos, e.g. 'WMD Files' is different from 'The WMD Files' and will be treated as such. For standalone novels just leave this field empty.
   */
  seriesName?: string;
}

export type RichText = Array<SanityKeyed<SanityBlock>>;

export type BuyLink = {
  _type: "buyLink";
  /**
   * Link — `url`
   *
   *
   */
  link: string;

  /**
   * Seller Name — `string`
   *
   *
   */
  sellerName: string;
};

export type Documents = Book;
