/*<Select
        placeholder="Filter by Region"
        styles={customStyles}
        options={options}
        onChange={handleRegionChange}
        value={options.filter((obj) => obj.value === chosenRegion)}
      />
      const customStyles = {
  option: (provided, state) => ({
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
  }),
  control: (base, state) => ({
    // none of react-select's styles are passed to <Control />
    ...base,
    className: 'float-right',

    background: '({ theme.background })',
    width: 200,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = 'opacity 300ms'

    return { ...provided, opacity, transition }
  },
  /*
  option: (provided, state) => ({
    ...provided,
    className: 'float-right',
    backgroundColor: '({ theme.backgroundColor })',
    color: '({theme.text})',
  }),
  control: (base, state) => ({
    ...base,
    className: 'float-md-right',
    background: '({ theme.backgroundColor })',
  }),
  
  const options = [
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'America', label: 'America' },
  { value: 'Oceania', label: 'Oceania' },
  { value: 'Africa', label: 'Africa' },
]

const Select = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
  <form
      style={{ maxWidth: '40% ', marginLeft: '210px', marginRight: '0px' }}
      onSubmit={handleSubmit}
    >
      <Select placeholder="Filter by Region" onChange={handleRegionChange} value={chosenRegion}>
        <option value=" " hidden>
          Filter by Region
        </option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="America">America</option>
        <option value="Oceania">Oceania</option>
        <option value="Africa">Africa</option>
      </Select>
    </form>
  )
  fluid style={{ marginTop: '50px' }}
      */
/*useEffect(() => {
    Axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      setCountries(response.data)
    })
  }, [])
  console.log('render', countries.length, 'countries')
  */
