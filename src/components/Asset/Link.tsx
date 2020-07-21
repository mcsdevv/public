import React from 'react'
import tw from 'twin.macro'
import Modal from '../Modal'
import AssetCard from './Card'

import '../Theme/GoogleFont.css'
import { Trigger, Caption, Download } from './styles'

export interface State {
  show: boolean
}
export interface Props {
  assetId: string
  assetGoogleId: string
  assetName: string
}

export default class AssetLink extends React.Component<Props, State> {
  backdrop: React.RefObject

  emailField: React.RefObject

  public constructor(props: any) {
    super(props)
    this.backdrop = React.createRef()
    this.emailField = React.createRef()
    this.state = { show: false }
    this.onKeyDown = this.onKeyDown.bind(this)
    this.onCloseHandler = this.onCloseHandler.bind(this)
    this.onClickOutside = this.onClickOutside.bind(this)
    this.showModal = this.showModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  componentDidMount(): void {
    document.addEventListener(`keydown`, this.onKeyDown)
  }

  componentWillUnmount(): void {
    document.removeEventListener(`keydown`, this.onKeyDown)
  }

  onCloseHandler(evt: React.MouseEvent): void {
    evt.preventDefault()
    this.setState({ show: false })
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.keyCode === 27) {
      this.closeModal()
    }
  }

  onClickOutside(event: MouseEvent): void {
    if (this.backdrop.current && this.backdrop.current.contains(event.target))
      return
    this.closeModal()
  }

  closeModal(): void {
    this.setState({ show: false })
  }

  showModal(): void {
    this.setState({ show: true }, () => {
      this.emailField.current.focus()
    })
  }

  public render(): ReactNode {
    const { props, state } = this
    const styles = state.show ? `modal-dialog` : `modal-dialog hidden`
    // eslint-disable-next-line no-unused-vars
    const noop = tw``
    return (
      <>
        <Trigger
          style={{ transform: `rotate(-2deg)` }}
          type="button"
          onClick={this.showModal}
        >
          <img
            src="/images/clip.png"
            alt=""
            tw="sm:inline right-9 absolute z-10 hidden h-12 -mt-6"
          />
          <figure tw="h-32 overflow-hidden bg-cool-gray-800 p-3">
            <img
              alt={props.assetName}
              tw="z-10 rounded-t"
              style={{ clipPath: `inset(0 0 15% 0)` }}
              src={`https://drive.google.com/thumbnail?sz=h1200&id=${props.assetGoogleId}`}
            />
          </figure>
          <Caption>People-friendly Product Reviews</Caption>
          <Download type="button" onClick={this.onClickHandler}>
            Download Worksheet
          </Download>
        </Trigger>
        {state.show ? (
          // eslint-disable-next-line no-return-assign
          <Modal
            onKeyDown={this.onKeyDown}
            onClickOutside={this.onClickOutside}
          >
            <div
              ref={this.backdrop}
              className={styles}
              tw="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-xl"
              role="dialog"
              aria-modal="true"
            >
              <AssetCard
                closeModal={this.closeModal}
                autoFocus={this.emailField}
                assetGoogleId={props.assetGoogleId}
                assetName={props.assetName}
                assetId={props.assetId}
              />
            </div>
          </Modal>
        ) : (
          <></>
        )}
      </>
    )
  }
}
