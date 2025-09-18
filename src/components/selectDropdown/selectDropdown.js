
const selectDropdown = () => {
  return (
    <div>
  <h1>Custom Dropdown</h1>
  <div className="container">
    <label for="select">Custom Select</label>
    <button
      role="combobox"
      id="select"
      value="Select"
      aria-controls="listbox"
      aria-haspopup="listbox"
      tabindex="0"
      aria-expanded="false">
      Select
    </button>
    <div id="announcement" aria-live="assertive" role="alert"></div>
    <ul role="listbox" id="listbox">
      <li role="option">Mecury</li>
      <li role="option">Eggs</li>
      <li role="option">Venus</li>
      <li role="option">Earth</li>
      <li role="option">Mars</li>
      <li role="option">Jupiter</li>
      <li role="option">Saturn</li>
      <li role="option">Elephant</li>
      <li role="option">Uranus</li>
      <li role="option">Neptune</li>
      <li role="option">Eleplast</li>
      <li role="option">Pluto (I'm a planet)</li>
    </ul>
  </div>
  <div className="container">
      <label for="select2">Default Select</label>
      <select id="select2">
      <option>Mecury</option>
      <option>Venus</option>
      <option>Earth</option>
      <option>Mars</option>
      <option>Jupiter</option>
      <option>Saturn</option>
      <option>Uranus</option>
      <option>Neptune</option>
      <option>Eggsd</option>
      <option>Pluto (I'm a planet)</option>
    </select>
    </div>
    </div>
  )
}

export default selectDropdown