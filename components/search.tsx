'use client'

import {ChangeEvent, JSX, KeyboardEvent, useCallback, useEffect, useState} from 'react'
import * as Defs from '@/lib/defs'
import Link from "next/link"
import {siteConfig} from "@/config/site"
import {cn, sliceIntoChunks} from "@/lib/utils"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card"
import {Checkbox} from "@/components/ui/checkbox"
import {getCookie, setCookie} from "@/components/cookies"
import ReactGA from "react-ga4"
import {TimedQueue} from '@/lib/timed-queue'

import "@/styles/components/select.css"

ReactGA.initialize(process.env.NEXT_PUBLIC_GA4_ANALYTICS_ID)

export default function Search() {
  const [searchTerm, setSearch] = useState("")
  const [country, setCountry] = useState("usa")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [sortBy, setSortBy] = useState(siteConfig.filters.defaultSortBy)
  const [availability, setAvailability] = useState(siteConfig.filters.defaultAvailability)
  const [deliveryMethod, setDeliveryMethod] = useState(siteConfig.filters.defaultDeliveryMethod)
  const [daysSinceListed, setDaysSinceListed] = useState(siteConfig.filters.defaultDaysSinceListed)
  const itemConditionInitialState: Record<string, boolean> = {}
  Object.keys(siteConfig.filters.itemCondition).map((key) => {
    itemConditionInitialState[key] = false
  })
  const [itemCondition, setItemCondition] = useState(itemConditionInitialState)

  useEffect(() => {
    let cookieCountry = getCookie('country')
    if (cookieCountry) {
      setCountry(cookieCountry)
    }
  }, [country])

  const countriesData: Defs.Countries = siteConfig.countries
  const splitCountriesData = sliceIntoChunks(Object.keys(countriesData), siteConfig.countriesPerRow)
  const filterSortBy: Defs.FilterSortBy = siteConfig.filters.sortBy
  const filterItemCondition: Defs.FilterItemCondition = siteConfig.filters.itemCondition
  const filterAvailability: Defs.FilterAvailability = siteConfig.filters.availability
  const filterDeliveryMethod: Defs.FilterDeliveryMethod = siteConfig.filters.deliveryMethod
  const filterDaysSinceListed: Defs.FilterDaysSinceListed = siteConfig.filters.daysSinceListed

  const updateSearchTerm = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
    },
    []
  )

  const updateMinPrice = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setMinPrice(e.target.value)
    },
    [minPrice]
  )
  const updateMaxPrice = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setMaxPrice(e.target.value)
    }, [maxPrice]
  )
  const updateConditions = (itemIndex: string, isChecked: boolean) => {
    const updatedListOfItems: Record<string, boolean> = itemCondition
    updatedListOfItems[itemIndex] = isChecked
    setItemCondition(updatedListOfItems)
  }

  const handleKeyPress = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (searchTerm && e.key === 'Enter') {
        e.preventDefault()
        doSearch()
      } else {
        setSearch(searchTerm)
      }
    },
    [searchTerm]
  )

  function setCountryAndCookie(newCountry: string) {
    if (newCountry!=getCookie('country')) {
      setCookie('country', newCountry)
    }
    if (newCountry!=country) {
      setCountry(newCountry)
    }
  }

  const doSearch = useCallback(() => {
    if (searchTerm.trim() === "") return
    let citiesFb = countriesData[country].cities_fb
    let locale: string = countriesData[country].locale
    let jobQueue: TimedQueue = new TimedQueue()
    let jobMinDelay = 200
    let jobMaxDelay = 1000


    for (let city of citiesFb) {
      let searchURL = siteConfig.templateURL[locale as keyof typeof siteConfig.templateURL]
        .replace('|CITY|', city)
        .replace('|STRING|', searchTerm)

      if (!!minPrice) searchURL += '&minPrice=' + minPrice
      if (!!maxPrice) searchURL += '&maxPrice=' + maxPrice

      if (sortBy!==siteConfig.filters.defaultSortBy)
        searchURL += '&sortBy=' + sortBy

      let itemConditionStatus: any[] = []
      Object.keys(itemCondition).map((itemKey) => {
        if (itemCondition[itemKey]) itemConditionStatus.push(itemKey)
      })
      if (itemConditionStatus.length) searchURL += '&itemCondition=' + itemConditionStatus.join(',')

      if (availability!==siteConfig.filters.defaultAvailability)
        searchURL += '&availability=' + availability

      if (deliveryMethod!=siteConfig.filters.defaultDeliveryMethod)
        searchURL += '&deliveryMethod=' + deliveryMethod

      if (daysSinceListed!==siteConfig.filters.defaultDaysSinceListed)
        searchURL += '&daysSinceListed=' + daysSinceListed

      jobQueue.addTask({
        callback: () => { window.open(searchURL, "fbmp" + country + "search" + city) },
        time: Math.ceil(Math.random() * (jobMaxDelay - jobMinDelay) + jobMinDelay)
      })
    }
    jobQueue.start()

    ReactGA.event({
      category: "search",
      action: `search_${country}`,
      label: searchTerm
    })
  }, [searchTerm, country, sortBy, itemCondition, availability, daysSinceListed, minPrice, maxPrice])

  function countryDataRow(row: Array<string>) {
    return (
      row.map((key: string) => (
          <div className={cn("w-1/"+siteConfig.countriesPerRow, "text-center mx-auto flex-none")} key={key}>
            <HoverCard>
              <HoverCardTrigger>
                <Button
                  className={cn("p-2 cursor-pointer", (key === country) ? 'bg-secondary' : '')}
                  variant="outline"
                  onClick={() => setCountryAndCookie(key)}>
                  <img className="w-16" src={`flags/${countriesData[key].icon}`} alt={countriesData[key].name}/>
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="text-sm">
                Searches <span
                className="text-primary font-bold whitespace-nowrap">{countriesData[key].name}</span> nationwide by opening <b className="whitespace-nowrap">{countriesData[key].cities.length} tabs</b>. <Link
                className="underline text-xs" href={countriesData[key].coverage} title={countriesData[key].cities.join('\n')} target="_blank" rel="noreferrer">See
                coverage</Link>
              </HoverCardContent>
            </HoverCard>
          </div>
        )
      )
    )
  }

  function listRow(row: Array<string>) {
    return (
      <div className="mt-10 flex" key={row.join('_')}>
        { countryDataRow(row) }
      </div>
    )
  }

  const listCountries = () => {
    let content: JSX.Element[] = []
    Object.values(splitCountriesData).map((row) => (
      content.push( listRow(row) )
    ))
    return (content)
  }


  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex flex-row fontSans">
          <Input id="search" className="search text-3xl py-6 text-primary caret-secondary" type="text" value={searchTerm} onChange={updateSearchTerm} onKeyDown={handleKeyPress} placeholder="Search for..." autoFocus />
          <Button className="ml-8 px-8 my-0 uppercase cursor-pointer" onClick={doSearch}>Search</Button>
        </div>
        <div className="flex flex-row flex-wrap fontSans mt-4">
          <label className="text-xs mb-4 mr-10">Sort By &nbsp;
            <Select name="sort_by" onValueChange={setSortBy} defaultValue={siteConfig.filters.defaultSortBy}>
              <SelectTrigger className="cursor-pointer text-primary mt-1 p-0 ">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                { Object.keys(filterSortBy).map((sortKey) => (
                  <SelectItem className="cursor-pointer" key={sortKey} value={sortKey}>{filterSortBy[sortKey]}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </label>
          <label className="text-xs mb-4 mr-10">Days Since Listed &nbsp;
            <Select name="daysSinceListed" onValueChange={setDaysSinceListed} defaultValue={siteConfig.filters.defaultDaysSinceListed}>
              <SelectTrigger className="cursor-pointer text-primary mt-1 p-0 focus-visible:outline-none">
                <SelectValue placeholder="Days Since Listed" />
              </SelectTrigger>
              <SelectContent>
                { Object.keys(filterDaysSinceListed).map((daysKey) => (
                  <SelectItem className="cursor-pointer" key={daysKey} value={daysKey}>{filterDaysSinceListed[daysKey]}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </label>
          <label className="text-xs mb-4 mr-10">Availability &nbsp;
            <Select name="availability" onValueChange={setAvailability} defaultValue={siteConfig.filters.defaultAvailability}>
              <SelectTrigger className="cursor-pointer text-primary mt-1 p-0 focus-visible:outline-none">
                <SelectValue placeholder="Availability" />
              </SelectTrigger>
              <SelectContent>
                { Object.keys(filterAvailability).map((availKey) => (
                  <SelectItem className="cursor-pointer" key={availKey} value={availKey}>{filterAvailability[availKey]}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </label>
          <label className="text-xs mb-4">Delivery &nbsp;
            <Select name="delivery" onValueChange={setDeliveryMethod} defaultValue={siteConfig.filters.defaultDeliveryMethod}>
              <SelectTrigger className="cursor-pointer text-primary mt-1 p-0 focus-visible:outline-none">
                <SelectValue placeholder="Delivery" />
              </SelectTrigger>
              <SelectContent>
                { Object.keys(filterDeliveryMethod).map((deliveryKey) => (
                  <SelectItem className="cursor-pointer" key={deliveryKey} value={deliveryKey}>{filterDeliveryMethod[deliveryKey]}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </label>
          <span className="w-full h-0"></span>
          <div className="text-xs mb-4 flex flex-row"><span className="mr-10">Condition</span>
            { Object.keys(filterItemCondition).map((conditionKey: any) => (
              <div key={conditionKey}>
                <label
                  className="mr-4 cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <Checkbox name="condition" id={`condition_${conditionKey}`} className="border-solid cursor-pointer mr-2" onCheckedChange={(checked) => updateConditions(conditionKey, checked as boolean)} />
                  <span className="">{filterItemCondition[conditionKey]}</span>
                </label>
              </div>
              ))}
          </div>
          <span className="w-full h-0"></span>
          <div className="text-xs flex flex-row">
            <div><label><span className="mr-2 text-xs">Min. Price</span><Input className="prices flex-none text-sm h-8 p-1 mt-2 text-primary caret-secondary" id="minPrice" type="number" min="0" value={minPrice} onChange={updateMinPrice} /></label></div>
            <div><label className="ml-10"><span className="mr-2 text-xs">Max. Price</span><Input className="prices flex-none text-sm h-8 p-1 mt-2 text-primary caret-secondary" id="maxPrice" type="number" min="0" value={maxPrice} onChange={updateMaxPrice} /></label></div>
          </div>
        </div>
        <div>
          { listCountries() }
        </div>
      </div>
    </>
  )
}
