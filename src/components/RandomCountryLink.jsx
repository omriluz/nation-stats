import countries from "../../countries_new.json"
import {useEffect, useState} from 'react'

const RandomCountryLink = ({ selectedCountry }) => {
    const [randomCountry, setRandomCountry] = useState()

    useEffect(() => {
        const countriesWithoutCurrent = countries.filter(
          ({ name }) => name.common !== selectedCountry.name.common
        )
        const rCountry =
          countriesWithoutCurrent[
            Math.floor(Math.random() * countriesWithoutCurrent.length)
          ]
          setRandomCountry(rCountry)
    }, [selectedCountry])

    if (!randomCountry) return null
  return (
      <a className="fixed left-20 top-1/2" href={`/countries/${randomCountry.name.common}`}>random country</a>
  )
}
export default RandomCountryLink
