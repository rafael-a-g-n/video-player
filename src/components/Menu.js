function Menu({ onSelectVideo }) {
  function clickHandler(e) {
    const name = e.target.value;
    onSelectVideo(name);
  }
  return (
    <form onClick={clickHandler}>
      <input type="radio" id="fast" name="src" value="fast" />
      <label htmlFor="fast">fast</label>
      <input type="radio" id="slow" name="src" value="slow" />
      <label htmlFor="slow">slow</label>
      <input type="radio" id="cute" name="src" value="cute" />
      <label htmlFor="cute">cute</label>
      <input type="radio" id="eek" name="src" value="eek" />
      <label htmlFor="eek">eek</label>
    </form>
  );
}

export default Menu;
