/* eslint-disable max-len */

import React from 'react'
import nf from 'axios'

import '../Theme/GoogleFont.css'
// eslint-disable-next-line no-unused-vars
import tw, { css, styled } from 'twin.macro'
import { DownloadCard, OpenCard } from './styles'

interface Properties {
  assetId: string
  assetGoogleId: string
  assetName: string
  autoFocus: any
  closeModal: any
}
interface State {
  submitting: boolean
  submitted: boolean
  emailAddress: string
  andSubscribe: boolean
}

class AssetCard extends React.Component<Properties, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      submitted: false,
      submitting: false,
      emailAddress: ``,
      andSubscribe: true,
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event: MouseEvent | KeyboardEvent): void {
    const { target } = event
    const value = target.name === `andSubscribe` ? target.checked : target.value
    const { name } = target

    this.setState({
      [name]: value,
    })
  }

  handleSubmit(event: React.FormEvent): void {
    event.preventDefault()
    this.setState({ submitting: true })
    const { state, props } = this
    const params: { [key: string]: string } = {
      action: `share`,
      email: state.emailAddress,
      asset: props.assetId,
      subscribe: state.andSubscribe,
    }
    const fetchUrl = `https://script.google.com/macros/s/AKfycbw9kOw-YIXprADXP9MwjC6r8qObYFgO5uCAXPYxAn-J26mpPa8/exec?${Object.keys(
      params,
    )
      .map((k) => {
        return `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`
      })
      .join(`&`)}`

    nf(fetchUrl, {
      method: `GET`,
      headers: {
        'Content-Type': `application/json`,
      },
    }).then((response) => {
      this.setState({
        emailAddress: ``,
        submitting: false,
        submitted: true,
        googleUrl: response.data.share.continue_url,
      })
    })
  }

  render(): ReactNode {
    // eslint-disable-next-line no-unused-vars
    const noop = tw``
    const { props, state } = this
    return (
      <form className="form-sling" onSubmit={this.handleSubmit}>
        <div>
          {state.submitting && (
            <div
              style={{ backgroundColor: `rgba(255,255,255,0.9)` }}
              tw="absolute top-0 left-0 z-10 flex flex-col justify-center w-full h-full"
            >
              <div tw="flex flex-col content-center justify-center w-24 h-24 mx-auto text-center bg-white border border-pink-600 rounded-lg">
                <i
                  tw="mx-auto text-5xl text-pink-600"
                  className="fad fa-asterisk fa-spin"
                />
              </div>
              <p tw="mt-2 font-bold text-center text-pink-600">Just a sec</p>
            </div>
          )}
        </div>
        <div tw="max-h-48 relative overflow-auto bg-gray-500 rounded-t">
          <button
            type="button"
            onClick={props.closeModal}
            tw="top-2 right-4 absolute p-2 text-xs text-white align-baseline"
          >
            close <span>&times;</span>
          </button>
          <img
            id="assetimage"
            alt={props.assetName}
            src={`https://drive.google.com/thumbnail?sz=h1200&id=${props.assetGoogleId}`}
            tw="shadow-outline-indigo w-1/2 mx-auto mt-5 rounded-t"
          />
        </div>
        {state.submitted && (
          <div tw="px-8">
            <h3
              tw="mt-4 text-lg font-bold leading-6 text-center text-black"
              id="modal-headline"
            >
              You’re all set, friend!
            </h3>
            <p tw="my-2 text-sm leading-5 text-center text-black">
              I’ve also emailed you this link for good measure. Enjoy!
            </p>

            <OpenCard
              tw="mt-4 mb-4 py-3 text-lg text-center"
              href={state.googleUrl}
              onClick={props.closeModal}
              rel="noreferrer"
              target="_blank"
            >
              Open in Google Docs
              <i className="fas fa-external-link-square-alt" />
            </OpenCard>
          </div>
        )}
        {state.submitted === false && (
          <div tw="px-8">
            <h3
              tw="mt-4 text-lg font-bold leading-6 text-center text-black"
              id="modal-headline"
            >
              Enter your email for instant access
            </h3>

            <p tw="my-2 text-sm leading-5 text-center text-black">
              I’ll use your address to
              <span tw="font-semibold">instantly share</span> this Google Doc
              with you.
            </p>
            <div tw="mt-3 mb-2 rounded-md shadow-sm">
              <input
                required="required"
                autoComplete="email"
                ref={props.autoFocus}
                value={state.emailAddress}
                onChange={this.handleInputChange}
                name="emailAddress"
                type="email"
                className="form-input"
                tw="sm:text-sm sm:leading-5 block w-full"
                placeholder="you@example.com"
              />
            </div>
            <div tw="flex items-center mb-3">
              <input
                id="subscribe"
                name="andSubscribe"
                type="checkbox"
                onChange={this.handleInputChange}
                checked={state.andSubscribe}
                className="form-checkbox"
                tw="w-4 h-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <label
                htmlFor="subscribe"
                tw="block ml-2 text-sm leading-5 text-gray-900"
              >
                Subscribe to new article updates
              </label>
            </div>
            <DownloadCard type="submit" tw="w-full py-3 mb-6">
              Open
            </DownloadCard>
          </div>
        )}
      </form>
    )
  }
}

export default AssetCard
