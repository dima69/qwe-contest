import Image from "next/image";
import Link from "next/link";

const PhotoGrid = ({ photos_list }: { photos_list: PhotoData[] }) => {
  return (
    // fix grid-cols-2 grid-cols-3, make it responsive
    <div className="grid grid-cols-2 md:grid-cols-3 gap-1 justify-items-center items-center max-w-max mx-auto">
      {photos_list.map((photo) => (
        <Link href={`/p/${photo.photo_id}`} key={photo.photo_id}>
          {/* @@@ height is weird when width size < 720px */}
          <a className="bg-red-200 max-h-[250px]">
            <Image
              src={photo.image_url}
              width={250}
              height={250}
              alt=""
              className="hover:brightness-90"
            />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default PhotoGrid;
