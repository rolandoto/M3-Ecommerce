import React,{ useRef,useMemo, useState} from 'react'
import {createAutocomplete} from '@algolia/autocomplete-core'
import AutocompleteItem from '../Autocomplete/Autocomplete'
import './Search.css'
import { FcSearch } from "react-icons/fc";

const  Search = (props) => {

  const [autocompleteState, setAutocompleteState] = useState({
    collections: [],
    isOpen: false
  })


  
  const autocomplete = useMemo(() => createAutocomplete({
    placeholder: 'Busca tu oferta',
    onStateChange: ({ state }) => setAutocompleteState(state),
    getSources: () => [{
      sourceId: 'offers-next-api',
      getItems: ({ query }) => {
        if (!!query) {
          return fetch(`http://localhost:3000/products?q=${query}`)
            .then(res => res.json())
            .then(data => data)
        }
      }
    }],
    ...props
  }), [props])

  

  const formRef = useRef(null)
  const inputRef = useRef(null)
  const panelRef = useRef(null)

  const formProps = autocomplete.getFormProps({
    inputElement: inputRef.current
  })
  const inputProps = autocomplete.getInputProps({
    inputElement: inputRef.current
  })

  return (
    <form ref={formRef} className="flex justify-center mb-20" {...formProps}>
      <div className="input-search  flex relative p-1  bg-gradient-to-tr from-purple-600 to-blue-300 rounded-full w-2/6">
        <input ref={inputRef} className='flex-input p-2 pl-4 rounded-full w-full' {...inputProps} />
        <FcSearch fontSize={20} />
      {
        autocompleteState.isOpen && (
          <div className="mt-16 top-0 left-0 border border-gray-100 bg-white overflow-hidden rounded-lg shadow-lg z-10" ref={panelRef} {...autocomplete.getPanelProps()}>
            {autocompleteState.collections.map((collection, index) => {
              const { items } = collection
              return (
                <section className='section-Search' key={`section-${index}`}>
                  {items.length > 0 && (
                    <ul className='border-search' {...autocomplete.getListProps()}>
                      {
                        items.map(item => <AutocompleteItem {...item} key={item.id} />)
                      }
                    </ul>
                  )}
                </section>
              )
            })}
          </div>
        )
      }
      </div>
    </form>
  )
}

export default Search