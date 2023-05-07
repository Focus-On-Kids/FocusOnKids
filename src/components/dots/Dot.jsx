export function Dot ({ index, slide, selectNewImg, active }) {
  const condition = index === active;
  console.log(condition, index, active);
  return (
    <>
      <input type="radio" id={slide.id} name="slides" onClick={() => selectNewImg(index)} />
      <label className={condition ? 'carrusel__dot__active' : ''} htmlFor={slide.id}></label>
    </>
  );
}
