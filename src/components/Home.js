const home = () => {
  return (
    <section className="">
      <div className=" d-flex flex-d-column vh-90 j-center">
        <img id="banner" className="img-banner mb-2" src="./banner.png" alt="Dos hombres con traje"/>

        <ul className="d-flex j-around mx-auto vw-35 mt-1 size-08">
          <li>
            <a href="https://google.com"className="color-primary opacity-07 to-opa-1">TRAJES</a>
          </li>
          <li>
            <a href="https://google.com" className="color-primary opacity-07 to-opa-1">ACCESORIOS</a>
          </li>
          <li>
            <a href="https://google.com" className="color-primary opacity-07 to-opa-1">ZAPATOS</a>
          </li>
        </ul>

      </div>
    </section>
  );
}; 

export default home;
