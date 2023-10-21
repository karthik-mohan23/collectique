const carousalImages = [
  "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHZpbnRhZ2UlMjBpbmRpYW4lMjBqZXdsbGVyeXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwamV3ZWxsZXJ5fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1415604934674-561df9abf539?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHZpbnRhZ2UlMjBpbmRpYW4lMjBqZXdsbGVyeXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1525598912003-663126343e1f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHZpbnRhZ2UlMjBpbmRpYW4lMjBqZXdsbGVyeXxlbnwwfHwwfHx8MA%3D%3D",
  ,
  "https://images.unsplash.com/photo-1669823734572-57c47df22b52?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwdHJhZGl0aW9uYWwlMjBpdGVtc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGluZGlhbiUyMGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D",
];

const BannerCarousel = () => {
  return (
    <div className="carousel rounded-box w-96 mt-16 lg:mt-0">
      {carousalImages.map((url) => {
        return (
          <div className="carousel-item w-1/2">
            <img src={url} className="w-full object-cover" />
          </div>
        );
      })}
    </div>
  );
};
export default BannerCarousel;
