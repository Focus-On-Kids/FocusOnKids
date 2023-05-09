export function Dot ({ index, slide, selectNewImg, active }) {
  return (
    <>
      <input type="radio" id={slide.id} name="slides" onClick={() => selectNewImg(index)} />
      <label className={index === active ? 'carrusel__dot__active' : ''} htmlFor={slide.id}></label>
    </>
  );
}
